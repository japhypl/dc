import type { PropsWithChildren } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-main">
        <Header />
        <main className="page-frame">{children}</main>
      </div>
    </div>
  );
}
