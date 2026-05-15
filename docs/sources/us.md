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

`external_input_required`

The region is included in all dashboards and formulas, but the starter data file intentionally uses `null` values until validated source data is added.

## Required input fields

| Field | Required | Comment |
|---|---:|---|
| 2025e baseline IT load GW | Yes | Starting point for scenario formulas |
| 2026f-2030f base forecast IT load GW | Yes | Mid case input |
| 2026f-2030f validated high forecast or uplift | Optional | Used only if source-backed |
| Capacity definition | Yes | IT load, facility power, design capacity, or unknown |
| PUE if conversion is needed | Optional | Default is 1.35 |
| Source confidence | Yes | High, medium, low |

## Quality flags

- External
- ?

## Comments

Do not invent values. Add source-backed numbers in `data/processed/us-capacity.json` and update this markdown with source comments.
