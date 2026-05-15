import type { ScenarioOutputRow } from '../../types/capacity';
import { formatGw } from '../../utils/formatGw';
import { Badge } from '../common/Badge';

export function ScenarioSummaryCard({ title, row, scenario }: { title: string; row: ScenarioOutputRow | undefined; scenario: 'lowGw' | 'midGw' | 'highGw' }) {
  const value = row?.[scenario] ?? null;
  return (
    <article className="card metric-card">
      <div className="card-title-row">
        <span>{title}</span>
        {row?.isPartial ? <Badge tone="warning">partial</Badge> : <Badge tone="success">complete</Badge>}
      </div>
      <strong>{formatGw(value)}</strong>
      <p>{row?.comments ?? 'No scenario output available.'}</p>
    </article>
  );
}
