import { useState } from 'react';

export function UrlAnalyzerForm({ onSubmit, loading }: { onSubmit: (input: { url: string; targetYear?: number; regionHint?: string }) => void; loading: boolean }) {
  const [url, setUrl] = useState('');
  const [targetYear, setTargetYear] = useState('2030');
  const [regionHint, setRegionHint] = useState('');

  return (
    <form className="url-form" onSubmit={(event) => {
      event.preventDefault();
      onSubmit({ url, targetYear: targetYear ? Number(targetYear) : undefined, regionHint: regionHint || undefined });
    }}>
      <label>
        Source URL
        <input type="url" required value={url} onChange={(event) => setUrl(event.target.value)} placeholder="https://example.com/article" />
      </label>
      <label>
        Target year
        <input type="number" min="2026" max="2035" value={targetYear} onChange={(event) => setTargetYear(event.target.value)} />
      </label>
      <label>
        Region hint
        <input value={regionHint} onChange={(event) => setRegionHint(event.target.value)} placeholder="Germany, US, Western Europe..." />
      </label>
      <button type="submit" disabled={loading}>{loading ? 'Analyzing...' : 'Analyze URL'}</button>
    </form>
  );
}
