# Design system

## Telekom dark mode

The app sets dark mode with:

```html
<html data-mode="dark">
<body data-mode="dark">
```

The app imports Scale CSS and registers Scale custom elements from the Telekom Scale package.

## CSS tokens

Use Telekom tokens where available:

```css
background-color: var(--telekom-color-background-canvas);
color: var(--telekom-color-text-and-icon-standard);
```

Local CSS variables provide fallbacks for early development.

## Icons

Use Lucide React icons through named imports.

## Product UI rules

- No emoji.
- No hard-coded chart colors unless required for readability.
- Dark background by default.
- All uncertain data must show `?`.
