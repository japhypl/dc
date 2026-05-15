# Source input: Germany

## Purpose

Holds Germany data-center capacity inputs for the 2026-2030 dashboard view.

## Coverage

Country:

- Germany

Suggested market detail when source-backed values are available:

- Frankfurt / Rhine-Main
- Berlin
- Munich
- Hamburg
- Other Germany

## Primary capacity metric

Dashboard field:

- IT load GW

## Current status

`external_input_required`

Germany is included as a separate region in all dashboards and formulas, but values are null until source-backed inputs are added.

## Required input fields

| Field | Required | Comment |
|---|---:|---|
| 2025e baseline IT load GW | Yes | Starting point for scenario formulas |
| 2026f-2030f base forecast IT load GW | Yes | Mid case input |
| 2026f-2030f validated high forecast or uplift | Optional | Used only if source-backed |
| Frankfurt share | Optional | Useful for constraint analysis |
| Capacity definition | Yes | IT load, facility power, design capacity, or unknown |
| Source confidence | Yes | High, medium, low |

## Quality flags

- External
- ?

## Comments

Do not include Germany in Western Europe totals. Germany is a standalone region.
