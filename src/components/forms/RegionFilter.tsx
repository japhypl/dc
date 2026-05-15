export function RegionFilter({ value, onChange, regions }: { value: string; onChange: (value: string) => void; regions: string[] }) {
  return (
    <label className="inline-filter">
      Region
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {regions.map((region) => <option key={region} value={region}>{region}</option>)}
      </select>
    </label>
  );
}
