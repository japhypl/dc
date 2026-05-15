import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { PageContainer } from '../components/layout/PageContainer';
import { SourceQualityTable } from '../components/tables/SourceQualityTable';
import { LoadingState } from '../components/common/LoadingState';
import { ErrorState } from '../components/common/ErrorState';
import { useCapacityData } from '../hooks/useCapacityData';
import { useSourceIndex, useSourceMarkdown } from '../hooks/useSourceMarkdown';

export function SourcesPage() {
  const { data, loading: capacityLoading, error: capacityError } = useCapacityData();
  const { sources, loading, error } = useSourceIndex();
  const [selected, setSelected] = useState<string>('central-europe');
  const doc = useSourceMarkdown(selected);

  if (capacityLoading || loading) return <LoadingState />;
  if (capacityError) return <ErrorState error={capacityError} />;
  if (error) return <ErrorState error={error} />;

  return (
    <PageContainer>
      <div className="page-heading">
        <div>
          <p className="eyebrow">Sources</p>
          <h2>Input files and comments</h2>
        </div>
        <select value={selected} onChange={(event) => setSelected(event.target.value)}>
          {sources.map((source) => <option key={source.id} value={source.id}>{source.title}</option>)}
        </select>
      </div>

      <SourceQualityTable sources={data?.sources ?? []} />

      <article className="markdown-panel">
        {doc.loading ? <LoadingState /> : <ReactMarkdown>{doc.doc?.markdown ?? ''}</ReactMarkdown>}
      </article>
    </PageContainer>
  );
}
