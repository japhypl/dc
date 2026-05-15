import type { AssumptionsResponse } from '../types/assumptions';
import { apiGet } from './apiClient';

export function fetchAssumptions() {
  return apiGet<AssumptionsResponse>('/api/assumptions');
}
