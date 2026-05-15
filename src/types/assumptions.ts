export interface AssumptionRow {
  id: string;
  name: string;
  value: string | number | boolean;
  scenario: string;
  editable: boolean;
  source: string;
}

export interface AssumptionsResponse {
  assumptions: {
    modelVersion: string;
    primaryUnit: string;
    scenarioNames: string[];
    defaultPue: number;
    applyAnnualCapDefault: boolean;
    assumptions: AssumptionRow[];
  };
}
