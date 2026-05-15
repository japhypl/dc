import express from 'express';
import cors from 'cors';
import path from 'node:path';
import { capacityRouter } from './routes/capacity';
import { assumptionsRouter } from './routes/assumptions';
import { sourcesRouter } from './routes/sources';
import { analyzeUrlRouter } from './routes/analyzeUrl';
import { HttpError } from './utils/httpError';

const app = express();
const port = Number(process.env.PORT ?? 8787);
const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  app.use(cors());
}

app.use(express.json({ limit: '2mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'dc-capacity-scenario-dashboard', version: '0.1.0' });
});

app.use('/api/capacity', capacityRouter);
app.use('/api/assumptions', assumptionsRouter);
app.use('/api/sources', sourcesRouter);
app.use('/api/analyze-url', analyzeUrlRouter);

if (isProduction) {
  const distDir = path.join(process.cwd(), 'dist');
  app.use(express.static(distDir));
  app.get('{*path}', (_req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  const status = err instanceof HttpError ? err.status : 500;
  const message = err instanceof Error ? err.message : 'Unknown error';
  const code = err instanceof HttpError ? err.code : 'internal_server_error';
  res.status(status).json({ error: code, message });
});

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
