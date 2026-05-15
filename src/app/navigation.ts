import { BarChart3, BookOpen, Gauge, Link2, Settings, Table2 } from 'lucide-react';

export const navItems = [
  { to: '/', label: 'Overview', icon: BarChart3 },
  { to: '/regions', label: 'Region detail', icon: Table2 },
  { to: '/assumptions', label: 'Assumptions', icon: Settings },
  { to: '/sources', label: 'Sources', icon: BookOpen },
  { to: '/url-analyzer', label: 'URL analyzer', icon: Link2 },
  { to: '/methodology', label: 'Methodology', icon: Gauge }
];
