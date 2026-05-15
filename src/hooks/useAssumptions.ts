import { useEffect, useState } from 'react';
import type { AssumptionsResponse } from '../types/assumptions';
import { fetchAssumptions } from '../services/assumptionsService';

export function useAssumptions() {
  const [data, setData] = useState<AssumptionsResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchAssumptions()
      .then((response) => mounted && setData(response))
      .catch((err: Error) => mounted && setError(err))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return { data, error, loading };
}
