# URL analysis methodology

The URL analyzer helps convert a pasted article into an evidence-weighted scenario likelihood.

## Process

```text
Fetch URL
  -> Extract readable text
    -> Detect capacity claims
      -> Classify capacity type and delivery stage
        -> Score Low / Mid / High likelihood
          -> Return explanation and suggested input row
```

## Deterministic scoring

Rules live in:

```text
data/config/url-scoring-rules.json
```

No LLM is required in v1.

## Outputs

- Extracted claims
- Capacity value and unit
- Capacity type
- Delivery stage
- Source confidence
- Scenario likelihood
- Explanation
- Suggested model input
- Flags
