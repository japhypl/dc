import { create } from 'zustand';
import type { ScenarioParameter } from '../types/capacity';

interface DashboardStore {
  parameters: ScenarioParameter[];
  initialized: boolean;
  setInitialParameters: (parameters: ScenarioParameter[]) => void;
  updateParameter: (regionId: string, year: string, patch: Partial<ScenarioParameter>) => void;
  resetParameters: (parameters: ScenarioParameter[]) => void;
}

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  parameters: [],
  initialized: false,
  setInitialParameters: (parameters) => {
    if (get().initialized) return;
    set({ parameters, initialized: true });
  },
  updateParameter: (regionId, year, patch) => {
    set({
      parameters: get().parameters.map((param) =>
        param.regionId === regionId && param.year === year ? { ...param, ...patch } : param
      )
    });
  },
  resetParameters: (parameters) => set({ parameters, initialized: true })
}));
