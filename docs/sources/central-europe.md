# Source input: Central Europe

## Purpose

Defines Central Europe country scope and historical / forecast data-center capacity.

## Coverage

Countries:

- Poland
- Austria
- Greece
- Czech Republic
- Hungary
- Slovakia
- Croatia

Years:

- 2016-2030 in source data
- 2026-2030 in dashboard forecast views

## Primary capacity metric

Source field:

- Power (MW)

Dashboard field:

- IT load proxy GW (?)

Transformation:

```text
Power MW / 1000 = GW
```

## Scenario use

- Mid uses the baseline forecast values.
- Low applies editable realization and timing parameters to the incremental capacity above 2025e.
- High uses validated upside where present. Greece has an optimistic power scenario in the workbook.

## Extracted capacity input, GW

| Country | 2025e | 2026f | 2027f | 2028f | 2029f | 2030f baseline | 2030f high input |
|---|---:|---:|---:|---:|---:|---:|---:|
| Poland | 0.256 | 0.320 | 0.382 | 0.447 | 0.529 | 0.607 | 0.607 |
| Austria | 0.169 | 0.201 | 0.233 | 0.266 | 0.281 | 0.296 | 0.296 |
| Greece | 0.046 | 0.056 | 0.089 | 0.128 | 0.135 | 0.142 | 0.445 |
| Czech Republic | 0.083 | 0.087 | 0.090 | 0.098 | 0.107 | 0.116 | 0.116 |
| Hungary | 0.046 | 0.048 | 0.049 | 0.051 | 0.052 | 0.054 | 0.054 |
| Slovakia | 0.027 | 0.028 | 0.029 | 0.029 | 0.030 | 0.031 | 0.031 |
| Croatia | 0.026 | 0.030 | 0.030 | 0.038 | 0.046 | 0.054 | 0.054 |
| **Central Europe total** | 0.653 | 0.770 | 0.902 | 1.059 | 1.182 | 1.300 | 1.603 |

## Quality flags

- Direct: values come from the uploaded workbook.
- Converted: MW is converted to GW.
- ?: the source does not explicitly confirm whether Power (MW) equals critical IT load, facility power, design capacity, or another capacity definition.

## Comments

The dashboard treats these values as the Central Europe control total. Do not overwrite them with external sources unless explicitly instructed.

## Open questions

- Confirm the exact source definition of Power (MW).
- Confirm whether this should be treated as critical IT load, facility power, or design capacity.
