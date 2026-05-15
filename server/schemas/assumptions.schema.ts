import { z } from 'zod';

export const scenarioParameterSchema = z.object({
  regionId: z.string(),
  year: z.enum(['2026f', '2027f', '2028f', '2029f', '2030f']),
  lowRealization: z.number().min(0).max(2),
  midRealization: z.number().min(0).max(2),
  highMultiplier: z.number().min(0).max(5),
  highUpliftGw: z.number(),
  timingFactor: z.number().min(0).max(2),
  delayMonths: z.number().min(0).max(120),
  applyAnnualCap: z.boolean(),
  annualCommissioningCapGw: z.number().nullable(),
  comments: z.string().optional()
});
