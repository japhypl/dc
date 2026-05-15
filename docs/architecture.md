# Architecture

## Overview

The app has a Vite React frontend and a Node.js Express backend.

```text
React UI
  -> API client
    -> Node API
      -> source JSON and markdown files
      -> URL analyzer services
```

The scenario engine is pure TypeScript and sits in `src/model`. React components consume model outputs and do not implement scenario formulas directly.

## Frontend

- React
- TypeScript
- Vite
- Telekom Scale CSS and custom element registration
- Lucide React icons
- Recharts charts
- Zustand store for editable parameters

## Backend

- Node.js
- Express
- Zod validation
- Server-side URL fetch
- Readability extraction
- Deterministic capacity claim scoring

## Data

- Raw files in `data/raw`
- Editable configs in `data/config`
- Processed inputs in `data/processed`
- Source documentation in `docs/sources`
