import { PageContainer } from '../components/layout/PageContainer';

export function MethodologyPage() {
  return (
    <PageContainer>
      <div className="page-heading">
        <div>
          <p className="eyebrow">Methodology</p>
          <h2>Core model logic</h2>
        </div>
      </div>

      <div className="card markdown-panel">
        <h3>Capacity normalization</h3>
        <pre>{`source_capacity_gw = source_capacity_mw / 1000`}</pre>
        <p>If source capacity is facility power and conversion is enabled:</p>
        <pre>{`it_load_gw = facility_power_gw / PUE`}</pre>

        <h3>Mid</h3>
        <pre>{`mid_capacity_gw = base_forecast_capacity_gw`}</pre>

        <h3>Low</h3>
        <pre>{`low_capacity_gw = baseline_2025_gw + low_realization_rate x timing_factor x (base_forecast_capacity_gw - baseline_2025_gw)`}</pre>

        <h3>High</h3>
        <pre>{`high_capacity_gw = validated_high_forecast_gw or base_forecast_capacity_gw + high_uplift_gw`}</pre>

        <h3>Quality flags</h3>
        <p>Direct, Converted, Estimated, External, and ? remain visible in the UI.</p>
      </div>
    </PageContainer>
  );
}
