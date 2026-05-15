# CLAUDE.md

## Project purpose

Build and maintain a React + Node.js + Vite dashboard that models data-center capacity availability. The business question is:

> Given announced or forecast data-center capacity in year X, what Low / Mid / High IT-load capacity is likely to be available in year Y?

The model must support all required regions and allow users to edit scenario parameters directly.

## Non-negotiable scope

Regions shown in the UI:

- US
- Western Europe
- Germany
- Central Europe
- Total

Central Europe is defined by the uploaded workbook and includes:

- Poland
- Austria
- Greece
- Czech Republic
- Hungary
- Slovakia
- Croatia

Germany is always separate from Western Europe. Austria stays inside Central Europe because the uploaded workbook defines it there.

Forecast years:

- 2026
- 2027
- 2028
- 2029
- 2030

Primary unit:

- IT load GW

Scenario names in the UI:

- Low
- Mid
- High

Do not use author names, vendor names, or source names as scenario names.

## Source priority

Central Europe:

- Use the uploaded workbook as the source of truth for country scope and historical/forecast data-center capacity.
- The workbook field is `Power (MW)`.
- Convert `Power (MW) / 1000 = GW`.
- Because the workbook does not explicitly define whether Power (MW) is critical IT load, facility power, or design power, keep a `?` flag.

US, Western Europe, Germany:

- Keep the source input files and markdown files separate.
- Until populated, mark these regions as `external_input_required`.
- Never invent capacity values.

## Core formulas

### Capacity normalization

If source value is MW:

```text
source_capacity_gw = source_capacity_mw / 1000
```

If source value is facility power and IT-load conversion is enabled:

```text
it_load_gw = facility_power_gw / PUE
```

If source value is already IT load:

```text
it_load_gw = source_capacity_gw
```

If the source definition is unclear:

```text
it_load_gw = source_capacity_gw
flag = "?"
```

### Mid scenario

```text
mid_capacity_gw(year, region) = base_forecast_capacity_gw(year, region)
```

### Low scenario

```text
low_capacity_gw(year, region) =
  baseline_2025_gw(region)
  + low_realization_rate(year, region)
  x timing_factor(year, region)
  x (base_forecast_capacity_gw(year, region) - baseline_2025_gw(region))
```

### High scenario

Default:

```text
high_capacity_gw(year, region) = base_forecast_capacity_gw(year, region) + high_uplift_gw(year, region)
```

Where a validated high forecast exists:

```text
high_capacity_gw(year, region) = validated_high_forecast_gw(year, region)
```

Central Europe uses Greece optimistic values inside the regional high forecast where available.

### Optional annual cap

If enabled:

```text
final_capacity_gw = min(calculated_capacity_gw, annual_commissioning_cap_gw)
```

## Dashboard pages

Required pages:

- Overview
- Region detail
- Assumptions
- Sources
- URL analyzer
- Methodology

All pages must use the same scenario engine. Do not calculate scenario values inside React components.

## Design-system rules

- Use Telekom Scale packages where practical.
- Default to dark mode.
- Set `data-mode="dark"` on both `document.documentElement` and `document.body`.
- Use Telekom CSS tokens for background, text, border, and surface colors where possible.
- Use local CSS only to compose dashboard layout and data visualization.
- Use Lucide React for icons through named imports.
- Do not use emoji in the product UI.

## Folder and data rules

- Keep raw source material in `data/raw`.
- Keep processed JSON in `data/processed`.
- Keep user-editable assumptions in `data/config`.
- Keep source comments in `docs/sources/*.md`.
- Each source input area must have one matching markdown file.
- Every source-derived number must carry quality flags.
- Any unclear capacity definition must show `?`.
- Never hard-code final capacity numbers inside components.

## URL analyzer rules

The URL analyzer must be deterministic in v1.

Required output:

- Extracted capacity claim
- Region detected
- Country detected, if possible
- Capacity value and unit
- Capacity type
- Delivery stage
- Source confidence
- Quality flags
- Low / Mid / High likelihood
- Explanation
- Suggested input row

Likelihoods must sum to 1.0, within rounding tolerance.

Signals that raise Low likelihood:

- Planned, announced, proposed, or future-only wording
- Missing power evidence
- Missing commissioning or operating evidence
- Very large capacity claimed within aggressive time window
- Capacity type is unclear
- Press-release-only evidence

Signals that raise Mid likelihood:

- Under construction
- Power or grid evidence
- Phasing disclosed
- Target date aligns with normal delivery windows

Signals that raise High likelihood:

- Commissioned, live, operational, or revenue-producing wording
- Direct IT-load definition
- Strong source quality, such as filing, grid document, or operator technical page

## Coding standards

- TypeScript only for app and server code.
- Keep model functions pure.
- Validate external inputs with Zod.
- Keep API routes thin. Put logic in services.
- Keep React components presentational where possible.
- Prefer small reusable components.
- Use clear names and avoid hidden magic numbers.
- Use `null` for missing data, not zero.

## Do-not-do rules

- Do not invent capacity data for regions without sources.
- Do not call non-Mid cases by source names.
- Do not hard-code final outputs in components.
- Do not hide `?` flags.
- Do not collapse Germany into Western Europe.
- Do not remove Austria from Central Europe unless explicitly instructed.
- Do not treat announcements as available capacity.

## Testing checklist

- Capacity normalization handles MW to GW.
- Low scenario uses baseline plus realized incremental capacity.
- Mid scenario passes through base forecast.
- High scenario uses validated high forecast where present.
- Optional annual cap uses min calculated value versus cap.
- Total sums all numeric region values and marks partial totals when any region is missing.
- URL analyzer likelihoods sum to 100 percent.
- `?` appears when capacity definition is unclear.

## Acceptance criteria

The project is acceptable when:

- `npm run dev` starts client and server.
- The dashboard defaults to dark mode.
- All required regions appear in the UI.
- The UI shows Low / Mid / High only.
- Central Europe uses the uploaded workbook-derived country set and capacity values.
- Assumptions are editable from the UI.
- Scenario outputs update after parameter changes.
- Every source page has a matching markdown file.
- URL analyzer returns likelihoods, claims, explanations, caveats, and a suggested input row.
- Source caveats remain visible.
