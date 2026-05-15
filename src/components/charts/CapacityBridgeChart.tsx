import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { ScenarioOutputRow } from '../../types/capacity';

export function CapacityBridgeChart({ rows }: { rows: ScenarioOutputRow[] }) {
  const row2030 = rows.find((row) => row.regionName === 'Central Europe' && row.year === '2030f');
  const data = row2030
    ? [
        { label: '2025 baseline', value: row2030.baselineGw ?? 0 },
        { label: '2030 Low', value: row2030.lowGw ?? 0 },
        { label: '2030 Mid', value: row2030.midGw ?? 0 },
        { label: '2030 High', value: row2030.highGw ?? 0 }
      ]
    : [];

  return (
    <div className="chart-card">
      <h3>Central Europe capacity bridge</h3>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis unit=" GW" />
          <Tooltip />
          <Bar dataKey="value" fill="var(--chart-mid)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
