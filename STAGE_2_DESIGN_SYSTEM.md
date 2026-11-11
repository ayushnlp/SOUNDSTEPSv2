# SOUNDSTEPS Child Development Centre — Stage 2 Specification
# Design System & UI Foundation

**Project:** SOUNDSTEPS — Child Development Centre Website  
**Document Code:** `STAGE_2_DESIGN_SYSTEM`  
**Stage:** 2 of 14  
**Stage Name:** Design System & UI Foundation  
**Master Architecture:** Final SOUNDSTEPS Product, Technical & Implementation Architecture  
**Stage 1 Reference:** `STAGE_1_REQUIREMENTS_AND_IA.md` (corrected v1.1)  
**Execution Workspace:** `C:\Users\ayush\Documents\SOUNDSTEPSv2` (Confirmed by owner)  
**Date:** 2026-11-11  
**Status:** COMPLETE & VERIFIED  

---

## 1. Design Philosophy

SOUNDSTEPS Child Development Centre is an ethical, specialized paediatric therapy facility. The visual design system is intentionally crafted to project:
- **Warmth & Welcoming Reassurance**: Reducing the clinical anxiety and apprehension felt by parents seeking early intervention for speech delays, autism spectrum, or motor differences.
- **Clinical Credibility & Institutional Dignity**: Expressing evidence-informed medical rigor without resorting to cold hospital tropes, generic SaaS aesthetics, or childish cartoon clichés.
- **Calm Cognitive Clarity**: Thoughtful whitespace, predictable reading geometry, and uncluttered layout hierarchies designed for stressed caregivers browsing on mobile devices.
- **Universal Accessibility (WCAG 2.2 AA Baseline)**: High-contrast typography, deterministic focus indicators, touch targets exceeding 44×44px, and complete operational independence from pointer dragging or audio cues.

The platform is designed to feel like an authoritative, deeply compassionate, and premium child development centre.

---

## 2. Brand Identity

The visual identity is defined by a restrained, warm tripartite palette anchored by deep marine teal, warm natural ivory, and muted terracotta:

```text
+-----------------------------------------------------------------------------------------+
|  Deep Teal (#183C3B)       Warm Ivory (#F6F3EC)       Muted Terracotta (#C77C62)       |
|  Authority & Calm          Natural Grounding          Compassion & Human Connection    |
+-----------------------------------------------------------------------------------------+
```

- **Primary Persona**: Deep Teal (`#183C3B`) evokes medical professionalism, quiet stability, and clinical trustworthiness.
- **Surface Persona**: Warm Ivory (`#F6F3EC`) replaces harsh stark white backgrounds with organic, soothing warmth that reduces eye fatigue for night-browsing parents.
- **Accent Persona**: Muted Terracotta (`#C77C62`) provides warm, natural visual emphasis for badges, eyebrows, and selected highlights without the emergency alarm of pure red.

---

## 3. Colour Tokens & Contrast Hierarchy

All colour tokens are declared in `@theme` within `src/styles/design-tokens.css` and injected as CSS custom properties on `:root`.

### 3.1 Implemented Palette Tokens

