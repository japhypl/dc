import { DatabaseZap } from 'lucide-react';

export function Header() {
  return (
    <header className="app-header">
      <div className="header-title">
        <DatabaseZap size={22} />
        <div>
          <p className="eyebrow">Data center capacity</p>
          <h1>Scenario dashboard</h1>
        </div>
      </div>
      <div className="header-meta">IT load GW, 2026-2030</div>
    </header>
  );
}
