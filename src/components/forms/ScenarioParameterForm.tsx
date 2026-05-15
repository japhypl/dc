import type { ScenarioParameter } from '../../types/capacity';
import { AssumptionEditor } from './AssumptionEditor';

export function ScenarioParameterForm({ parameters }: { parameters: ScenarioParameter[] }) {
  return <AssumptionEditor parameters={parameters} />;
}
