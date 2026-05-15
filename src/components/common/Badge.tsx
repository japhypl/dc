export function Badge({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'warning' | 'success' | 'danger' }) {
  return <span className={`badge ${tone}`}>{children}</span>;
}
