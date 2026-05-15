import { useState } from 'react';
import { PageContainer } from '../components/layout/PageContainer';
import { RegionFilter } from '../components/forms/RegionFilter';
import { RegionCapacityCard } from '../components/cards/RegionCapacityCard';
import { CountryDetailTable } from '../components/tables/CountryDetailTable';
import { CapacityBridgeChart } from '../components/charts/CapacityBridgeChart';
import { ScenarioGapChart } from '../components/charts/ScenarioGapChart';
import { LoadingState } from '../components/common/LoadingState';
import { ErrorState } from '../components/common/ErrorState';
import { useCapacityData } from '../hooks/useCapacityData';
import { useScenarioOutputs } from '../hooks/useScenarioOutputs';

export function RegionDetailPage() {
  const { data, loading, error } = useCapacityData();
  const rows = useScenarioOutputs(data);
  const [region, setRegion] = useState('Central Europe');

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;

  const regionNames = Array.from(new Set(rows.filter((row) => row.regionName !== 'Total').map((row) => row.regionName)));
  const selectedRows = rows.filter((row) => row.regionName === region);

  return (
    <PageContainer>
      <div className="page-heading">
        <div>
          <p className="eyebrow">Region detail</p>
          <h2>Drivers and quality flags</h2>
        </div>
        <RegionFilter value={region} onChange={setRegion} regions={regionNames} />
      </div>

      <div className="card-grid five">
        {selectedRows.map((row) => <RegionCapacityCard key={`${row.regionId}-${row.year}`} row={row} />)}
      </div>

      <div className="chart-grid two">
        <CapacityBridgeChart rows={rows} />
        <ScenarioGapChart rows={rows} />
      </div>

      <h3>Central Europe country detail</h3>
      <CountryDetailTable countries={data?.countrySources ?? []} />
    </PageContainer>
  );
}
