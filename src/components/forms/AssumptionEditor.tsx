import type { ScenarioParameter } from '../../types/capacity';
import { useDashboardStore } from '../../app/store';

export function AssumptionEditor({ parameters }: { parameters: ScenarioParameter[] }) {
  const updateParameter = useDashboardStore((state) => state.updateParameter);

  return (
    <div className="editor-grid">
      {parameters.map((param) => (
        <div className="card editor-card" key={`${param.regionId}-${param.year}`}>
          <h3>{param.regionId} {param.year}</h3>
          <label>
            Low realization
            <input
              type="number"
              step="0.05"
              min="0"
              max="2"
              value={param.lowRealization}
              onChange={(event) => updateParameter(param.regionId, param.year, { lowRealization: Number(event.target.value) })}
            />
          </label>
          <label>
            Timing factor
            <input
              type="number"
              step="0.05"
              min="0"
              max="2"
              value={param.timingFactor}
              onChange={(event) => updateParameter(param.regionId, param.year, { timingFactor: Number(event.target.value) })}
            />
          </label>
          <label>
            High uplift GW
            <input
              type="number"
              step="0.05"
              value={param.highUpliftGw}
              onChange={(event) => updateParameter(param.regionId, param.year, { highUpliftGw: Number(event.target.value) })}
            />
          </label>
          <label>
            Annual cap GW
            <input
              type="number"
              step="0.05"
              value={param.annualCommissioningCapGw ?? ''}
              placeholder="n/a"
              onChange={(event) => updateParameter(param.regionId, param.year, { annualCommissioningCapGw: event.target.value === '' ? null : Number(event.target.value) })}
            />
          </label>
        </div>
      ))}
    </div>
  );
}
