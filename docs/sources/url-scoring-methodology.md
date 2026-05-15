# Source input: URL scoring methodology

## Purpose

Defines deterministic rules for estimating Low / Mid / High scenario likelihood from a pasted URL.

## Version

v0.1.0

## Inputs

- URL
- Optional target year
- Optional region hint
- Extracted article text
- Detected capacity claims
- Detected delivery stage
- Detected capacity type
- Source confidence

## Scoring

The scoring engine starts from a base probability and applies keyword-driven rule adjustments. Scores are then normalized so Low + Mid + High = 100 percent.

## Signals

Low likelihood increases when a source is announcement-heavy, lacks power evidence, or claims very large capacity without phasing.

Mid likelihood increases when construction, power, and delivery evidence are present but final availability remains unconfirmed.

High likelihood increases when the source proves live, commissioned, or operational capacity and uses a clear IT-load definition.

## Caveats

The v1 analyzer is deterministic and explainable. It is not a substitute for manual source review.
