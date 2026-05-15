import { Router } from 'express';
import { readJson } from '../services/dataRepository';

export const assumptionsRouter = Router();

assumptionsRouter.get('/', async (_req, res, next) => {
  try {
    const assumptions = await readJson('data/config/assumptions.json');
    const scenarioParameters = await readJson('data/config/scenario-parameters.json');
    res.json({ assumptions, scenarioParameters });
  } catch (error) {
    next(error);
  }
});
