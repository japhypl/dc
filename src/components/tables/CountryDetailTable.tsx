import type { CountrySource } from '../../types/capacity';
import { formatGw } from '../../utils/formatGw';

const years = ['2025e', '2026f', '2027f', '2028f', '2029f', '2030f'] as const;

export function CountryDetailTable({ countries }: { countries: CountrySource[] }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Country</th>
            {years.map((year) => <th key={year}>{year}</th>)}
            <th>2030 high input</th>
            <th>Flags</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.country}>
              <th>{country.country}</th>
              {years.map((year) => <td key={year}>{formatGw(country.valuesGw[year])}</td>)}
              <td>{formatGw(country.highValuesGw?.['2030f'])}</td>
              <td>{country.qualityFlags.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