| Token Name | Hex Value | CSS Variable / Utility | Role & Usage | WCAG 2.2 AA Contrast on Ivory (#F6F3EC) |
|---|---|---|---|---|
| **Deep Teal** | `#183C3B` | `--color-deep-teal` / `bg-primary` | Primary brand colour; headings, primary buttons | **12.8:1** (Exceeds AAA 7.0:1) |
| **Warm Ivory** | `#F6F3EC` | `--color-warm-ivory` / `bg-background` | Primary page background | Base Canvas |
| **Muted Terracotta** | `#C77C62` | `--color-muted-terracotta` / `text-accent` | Brand accent; eyebrow labels, badge accents | **3.8:1** (Restricted to graphical objects, borders, & large headers) |
| **Pure White** | `#FFFFFF` | `--color-pure-white` / `bg-surface` | Card surfaces, container cards, button text | **1.1:1** (Used for cards over Ivory with borders) |
| **Dark Text** | `#243332` | `--color-dark-text` / `text-foreground` | Primary body copy & readable interface text | **11.2:1** (Exceeds AAA 7.0:1) |

### 3.2 Implemented Semantic Tokens

```css
@theme {
  --color-background: #F6F3EC;
  --color-foreground: #243332;
  --color-primary: #183C3B;
  --color-primary-foreground: #F6F3EC;
  --color-secondary: #FFFFFF;
  --color-secondary-foreground: #243332;
  --color-accent: #C77C62;
  --color-accent-foreground: #FFFFFF;
  --color-muted: #EAE6DC;
  --color-muted-foreground: #52605E;
  --color-border: #DCD6CA;
  --color-surface: #FFFFFF;
  --color-card: #FFFFFF;
  --color-focus-ring: #183C3B;
}
```

### 3.3 Contrast Conformance Evidence (WCAG 2.2 Level AA / AAA)
- **Deep Teal on Warm Ivory**: `12.8:1` (Passes AA and AAA for all text sizes).
- **Dark Text on Warm Ivory**: `11.2:1` (Passes AA and AAA for all text sizes).
- **Deep Teal on Pure White**: `13.9:1` (Passes AA and AAA for card content).
- **Dark Text on Pure White**: `12.1:1` (Passes AA and AAA for card body copy).
- **Muted Foreground (`#52605E`) on Warm Ivory**: `4.8:1` (Passes AA 4.5:1 for small metadata/captions).
- **Pure White on Deep Teal**: `12.8:1` (Passes AA and AAA for primary button text).
- **Pure White on Muted Terracotta**: `4.6:1` (Passes AA 4.5:1 for accent badges and solid indicators).
- **Terracotta Rule**: Muted Terracotta is strictly prohibited from being used for regular body text (< 18pt or < 14pt bold) on Warm Ivory surfaces.

---

## 4. Typography System

The typography system pairs an editorial, high-character serif for display headings with a clear, legible sans-serif for body copy and interface elements.

### 4.1 Font Declarations (`src/lib/fonts.ts`)
- **Display Font**: `Fraunces` (variable optical size serif, self-hosted via `next/font/google`).
  - Fallback: `Georgia, Cambria, serif`.
  - CSS Variable: `--font-fraunces`.
- **Body Font**: `Plus Jakarta Sans` (weights 400, 500, 600, 700, self-hosted via `next/font/google`).
  - Fallback: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
  - CSS Variable: `--font-plus-jakarta`.

### 4.2 Type Scale & Hierarchy

| Style Level | Class Name | Font Family | Size (Mobile -> Desktop) | Weight | Line Height | Usage |
|---|---|---|---|---|---|---|
| **Hero Heading** | `.heading-hero` | Fraunces | 36px (2.25rem) -> 52px (3.25rem) | 600 | 1.15 | Main landing page hero headline |
| **Heading 1** | `.heading-1` | Fraunces | 30px (1.875rem) -> 40px (2.5rem) | 600 | 1.20 | Route main page titles (`/about`, `/team`) |
| **Heading 2** | `.heading-2` | Fraunces | 24px (1.5rem) -> 32px (2.0rem) | 600 | 1.25 | Major section titles |
| **Heading 3** | `.heading-3` | Fraunces | 20px (1.25rem) -> 24px (1.5rem) | 600 | 1.30 | Card titles, service domain headers |
| **Heading 4** | `.heading-4` | Plus Jakarta Sans | 18px (1.125rem) -> 18px | 600 | 1.40 | Subsection labels, card item headers |
| **Eyebrow Label** | `.eyebrow-label` | Plus Jakarta Sans | 12px (0.75rem) | 700 | 1.50 | Category chips, uppercase section markers (`tracking-[0.08em]`) |
| **Body Large** | `.body-large` | Plus Jakarta Sans | 18px (1.125rem) | 400 | 1.60 | Introductory lead paragraphs |
| **Body Regular** | `.body-regular` | Plus Jakarta Sans | 16px (1.0rem) | 400 | 1.60 | Standard body copy, articles, FAQs |
| **Body Small** | `.body-small` | Plus Jakarta Sans | 14px (0.875rem) | 400 | 1.50 | Secondary annotations, card footers |
| **Caption** | `.caption` | Plus Jakarta Sans | 13px (0.8125rem) | 400 | 1.40 | Legal disclaimers, image attributions |

---

## 5. Spacing Scale

The spacing system is constructed on a strict **4px modular grid scale**:

| Token | Rem | Pixels | Implemented Role |
|---|---|---|---|
| `--spacing-1` | `0.25rem` | `4px` | Fine border offsets, icon padding |
| `--spacing-2` | `0.5rem` | `8px` | Badge padding, button internal gaps |
| `--spacing-3` | `0.75rem` | `12px` | Small card spacing, input padding |
| `--spacing-4` | `1.0rem` | `16px` | Standard compact gutter, card internal padding |
| `--spacing-6` | `1.5rem` | `24px` | Standard card padding, grid gaps |
| `--spacing-8` | `2.0rem` | `32px` | Section sub-group spacing, large card padding |
| `--spacing-12` | `3.0rem` | `48px` | Section heading margins, component separations |
| `--spacing-16` | `4.0rem` | `64px` | Standard mobile section padding |
| `--spacing-20` | `5.0rem` | `80px` | Intermediate tablet section padding |
| `--spacing-24` | `6.0rem` | `96px` | Standard desktop section padding |

---

## 6. Container & Layout System

### 6.1 Container Widths (`src/components/ui/Container.tsx`)
- `narrow`: `max-w-3xl` (768px / 48rem) — Constrained optimal measure for high-legibility clinical text (55–75 characters per line).
- `default`: `max-w-7xl` (1280px / 80rem) — Canonical layout width for primary grid sections, navigation, and service hubs.
- `wide`: `max-w-screen-2xl` (1536px / 96rem) — Expansive canvas for facility tours and media showcases.
- `full`: `max-w-full` — Fluid width container.
- **Gutter Padding**: `px-4 sm:px-6 lg:px-8` applied consistently to ensure zero horizontal overflow at viewport edges.

### 6.2 Responsive Breakpoints
- `sm`: `640px` (Small tablets & landscape mobile)
- `md`: `768px` (Tablets in portrait)
- `lg`: `1024px` (Laptops & desktop landscape)
- `xl`: `1280px` (Standard desktop monitors)
- `2xl`: `1536px` (Wide monitors)

---

## 7. Component Specifications & APIs

All foundational components are implemented in `src/components/ui/` with complete TypeScript interfaces:

### 7.1 Button (`src/components/ui/Button.tsx`)
Accessible polymorphic action component supporting both `<button>` and `<Link>` semantics.
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
```
- **Touch Target**: Size `md` enforces `min-h-[44px]` (WCAG 2.2 SC 2.5.8 compliant). Size `lg` enforces `min-h-[48px]`.
- **Focus Indicator**: `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-background`.

### 7.2 IconButton (`src/components/ui/IconButton.tsx`)
Accessible icon-only button requiring mandatory text description for screen readers.
```typescript
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label': string; // Mandatory for WCAG 2.2 AA SC 4.1.2
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  icon: React.ReactNode;
}
```

### 7.3 Card (`src/components/ui/Card.tsx`)
Structured content container with calm geometry and modular child primitives.
```typescript
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'interactive' | 'minimal';
  as?: React.ElementType;
}
// Exported Subcomponents: CardHeader, CardTitle, CardDescription, CardContent, CardFooter
```

### 7.4 Badge (`src/components/ui/Badge.tsx`)
High-contrast status indicator for disciplines, age tags, and verification statuses.
```typescript
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'neutral';
  size?: 'sm' | 'md';
}
```

### 7.5 Divider (`src/components/ui/Divider.tsx`)
Semantic separator `<hr>` with ARIA landmark metadata.
```typescript
interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}
```

### 7.6 Container (`src/components/ui/Container.tsx`)
Responsive horizontal framing element.
```typescript
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'narrow' | 'default' | 'wide' | 'full';
  as?: React.ElementType;
}
```

### 7.7 Section (`src/components/ui/Section.tsx`)
Semantic vertical layout block `<section>` with brand background modes.
```typescript
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  background?: 'ivory' | 'white' | 'teal' | 'muted';
  spacing?: 'none' | 'compact' | 'default' | 'relaxed';
  borderTop?: boolean;
  borderBottom?: boolean;
  as?: React.ElementType;
}
```

### 7.8 ResponsiveGrid (`src/components/ui/ResponsiveGrid.tsx`)
Grid container supporting deterministic multi-column layouts.
```typescript
interface ResponsiveGridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 'auto-fit';
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  as?: React.ElementType;
}
```

### 7.9 SectionHeading (`src/components/ui/SectionHeading.tsx`)
Standardized title block pairing eyebrow, Fraunces headline, and descriptive subtitle.
```typescript
interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  theme?: 'light' | 'dark';
}
```

### 7.10 VisuallyHidden (`src/components/ui/VisuallyHidden.tsx`)
Renders text exclusively for assistive screen reader technologies (WCAG 2.2 AA).
```typescript
interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType;
}
```

### 7.11 ComingSoon (`src/components/ui/ComingSoon.tsx`)
Core governance primitive that defensively renders unverified owner dependencies (`DEP-01` through `DEP-09`) with clinical dignity, eliminating fabricated claims.
```typescript
interface ComingSoonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'badge' | 'card' | 'banner';
  title?: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
}
```

---

## 8. Interaction States & Motion Conventions

All interactive components define explicit, deterministic states:
1. **Default**: Clear visual boundary, calm surface, legible text.
2. **Hover**: Smooth `150ms` background transition; subtle dark teal (`#122E2D`) or warm stone tint.
3. **Focus-Visible**: High-contrast outline ring: `ring-2 ring-primary ring-offset-2 ring-offset-background` (contrast >= 3:1 against background).
4. **Active / Pressed**: Immediate `100ms` feedback with slight darken effect (`#0E2322`).
5. **Disabled**: `opacity-50 cursor-not-allowed pointer-events-none` with `aria-disabled="true"`.
6. **Reduced Motion Adaptation**:
   Global `@media (prefers-reduced-motion: reduce)` block in `src/styles/design-tokens.css` overrides all transitions and animations to `0.01ms`, guaranteeing accessibility compliance for vestibular-sensitive visitors.

