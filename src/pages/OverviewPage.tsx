import { PageContainer } from '../components/layout/PageContainer';
import { ScenarioSummaryCard } from '../components/cards/ScenarioSummaryCard';
import { ScenarioFanChart } from '../components/charts/ScenarioFanChart';
import { RegionStackedBarChart } from '../components/charts/RegionStackedBarChart';
import { RegionScenarioTable } from '../components/tables/RegionScenarioTable';
import { LoadingState } from '../components/common/LoadingState';
import { ErrorState } from '../components/common/ErrorState';
import { useCapacityData } from '../hooks/useCapacityData';
import { useScenarioOutputs } from '../hooks/useScenarioOutputs';

export function OverviewPage() {
  const { data, loading, error } = useCapacityData();
  const rows = useScenarioOutputs(data);
  const total2030 = rows.find((row) => row.regionName === 'Total' && row.year === '2030f');

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;

  return (
    <PageContainer>
      <div className="page-heading">
        <div>
          <p className="eyebrow">Overview</p>
          <h2>Available capacity scenarios</h2>
        </div>
        <p>All values are IT load GW. Missing source inputs remain `n/a`, not zero.</p>
      </div>

      <div className="card-grid three">
        <ScenarioSummaryCard title="2030 Low" row={total2030} scenario="lowGw" />
        <ScenarioSummaryCard title="2030 Mid" row={total2030} scenario="midGw" />
        <ScenarioSummaryCard title="2030 High" row={total2030} scenario="highGw" />
      </div>

      <div className="chart-grid two">
        <ScenarioFanChart rows={rows} regionName="Total" />
        <RegionStackedBarChart rows={rows} year="2030f" />
      </div>

      <RegionScenarioTable rows={rows} />
    </PageContainer>
  );
}
