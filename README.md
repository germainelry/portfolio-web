# Retro Mac OS Portfolio - Design System Documentation

A web portfolio built with a retro Mac OS System 7/8 aesthetic, featuring pixel-perfect design consistency, authentic 1990s computing aesthetics, and a comprehensive design system.

## 🎨 Design Overview

**Theme:** Classic Mac OS System 7/8 Era (1991-1997)  
**Aesthetic:** Beveled 3D interfaces, monochromatic grey palette with accent colors, pixel-precise borders and shadows, tactile button interactions

---

## 📐 Layout System

### Layout Type

**Desktop (≥1024px):**
- **Horizontal scroll navigation** - Sections arranged side-by-side
- Full-height viewport sections with snap scrolling
- Fixed desktop icons for quick navigation
- Arrow navigation buttons (left/right)

**Mobile/Tablet (<1024px):**
- **Vertical scroll navigation** - Traditional top-to-bottom flow
- Full-width sections with standard vertical scrolling
- Bottom navigation bar with section indicators
- Touch-optimized interactions

### Responsive Breakpoints

```css
/* Mobile First Approach */
xs:  320px - 374px  (iPhone SE, small phones)
sm:  375px - 639px  (iPhone 12/13/14, standard phones)
md:  640px - 767px  (Large phones, small tablets)
lg:  768px - 1023px (iPads, tablets)
xl:  1024px+        (Desktop - horizontal scroll)
```

### Container System

- **Max-width containers:** 28rem (md), 36rem (xl), 42rem (2xl), 48rem (3xl)
- **Desktop sections:** Full viewport width with horizontal snap
- **Mobile sections:** Full width with vertical stacking
- **Padding:** Responsive scaling (16px mobile → 32px desktop)

---

## 🔤 Typography

### Font Families

**Primary (Body & UI):**
- **Font:** `VT323`
- **Fallback:** `'Courier New', monospace`
- **Use for:** All body text, labels, buttons, form fields, tooltips
- **Weight:** Regular (400)
- **Characteristics:** Monospace, retro terminal feel

**Display (Headers):**
- **Font:** `Press Start 2P`
- **Use for:** Large headings (h1), hero text, splash screens only
- **Weight:** Regular (400)
- **Characteristics:** Pixel/arcade style, use sparingly for impact

### Type Scale (Modular Scale - 1.25 Ratio)

```
Display XL: 48px / 3rem    - Line height: 1.1  - Use: Hero headlines
Display L:  40px / 2.5rem  - Line height: 1.1  - Use: Section titles (Press Start 2P)
H1:         32px / 2rem    - Line height: 1.2  - Use: Window titles, major headings
H2:         24px / 1.5rem  - Line height: 1.3  - Use: Card headings, subsections
H3:         20px / 1.25rem - Line height: 1.4  - Use: Component labels
Body L:     18px / 1.125rem- Line height: 1.6  - Use: Important body text
Body:       16px / 1rem    - Line height: 1.6  - Use: Default body text
Body S:     14px / 0.875rem- Line height: 1.6  - Use: Secondary text, captions
Caption:    12px / 0.75rem - Line height: 1.5  - Use: Fine print, metadata
```

### Responsive Typography

**Base font size scaling:**
- Mobile: `14px`
- Tablet (≥640px): `15px`
- Desktop (≥1024px): `16px`

**Heading scaling:**
- Mobile: H1 `1.5rem`, H2 `1.25rem`, H3 `1.125rem`
- Tablet: H1 `1.75rem`, H2 `1.375rem`, H3 `1.25rem`
- Desktop: H1 `2rem`, H2 `1.5rem`, H3 `1.25rem`

---

## 🎨 Color Palette

### Base Greys (System Colors)

```
Grey 0 (White):     #FFFFFF - Highlights, active windows, text on dark
Grey 1 (Frame):     #E5E5E5 - Window borders, inactive areas
Grey 2 (Title Bar): #F0F0F0 - Window title bars (gradient start)
Grey 3 (Light):     #D4D4D4 - Button backgrounds, card fills, tooltips
Grey 4 (Default):   #C0C0C0 - Default grey, window backgrounds
Grey 5 (Dark):      #808080 - Borders, dividers, inactive text
Grey 6 (Charcoal):  #3C3C3C - Text, active borders
Grey 7 (Border):    #2C2C2C - Deep shadows, outer borders
```