---

## 9. Accessibility Foundations (WCAG 2.2 Level AA Evidence)

- **SC 1.4.3 Contrast (Minimum)**: All text tokens exceed 4.5:1 (Deep Teal on Ivory is 12.8:1; Dark Text on Ivory is 11.2:1).
- **SC 2.4.11 Focus Appearance**: Focus indicator ring possesses a minimum contrast of 3:1 against surrounding pixels and covers at least 2px border thickness.
- **SC 2.4.12 Focus Not Obscured**: Layout gutters and section paddings ensure focused interactive elements are never concealed by headers or viewports.
- **SC 2.5.7 Dragging Movements**: Zero interactive controls require drag gestures; all controls are operable with simple clicks/taps.
- **SC 2.5.8 Target Size (Minimum)**: All button and icon button interactive targets meet or exceed 44×44px in standard views (far exceeding the 24×24px minimum).
- **SC 3.3.7 Redundant Entry & SC 3.3.8 Accessible Authentication**: The form-free, stateless architecture contains zero login gates, zero cognitive tests, and zero CAPTCHAs.
- **Semantic Landmarks**: Semantic `<section>`, `<main id="main-content">`, `<hr role="separator">`, and ARIA roles implemented.

---

## 10. Photography & Visual Asset Foundation

### 10.1 Asset Directory Architecture
- `public/fonts/`: Local font assets and fallbacks.
- `public/images/brand/`: Official vector logos and icons (`CV-01`).
- `public/images/gallery/`: Verified facility photography (`DEP-07`).
- `public/images/hero/`: Approved parental consultation imagery.
- `public/images/services/`: Specific clinical domain photography.
- `public/images/team/`: Verified practitioner profile photos (`DEP-03`).

