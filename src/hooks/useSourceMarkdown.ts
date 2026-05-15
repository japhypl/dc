import { useEffect, useState } from 'react';
import type { SourceDocIndexRow, SourceDocResponse } from '../types/sources';
import { fetchSourceDoc, fetchSourceIndex } from '../services/sourceService';

export function useSourceIndex() {
  const [sources, setSources] = useState<SourceDocIndexRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchSourceIndex()
      .then((result) => setSources(result.sources))
      .catch((err: Error) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { sources, loading, error };
}

export function useSourceMarkdown(id: string | null) {
  const [doc, setDoc] = useState<SourceDocResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchSourceDoc(id)
      .then(setDoc)
      .catch((err: Error) => setError(err))
      .finally(() => setLoading(false));
  }, [id]);

  return { doc, loading, error };
}
