import type { ScenarioOutputRow } from '../../types/capacity';
import { formatGw } from '../../utils/formatGw';
import { Badge } from '../common/Badge';

const years = ['2026f', '2027f', '2028f', '2029f', '2030f'];

export function RegionScenarioTable({ rows }: { rows: ScenarioOutputRow[] }) {
  const regions = Array.from(new Set(rows.map((row) => row.regionName)));

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Region</th>
            {years.map((year) => <th key={`${year}-low`}>{year.replace('f', '')} Low</th>)}
            {years.map((year) => <th key={`${year}-mid`}>{year.replace('f', '')} Mid</th>)}
            {years.map((year) => <th key={`${year}-high`}>{year.replace('f', '')} High</th>)}
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {regions.map((region) => {
            const regionRows = rows.filter((row) => row.regionName === region);
            const status = regionRows.some((row) => row.isPartial) ? 'partial' : 'complete';
            return (
              <tr key={region}>
                <th>{region}</th>
                {years.map((year) => <td key={`${region}-${year}-low`}>{formatGw(regionRows.find((row) => row.year === year)?.lowGw)}</td>)}
                {years.map((year) => <td key={`${region}-${year}-mid`}>{formatGw(regionRows.find((row) => row.year === year)?.midGw)}</td>)}
                {years.map((year) => <td key={`${region}-${year}-high`}>{formatGw(regionRows.find((row) => row.year === year)?.highGw)}</td>)}
                <td><Badge tone={status === 'partial' ? 'warning' : 'success'}>{status}</Badge></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