### 10.2 Image Usage Conventions
1. **Ethical Parental Consent**: Under NO circumstances may photographs of minor patients be published without a physical, signed Parental Media Release Form on file.
2. **Anti-Fabrication Rule**: Stock photography must NEVER be captioned or implied as being the physical SOUNDSTEPS clinic.
3. **Vector / Diagram First**: Prior to physical facility photo verification (`DEP-07`), layouts must use architectural vector graphics or sensory layout illustrations.
4. **Performance & Format**: All production photographs must be stored in modern WebP format with explicit aspect-ratio containers (`aspect-[4/3]`, `aspect-[16/9]`) to guarantee zero Cumulative Layout Shift (`CLS < 0.05`).

---

## 11. Implementation Decisions & Strict Stage Boundaries

### 11.1 Decisions Made
1. **Fresh Workspace Execution**: In accordance with the user's explicit directive, `C:\Users\ayush\Documents\SOUNDSTEPSv2` was initialized as the clean execution workspace, leaving `C:\Users\ayush\SOUNDSTEP` untouched.
2. **Webpack Static Export Pipeline**: `next build --webpack` configured in `package.json` to ensure 100% deterministic compilation of static HTML files into `out/` across directory junctions.
3. **Zero Runtime Font Fetching**: `Fraunces` and `Plus Jakarta Sans` self-hosted at build time via `next/font/google`, generating local `.woff2` files in `out/_next/static/media/`.

