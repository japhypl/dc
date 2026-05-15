import type { RegionSource } from '../../types/capacity';
import { Badge } from '../common/Badge';

export function SourceQualityTable({ sources }: { sources: RegionSource[] }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Region</th>
            <th>Status</th>
            <th>Capacity definition</th>
            <th>Flags</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {sources.map((source) => (
            <tr key={source.regionId}>
              <th>{source.regionName}</th>
              <td><Badge tone={source.sourceStatus === 'populated' ? 'success' : 'warning'}>{source.sourceStatus}</Badge></td>
              <td>{source.capacityDefinition}</td>
              <td>{source.qualityFlags.join(', ')}</td>
              <td>{source.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