### Accent Colors

**Pink/Magenta (Primary Actions):**
```
Pink 400: #FF77AA - Hover state
Pink 500: #FF006E - Primary buttons, active states, selection
Pink 600: #CC0058 - Pressed state
Pink 700: #990042 - Borders on primary elements
```

**Cyan/Blue (Secondary Actions):**
```
Cyan 300: #66E5FF - Light hover
Cyan 400: #33DAFF - Hover highlights
Cyan 500: #00D9FF - Secondary buttons, links, hover borders
Cyan 600: #00B8D8 - Active links
Cyan 700: #0097B3 - Pressed secondary, borders
```

**Semantic Colors:**

**Success/Green:**
```
Green 400: #00D97E - Progress bar gradient start
Green 500: #00A86B - Success messages, checkmarks
Green 600: #008755 - Traffic light (maximize button)
```

**Warning/Yellow:**
```
Yellow 300: #FFF59D - Warning backgrounds
Yellow 400: #FFEB3B - Traffic light (minimize button)
Yellow 500: #FFC107 - Warning borders
```

**Error/Red:**
```
Red 400: #FF5252 - Error backgrounds
Red 500: #FF0000 - Traffic light (close button), error text
Red 600: #CC0000 - Error borders
```

### Background Colors

**Desktop Gradient:**
- Start: `#D8B5D7` (warm purple)
- End: `#C9A5C6` (deeper purple)
- Angle: `135deg`
- Attachment: `fixed`

**Dithered Overlay Pattern:**
- Pattern: `2px × 2px` grid
- Color: `rgba(201, 165, 198, 0.15)`
- Blend mode: `multiply`

---

## 📏 Spacing System

### Base Unit: 8px Grid

```
Space 0:   0px    - No spacing
Space 1:   4px    - Minimal gap (icon to text)
Space 2:   8px    - Small gap (between related elements)
Space 3:   12px   - Medium gap (element groups)
Space 4:   16px   - Default gap (component spacing)
Space 6:   24px   - Large gap (section internal padding)
Space 8:   32px   - Extra large (component padding)
Space 12:  48px   - Section spacing
Space 16:  64px   - Major section dividers
Space 24:  96px   - Hero spacing
```

### Component-Specific Spacing

```
Button Padding:     16px (horizontal) × 8px (vertical)
Card Padding:       24px all sides (medium), 32px (large)
Window Padding:     32px all sides
Tooltip Padding:    16px horizontal × 12px vertical
Badge Padding:      8px horizontal × 4px vertical
Input Padding:      12px horizontal × 8px vertical
```

### Gap Values (Between Elements)

```
Tight:   4px  - Icon + label
Close:   8px  - Related form fields
Default: 16px - Standard component gap
Loose:   24px - Unrelated component groups
Wide:    32px - Section breaks
```

---

## 🔲 Border System

### Border Widths

```
Thin:    1px - Dividers, subtle separators
Default: 2px - Standard buttons, inputs, tooltips
Thick:   3px - Cards, windows, emphasized containers
```

### Border Style Rules

**Standard:**
- Style: `solid`
- Color: `#808080` (retro-grey-dark) for default
- Radius: `0px` (no rounded corners - authentic retro)

**3D Beveled Effect (for buttons/windows):**
- Top & Left: `2px solid #FFFFFF` (highlight)
- Bottom & Right: `2px solid #808080` (shadow)
- Creates raised/embossed appearance

**Active/Selected:**
- Width: `3px`
- Color: Pink 500 (`#FF006E`)

**Hover:**
- Width: `2px-3px` (maintain original)
- Color: Cyan 500 (`#00D9FF`)

---

## 🌑 Shadow System

### Standard Shadows

```
Shadow Light:   2px 2px 0px rgba(0, 0, 0, 0.20) - Small cards, subtle elevation
Shadow Default: 4px 4px 0px rgba(0, 0, 0, 0.25) - Buttons, medium cards
Shadow Heavy:   6px 6px 0px rgba(0, 0, 0, 0.25) - Windows, large containers
Shadow Retro:   8px 8px 0px rgba(0, 0, 0, 0.15) - Desktop icons, top-level elements
```

### Hover Shadows (Colored)

```
Shadow Cyan:    4px 4px 0px rgba(0, 217, 255, 0.40) - Hover on cards/buttons
Shadow Pink:    4px 4px 0px rgba(255, 0, 110, 0.40) - Selected/active state
```

