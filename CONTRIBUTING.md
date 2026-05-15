# Contributing

## Getting Started

1. Clone the repository
2. Open `index.html` in a browser to preview
3. Make changes to HTML, CSS, or JS files
4. Test on mobile viewport (768px and smaller)

## Making Changes

### Small Changes
1. Create a feature branch: `git checkout -b fix/description`
2. Make changes
3. Commit with conventional format
4. Push and create PR

### Large Changes
1. Discuss with team first
2. Create architecture document if needed
3. Build and test locally
4. Follow commit conventions

## Testing Checklist

- [ ] Works on desktop (1200px+)
- [ ] Works on tablet (768px - 1199px)
- [ ] Works on mobile (< 768px)
- [ ] No horizontal scroll
- [ ] Interactive elements have hover/focus states
- [ ] Reset functionality works
- [ ] Score calculations are correct

## Self-Assessment Feature

The self-assessment section has specific requirements:

- 10 questions, each scored 0-3
- Total score: 0-30
- Live update on click
- Click selected button to deselect
- Score interpretation:
  - 25-30: Structurally healthy
  - 18-24: Drift forming
  - 0-17: Structural failure

## Push Destinations

This project pushes to two remotes:
- `origin/main` - Main development
- `presentation/main` - Live presentation

Use: `git push origin main && git push presentation main`