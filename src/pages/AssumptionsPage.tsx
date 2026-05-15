import { PageContainer } from '../components/layout/PageContainer';
import { ScenarioParameterForm } from '../components/forms/ScenarioParameterForm';
import { AssumptionsTable } from '../components/tables/AssumptionsTable';
import { LoadingState } from '../components/common/LoadingState';
import { ErrorState } from '../components/common/ErrorState';
import { useCapacityData } from '../hooks/useCapacityData';
import { useDashboardStore } from '../app/store';

export function AssumptionsPage() {
  const { loading, error, data } = useCapacityData();
  const parameters = useDashboardStore((state) => state.parameters);
  const resetParameters = useDashboardStore((state) => state.resetParameters);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;

  return (
    <PageContainer>
      <div className="page-heading">
        <div>
          <p className="eyebrow">Assumptions</p>
          <h2>Editable scenario parameters</h2>
        </div>
        <button onClick={() => data && resetParameters(data.scenarioParameters.parameters)}>Reset defaults</button>
      </div>
      <ScenarioParameterForm parameters={parameters} />
      <h3>Parameter table</h3>
      <AssumptionsTable parameters={parameters} />
    </PageContainer>
  );
}
