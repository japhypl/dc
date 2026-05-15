import type { CapacityApiResponse } from '../types/capacity';
import { apiGet } from './apiClient';

export function fetchCapacityData() {
  return apiGet<CapacityApiResponse>('/api/capacity');
}
