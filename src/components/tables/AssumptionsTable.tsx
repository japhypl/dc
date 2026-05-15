import type { ScenarioParameter } from '../../types/capacity';
import { formatPercent } from '../../utils/formatPercent';

export function AssumptionsTable({ parameters }: { parameters: ScenarioParameter[] }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Region</th>
            <th>Year</th>
            <th>Low realization</th>
            <th>Timing factor</th>
            <th>Delay months</th>
            <th>High uplift GW</th>
            <th>Annual cap</th>
          </tr>
        </thead>
        <tbody>
          {parameters.map((param) => (
            <tr key={`${param.regionId}-${param.year}`}>
              <td>{param.regionId}</td>
              <td>{param.year}</td>
              <td>{formatPercent(param.lowRealization)}</td>
              <td>{formatPercent(param.timingFactor)}</td>
              <td>{param.delayMonths}</td>
              <td>{param.highUpliftGw.toFixed(3)}</td>
              <td>{param.annualCommissioningCapGw ?? 'n/a'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
