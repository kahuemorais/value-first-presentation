# Architecture

## Overview

The Value First ebook is a single-page HTML application that presents a diagnostic framework for identifying and fixing structural failures in digital product organizations.

## Design System

### Color Palette

| Variable | Hex | Usage |
|----------|-----|-------|
| `--bg-cream` | `#F9F7F4` | Page background |
| `--bg-white` | `#FFFFFF` | Card backgrounds |
| `--text-dark` | `#1A1625` | Primary text |
| `--text-medium` | `#4A4458` | Secondary text |
| `--text-light` | `#6B6580` | Tertiary text |
| `--purple-deep` | `#2D1B4E` | Primary brand, hero bg |
| `--purple-rich` | `#4A2882` | Accent |
| `--purple-vivid` | `#7B3FCC` | CTAs, highlights |
| `--purple-soft` | `#A78BCA` | Soft accents |
| `--purple-muted` | `#C4B5D9` | Borders, muted |
| `--surface-light` | `#EDE9F4` | Light surfaces |

### Typography

- **Headings**: `Bricolage Grotesque` (Google Fonts) - weights 600, 700, 800
- **Body**: `DM Sans` (Google Fonts) - weights 400, 500, 700

### Spacing System

- Base unit: 8px
- Spacing scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 120, 140px
- Use `clamp()` for fluid spacing: `clamp(min, preferred, max)`

### Breakpoints

```
Desktop: 1200px+
Tablet landscape: 1024px - 1199px
Tablet portrait: 769px - 1023px
Mobile: < 768px
Small mobile: < 640px
```

## Page Structure

### Sections

1. **Hero** - Full viewport intro
2. **Intro** - What this ebook is about
3. **Five Failures** - Core diagnostic content
4. **Framework** - Operating model
5. **Case Study** - Real example with metrics
6. **Cost of Inaction** - Why act now
7. **How To Read Your Score** - Self-assessment guide
8. **Self-Assessment** - Interactive 10-question diagnostic
9. **CTA** - Call to action
10. **Footer** - Copyright

### Self-Assessment Architecture

```
self-assessment-final
├── question-list (10x question-item)
│   └── question-score-selector (4x score-btn)
├── score-result
│   ├── total-score (total-value)
│   ├── score-message
│   └── reset-btn
└── score-card (reference only)
```

### Score Logic

- 10 questions × 0-3 points = max 30 points
- Interpretation bands:
  - 25-30: Structurally healthy
  - 18-24: Drift forming
  - 0-17: Structural failure

## File Responsibilities

| File | Purpose |
|------|---------|
| `index.html` | Content, structure |
| `styles.css` | All styles (mobile-first) |
| `styles-desktop.css` | Desktop-only overrides |
| `print.css` | Print-specific styles |
| `script.js` | Accordion, score calculation |
| `generate-pdf.js` | PDF generation script |
| `preview.js` | Preview generation |

## State Management

No framework. Simple DOM state:

- Score buttons: `.selected` class
- Accordion: `.active` class
- Total: computed from DOM on each click

## Accessibility

- Semantic HTML
- Keyboard navigation
- Focus indicators
- ARIA where needed
- `prefers-reduced-motion` support