import { useMemo } from 'react';
import type { CapacityApiResponse } from '../types/capacity';
import { useDashboardStore } from '../app/store';
import { buildScenarioOutputs } from '../model/scenarioEngine';

export function useScenarioOutputs(data: CapacityApiResponse | null) {
  const parameters = useDashboardStore((state) => state.parameters);

  return useMemo(() => {
    if (!data) return [];
    return buildScenarioOutputs(data.sources, parameters);
  }, [data, parameters]);
}
