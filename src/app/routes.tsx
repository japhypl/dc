import { OverviewPage } from '../pages/OverviewPage';
import { RegionDetailPage } from '../pages/RegionDetailPage';
import { AssumptionsPage } from '../pages/AssumptionsPage';
import { SourcesPage } from '../pages/SourcesPage';
import { UrlAnalyzerPage } from '../pages/UrlAnalyzerPage';
import { MethodologyPage } from '../pages/MethodologyPage';

export const appRoutes = [
  { path: '/', element: <OverviewPage /> },
  { path: '/regions', element: <RegionDetailPage /> },
  { path: '/assumptions', element: <AssumptionsPage /> },
  { path: '/sources', element: <SourcesPage /> },
  { path: '/url-analyzer', element: <UrlAnalyzerPage /> },
  { path: '/methodology', element: <MethodologyPage /> }
];
