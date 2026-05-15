export function EmptyState({ message = 'No data available.' }: { message?: string }) {
  return <div className="state-box muted">{message}</div>;
}
