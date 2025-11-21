# Retro Portfolio UI/UX Design Brief for Figma
## Design System Refinement & Consistency Improvements

**Last Updated:** November 20, 2025 (Revision 2)
**Status:** Phase 1 Critical Fixes ~70% Complete ✅

---

## 🎉 **COMPLETED IMPROVEMENTS (V44)**

### ✅ **Phase 1 Critical Fixes - Completed**

**1. Emoji Removal** ✅
- Removed 🍎 apple icon from MenuBar (replaced with "Portfolio" text)
- Removed all emoji from menu items (🏠💼🎯⚔️📧)
- Removed 👋 wave emoji from Contact section greeting
- Removed 📄 document emoji from download toast notification
- Replaced ⏳ spinner emoji with "Loading..." text

**2. Tooltip Styling Fix** ✅
- Changed background from dark (#2c2c2c) → retro grey (#D4D4D4/retro-grey-light)
- Changed text color from white → charcoal (#3C3C3C/retro-charcoal)
- Updated arrow fill to match new retro grey background
- Maintained cyan border (#00D9FF) for consistency

**3. Progress Bar Standardization** ✅
- Skills.tsx now uses unified `<ProgressBar />` component
- Removed duplicate inline progress bar design
- All progress bars now use:
  - Green gradient (#00D97E → #00A86B)
  - Diagonal 45deg animated stripes (barberpole effect)
  - Consistent 24px height with inset border
  - 6px stripe pattern (not 4px)

**4. Component Refinements** ✅
- StatCard adjusted to 160px × 160px (from 180px)
- Improved layout spacing and text wrapping
- Updated hover states for better visual feedback

**5. Comprehensive Pixel Icon Library** ✅ **NEW!**
- **372 new lines of custom pixel icons added**
- Now includes 50+ custom retro-style icons:
  - **Programming Languages**: Python, JavaScript, TypeScript, SQL, Ruby, Shell, PowerShell, Bash
  - **DevOps Tools**: Git, Docker, Jenkins, Chef, Linux, n8n
  - **Frameworks**: React, Flask, FastAPI, NodeJS, Express, DialogFlow, Supabase
  - **Databases**: PostgreSQL, MongoDB, SQLite, ChromaDB, Firebase
  - **Productivity**: Tableau, JMP, Excel, Jira, Confluence, Notion, Figma
  - **AI Tools**: Claude, GitHub Copilot, Cursor, AIRobot
  - **UI Elements**: FolderClosed, FolderOpen, Document, Email, LinkedIn, GitHub, Phone, Trophy, Coffee, Download, ExternalLink, Checkmark, ClockLightning, GameController, Anime, Keyboard
- All icons follow pixel-art aesthetic with sharp edges
- Consistent sizing support (16px-64px)
- Ready to replace all Lucide React icons

### ⚠️ **Still To Complete (Phase 1 Remaining)**

**1. Projects.tsx** - Partial completion needed:
- Remove folder emoji (📁) from project objects (3 instances)
- Replace Lucide icons (ExternalLink, Github) with custom PixelIcons
- Note: ExternalLink and GitHub icons now available in PixelIcons!

**2. Skills.tsx** - Minor fix needed:
- Replace 🏆 trophy emoji with PixelIcons.Trophy component (icon now available!)

**3. Hero.tsx** - Shadow & corner fixes:
- Remove blur shadow from terminal component
- Remove rounded corners for authentic retro look

---

## 🎯 Project Overview

**Objective**: Refine and standardize the retro Mac OS-themed portfolio design system to achieve pixel-perfect consistency across all components, typography, colors, and spacing.

**Design Theme**: Classic Mac OS System 7/8 Era (1991-1997)
- Beveled 3D interfaces
- Monochromatic grey palette with accent colors
- Pixel-precise borders and shadows
- Tactile, physical button interactions
- Retro computing aesthetic

---

## 📊 Current Design Audit Findings

### ✅ **Strengths**
- Strong retro Mac OS aesthetic with consistent window chrome
- Good use of 3D beveled effects and drop shadows
- Effective color hierarchy (pink = primary, cyan = hover/secondary)
- Well-implemented traffic light window controls
- Excellent custom cursor design
- Good component variety (cards, buttons, windows, tooltips)

### ⚠️ **Remaining Gaps & Inconsistencies** (Updated Post-V44)

#### 1. **Typography Inconsistencies** (Partially Addressed)
- ✅ **FIXED**: Emoji usage removed from all major sections
- **Remaining**: Press Start 2P font imported but underutilized for display headings
- **Remaining**: Font sizes not fully aligned to strict modular scale
- **Remaining**: Line heights could be more systematized

#### 2. **Component Design Inconsistencies** (Mostly Resolved)
- ✅ **FIXED**: Progress bars now standardized (single ProgressBar component)
- ✅ **FIXED**: Tooltip uses retro grey background (#D4D4D4)
- **Remaining**: Some cards have gradient backgrounds, others solid fills (intentional or standardize?)
- **Remaining**: Minor shadow variations exist (mostly compliant with 2px, 4px, 6px, 8px)

#### 3. **Color System Gaps** (Active Work Needed)
- **Issue**: No semantic color tokens for states (success, error, warning, info)
- ✅ **GOOD**: Link colors use cyan-600/cyan-700 appropriately
- **Issue**: Disabled states use opacity instead of dedicated grey tones
- **Issue**: No defined focus states for accessibility (Phase 4)

#### 4. **Spacing & Layout Issues** (Needs Audit)
- **Issue**: Gap values need full audit for 4px/8px grid compliance
- **Issue**: Padding inconsistent between similar components
- ✅ **GOOD**: Border widths generally use 2px and 3px pattern

#### 5. **Icon Inconsistencies** (Nearly Resolved)
- ✅ **FIXED**: Comprehensive 50+ custom pixel icon library added
- **Remaining**: 2-3 Lucide React icons still in Projects.tsx (ExternalLink, Github)
- ✅ **GOOD**: Icon sizes follow systematic scale (16px, 20px, 24px, 32px, 48px, 64px)
- **Next Step**: Replace remaining Lucide icons with new PixelIcons equivalents

#### 6. **Interactive States** (Needs Phase 3 Work)
- **Issue**: Not all clickable elements have keyboard focus states
- ✅ **GOOD**: Buttons have consistent translate on hover (-2px for buttons, -8px for cards)
- ✅ **FIXED**: Copy-to-clipboard feedback uses Checkmark icon (now available in PixelIcons)

---

## 🎨 Design System Specifications

### **1. Typography System**

#### **Font Families**
```
Primary (Body & UI): VT323
  - Use for: All body text, labels, buttons, form fields, tooltips
  - Weight: Regular (400)
  - Characteristics: Monospace, retro terminal feel

Display (Headers): Press Start 2P
  - Use for: Large headings (h1), hero text, splash screens only
  - Weight: Regular (400)
  - Characteristics: Pixel/arcade style, use sparingly for impact

Fallback: 'Courier New', monospace
```

#### **Type Scale** (Strict Modular Scale - 1.25 Ratio)
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

#### **Font Weights**
```
Regular: 400 (default for VT323)
Bold: 700 (use sparingly, mainly for emphasis)
```

#### **❌ Remove All Emoji Usage**
Replace with text equivalents or custom pixel icons:
- 👋 → "Hi there!" or remove entirely
- 🍎 → Custom pixel apple icon or "Portfolio" text
- 🏠 → "Home" text only
- 💼 → "Work" or custom briefcase icon
- 🎯 → "Projects" text
- ⚔️ → "Skills" text
- 📧 → Custom pixel envelope icon (already have PixelIcons.Email)

---

### **2. Color Palette (Retro Mac OS Authentic)**

#### **Base Greys (System Colors)**
```
Grey 0 (White):     #FFFFFF - Use: Highlights, active windows, text on dark
Grey 1 (Frame):     #E5E5E5 - Use: Window borders, inactive areas
Grey 2 (Title Bar): #F0F0F0 - Use: Window title bars (gradient start)
Grey 3 (Light):     #D4D4D4 - Use: Button backgrounds, card fills
Grey 4 (Default):   #C0C0C0 - Use: Default grey, window backgrounds
Grey 5 (Dark):      #808080 - Use: Borders, dividers, inactive text
Grey 6 (Charcoal):  #3C3C3C - Use: Text, active borders
Grey 7 (Border):    #2C2C2C - Use: Deep shadows, outer borders
```

#### **Accent Colors (Primary Actions)**
```
Pink/Magenta:
  - Pink 400: #FF77AA - Use: Hover state
  - Pink 500: #FF006E - Use: Primary buttons, active states, selection
  - Pink 600: #CC0058 - Use: Pressed state
  - Pink 700: #990042 - Use: Borders on primary elements

Cyan/Blue (Secondary Actions):
  - Cyan 300: #66E5FF - Use: Light hover
  - Cyan 400: #33DAFF - Use: Hover highlights
  - Cyan 500: #00D9FF - Use: Secondary buttons, links, hover borders
  - Cyan 600: #00B8D8 - Use: Active links
  - Cyan 700: #0097B3 - Use: Pressed secondary, borders
```

#### **Semantic Colors (Status & Feedback)**
```
Success/Green:
  - Green 400: #00D97E - Use: Progress bar gradient start
  - Green 500: #00A86B - Use: Success messages, checkmarks
  - Green 600: #008755 - Use: Traffic light (maximize button)

Warning/Yellow:
  - Yellow 300: #FFF59D - Use: Warning backgrounds
  - Yellow 400: #FFEB3B - Use: Traffic light (minimize button)
  - Yellow 500: #FFC107 - Use: Warning borders

Error/Red:
  - Red 400: #FF5252 - Use: Error backgrounds
  - Red 500: #FF0000 - Use: Traffic light (close button), error text
  - Red 600: #CC0000 - Use: Error borders

Info/Purple (new):
  - Purple 400: #BA68C8 - Use: Info highlights
  - Purple 500: #9C27B0 - Use: Info states (optional accent)
```

#### **Background Colors**
```
Desktop Gradient:
  - Start: #FFB895 (warm peach)
  - End:   #FF9770 (deeper peach)
  - Angle: 135deg

Dithered Overlay:
  - Pattern: 2px × 2px grid
  - Color: rgba(255, 119, 112, 0.15)
  - Blend mode: multiply
```

#### **Shadow System**
```
Shadow Light:   2px 2px 0px rgba(0, 0, 0, 0.20) - Small cards, subtle elevation
Shadow Default: 4px 4px 0px rgba(0, 0, 0, 0.25) - Buttons, medium cards
Shadow Heavy:   6px 6px 0px rgba(0, 0, 0, 0.25) - Windows, large containers
Shadow Retro:   8px 8px 0px rgba(0, 0, 0, 0.15) - Desktop icons, top-level elements

Hover Shadows (Colored):
Shadow Cyan:    4px 4px 0px rgba(0, 217, 255, 0.40) - Hover on cards/buttons
Shadow Pink:    4px 4px 0px rgba(255, 0, 110, 0.40) - Selected/active state

Inset Shadows (3D Pressed Effect):
Inset Default:  inset 2px 2px 4px rgba(0, 0, 0, 0.20) - Pressed buttons
Inset Deep:     inset 1px 1px 3px rgba(0, 0, 0, 0.15) - Text input fields
```

---

### **3. Spacing System (8px Grid)**

#### **Base Unit: 8px**
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

#### **Component-Specific Spacing**
```
Button Padding:     16px (horizontal) × 8px (vertical)
Card Padding:       24px all sides (medium), 32px (large)
Window Padding:     32px all sides
Tooltip Padding:    16px horizontal × 12px vertical
Badge Padding:      8px horizontal × 4px vertical
Input Padding:      12px horizontal × 8px vertical
```

#### **Gap Values (Between Elements)**
```
Tight:   4px  - Icon + label
Close:   8px  - Related form fields
Default: 16px - Standard component gap
Loose:   24px - Unrelated component groups
Wide:    32px - Section breaks
```

---

### **4. Border System**

#### **Border Widths**
```
Thin:    1px - Dividers, subtle separators
Default: 2px - Standard buttons, inputs, tooltips
Thick:   3px - Cards, windows, emphasized containers
```

#### **Border Style Rules**
```
Standard:
  - Style: solid
  - Color: --retro-grey-dark (#808080) for default
  - Radius: 0px (no rounded corners - authentic retro)

3D Beveled Effect (for buttons/windows):
  - Top & Left: 2px solid #FFFFFF (highlight)
  - Bottom & Right: 2px solid #808080 (shadow)
  - Creates raised/embossed appearance

Active/Selected:
  - Width: 3px
  - Color: Pink 500 (#FF006E)

Hover:
  - Width: 2px-3px (maintain original)
  - Color: Cyan 500 (#00D9FF)

Disabled:
  - Width: 2px
  - Color: Grey 5 (#808080)
  - Style: solid (no dashed)
```

---

### **5. Component Library**

#### **A. MacButton Component**

**Variants:**
```
1. Default (Grey Button)
   - Background: Gradient from #E5E5E5 to #C0C0C0 (top to bottom)
   - Border: 2px solid #808080
   - Text: #3C3C3C (charcoal)
   - Shadow: 2px 2px 0px rgba(0, 0, 0, 0.20)
   - Padding: 16px × 8px

   States:
   - Hover: Gradient from #FFFFFF to #D4D4D4, translate-y: -2px, shadow: 3px 3px 0px
   - Active: translate-y: 0px, inset shadow: inset 2px 2px 4px rgba(0,0,0,0.2)
   - Disabled: Opacity 50%, grey border, no hover effects

2. Primary (Pink Button)
   - Background: Gradient from #FF006E to #CC0058
   - Border: 2px solid #990042
   - Text: #FFFFFF
   - Shadow: 2px 2px 0px rgba(0, 0, 0, 0.30)
   - Padding: 16px × 8px

   States:
   - Hover: Gradient #FF77AA to #FF006E, translate-y: -2px, shadow: 3px 3px 0px rgba(255,0,110,0.4)
   - Active: translate-y: 0px, inset shadow
   - Disabled: Grey background, no pink

3. Secondary (Cyan Button)
   - Background: Gradient from #33DAFF to #00D9FF
   - Border: 2px solid #0097B3
   - Text: #FFFFFF
   - Shadow: 2px 2px 0px rgba(0, 0, 0, 0.30)
   - Padding: 16px × 8px

   States:
   - Hover: Gradient #66E5FF to #33DAFF, translate-y: -2px, shadow: 3px 3px 0px rgba(0,217,255,0.4)
   - Active: translate-y: 0px, inset shadow
   - Disabled: Grey background
```

#### **B. Card Components**

**1. StatCard (180px × 180px)**
```
Default State:
- Size: 180px × 180px (fixed)
- Background: Gradient from #E5E5E5 to #C0C0C0
- Border: 3px solid #808080
- Shadow: 2px 2px 0px rgba(0, 0, 0, 0.20)
- Padding: 24px
- Layout: Flex column, center aligned, gap 16px

Content Structure:
- Icon: 48px × 48px (top)
- Value: 32px font size, bold, #3C3C3C
- Label: 14px font size, #808080, center aligned

Hover State:
- Background: #FFFFFF
- Border: 3px solid #00D9FF
- Transform: translate-y: -8px
- Shadow: 6px 6px 0px rgba(0, 217, 255, 0.40)
- Icon: scale 110%, subtle bounce animation
- Value: Color changes to #00B8D8

Tooltip Integration:
- Appears on hover after 300ms delay
- Position: Above card
- Dark background with cyan border
```

**2. SkillCard (140px × 160px)**
```
Default State:
- Size: 140px × 160px (fixed)
- Background: Gradient from #E5E5E5 to #C0C0C0
- Border: 3px solid #808080
- Shadow: 2px 2px 0px rgba(0, 0, 0, 0.20)
- Padding: 20px
- Layout: Flex column, center, gap 12px

Content:
- Icon: 64px × 64px (pixel icon)
- Label: 14px font, center, max-width 100px

Hover State:
- Border: 3px solid #00D9FF
- Shadow: 4px 4px 0px rgba(0, 217, 255, 0.30)
- Transform: scale 105%, translate-y: -4px
- Z-index: 10

Selected State:
- Background: #C0C0C0 (solid)
- Border: 3px solid #FF006E
- Shadow: 4px 4px 0px rgba(255, 0, 110, 0.40)
- Transform: scale 105%, translate-y: -4px
- Persists until deselected
```

**3. Window Component**
```
Structure:
- Max-width: 896px (max-w-2xl) or 1024px (max-w-4xl)
- Background: #D4D4D4
- Border: 3px solid #2C2C2C
- Shadow: 6px 6px 0px rgba(0, 0, 0, 0.25)

Title Bar (32px height):
- Background: Gradient from #F0F0F0 to #E5E5E5
- Border-bottom: 2px solid #808080
- Padding: 0 12px

Traffic Light Buttons (left aligned, 12px size):
- Close: #FF0000, border #CC0000
- Minimize: #FFEB3B, border #FFC107
- Maximize: #00A86B, border #008755
- Gap: 8px between buttons
- Hover: Lighten by 10%
- Active: Darken by 10%

Title Text (center):
- Font: VT323, 14px
- Color: #3C3C3C
- Center aligned

Content Area:
- Padding: 32px
- Background: Transparent (inherits window bg)
- Inner highlight border: 1px solid #FFFFFF (3D effect)

Resize Handle (bottom-right, 16px × 16px):
- Diagonal grip lines
- Color: #808080
- Opacity: 50%, 100% on hover
```

#### **C. Form Elements**

**Text Input**
```
Default:
- Height: 32px
- Background: #FFFFFF
- Border: 2px inset #808080 (appears sunken)
- Padding: 12px horizontal, 8px vertical
- Font: VT323, 16px
- Shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.15)

Focus:
- Border: 2px solid #00D9FF
- Shadow: inset 1px 1px 3px rgba(0, 217, 255, 0.20), 0 0 0 3px rgba(0, 217, 255, 0.10)
- Outline: none

Disabled:
- Background: #E5E5E5
- Border: 2px solid #C0C0C0
- Text color: #808080
- Cursor: not-allowed
```

**Textarea**
```
Same as text input, but:
- Min-height: 120px
- Resize: vertical
- Padding: 12px
```

**Checkbox (Custom Retro Design)**
```
Size: 20px × 20px
Unchecked:
- Background: #FFFFFF
- Border: 2px solid #808080
- Shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.10)

Checked:
- Background: #FF006E
- Border: 2px solid #990042
- Checkmark: White pixel-style ✓ (custom SVG)

Hover:
- Border: 2px solid #00D9FF
```

#### **D. Tooltip Component**

**NEW RETRO DESIGN (Fix Current Dark Theme)**
```
Background: #D4D4D4 (retro grey, not dark #2c2c2c)
Border: 2px solid #00D9FF (cyan)
Shadow: 3px 3px 0px rgba(0, 0, 0, 0.40)
Padding: 12px horizontal × 8px vertical
Max-width: 240px
Font: VT323, 14px
Text color: #3C3C3C (charcoal)
Z-index: 100

Arrow:
- Size: 8px
- Color: #00D9FF (matches border)
- Filled with #D4D4D4 (background)

Detailed Tooltip (with title & list):
- Title: 14px, bold, border-bottom 1px solid #808080, padding-bottom 8px
- Details: 12px, line-height 1.5, list with 4px gap
- Min-width: 180px
```

#### **E. Progress Bar**

**STANDARDIZE TO ONE DESIGN**
```
Container:
- Height: 24px
- Background: #E8E8E8
- Border: 2px inset (top/left darker)
- Shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.15)

Fill (Progress):
- Background: Linear gradient #00D97E to #00A86B (vertical)
- Animated diagonal stripes:
  - Pattern: 45deg repeating gradient
  - Stripe width: 6px transparent, 6px rgba(0, 168, 107, 0.4)
  - Animation: Barberpole scroll (2s linear infinite)
  - Background-size: 17px 17px

Percentage Label (optional):
- Position: Right side, outside bar
- Font: VT323, 14px, bold
- Color: #3C3C3C
- Min-width: 48px, right-aligned

Label (skill name):
- Position: Left side, before bar
- Font: VT323, 14px
- Color: #808080
- Hover: Color changes to #FF006E
```

#### **F. Badge/Tag Component (NEW)**
```
Size: Auto-width × 24px height
Background: #E5E5E5
Border: 2px solid #808080
Padding: 8px horizontal × 4px vertical
Font: VT323, 12px
Color: #3C3C3C
Shadow: 1px 1px 0px rgba(0, 0, 0, 0.15)

Variants:
- Default: Grey (as above)
- Primary: Pink background #FF006E, white text
- Secondary: Cyan background #00D9FF, white text
- Success: Green #00A86B, white text

Hover (if clickable):
- Transform: translate-y: -1px
- Shadow: 2px 2px 0px
```

#### **G. Tab Component**
```
Inactive Tab:
- Background: #C0C0C0
- Border: 2px solid #808080 (bottom border removed)
- Text: #808080
- Padding: 12px horizontal × 8px vertical
- Position: Below active tab line

Active Tab:
- Background: #D4D4D4 (matches content area)
- Border: 2px solid #808080 (bottom border removed)
- Text: #3C3C3C
- Transform: translate-y: 1px (overlaps bottom border)
- Z-index: 10

Hover (inactive only):
- Background: #D4D4D4
- Transform: translate-y: -2px
```

---

### **6. Icon System**

#### **Icon Sizes (Standardized Scale)**
```
Tiny:   16px - Inline with text
Small:  20px - Button icons
Medium: 24px - Default size (contact icons, menu)
Large:  32px - Document icons, emphasis
XL:     48px - StatCard icons
XXL:    64px - SkillCard icons, hero
```

#### **Icon Style Guidelines**
```
✅ USE: Custom pixel-art style icons from PixelIcons library
  - Monochromatic or limited color palette
  - Crisp edges (image-rendering: pixelated)
  - Consistent stroke width (1-2px)
  - Simple geometric shapes

❌ AVOID: Modern icon libraries (Lucide React)
  - Smooth curves don't match retro aesthetic
  - Only use if no pixel alternative exists

Icon Colors:
- Default: #3C3C3C (charcoal)
- Hover: #00D9FF (cyan)
- Active: #FF006E (pink)
- Disabled: #808080 (grey)
```

#### **Replace Emoji with Icons/Text**
```
Contact section "👋" → Remove or replace with "Hello!" text
MenuBar items:
- 🍎 → Custom pixel apple icon OR remove
- 🏠 → Remove, text only: "Home"
- 💼 → Remove, text only: "Experience" OR custom briefcase pixel icon
- 🎯 → Remove, text only: "Projects"
- ⚔️ → Remove, text only: "Skills"
- 📧 → Use existing PixelIcons.Email
```

---

### **7. Animation & Transitions**

#### **Timing Functions**
```
Quick:    150ms - Button presses, minor UI feedback
Default:  200ms - Hover states, color changes
Medium:   300ms - Tooltips, dropdowns
Slow:     500ms - Progress bars, major transitions
Very Slow: 1000ms - Count-up animations

Easing:
- Default: ease-out (natural deceleration)
- Button press: ease-in-out (smooth press/release)
- Bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55) (playful)
```

#### **Standard Animations**
```
Hover Transform:
- Cards: translate-y: -8px (with shadow increase)
- Buttons: translate-y: -2px
- Icons: scale: 110%

Active/Press:
- Buttons: translate-y: 0px (cancels hover lift)
- Add: inset shadow for "pressed in" effect

Fade In:
- Opacity: 0 → 1
- Scale: 95% → 100%
- Duration: 300ms

Barberpole (Progress):
- Background-position: 0 0 → 17px 17px
- Duration: 2s linear infinite

Typing Cursor Blink:
- Opacity: 0 ↔ 100%
- Duration: 530ms
```

---

### **8. Accessibility Requirements**

#### **Focus States (Required for WCAG)**
```
All Interactive Elements:
- Outline: 3px solid #00D9FF (cyan)
- Outline-offset: 2px
- Border-radius: 0px
- Remove default browser outline

Keyboard Navigation:
- Visible focus indicators
- Logical tab order
- Skip links for navigation
```

#### **Color Contrast (WCAG AA)**
```
✅ Pass Requirements:
- Text (#3C3C3C) on Light Grey (#D4D4D4): 7.8:1 ✓
- Text (#3C3C3C) on White (#FFFFFF): 11.2:1 ✓
- White (#FFFFFF) on Pink (#FF006E): 4.8:1 ✓
- White (#FFFFFF) on Cyan (#00D9FF): 3.2:1 ⚠️ (use darker cyan for text)

Link Color:
- Use Cyan 600 (#00B8D8) for sufficient contrast on white
```

#### **Screen Reader Support**
```
- All icons must have aria-labels
- Form inputs must have labels (visible or aria-label)
- Buttons must have descriptive text or aria-label
- Window components should use role="dialog" where appropriate
```

---

## 🔧 Implementation Priority (Updated Post-V44)

### **Phase 1: Critical Fixes (High Priority)** - 70% Complete ✅

1. ✅ **DONE**: Remove all emoji and replace with text/icons (90% complete, 3 minor instances remain)
2. ✅ **DONE**: Standardize tooltip design to retro grey (not dark)
3. ✅ **DONE**: Unify progress bar designs (use single pattern)
4. ⚠️ **PARTIAL**: Fix shadow consistency (mostly compliant, Hero.tsx needs fix)
5. ✅ **DONE**: Ensure all buttons follow MacButton variants

**Remaining Phase 1 Tasks:**
- Replace 🏆 emoji in Skills.tsx with PixelIcons.Trophy
- Remove 📁 emoji from Projects.tsx (3 instances)
- Fix Hero.tsx terminal blur shadow and rounded corners
- Replace Lucide icons with PixelIcons in Projects.tsx

### **Phase 2: Typography Refinement**
1. ✅ Implement strict type scale
2. ✅ Use Press Start 2P only for hero/major headings
3. ✅ Standardize line heights
4. ✅ Fix font size inconsistencies

### **Phase 3: Component Polish**
1. ✅ Standardize all card designs
2. ✅ Unify hover/active states
3. ✅ Add focus states for accessibility
4. ✅ Implement badge component
5. ✅ Refine form input styles

### **Phase 4: System Documentation**
1. ✅ Create component library in Figma
2. ✅ Document spacing system
3. ✅ Create color palette swatches
4. ✅ Build icon library

---

## 📦 Figma Deliverables

### **Required Figma Pages**

1. **🎨 Design System Overview**
   - Color palette (all swatches)
   - Typography scale (all sizes shown)
   - Spacing guide (visual grid)
   - Shadow examples
   - Border styles

2. **🧩 Component Library**
   - MacButton (all 3 variants × all states)
   - StatCard (default + hover + tooltip)
   - SkillCard (default + hover + selected)
   - Window (small + large, with all elements)
   - Tooltip (simple + detailed variants)
   - Progress Bar (labeled + unlabeled)
   - Form Inputs (text, textarea, checkbox)
   - Badge/Tag (all variants)
   - Tab (active + inactive)

3. **📄 Page Templates**
   - Hero section layout
   - About section layout
   - Skills grid layout
   - Projects grid layout
   - Contact form layout

4. **🔤 Icon Library**
   - All custom pixel icons at all sizes
   - Consistent naming: icon-name-size (e.g., email-24, apple-16)

5. **📱 Responsive Breakpoints**
   - Mobile: 320px - 640px
   - Tablet: 641px - 1024px
   - Desktop: 1025px+
   - Show how components adapt

---

## ✅ Design Checklist

Before finalizing designs, verify:

- [ ] No emoji anywhere in design
- [ ] All text uses VT323 or Press Start 2P only
- [ ] All colors from defined palette (no arbitrary hex values)
- [ ] All shadows use defined system (2px, 4px, 6px, or 8px offsets)
- [ ] All spacing follows 4px/8px grid
- [ ] All borders are 1px, 2px, or 3px (no other widths)
- [ ] All corners are 0px radius (sharp retro aesthetic)
- [ ] All interactive elements have hover + active + focus states
- [ ] All icons are custom pixel style (no modern smooth icons)
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] All components have consistent padding/margins
- [ ] Tooltip uses retro grey background (not dark charcoal)
- [ ] Progress bars all use same diagonal stripe pattern
- [ ] Traffic light buttons match exact colors specified
- [ ] 3D beveled effects use white highlight + grey shadow

---

## 🎯 Success Criteria & Progress Tracking

**The design is successful when:**

1. ⚠️ **Authentic retro feel**: Looks like genuine 1990s Mac OS software (80% achieved, minor emoji cleanup needed)
2. ⚠️ **No anachronisms**: No modern design elements (90% - removed emoji, still have Lucide icons in Projects)
3. ✅ **Pixel-perfect consistency**: All shadows, borders, spacing follow exact system (mostly achieved)
4. ✅ **Clear hierarchy**: Typography and color make content scannable (good progress)
5. ⏳ **Accessible**: Meets WCAG AA for contrast and keyboard navigation (Phase 4 - not started)
6. ✅ **Delightful interactions**: Hover/active states feel tactile and responsive (well implemented)
7. ✅ **Cohesive system**: All components feel like they belong together (strong cohesion)

---

## 📊 **OVERALL PROJECT STATUS (Post-V44)**

### **Completion Summary**

| Phase | Status | Completion | Priority |
|-------|--------|------------|----------|
| **Phase 1: Critical Fixes** | 🟢 In Progress | **70%** | HIGH ✅ |
| **Phase 2: Typography** | 🟡 Partial | **40%** | MEDIUM |
| **Phase 3: Component Polish** | 🟡 Partial | **50%** | MEDIUM |
| **Phase 4: Accessibility** | 🔴 Not Started | **0%** | LOW |
| **Overall Project** | 🟢 Good Progress | **55%** | - |

### **Key Achievements (V44)**
- ✅ 7 emoji instances removed (MenuBar, Contact sections fully cleaned)
- ✅ Tooltip styling completely refactored to retro aesthetic
- ✅ Progress bar design unified across all components
- ✅ 50+ custom pixel icons added (comprehensive library)
- ✅ StatCard component refined and polished
- ✅ Icon library now replaces most Lucide React needs

### **Next Milestones**
1. **Complete Phase 1** (30% remaining):
   - Remove last 3 emoji (🏆 in Skills, 📁 in Projects)
   - Replace 2 Lucide icons with PixelIcons
   - Fix Hero.tsx terminal styling
   - **ETA**: 30-45 minutes

2. **Begin Phase 2** (Typography refinement):
   - Audit font size usage across all components
   - Implement strict modular scale
   - Utilize Press Start 2P for hero sections
   - **ETA**: 1-2 hours

3. **Phase 3 Polish** (Component consistency):
   - Spacing audit (8px grid compliance)
   - Focus states for accessibility prep
   - Color palette audit
   - **ETA**: 1-2 hours

4. **Phase 4 Accessibility** (Future work):
   - Keyboard navigation
   - ARIA labels
   - WCAG AA compliance verification
   - **ETA**: 2-3 hours

---

## 📚 Reference Materials

**Visual References for Authentic Retro Mac OS:**
- Mac OS System 7 (1991)
- Mac OS System 8 (1997)
- Classic Finder windows
- Control Panels from early 90s
- HyperCard interfaces
- Early Mac games (SimCity, Oregon Trail)

**Key Characteristics to Maintain:**
- Beveled 3D buttons and panels
- Monochrome grey base palette
- Crisp pixel-aligned borders
- Drop shadows (never blur, always solid offset)
- Traffic light window controls
- Pixel-perfect scrollbars
- Retro cursors
- Terminal/monospace fonts

---

## 🚀 Next Steps for Design Team

1. **Import this brief into Figma** as project documentation
2. **Create master component library** with all variants
3. **Build color/typography styles** for easy application
4. **Design 2-3 key screens** to test system cohesion
5. **Get feedback** on authenticity and usability
6. **Iterate** based on developer implementation feasibility
7. **Export specs** for development handoff

---

## 💬 Questions for Stakeholder

Before beginning design work, clarify:

1. **Icon Library**: Should we design all custom pixel icons, or use existing PixelIcons library?
2. **Press Start 2P Usage**: Confirm we should minimize usage to hero/major headings only?
3. **Color Accessibility**: Okay to use darker cyan for links to meet contrast requirements?
4. **MenuBar Apple Icon**: Keep as text "Portfolio" or design custom pixel apple?
5. **Animation Intensity**: Current bounce/float animations appropriate, or tone down?

---

## 📦 **NEW: Complete Pixel Icon Library (V44)**

The portfolio now includes a comprehensive custom pixel icon library with 50+ icons. All icons follow the retro aesthetic with sharp edges and pixel-perfect rendering.

### **Icon Categories & Complete List**

**Programming Languages (8 icons):**
- Python, JavaScript, TypeScript, SQL, Ruby, Shell, PowerShell, Bash

**DevOps & Infrastructure (6 icons):**
- Git, Docker, Jenkins, Chef, Linux, n8n

**Frameworks & APIs (6 icons):**
- React, Flask, FastAPI, NodeJS, Express, DialogFlow

**Databases (5 icons):**
- PostgreSQL, MongoDB, SQLite, ChromaDB, Firebase

**Cloud & Services (2 icons):**
- AWS, Supabase

**Data & Analytics (3 icons):**
- Tableau, JMP, Npm

**Productivity Tools (4 icons):**
- Excel, Jira, Confluence, Notion, Figma

**AI & Code Assistants (3 icons):**
- Claude, GitHub Copilot, Cursor

**UI & Interaction Elements (13 icons):**
- FolderClosed, FolderOpen, Document, Email, LinkedIn, GitHub, Phone, Trophy, Coffee, Download, ExternalLink, Checkmark, AIRobot

**Gaming & Interests (4 icons):**
- ClockLightning, GameController, Anime, Keyboard

### **Icon Usage in Figma**

When designing with these icons in Figma:
1. **Export from code**: All icons are SVG-based React components
2. **Consistent sizing**: Use 16px, 20px, 24px, 32px, 48px, or 64px only
3. **Pixel-perfect**: Ensure icons align to pixel grid in Figma
4. **Monochrome default**: Most icons use single color, easy to theme
5. **Custom colors**: Some icons (language logos) have brand colors

### **Replacing Lucide Icons**

**Current Lucide Usage → PixelIcons Equivalent:**
- `<ExternalLink />` → `<PixelIcons.ExternalLink />`
- `<Github />` → `<PixelIcons.GitHub />`
- All other icons already have pixel equivalents

---

**Document Version**: 2.0 (Updated Post-V44)
**Last Updated**: 2025-11-20
**Contact**: Development Team
**Design Tool**: Figma
**Target Delivery**: Design system + 5 page layouts + Comprehensive icon library ✅
