import type { SourceDocIndexRow, SourceDocResponse } from '../types/sources';
import { apiGet } from './apiClient';

export function fetchSourceIndex() {
  return apiGet<{ sources: SourceDocIndexRow[] }>('/api/sources');
}

export function fetchSourceDoc(id: string) {
  return apiGet<SourceDocResponse>(`/api/sources/${id}`);
}
