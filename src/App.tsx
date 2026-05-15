import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { OverviewPage } from './pages/OverviewPage';
import { RegionDetailPage } from './pages/RegionDetailPage';
import { AssumptionsPage } from './pages/AssumptionsPage';
import { SourcesPage } from './pages/SourcesPage';
import { UrlAnalyzerPage } from './pages/UrlAnalyzerPage';
import { MethodologyPage } from './pages/MethodologyPage';

export default function App() {
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
