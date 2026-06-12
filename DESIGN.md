---
name: RIVO Reserve
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434653'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#2156ca'
  primary: '#00328a'
  on-primary: '#ffffff'
  primary-container: '#0047bb'
  on-primary-container: '#afc1ff'
  inverse-primary: '#b3c5ff'
  secondary: '#5c5f60'
  on-secondary: '#ffffff'
  secondary-container: '#e1e3e4'
  on-secondary-container: '#626566'
  tertiary: '#373941'
  on-tertiary: '#ffffff'
  tertiary-container: '#4e5058'
  on-tertiary-container: '#c2c2cc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#00174a'
  on-primary-fixed-variant: '#003ea6'
  secondary-fixed: '#e1e3e4'
  secondary-fixed-dim: '#c5c7c8'
  on-secondary-fixed: '#191c1d'
  on-secondary-fixed-variant: '#444748'
  tertiary-fixed: '#e1e2ec'
  tertiary-fixed-dim: '#c5c6d0'
  on-tertiary-fixed: '#191b23'
  on-tertiary-fixed-variant: '#44464f'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  accent-yellow: '#fbbf24'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style
RIVO Reserve embodies a "Scientific Elegance" aesthetic—a sophisticated blend of **Corporate Modern** and **Glassmorphism**. The brand targets the discerning coffee enthusiast who appreciates both the technical precision of specialty roasting and the luxury of a premium lifestyle product.

The visual language is defined by high-contrast typography, deep indigo tones, and "atmospheric" depth. It utilizes subtle glass effects and airy layouts to create a sense of freshness and quality. The emotional response should be one of trust, innovation, and sensory indulgence. Key motifs include ultra-clean bento-style grids, floating product elevations, and soft, tinted background glows that suggest an "aromatic" atmosphere.

## Colors
The palette is anchored by a deep **Vivid Blue (#0047bb)**, symbolizing precision and modern professionalism. This is supported by a sophisticated range of "cool" neutrals and tinted surfaces that move away from pure greys into subtle blue-tinted whites and slates.

- **Primary:** Used for brand identity, primary actions, and key highlights.
- **Surface Tints:** Instead of flat greys, backgrounds utilize `surface-container` shades (ranging from `#f8f9ff` to `#dce9ff`) to maintain a cohesive, cool-toned environment.
- **Inverse Surface:** A dark navy (`#213145`) is used for high-impact sections (like the "Engineered for Excellence" block) to provide dramatic contrast.
- **Accents:** A warm yellow is reserved exclusively for star ratings and quality markers to provide a "gold standard" feel against the cool primary palette.

## Typography
The system uses **Manrope** for almost all roles to maintain a modern, balanced, and trustworthy feel. Its geometric yet approachable curves work perfectly for both high-impact marketing headlines and dense product information.

**Inter** is used as a utility font for small labels and metadata (`label-sm`), providing maximum legibility at small scales with increased letter spacing and uppercase styling. Headlines should use tight tracking and heavy weights (800 for XL, 600 for LG) to command attention and emphasize the "Reserve" nature of the brand.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop, centered within a `1280px` container. A 12-column structure is used for complex areas like the "Why Choose RIVO" section, while the product grid utilizes a responsive 3-column (desktop) to 1-column (mobile) reflow.

- **Vertical Rhythm:** Sections are separated by generous padding (`24px` units, typically `96px` or `12rem` for section gaps) to reinforce a premium, airy feel.
- **Margins:** Desktop uses a wide `64px` gutter to frame content, while mobile tightens to `20px`.
- **Bento Grid:** Information is often encapsulated in discrete cards with `24px` gaps, creating a structured, modular hierarchy.

## Elevation & Depth
Elevation is achieved through a combination of **Glassmorphism** and **Floating Elevation**.

- **Navbars:** Utilize a `backdrop-blur-xl` (12px-20px) with a semi-transparent surface (`bg-surface/80`) to stay present without obstructing the visual flow.
- **Product Cards:** Use "Floating Elevation"—a soft, primary-tinted shadow (`0 20px 40px -10px rgba(0, 71, 187, 0.08)`). On hover, cards should translate upwards (`-8px`) and deepen the shadow to simulate physical lift.
- **Atmospheric Depth:** Large, low-opacity radial gradients (primary-colored at 5-10% opacity) are placed behind key images to create a "halo" effect, pulling the subject forward without using traditional drop shadows.

## Shapes
The shape language is consistently **Rounded**, avoiding sharp corners to maintain an approachable and organic feel.

- **Standard Containers:** Use `rounded-2xl` (1rem / 16px) for cards and section modules.
- **Buttons:** Use `rounded-full` (pill-shaped) to create a distinct interactive language that contrasts against the rectangular grid.
- **Interactive Elements:** Small inputs and secondary buttons use `rounded-xl` (0.75rem / 12px) to provide a softer look than standard 4px rounding.

## Components
- **Buttons:** 
  - *Primary:* Pill-shaped, solid Primary color with On-Primary text. Includes a subtle scale transform (`1.05x`) on hover.
  - *Secondary:* Outlined with a 2px Primary border and Primary text.
  - *Ghost/Action:* Full-width `surface-container-highest` background that transitions to solid Primary on hover.
- **Cards:** White or high-surface backgrounds with `16px` padding and `24px` internal spacing. Images inside cards should have their own `12px` rounded corners and sit on a light-tinted `surface-container` background.
- **Inputs:** Pill-shaped with soft internal shadows, using `16px` horizontal padding and no borders (relying on shadow/subtle surface tint for definition).
- **Badges:** Small, high-contrast pills (`text-xs`, `font-bold`) placed in the top-left of image containers to denote status (e.g., "New", "Best Seller").
- **Iconography:** Use "Material Symbols Outlined" with a weight of 400. For ratings, icons should be "Filled".