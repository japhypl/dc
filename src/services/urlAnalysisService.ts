import type { UrlAnalysisResponse } from '../types/urlAnalysis';
import { apiPost } from './apiClient';

export function analyzeUrl(input: { url: string; targetYear?: number; regionHint?: string }) {
  return apiPost<UrlAnalysisResponse, typeof input>('/api/analyze-url', input);
}
