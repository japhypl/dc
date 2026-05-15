# Data center capacity scenario dashboard

React + Node.js + Vite dashboard for estimating data-center capacity availability in IT load GW, 2026-2030.

## Scope

Regions:

- US
- Western Europe, excluding Germany and excluding the Central Europe countries defined by the uploaded workbook
- Germany
- Central Europe, defined by the uploaded workbook
- Total

Scenarios:

- Low
- Mid
- High

The UI deliberately avoids source-author names as scenario labels.

## Primary unit

IT load GW. When a source provides only Power (MW), the app converts it to a GW proxy and keeps a `?` quality flag until the exact definition is confirmed.

## Run locally

```bash
npm install
npm run dev
```

The Vite client runs on port 5173. The Node API runs on port 8787. The Vite proxy forwards `/api/*` calls to the backend.

## Included data

The uploaded workbook is included under:

```text
data/raw/central-europe/PMR_Deutsche_Telekom_2025_KPIs_forecast_dataset_FINAL20251029.xlsx
```

Extracted Central Europe data is included under:

```text
data/processed/central-europe-capacity.json
```

US, Western Europe, and Germany are present in the data model and UI. Their source files are structured placeholders until source values are populated.

## Main features

- Low / Mid / High scenario view for 2026-2030.
- Region-level and country-level views.
- Editable assumptions and scenario parameters.
- Source markdown library.
- Pasted URL scenario likelihood scoring.
- Quality flags for direct, converted, estimated, external, and unclear values.

## Notes

Telekom Scale packages are included in `package.json` and dark mode is activated by setting `data-mode="dark"`. The UI also uses local CSS tokens so the layout remains readable during early development.
