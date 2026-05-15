import { Router } from 'express';
import { readJson } from '../services/dataRepository';

export const capacityRouter = Router();

capacityRouter.get('/', async (_req, res, next) => {
  try {
    const [regionMap, scenarioParameters, us, westernEurope, germany, centralEurope] = await Promise.all([
      readJson<Record<string, unknown>>('data/config/region-map.json'),
      readJson<Record<string, unknown>>('data/config/scenario-parameters.json'),
      readJson<Record<string, unknown>>('data/processed/us-capacity.json'),
      readJson<Record<string, unknown>>('data/processed/western-europe-capacity.json'),
      readJson<Record<string, unknown>>('data/processed/germany-capacity.json'),
      readJson<Record<string, unknown>>('data/processed/central-europe-capacity.json')
    ]);

    res.json({
      regionMap,
      scenarioParameters,
      sources: [us.regionSource, westernEurope.regionSource, germany.regionSource, centralEurope.regionSource],
      countrySources: centralEurope.countrySources ?? []
    });
  } catch (error) {
    next(error);
  }
});
