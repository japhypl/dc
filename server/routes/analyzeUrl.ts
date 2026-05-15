import { Router } from 'express';
import { z } from 'zod';
import { fetchUrlContent } from '../services/fetchUrlContent';
import { extractReadableText } from '../services/extractReadableText';
import { detectCapacityClaims } from '../services/detectCapacityClaims';
import { scoreScenarioLikelihood } from '../services/scoreScenarioLikelihood';

const requestSchema = z.object({
  url: z.string().url(),
  targetYear: z.number().int().min(2026).max(2035).optional(),
  regionHint: z.string().optional()
});

export const analyzeUrlRouter = Router();

analyzeUrlRouter.post('/', async (req, res, next) => {
  try {
    const input = requestSchema.parse(req.body);
    const html = await fetchUrlContent(input.url);
    const extracted = extractReadableText(html, input.url);
    const claims = detectCapacityClaims(extracted.text, { regionHint: input.regionHint, targetYear: input.targetYear });
    const scoring = await scoreScenarioLikelihood(extracted.text, claims, input);

    res.json({
      url: input.url,
      title: extracted.title,
      detectedClaims: claims,
      scenarioLikelihood: scoring.scenarioLikelihood,
      explanation: scoring.explanation,
      flags: scoring.flags,
      suggestedInput: scoring.suggestedInput
    });
  } catch (error) {
    next(error);
  }
});
