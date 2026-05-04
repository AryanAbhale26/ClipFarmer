# ClipFarmer – Theme Rules

## Philosophy
Dark-first, AI-forward design. Every surface should feel like it belongs in a next-gen creative tool.
Purple/Violet is the primary brand color; Pink/Fuchsia is the accent. All UI defaults to dark mode.

---

## Color Palette

| Token | Value | Usage |
|---|---|---|
| `--background` | `#06060e` | Page background |
| `--bg-card` | `#0d0d1a` | Cards, panels |
| `--bg-elevated` | `#12122a` | Hover states, elevated surfaces |
| `--primary` | `#7c3aed` | Primary actions, CTAs |
| `--primary-light` | `#8b5cf6` | Hover state of primary |
| `--accent` | `#ec4899` | Secondary accent, highlights |
| `--accent-light` | `#f472b6` | Hover accent |
| `--foreground` | `#f0f0ff` | Primary text |
| `--muted` | `#a0a0b8` | Secondary text |
| `--border` | `rgba(139,92,246,0.15)` | Card borders |
| `--glow-purple` | `rgba(124,58,237,0.35)` | Glow shadows |
| `--glow-pink` | `rgba(236,72,153,0.35)` | Accent glows |

---

## Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Display / Hero | Inter | 900 (Black) | `5rem–8rem` |
| Section Heading | Inter | 700 (Bold) | `2.5rem–3.5rem` |
| Sub-heading | Inter | 600 (SemiBold) | `1.25rem–1.5rem` |
| Body | Inter | 400 (Regular) | `1rem–1.125rem` |
| Caption / Label | Inter | 500 (Medium) | `0.75rem–0.875rem` |

- **Gradient text**: Use `linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)` with `background-clip: text`
- **Letter spacing**: Tight (`-0.03em`) for large headings

---

## Spacing Scale

Use 4px base unit. Major sections use `py-24` (96px). Cards use `p-6` or `p-8`.

---

## Borders & Radius

- Cards: `border-radius: 16px`, border `1px solid rgba(139,92,246,0.15)`
- Buttons: `border-radius: 9999px` (pill) for CTAs, `8px` for secondary
- Inputs: `border-radius: 10px`

---

## Glassmorphism (Glass Cards)

```css
background: rgba(13, 13, 26, 0.6);
backdrop-filter: blur(16px);
border: 1px solid rgba(139, 92, 246, 0.15);
```

---

## Glow Effects

- Primary glow: `box-shadow: 0 0 40px rgba(124, 58, 237, 0.35)`
- Accent glow: `box-shadow: 0 0 40px rgba(236, 72, 153, 0.3)`
- Subtle glow (cards on hover): `box-shadow: 0 0 30px rgba(139, 92, 246, 0.2)`

---

## Animations

| Animation | Duration | Easing |
|---|---|---|
| Page entrance (fade+slide) | 600ms | `ease-out` |
| Hover transitions | 200ms | `ease-in-out` |
| Button press | 100ms | `ease-in` |
| Particle canvas | 60fps | rAF |
| Scroll-reveal (Framer Motion) | 500ms | `easeOut` |

---

## Component Rules

### Buttons
- **Primary**: `bg-gradient(violet→pink)`, pill shape, glow on hover
- **Secondary**: transparent + violet border, pill shape
- **Ghost**: no border, text-violet, underline on hover

### Cards
- Always glass morphism background
- Violet border, subtle glow on hover
- Icon in gradient circle on top-left
- Never use plain white or solid dark backgrounds

### Badges / Labels
- Pill shape, `bg-violet-500/10 text-violet-400 border border-violet-500/20`
- Use sparingly for status indicators

### Navbar
- Transparent on top, glassmorphism on scroll
- Logo: gradient text "ClipFarmer" with a ✦ icon

### Section Layout
- Max width: `1280px`, centered
- Section padding: `py-24 px-6`
- Always have a gradient headline + muted sub-headline

---

## Particle Canvas Rules
- 80–120 particles, viewport-density based
- Colors: cycle through `[#7c3aed, #8b5cf6, #a855f7, #ec4899, #6366f1]`
- Lines drawn between particles within 130px, opacity `0.25`
- Mouse repels particles within 180px radius
- Particles wrap around edges (not bounce)
- Used only in the Hero section background

---

## Dark Mode
- App is **dark-only**. No light mode toggle.
- Always add `dark` class to `<html>` element.
- All shadcn components should use the `.dark` CSS variable set.
- Never use `light:` variant classes.

---

## File Conventions
- All landing section components live in `components/landing/`
- Dashboard components live in `components/dashboard/`
- Shared UI (shadcn + custom) live in `components/ui/`
- Use `"use client"` only when component needs hooks, events, or browser APIs
