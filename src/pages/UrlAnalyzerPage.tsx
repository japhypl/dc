import { PageContainer } from '../components/layout/PageContainer';
import { UrlAnalyzerForm } from '../components/forms/UrlAnalyzerForm';
import { ErrorState } from '../components/common/ErrorState';
import { Badge } from '../components/common/Badge';
import { useUrlAnalysis } from '../hooks/useUrlAnalysis';
import { formatGw } from '../utils/formatGw';
import { formatPercent } from '../utils/formatPercent';

export function UrlAnalyzerPage() {
  const { data, loading, error, run } = useUrlAnalysis();
  const currentYear = new Date().getFullYear();
  const targetYear = data?.suggestedInput.yearY ?? 2030;
  const startYear = data?.suggestedInput.yearX ?? currentYear;
  const yearsToTarget = Math.max(1, targetYear - startYear);
  const baseAnnualGw = data?.suggestedInput.capacityGw ?? null;
  const annualizedGw = baseAnnualGw === null ? null : baseAnnualGw / yearsToTarget;
  const scenarioCards = data ? [
    {
      name: 'Low',
      likelihood: data.scenarioLikelihood.low,
      annualGw: annualizedGw === null ? null : annualizedGw * data.scenarioLikelihood.low
    },
    {
      name: 'Mid',
      likelihood: data.scenarioLikelihood.mid,
      annualGw: annualizedGw === null ? null : annualizedGw * data.scenarioLikelihood.mid
    },
    {
      name: 'High',
      likelihood: data.scenarioLikelihood.high,
      annualGw: annualizedGw === null ? null : annualizedGw * data.scenarioLikelihood.high
    }
  ] : [];

  return (
    <PageContainer>
      <div className="page-heading">
        <div>
          <p className="eyebrow">URL analyzer</p>
          <h2>Scenario likelihood from pasted source</h2>
        </div>
      </div>

      <UrlAnalyzerForm onSubmit={run} loading={loading} />
      {error ? <ErrorState error={error} /> : null}

      {data ? (
        <div className="url-results">
          <article className="card">
            <h3>{data.title}</h3>
            <div className="quality-row">{data.flags.map((flag) => <Badge key={flag} tone={flag === '?' ? 'warning' : 'default'}>{flag}</Badge>)}</div>
            <div className="scenario-cards">
              {scenarioCards.map((scenario) => (
                <div className="scenario-card" key={scenario.name}>
                  <div className="scenario-card-header">
                    <h4>{scenario.name}</h4>
                    <span className="scenario-chip">to {targetYear}</span>
                  </div>
                  <dl className="metric-grid compact scenario-metrics">
                    <div><dt>Likelihood</dt><dd>{formatPercent(scenario.likelihood)}</dd></div>
                    <div><dt>GW/yr</dt><dd>{formatGw(scenario.annualGw)}</dd></div>
                  </dl>
                </div>
              ))}
            </div>
          </article>

          <article className="card">
            <h3>Suggested model input</h3>
            <dl className="metric-grid compact">
              <div><dt>Region</dt><dd>{data.suggestedInput.region ?? 'n/a'}</dd></div>
              <div><dt>Year X</dt><dd>{data.suggestedInput.yearX ?? 'n/a'}</dd></div>
              <div><dt>Year Y</dt><dd>{data.suggestedInput.yearY ?? 'n/a'}</dd></div>
              <div><dt>Capacity</dt><dd>{formatGw(data.suggestedInput.capacityGw)}</dd></div>
              <div><dt>Type</dt><dd>{data.suggestedInput.capacityType}</dd></div>
              <div><dt>Confidence</dt><dd>{data.suggestedInput.confidence}</dd></div>
            </dl>
            <h4>Explanation</h4>
            <ul>
              {data.explanation.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          <article className="card wide-card">
            <h3>Detected claims</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Capacity</th><th>Unit</th><th>Type</th><th>Stage</th><th>Region</th><th>Flags</th><th>Evidence</th></tr></thead>
                <tbody>
                  {data.detectedClaims.map((claim, index) => (
                    <tr key={index}>
                      <td>{claim.capacityValue ?? 'n/a'}</td>
                      <td>{claim.capacityUnit}</td>
                      <td>{claim.capacityType}</td>
                      <td>{claim.deliveryStage}</td>
                      <td>{claim.region ?? 'n/a'}</td>
                      <td>{claim.flags.join(', ')}</td>
                      <td>{claim.evidence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </div>
      ) : null}
    </PageContainer>
  );
}
