# Model methodology

## Model aim

Estimate probably available data-center capacity by region and year.

## Unit

IT load GW.

## Baseline

2025e is the baseline year.

## Forecast years

2026f-2030f.

## Formula overview

```text
Mid = base forecast
Low = baseline + realization x timing x incremental forecast
High = validated high forecast or base forecast + uplift
```

## Missing data

Missing source values remain `null`. They are not converted to zero. Regional totals mark themselves as partial when any included region is missing.

## Quality handling

The model carries quality flags from source data into outputs. If a source field is unclear, the UI displays `?`.
