import type { ScenarioOutputRow } from '../../types/capacity';
import { formatGw } from '../../utils/formatGw';
import { Badge } from '../common/Badge';

export function RegionCapacityCard({ row }: { row: ScenarioOutputRow }) {
  return (
    <article className="card region-card">
      <div className="card-title-row">
        <h3>{row.regionName}</h3>
        <Badge tone={row.isPartial ? 'warning' : 'success'}>{row.sourceStatus}</Badge>
      </div>
      <dl className="metric-grid compact">
        <div><dt>Low</dt><dd>{formatGw(row.lowGw)}</dd></div>
        <div><dt>Mid</dt><dd>{formatGw(row.midGw)}</dd></div>
        <div><dt>High</dt><dd>{formatGw(row.highGw)}</dd></div>
      </dl>
      <p className="muted-text">Flags: {row.qualityFlags.join(', ')}</p>
    </article>
  );
}