### Inset Shadows (3D Pressed Effect)

```
Inset Default:  inset 2px 2px 4px rgba(0, 0, 0, 0.20) - Pressed buttons
Inset Deep:     inset 1px 1px 3px rgba(0, 0, 0, 0.15) - Text input fields
```

**Important:** All shadows use offset values only (2px, 4px, 6px, 8px) - no blur for authentic retro look.

---

## 🧩 Component Specifications

### MacButton Component

**Variants:**

1. **Default (Grey Button)**
   - Background: Gradient from `#E5E5E5` to `#C0C0C0` (top to bottom)
   - Border: `2px solid #808080`
   - Text: `#3C3C3C` (charcoal)
   - Shadow: `2px 2px 0px rgba(0, 0, 0, 0.20)`
   - Padding: `16px × 8px`
   - Hover: Gradient `#FFFFFF` to `#D4D4D4`, translate-y: `-2px`, shadow: `3px 3px 0px`
   - Active: translate-y: `0px`, inset shadow

2. **Primary (Pink Button)**
   - Background: Gradient from `#FF006E` to `#CC0058`
   - Border: `2px solid #990042`
   - Text: `#FFFFFF`
   - Shadow: `2px 2px 0px rgba(0, 0, 0, 0.30)`
   - Hover: Gradient `#FF77AA` to `#FF006E`, colored shadow

3. **Secondary (Cyan Button)**
   - Background: Gradient from `#33DAFF` to `#00D9FF`
   - Border: `2px solid #0097B3`
   - Text: `#FFFFFF`
   - Shadow: `2px 2px 0px rgba(0, 0, 0, 0.30)`
   - Hover: Gradient `#66E5FF` to `#33DAFF`, colored shadow

### Card Components

**StatCard:**
- Size: `160px × 160px` (fixed)
- Background: Gradient from `#E5E5E5` to `#C0C0C0`
- Border: `3px solid #808080`
- Shadow: `2px 2px 0px rgba(0, 0, 0, 0.20)`
- Padding: `24px`
- Hover: Background `#FFFFFF`, border `3px solid #00D9FF`, translate-y: `-8px`, shadow `6px 6px 0px rgba(0, 217, 255, 0.40)`

**SkillCard:**
- Size: `140px × 160px` (fixed)
- Background: Gradient from `#E5E5E5` to `#C0C0C0`
- Border: `3px solid #808080`
- Shadow: `2px 2px 0px rgba(0, 0, 0, 0.20)`
- Padding: `20px`
- Hover: Border `3px solid #00D9FF`, scale `105%`, translate-y: `-4px`
- Selected: Border `3px solid #FF006E`, shadow `4px 4px 0px rgba(255, 0, 110, 0.40)`

**Window Component:**
- Max-width: `896px` (2xl) or `1024px` (4xl)
- Background: `#D4D4D4`
- Border: `3px solid #2C2C2C`
- Shadow: `6px 6px 0px rgba(0, 0, 0, 0.25)`
- Title Bar: `32px` height, gradient from `#F0F0F0` to `#E5E5E5`
- Content Padding: `32px`

### Progress Bar

- Height: `24px`
- Background: `#E8E8E8` with inset border
- Fill: Linear gradient `#00D97E` to `#00A86B` (vertical)
- Animated diagonal stripes: `45deg` repeating gradient, `6px` stripe width
- Animation: Barberpole scroll (`2s linear infinite`)

### Tooltip

- Background: `#D4D4D4` (retro grey)
- Border: `2px solid #00D9FF` (cyan)
- Shadow: `3px 3px 0px rgba(0, 0, 0, 0.40)`
- Padding: `12px horizontal × 8px vertical`
- Text: `#3C3C3C` (charcoal)
- Font: `VT323, 14px`
- Max-width: `240px`

---

## 🎯 Icon System

### Icon Sizes (Standardized Scale)

```
Tiny:   16px - Inline with text
Small:  20px - Button icons
Medium: 24px - Default size (contact icons, menu)
Large:  32px - Document icons, emphasis
XL:     48px - StatCard icons
XXL:    64px - SkillCard icons, hero
```

### Icon Style Guidelines

