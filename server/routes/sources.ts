import { Router } from 'express';
import { listSourceDocs, readSourceDoc } from '../services/sourceMarkdownService';

export const sourcesRouter = Router();

sourcesRouter.get('/', async (_req, res, next) => {
  try {
    res.json({ sources: await listSourceDocs() });
  } catch (error) {
    next(error);
  }
});

sourcesRouter.get('/:id', async (req, res, next) => {
  try {
    res.json(await readSourceDoc(req.params.id));
  } catch (error) {
    next(error);
  }
});
