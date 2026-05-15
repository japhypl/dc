import { useState } from 'react';
import type { UrlAnalysisResponse } from '../types/urlAnalysis';
import { analyzeUrl } from '../services/urlAnalysisService';

export function useUrlAnalysis() {
  const [data, setData] = useState<UrlAnalysisResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  async function run(input: { url: string; targetYear?: number; regionHint?: string }) {
    setLoading(true);
    setError(null);
    try {
      const result = await analyzeUrl(input);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, run };
}