- **Use:** Custom pixel-art style icons from PixelIcons library
- **Characteristics:** Monochromatic or limited color palette, crisp edges, pixel-perfect rendering
- **Avoid:** Modern icon libraries with smooth curves

**Icon Colors:**
- Default: `#3C3C3C` (charcoal)
- Hover: `#00D9FF` (cyan)
- Active: `#FF006E` (pink)
- Disabled: `#808080` (grey)

---

## ✨ Animation & Transitions

### Timing Functions

```
Quick:    150ms - Button presses, minor UI feedback
Default:  200ms - Hover states, color changes
Medium:   300ms - Tooltips, dropdowns
Slow:     500ms - Progress bars, major transitions
Very Slow: 1000ms - Count-up animations
```

### Standard Animations

**Hover Transform:**
- Cards: `translate-y: -8px` (with shadow increase)
- Buttons: `translate-y: -2px`
- Icons: `scale: 110%`

**Active/Press:**
- Buttons: `translate-y: 0px` (cancels hover lift)
- Add: inset shadow for "pressed in" effect

**Fade In:**
- Opacity: `0 → 1`
- Scale: `95% → 100%`
- Duration: `300ms`

**Barberpole (Progress):**
- Background-position: `0 0 → 17px 17px`
- Duration: `2s linear infinite`

---

## 🖱️ Cursor System

Custom retro cursors for authentic Mac OS feel:

- **Default:** `cursor.svg` (3, 3)
- **Pointer:** `pointinghand.svg` (9, 3) - buttons, links
- **Move:** `move.svg` (9, 9) - draggable elements
- **Not Allowed:** `notallowed.svg` (14, 20) - disabled elements
- **Text:** Standard text cursor - input fields

---

## 📱 Responsive Design

### Mobile Optimizations

- **Layout:** Vertical scroll on mobile (<1024px)
- **Navigation:** Bottom navigation bar with section indicators
- **Touch Targets:** Minimum `44×44px` for all interactive elements
- **Typography:** Scaled down base font size (14px mobile → 16px desktop)
- **Spacing:** Reduced padding on mobile to maximize content space
- **Animations:** Reduced/disabled on mobile for performance

### Desktop Features

- **Layout:** Horizontal scroll with snap points
- **Navigation:** Desktop icons + arrow buttons
- **Keyboard:** Arrow key navigation between sections
- **Hover States:** Full hover interactions enabled

---

## 🎨 Design Principles

1. **Authentic Retro Feel:** Looks like genuine 1990s Mac OS software
2. **No Anachronisms:** No modern design elements (no emoji, no rounded corners)
3. **Pixel-Perfect Consistency:** All shadows, borders, spacing follow exact system
4. **Clear Hierarchy:** Typography and color make content scannable
5. **Tactile Interactions:** Hover/active states feel physical and responsive
6. **Cohesive System:** All components feel like they belong together

---

## 🛠️ Technology Stack

- **Framework:** React 18.3.1 with TypeScript
- **Build Tool:** Vite 6.3.5
- **Styling:** Tailwind CSS v4.1.3
- **UI Components:** Radix UI primitives
- **Icons:** Custom PixelIcons library (50+ icons)
- **Animations:** CSS keyframes with custom timing
- **Analytics:** Vercel Analytics

---

## 📦 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

---

## 📚 Additional Documentation

- **Design System Audit:** `documentation/DESIGN_SYSTEM_AUDIT.md`
- **Figma Design Brief:** `documentation/FIGMA_DESIGN_BRIEF.md`
- **Mobile Responsiveness:** `documentation/MOBILE_RESPONSIVENESS_BRIEF.md`

---

## 🎯 Design Checklist

When implementing new components, verify:

- [ ] No emoji anywhere
- [ ] All text uses VT323 or Press Start 2P only
- [ ] All colors from defined palette (no arbitrary hex values)
- [ ] All shadows use defined system (2px, 4px, 6px, or 8px offsets, no blur)
- [ ] All spacing follows 4px/8px grid
- [ ] All borders are 1px, 2px, or 3px (no other widths)
- [ ] All corners are 0px radius (sharp retro aesthetic)
- [ ] All interactive elements have hover + active + focus states
- [ ] All icons are custom pixel style
- [ ] Color contrast meets WCAG AA (4.5:1 for text)

---

**Design System Version:** 2.0  
**Last Updated:** 2025-11-20  
**Theme:** Retro Mac OS System 7/8 (1991-1997)
