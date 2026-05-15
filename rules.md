# Rules

Development conventions and standards for the Value First ebook project.

## Code Style

### HTML
- Use semantic HTML5 elements (`section`, `article`, `nav`, `footer`)
- Two-space indentation
- Attributes use double quotes
- Data attributes use `data-*` pattern (e.g., `data-q="1"`, `data-val="0"`)

### CSS
- Use CSS custom properties (variables) defined in `:root`
- BEM naming convention: `.block__element--modifier`
- Two-space indentation
- Properties sorted alphabetically within blocks
- Use `clamp()` for fluid typography and spacing
- Prefer flexbox and grid over floats and positioning

### JavaScript
- Vanilla JS only (no frameworks)
- Use `const` and `let`, never `var`
- Event delegation where appropriate
- DOMContentLoaded wrapper for all scripts

## Project Structure

```
├── index.html          # Main ebook page
├── styles.css          # Main styles
├── styles-desktop.css  # Desktop-specific overrides
├── print.css           # Print styles
├── script.js           # Interactive components
├── preview.js          # Preview generation
├── generate-pdf.js      # PDF generation
├── Value-First-Ebook.pdf
└── README.md
```

## Git Workflow

- Branch naming: `feature/`, `fix/`, `chore/`
- Commits: Conventional Commits format
- Push to both `origin/main` and `presentation/main`

## Responsive Breakpoints

| Breakpoint | Target |
|------------|--------|
| 1024px | Tablet landscape |
| 768px | Tablet portrait / mobile |
| 640px | Small mobile |

## CSS Variables

```css
--bg-cream: #F9F7F4;
--bg-white: #FFFFFF;
--text-dark: #1A1625;
--text-medium: #4A4458;
--text-light: #6B6580;
--purple-deep: #2D1B4E;
--purple-rich: #4A2882;
--purple-vivid: #7B3FCC;
--purple-soft: #A78BCA;
--purple-muted: #C4B5D9;
--surface-light: #EDE9F4;
```

## Typography

- Headings: `Bricolage Grotesque` (Google Fonts)
- Body: `DM Sans` (Google Fonts)

## Performance

- No external JS libraries
- CSS animations use `transform` and `opacity` only
- Use `will-change` sparingly
- Lazy load images below the fold

## Accessibility

- All interactive elements keyboard accessible
- Focus states visible
- Color contrast ratio ≥ 4.5:1
- ARIA labels where needed
- `prefers-reduced-motion` respected