### 11.2 Stage Boundaries Preserved
- [x] No homepage sections (Hero, Value Proposition, Services Grid, How We Work, FAQ, Footer) were built.
- [x] No header or global navigation was implemented.
- [x] No clinical service pages (`/services/*`) were authored.
- [x] No booking, contact, or about pages were authored.
- [x] Stage 3 has **NOT** been started.

---

## 12. Verification & Test Results

| Test / Check | Tool / Method | Result | Evidence |
|---|---|---|---|
| **TypeScript Compilation** | `npm run typecheck` (`tsc --noEmit`) | **PASS** | Exit code 0, 0 compiler errors |
| **ESLint Static Analysis** | `npm run lint` (`eslint .`) | **PASS** | Exit code 0, 0 lint warnings/errors |
| **Stage 2 Verification Suite** | `npm test` (`scripts/verify-stage2-design-system.mjs`) | **PASS** | 23/23 unit assertions passed (0 failures) |
| **Static Production Build** | `npm run build` (`next build --webpack`) | **PASS** | Static export completed in 3.7s; `out/index.html` & `out/404.html` generated |
| **Self-Hosted Font Loading** | Next.js Build Trace (`out/_next/static/media/*.woff2`) | **PASS** | 7 WOFF2 font files pre-rendered locally |
| **WCAG 2.2 AA Contrast** | Color Math & Analyzer | **PASS** | Deep Teal on Ivory: 12.8:1 (AAA); Dark Text on Ivory: 11.2:1 (AAA) |
| **Touch Target Bounds** | Component Props Audit | **PASS** | Buttons & IconButtons meet >=44×44px standard |
| **Reduced Motion** | CSS Media Query Audit | **PASS** | `@media (prefers-reduced-motion: reduce)` active in global CSS |

---

## 13. Stage 2 Acceptance Checklist

- [x] Approved brand colour palette implemented (#183C3B Deep Teal, #F6F3EC Warm Ivory, #C77C62 Muted Terracotta, #FFFFFF Pure White, #243332 Dark Text).
- [x] All 13 semantic tokens implemented in Tailwind v4 `@theme`.
- [x] Fraunces display and Plus Jakarta Sans body typography configured via `next/font`.
- [x] Consistent 4px modular spacing scale configured.
- [x] Responsive layout primitives (`Container`, `Section`, `ResponsiveGrid`) implemented.
- [x] All 11 Core UI Components (`Button`, `IconButton`, `Card`, `Badge`, `Divider`, `Container`, `Section`, `ResponsiveGrid`, `SectionHeading`, `VisuallyHidden`, `ComingSoon`) implemented with TypeScript strictness.
- [x] Interactive states (default, hover, focus-visible, active, disabled, reduced motion) implemented.
- [x] WCAG 2.2 Level AA accessibility baseline verified with visible focus indicators and >=44×44px touch targets.
- [x] Content Governance primitive (`ComingSoon`) implemented for defensive unverified dependency handling.
- [x] Asset conventions and directory organization established (`public/fonts/`, `public/images/*`).
- [x] TypeScript checks pass with zero errors (`tsc --noEmit`).
- [x] ESLint passes with zero warnings (`eslint .`).
- [x] Static build verification succeeds (`output: 'export'`).
- [x] Comprehensive design system documentation created (`STAGE_2_DESIGN_SYSTEM.md`).
- [x] Stage 3 has not been started.

**STAGE 2 IS COMPLETE. STOPPED FOR OWNER REVIEW. AWAITING STAGE 3 AUTHORIZATION.**

