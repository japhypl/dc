# Source input: Western Europe

## Purpose

Holds Western Europe data-center capacity inputs for the 2026-2030 dashboard view.

## Coverage

Included:

- United Kingdom
- Ireland
- France
- Netherlands
- Belgium
- Luxembourg
- Switzerland
- Nordics (Sweden, Denmark, Finland, Norway)
- Spain, Italy, Portugal (emerging)

Excluded:

- Germany, because it is its own region
- Poland, Austria, Greece, Czech Republic, Hungary, Slovakia, and Croatia, because they are in Central Europe per the uploaded workbook

Years:

- 2025e baseline
- 2026f-2030f forecast

## Primary capacity metric

Dashboard field:

- IT load GW

## Current status

`populated` (composite external sources)

## Sources used

### S&P Global (Jul 2025)

- Europe total data center power: 18.7 GW end 2024, rising to 21.3 GW by end 2025, to 36 GW by 2030
- Used for: European total from which Western Europe share is derived

### IEA (2025)

- Europe data center electricity: 96 TWh (2024), growing to 168 TWh (2030), +70% installed capacity
- EU data center energy in 2024: ~70 TWh
- Capacity implied by pipeline: ~130% of installed today, but only ~70% growth realized by 2030 due to grid constraints
- EU AI Continent Action Plan targets tripling data center capacity in 5-7 years
- Used for: Growth trajectory validation, grid constraint discount

### Country-level data points (various 2025 sources)

- **UK:** 3.69 GW total load (2025), ~2,590 MW operational, projected 4,750 MW by 2030. National Grid: 6x energy use by 2035. 3% of power demand.
- **France:** 1.72 GW. Grid relatively unconstrained; expected to maintain continued investment among FLAP-D markets.
- **Ireland:** Data centers at 19% of national demand. New policy requires matching dispatchable power for new connections. Could reach 30% of demand by 2030.
- **Netherlands:** Data centers at 7% of power demand. Average planned project 3x larger than average operational.
- **Nordics:** Projected >2.8 GW by 2030. Electricity demand to triple by 2030 in Sweden, Norway, Denmark. Lowest grid congestion in Europe, low electricity prices, cold climate advantage.

### DCD / Bain (2025)

- Nordics and southern Europe: 110% demand growth by 2030
- Established FLAP-D markets: ~55% growth by 2030
- By 2035, half of Europe's DC capacity outside traditional hubs
- FLAP-D moratoriums: 7-13 year wait for new power allocations
- Used for: High scenario growth differential

### Goldman Sachs (2025)

- Global: 122 GW by end 2030
- Europe share estimated at ~15% of global
- Used for: Cross-validation of European share

## Data summary

| Year | Mid (GW) | High (GW) |
|------|----------|-----------|
| 2025e | 10.0 | 10.0 |
| 2026f | 12.0 | 13.0 |
| 2027f | 14.0 | 16.0 |
| 2028f | 16.5 | 20.0 |
| 2029f | 19.0 | 24.0 |
| 2030f | 21.0 | 28.0 |

## Derivation method

Western Europe = Europe total - Germany - Central Europe

- S&P Global Europe total 2025: 21.3 GW
- Germany 2025: ~4.26 GW (Borderstep, all types) or ~1.4 GW (colocation)
- Central Europe 2025: ~0.65 GW (workbook)
- Remainder for WE: ~10-16 GW depending on Germany definition
- Mid scenario uses ~10 GW baseline, consistent with bottom-up country sums (UK 3.7 + France 1.7 + Ireland ~0.8 + Netherlands ~1.5 + Nordics ~1.5 + others ~0.8)

## Capacity definition caveats

- Derived from multiple sources with different capacity definitions
- UK figures are total load; France figure source unclear; Nordics mix IT load and facility power
- Country-level data does not always separate IT load from facility power
- All values flagged with `?`

## Quality flags

- External
- Composite
- Interpolated
- Derived
- ?

## Key risks and caveats

- Western Europe total is derived by subtraction; errors in Germany or CE data propagate
- Grid moratoriums in Amsterdam, Dublin, London constrain near-term growth
- Ireland's matching-power policy may slow new connections
- Nordic expansion could outpace forecasts (cold climate, green energy, low congestion)
- High scenario assumes EU policy targets are partially achieved; Mid assumes business-as-usual with grid constraints
- Intermediate years are interpolated
