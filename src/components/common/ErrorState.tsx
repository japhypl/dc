export function ErrorState({ error }: { error: Error | null }) {
  return <div className="state-box danger">{error?.message ?? 'Unknown error'}</div>;
}
