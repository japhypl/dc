# Source input: US

## Purpose

Holds US data-center capacity inputs for the 2026-2030 dashboard view.

## Coverage

Region:

- US

Years:

- 2025e baseline
- 2026f-2030f forecast

## Primary capacity metric

Dashboard field:

- IT load GW

## Current status

`populated` (composite external sources)

## Sources used

### Goldman Sachs Research (2024-2025)

- Global data centers consume ~55 GW currently, US ~30 GW in 2025
- Base case: 17% CAGR 2025-2028, ~92 GW globally by 2027
- By 2030: 122 GW globally, 165% increase vs 2023
- Revised Nov 2025 outlook: 175% increase by 2030
- Used for: Mid scenario trajectory

### S&P Global (Oct 2025)

- US data center demand: 75.8 GW in 2026, 108 GW in 2028, 134.4 GW in 2030
- Metric: total grid demand (IT equipment, cooling, lighting, other)
- Used for: High scenario (134.4 GW by 2030)

### McKinsey (Sep 2024)

- 22.3% CAGR projection, reaching 606 TWh by 2030
- US data centers: 147 TWh (2023), 178 TWh (2024), 224 TWh (2025), 292 TWh (2026)
- Data centers could account for 40% of net new US electricity demand
- Used for: Cross-validation of growth trajectory

### IEA (2025)

- US accounted for 45% of global data center electricity in 2024
- US consumption increases by ~240 TWh (+130%) from 2024 to 2030
- Global installed capacity approaching 100 GW
- Used for: Cross-validation

### DOE (2025)

- Estimated 100 GW of new peak capacity needed by 2030, 50 GW attributable to data centers
- Used for: Cross-validation of supply-side constraint

## Data summary

| Year | Mid (GW) | High (GW) |
|------|----------|-----------|
| 2025e | 30.0 | 30.0 |
| 2026f | 48.0 | 55.0 |
| 2027f | 68.0 | 76.0 |
| 2028f | 88.0 | 108.0 |
| 2029f | 105.0 | 120.0 |
| 2030f | 122.0 | 134.4 |

## Capacity definition caveats

- Sources mix facility power, grid demand, and IT load definitions
- Goldman Sachs figures refer to total data center power capacity
- S&P Global figures include IT equipment, cooling, lighting, and other uses
- No single source provides pure IT load; PUE conversion (~1.3-1.4) can be applied in assumptions
- All values flagged with `?`

## Quality flags

- External
- Composite
- Interpolated
- ?

## Key risks and caveats

- Forecasts range widely: 80-134 GW by 2030 depending on assumptions
- Chip shortages, duplicative permits, and grid delays may reduce realized capacity
- Annual additions of 20-31 GW/year (2027-2030) are historically unprecedented
- WRI notes institutional projections range from 200 to 1,000+ TWh by 2030
- Intermediate years (2026-2029) are interpolated, not directly sourced year-by-year
