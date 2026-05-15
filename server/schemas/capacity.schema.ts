import { z } from 'zod';

export const yearSchema = z.enum(['2025e', '2026f', '2027f', '2028f', '2029f', '2030f']);

export const regionSourceSchema = z.object({
  regionId: z.string(),
  regionName: z.string(),
  sourceStatus: z.string(),
  baselineYear: yearSchema,
  years: z.array(yearSchema),
  capacityDefinition: z.string(),
  baseForecastGw: z.record(yearSchema, z.number().nullable()),
  highForecastGw: z.record(yearSchema, z.number().nullable()).optional(),
  qualityFlags: z.array(z.string()),
  sourceFiles: z.array(z.string()),
  comments: z.string()
});
