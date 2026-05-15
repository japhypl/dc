import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { ScenarioOutputRow } from '../../types/capacity';

export function ScenarioFanChart({ rows, regionName = 'Total' }: { rows: ScenarioOutputRow[]; regionName?: string }) {
  const data = rows
    .filter((row) => row.regionName === regionName)
    .map((row) => ({ year: row.year.replace('f', ''), Low: row.lowGw, Mid: row.midGw, High: row.highGw }));

  return (
    <div className="chart-card">
      <h3>{regionName} scenario fan</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <XAxis dataKey="year" />
          <YAxis unit=" GW" />
          <Tooltip itemSorter={(a) => ({ High: 0, Mid: 1, Low: 2 }[a.dataKey as string] ?? 3)} />
          <Line type="monotone" dataKey="High" stroke="var(--chart-high)" strokeWidth={2} connectNulls />
          <Line type="monotone" dataKey="Mid" stroke="var(--chart-mid)" strokeWidth={2} connectNulls />
          <Line type="monotone" dataKey="Low" stroke="var(--chart-low)" strokeWidth={2} connectNulls />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
