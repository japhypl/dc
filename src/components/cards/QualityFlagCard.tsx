import { Badge } from '../common/Badge';

export function QualityFlagCard({ flags }: { flags: string[] }) {
  return (
    <div className="quality-row">
      {flags.map((flag) => (
        <Badge key={flag} tone={flag === '?' ? 'warning' : 'default'}>{flag}</Badge>
      ))}
    </div>
  );
}
