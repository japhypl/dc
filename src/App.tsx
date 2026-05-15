import { useEffect, useState } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { LoginPage } from './components/LoginPage';
import './components/LoginPage.css';
import { OverviewPage } from './pages/OverviewPage';
import { RegionDetailPage } from './pages/RegionDetailPage';
import { AssumptionsPage } from './pages/AssumptionsPage';
import { SourcesPage } from './pages/SourcesPage';
import { UrlAnalyzerPage } from './pages/UrlAnalyzerPage';
import { MethodologyPage } from './pages/MethodologyPage';

export default function App() {
  const [auth, setAuth] = useState<'loading' | 'yes' | 'no'>('loading');

  useEffect(() => {
    fetch('/api/auth-status', { credentials: 'include' })
      .then((r) => r.json())
      .then((d) => setAuth(d.authenticated ? 'yes' : 'no'))
      .catch(() => setAuth('no'));
  }, []);

  if (auth === 'loading') return null;

  if (auth === 'no') {
    return <LoginPage onSuccess={() => setAuth('yes')} />;
  }

  return (
    <HashRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/regions" element={<RegionDetailPage />} />
          <Route path="/assumptions" element={<AssumptionsPage />} />
          <Route path="/sources" element={<SourcesPage />} />
          <Route path="/url-analyzer" element={<UrlAnalyzerPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppShell>
    </HashRouter>
  );
}
