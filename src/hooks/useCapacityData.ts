import { useEffect, useState } from 'react';
import type { CapacityApiResponse } from '../types/capacity';
import { fetchCapacityData } from '../services/capacityService';
import { useDashboardStore } from '../app/store';

export function useCapacityData() {
  const [data, setData] = useState<CapacityApiResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const setInitialParameters = useDashboardStore((state) => state.setInitialParameters);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchCapacityData()
      .then((response) => {
        if (!mounted) return;
        setData(response);
        setInitialParameters(response.scenarioParameters.parameters);
      })
      .catch((err: Error) => mounted && setError(err))
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, [setInitialParameters]);

  return { data, error, loading };
}
