# Source input: Germany

## Purpose

Holds Germany data-center capacity inputs for the 2026-2030 dashboard view.

## Coverage

Country:

- Germany

Key sub-markets:

- Frankfurt / Rhine-Main (>60% of market, ~745 MW live IT load, 542 MW under construction, 383 MW planning)
- Berlin (~6.5% share, Virtus 300 MW campus planned for 2026)
- Munich, Hamburg, Dusseldorf (emerging)

Years:

- 2025e baseline
- 2026f-2030f forecast

## Primary capacity metric

Dashboard field:

- IT load GW

## Current status

`populated` (composite external sources)

## Sources used

### Prime East / Borderstep (2024-2025)

- Germany colocation IT load: 1.3 GW in 2024, growing to 3.3 GW by 2029-2030
- Total installed IT load across all German data centers: ~4,850 MW by 2030 (Borderstep)
- Total data center load in 2025: 4.26 GW (includes enterprise, not just colocation)
- Used for: Mid scenario (colocation trajectory), High scenario upper bound

### GlobeNewsWire / ResearchAndMarkets (Dec 2025)

- DCCP (Data Centre Customer Power / IT load): >1,400 MW total mid-2025
- Frankfurt: >60% market share
- Berlin: ~6.5% share
- Forecast period covers 2025-2028 (detailed numbers behind paywall)
- Used for: 2025e baseline validation

### ResearchAndMarkets / BusinessWire (Apr 2025)

- Germany to add 37 facilities and 5,000+ MW by 2030
- Market value: USD 7.71B (2024) to USD 12.84B (2030), 8.87% CAGR
- Used for: High scenario (4.8 GW by 2030)

### Mordor Intelligence (2025)

- Frankfurt: 1.30 GW operational IT load (2025), growing to 1.80 GW by 2030, 6.78% CAGR
- Frankfurt/Rhine-Main: 58% of hyperscale market in 2024
- Vacancy rate: 3% (lowest in Europe)
- Used for: Frankfurt sub-market validation

### JLL EMEA Data Centre Report (2025)

- Frankfurt live IT load: ~745 MW, under construction: 542 MW, planning: 383 MW
- Pipeline total: ~1,670 MW
- FLAP-D markets: 1.8 GW (2019) to 3.6 GW (2025)
- Used for: Frankfurt pipeline validation

### Hyperscale investments

- Microsoft: EUR 3.2B by 2025 (doubling AI infra)
- Amazon AWS Frankfurt: EUR 8.8B through 2026
- Google Dietzenbach: ~EUR 5.5B through 2029
- NTT Nierstein: 480 MW starting 2026
- Up to 2,000 MW of AI/HPC capacity could be installed by 2030

## Data summary

| Year | Mid (GW) | High (GW) |
|------|----------|-----------|
| 2025e | 1.4 | 1.4 |
| 2026f | 1.8 | 2.0 |
| 2027f | 2.2 | 2.5 |
| 2028f | 2.6 | 3.0 |
| 2029f | 3.0 | 3.5 |
| 2030f | 3.3 | 4.8 |

## Capacity definition caveats

- Mid scenario tracks colocation IT load (DCCP), not total facility power
- High scenario uses total capacity including hyperscale/enterprise, closer to facility power
- Borderstep 4.26 GW figure includes all data center types (enterprise + colocation + hyperscale)
- Germany Energy Efficiency Act mandates PUE 1.3 by 2030
- All values flagged with `?` due to mixed definitions

## Quality flags

- External
- Composite
- Interpolated
- ?

## Key risks and caveats

- Grid connection delays: 7+ years for new larger projects in Frankfurt area
- Frankfurt moratorium risk: "Until 2030, new larger projects will actually have no chance of being connected to the grid"
- Energy Efficiency Act: 100% renewable power by 2027, PUE 1.3 by 2030
- Gap between Mid (3.3 GW) and High (4.8 GW) reflects uncertainty around grid constraints vs hyperscale investment push
- Intermediate years are interpolated
