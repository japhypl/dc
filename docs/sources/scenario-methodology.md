# Source input: scenario methodology

## Purpose

Documents how Low, Mid, and High scenarios are calculated.

## Scenario names

- Low
- Mid
- High

No source-author names are used in the UI.

## Low

Low uses a conservative realization factor applied to incremental capacity above the 2025e baseline.

```text
low = baseline_2025 + low_realization x timing_factor x (base_forecast - baseline_2025)
```

## Mid

Mid uses the base forecast path from the source input.

```text
mid = base_forecast
```

## High

High uses a validated high forecast if present. Otherwise it uses base forecast plus editable uplift.

```text
high = validated_high_forecast or base_forecast + high_uplift
```

## Annual cap

When enabled, the calculated value is capped.

```text
final = min(calculated, annual_cap)
```

## Quality flags

Every output inherits source quality flags and adds `Estimated` where scenario parameters are applied.
