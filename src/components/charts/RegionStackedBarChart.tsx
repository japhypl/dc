import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { ScenarioOutputRow } from '../../types/capacity';

export function RegionStackedBarChart({ rows, year = '2030f' }: { rows: ScenarioOutputRow[]; year?: string }) {
  const data = rows
    .filter((row) => row.year === year && row.regionId !== 'total')
    .map((row) => ({ region: row.regionName, Low: row.lowGw ?? 0, Mid: row.midGw ?? 0, High: row.highGw ?? 0 }));

  return (
    <div className="chart-card">
      <h3>Regional view, {year.replace('f', '')}</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <XAxis dataKey="region" />
          <YAxis unit=" GW" />
          <Tooltip />
          <Bar dataKey="High" fill="var(--chart-high)" />
          <Bar dataKey="Mid" fill="var(--chart-mid)" />
          <Bar dataKey="Low" fill="var(--chart-low)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
