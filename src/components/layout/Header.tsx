import { DatabaseZap, LogOut } from 'lucide-react';

export function Header() {
  async function handleLogout() {
    await fetch('/api/logout', { method: 'POST', credentials: 'include' });
    window.location.reload();
  }

  return (
    <header className="app-header">
      <div className="header-title">
        <DatabaseZap size={22} />
        <div>
          <p className="eyebrow">Data center capacity</p>
          <h1>Scenario dashboard</h1>
        </div>
      </div>
      <div className="header-actions">
        <span className="header-meta">IT load GW, 2026-2030</span>
        <button className="logout-button" onClick={handleLogout} title="Sign out">
          <LogOut size={16} />
        </button>
      </div>
    </header>
  );
}
