import { Router } from 'express';
import { readJson } from '../services/dataRepository';

export const capacityRouter = Router();

capacityRouter.get('/', async (_req, res, next) => {
  try {
    const [regionMap, scenarioParameters, us, westernEurope, germany, centralEurope] = await Promise.all([
      readJson('data/config/region-map.json'),
      readJson('data/config/scenario-parameters.json'),
      readJson('data/processed/us-capacity.json'),
      readJson('data/processed/western-europe-capacity.json'),
      readJson('data/processed/germany-capacity.json'),
      readJson('data/processed/central-europe-capacity.json')
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
