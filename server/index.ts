import express from 'express';
import cors from 'cors';
import { capacityRouter } from './routes/capacity';
import { assumptionsRouter } from './routes/assumptions';
import { sourcesRouter } from './routes/sources';
import { analyzeUrlRouter } from './routes/analyzeUrl';

const app = express();
const port = Number(process.env.PORT ?? 8787);

app.use(cors());
app.use(express.json({ limit: '2mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'dc-capacity-scenario-dashboard', version: '0.1.0' });
});

app.use('/api/capacity', capacityRouter);
app.use('/api/assumptions', assumptionsRouter);
app.use('/api/sources', sourcesRouter);
app.use('/api/analyze-url', analyzeUrlRouter);

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'internal_server_error', message: err instanceof Error ? err.message : 'Unknown error' });
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
