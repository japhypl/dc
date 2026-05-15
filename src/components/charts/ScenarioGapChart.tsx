import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { ScenarioOutputRow } from '../../types/capacity';

export function ScenarioGapChart({ rows }: { rows: ScenarioOutputRow[] }) {
  const data = rows
    .filter((row) => row.year === '2030f' && row.regionId !== 'total')
    .map((row) => ({
      region: row.regionName,
      lowGap: row.midGw !== null && row.lowGw !== null ? row.lowGw - row.midGw : 0,
      highGap: row.highGw !== null && row.midGw !== null ? row.highGw - row.midGw : 0
    }));

  return (
    <div className="chart-card">
      <h3>2030 scenario gap versus Mid</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <XAxis dataKey="region" />
          <YAxis unit=" GW" />
          <Tooltip />
          <Bar dataKey="lowGap" fill="var(--chart-low)" />
          <Bar dataKey="highGap" fill="var(--chart-high)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
