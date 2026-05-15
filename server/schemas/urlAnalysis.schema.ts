import { z } from 'zod';

export const analyzeUrlRequestSchema = z.object({
  url: z.string().url(),
  targetYear: z.number().int().min(2026).max(2035).optional(),
  regionHint: z.string().optional()
});
