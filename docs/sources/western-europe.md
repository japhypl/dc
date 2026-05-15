# Source input: Western Europe

## Purpose

Holds Western Europe data-center capacity inputs for the 2026-2030 dashboard view.

## Coverage

Included by default:

- United Kingdom
- Ireland
- France
- Netherlands
- Belgium
- Luxembourg
- Switzerland

Excluded:

- Germany, because it is its own region
- Poland, Austria, Greece, Czech Republic, Hungary, Slovakia, and Croatia, because they are in Central Europe per the uploaded workbook

## Primary capacity metric

Dashboard field:

- IT load GW

## Current status

`external_input_required`

The region is included in all dashboards and formulas, but values are intentionally null until source-backed inputs are added.

## Required input fields

| Field | Required | Comment |
|---|---:|---|
| 2025e baseline IT load GW | Yes | Starting point for scenario formulas |
| 2026f-2030f base forecast IT load GW | Yes | Mid case input |
| 2026f-2030f validated high forecast or uplift | Optional | Used only if source-backed |
| Country or metro split | Optional | Useful if source provides FLAPD or metro values |
| Capacity definition | Yes | IT load, facility power, design capacity, or unknown |
| Source confidence | Yes | High, medium, low |

## Quality flags

- External
- ?

## Comments

Avoid double counting Germany and Central Europe countries.
