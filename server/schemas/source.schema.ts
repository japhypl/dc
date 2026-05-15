import { z } from 'zod';

export const sourceDocSchema = z.object({
  id: z.string(),
  file: z.string(),
  markdown: z.string()
});
