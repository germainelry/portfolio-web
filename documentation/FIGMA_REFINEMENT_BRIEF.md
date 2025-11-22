# Figma Refinement Brief - Portfolio V45 Updates
## Design Improvements & Section Refinements

**Date:** November 20, 2025
**Version:** V45 Refinement
**Priority:** High - UI/UX Consistency & Visual Polish

---

## 🎯 Overview

This brief outlines specific refinements to improve visual consistency, reduce color overload, and enhance the retro Mac OS aesthetic across all sections. The primary focus is on **standardizing tech stack badges**, **improving icon fidelity**, and **optimizing layout spacing**.

---

## 📋 Section-by-Section Changes

### **1. HERO SECTION** (GERMAINE.EXE)

#### 1.1 Remove StatCards
**Current Issue:**
- Three StatCards at bottom showing "3+", "500+", "∞" with Trophy, Clock, Coffee icons
- Takes up valuable screen real estate
- Not essential information for hero section

**Required Changes:**
✅ **Remove all three StatCards** (Trophy, Clock, Coffee)
✅ **Relocate "3+ years experience" information** to one of these alternatives:

**Option A (Recommended):** Add to subtitle area
```
Current: "Software Engineer • Builder"
New:     "Software Engineer • 3+ Years Experience • Builder"
```

**Option B:** Add to terminal text
```
Current terminal: "> Automation • AI • DevOps"
New terminal:     "> 3+ Years | Automation • AI • DevOps"
```

**Option C:** Add to window title bar
```
Current: "GERMAINE.EXE"
New:     "GERMAINE.EXE - Software Engineer (3+ YoE)"
```

**Design Spec for Chosen Location:**
- Font: VT323, 14px
- Color: #808080 (retro-grey-dark) or #3C3C3C (retro-charcoal)
- Separator: "•" or "|" with 8px spacing
- Keep retro monospace aesthetic

---

#### 1.2 Add Desktop Icons for Experience & Skills

**Current State:**
- Desktop has icons for "Projects" and "Resume" only
- Missing navigation icons for Experience and Skills sections

**Required Changes:**
✅ **Add two new desktop icons** positioned below existing icons

**New Desktop Icons Specifications:**

**Icon 1: Experience (Briefcase/Portfolio Icon)**
```
Position: Below "Projects" folder icon
Icon: Pixel-art briefcase OR folder with "EXP" label
Size: 48px × 48px icon, 64px × 80px total with label
Label: "Experience"
Background: Same retro grey with 3D bevel
Behavior: Click navigates to Experience section
```

**Icon 2: Skills (Wrench/Tools Icon)**
```
Position: Below "Resume" document icon
Icon: Pixel-art wrench/tools OR control panel icon
Size: 48px × 48px icon, 64px × 80px total with label
Label: "Skills"
Background: Same retro grey with 3D bevel
Behavior: Click navigates to Skills section
```

**Icon Design Guidelines:**
- Style: Match existing "Projects" folder and "Resume" document style
- Border: 2px solid #808080 (retro-grey-dark)
- Background: Gradient from #E5E5E5 to #C0C0C0
- Shadow: 2px 2px 0px rgba(0,0,0,0.2)
- Label font: VT323, 12px, centered
- Spacing: 16px gap between icons (vertical)

**Suggested Icon Designs:**

**Experience Icon Option A:** Briefcase
- Pixel-art brown briefcase (similar style to Projects folder)
- Handle on top, rectangular body
- Simple 2-3 color design (brown, tan, black outline)

**Experience Icon Option B:** Folder with "EXP"
- Same folder design as Projects
- Label reads "EXP" instead of folder emoji
- Maintains consistency with existing folder

**Skills Icon Option A:** Wrench
- Silver/grey crossed wrench and screwdriver
- Classic tools icon
- Matches retro Mac OS control panel aesthetic

**Skills Icon Option B:** Control Panel
- Pixel-art control panel with sliders/knobs
- Reference: Classic Mac OS control panels
- Grey tones matching system palette

**Recommended:** Experience = Briefcase, Skills = Wrench (clearest symbolism)

---

### **2. EXPERIENCE SECTION** (EXPERIENCE.DOC)

#### 2.1 Standardize Tech Stack Badges

**Current Issue:**
- Tech stack badges use brand colors (Python blue, FastAPI teal, CyberArk magenta, etc.)
- Creates visual noise and inconsistency
- Breaks retro monochrome aesthetic

**Required Changes:**
✅ **Redesign all tech stack badges** to use unified retro style

**New Tech Stack Badge Design:**

**Option A: Retro Grey Badges (Recommended)**
```
Background: #E5E5E5 (retro-frame)
Border: 2px solid #808080 (retro-grey-dark)
Text: #3C3C3C (retro-charcoal)
Font: VT323, 12px
Padding: 8px horizontal × 4px vertical
Shadow: 1px 1px 0px rgba(0,0,0,0.15)
Border-radius: 0px (sharp corners)
```

**Option B: Subtle Tint Badges**
```
Keep same structure as Option A, but add very subtle color tint:
- Python: #E8EFF5 (very light blue-grey)
- FastAPI: #E5F5F0 (very light teal-grey)
- All others: Use retro-grey with minimal 5-10% brand color tint
Border: Still use retro-grey-dark for consistency
```

**Option C: Icon + Grey Badge**
```
Background: #E5E5E5
Border: 2px solid #808080
Include tiny 16px pixel icon of the technology (left side)
Text: Technology name in VT323, 12px
Maintains visual interest without bright colors
```

**Recommended:** Option A (Pure Retro Grey) for maximum consistency
- Eliminates color clash
- Focuses attention on content, not badges
- Authentic Mac OS System 7/8 aesthetic
- Easy to scan

**Visual Example:**
```
Before: [Python] (bright blue) [FastAPI] (bright teal) [CyberArk] (bright magenta)
After:  [Python] (grey) [FastAPI] (grey) [CyberArk] (grey) [Pandas] (grey)
All with consistent border, shadow, spacing
```

**Layout Specifications:**
- Horizontal arrangement with 8px gap between badges
- Wrap to multiple lines if needed (16px vertical gap)
- Left-aligned within Tech Stack section
- Max badges per line: 5-6 depending on text length

---

#### 2.2 Improve Tab Spacing (Level 1, 2, 3)

**Current Strength:**
- Level 1/2/3 tabs have excellent spacing and visual hierarchy
- Active tab has pink accent line on top
- Clear distinction between active and inactive states

**Required Changes:**
✅ **Document this tab pattern** for reuse in Projects and Skills sections

**Tab Design Pattern to Apply Elsewhere:**

```
Active Tab:
- Background: #FFFFFF (white)
- Border: 2px solid #808080, no bottom border
- Text: #3C3C3C (retro-charcoal)
- Pink accent bar: 3px height, #FF006E, positioned at top
- Position: Overlaps bottom border (-1px translate-y)
- Z-index: 10

Inactive Tab:
- Background: #C0C0C0 (retro-grey)
- Border: 2px solid #808080, no bottom border
- Text: #808080 (retro-grey-dark)
- No accent bar
- Hover: Background changes to #D4D4D4 (retro-grey-light)
- Hover: Slight translate-y: -2px

Tab Container:
- Bottom border: 2px solid #808080 (connects tabs to content)
- Gap between tabs: 4px
- Padding per tab: 16px horizontal × 8px vertical
- Font: VT323, 14px
```

**Apply This Pattern To:**
1. ✅ **Projects Section Tabs** (ThaiBridge Academy, Chatbit, Cross-Regional Customer Service Chatbot)
2. ✅ **Skills Section Tabs** (Languages, Tools & Infrastructure, Frameworks & Databases, Data & Productivity)

**Current Skills Tabs Issue:**
- No pink accent on active tab
- Need to add 3px pink bar to top of active tab
- Improve hover states consistency

**Current Projects Tabs Issue:**
- Similar to Skills - needs pink accent
- Spacing might be tighter than Experience tabs
- Standardize to match Experience pattern exactly

---

### **3. PROJECTS SECTION** (PROJECTS)

#### 3.1 Standardize Tech Stack Badges (Same as Experience)

**Current Issue:**
- Same colorful badge problem as Experience section
- FastAPI, React, TypeScript, Supabase, Tailwind CSS badges use brand colors

**Required Changes:**
✅ **Apply exact same badge redesign** as Experience section

**Use Option A from Experience Section:**
- Background: #E5E5E5 (retro-frame)
- Border: 2px solid #808080
- Text: #3C3C3C (retro-charcoal)
- Font: VT323, 12px
- Padding: 8px × 4px
- No color tints - pure retro grey

**Project-Specific Badge Adjustments:**
- Maintain current layout (horizontal row below project description)
- Keep 8px gap between badges
- Ensure badges wrap gracefully on smaller screens
- Consider using slightly smaller badges (10px font) if space is tight

**Visual Consistency Goal:**
```
All tech stack badges across Experience and Projects should look identical:
- Same grey tone
- Same border style
- Same typography
- Same spacing
- Only difference is the text content
```

---

### **4. SKILLS SECTION** (SYSTEM_SKILLS.cpl)

#### 4.1 Apply Tab Design Pattern from Experience

**Current Issue:**
- Skills tabs lack the pink accent bar of active tab
- Spacing might differ from Experience tabs
- Need exact consistency

**Required Changes:**
✅ **Update all four category tabs** (Languages, Tools & Infrastructure, Frameworks & Databases, Data & Productivity)

**Apply Exact Pattern:**
1. Active tab gets 3px pink bar (#FF006E) at top
2. Active tab background: #FFFFFF (white)
3. Inactive tab background: #C0C0C0 (retro-grey)
4. Match padding: 16px × 8px
5. Match gap: 4px between tabs
6. Match hover state: Translate-y: -2px

**Additional Improvement:**
- If tab labels are too long and wrapping, consider abbreviations:
  - "Tools & Infrastructure" → "Tools & Infra"
  - "Frameworks & Databases" → "Frameworks & DB"
  - "Data & Productivity" → "Data & Tools"
- Keep full text in tooltip if abbreviated

---

#### 4.2 Improve Pixel Icon Designs

**Current Issue:**
- Some technology icons don't accurately represent brand logos
- Pixel designs need higher fidelity to real logos

**Required Changes:**
✅ **Redesign the following icons** with better brand accuracy:

---

**4.2.1 PYTHON ICON**

**Current Issues:**
- May not capture the interlocking snakes design accurately
- Colors might be off from official Python blue/yellow

**Official Python Logo Reference:**
- Two interlocking snakes forming a yin-yang style
- Top snake: Blue (#3776AB)
- Bottom snake: Yellow (#FFD43B)
- White eye dots on each snake
- Smooth curves approximated with pixels

**Pixel Design Specifications (48px × 48px):**
```
Background: Transparent or white
Design: Interlocking snake heads (top-left and bottom-right)
Blue snake: #3776AB (Python blue)
Yellow snake: #FFD43B (Python yellow)
Eyes: 2px white dots
Border: 1px black outline for definition
Style: Simplified curves using pixel staircase pattern
```

**Key Details:**
- Maintain recognizable interlocking pattern
- Use 2-3px thick "snake bodies"
- Keep it centered and balanced
- Should be instantly recognizable as Python

---

**4.2.2 POWERSHELL ICON**

**Current Issues:**
- May not capture the distinctive "PS>" prompt and arrow design

**Official PowerShell Logo Reference:**
- Dark blue/navy background
- White "PS>" text OR white arrow (>_) symbol
- Microsoft's modern PowerShell uses a more abstract arrow design
- Classic: "PS>" in Consolas font
- Modern: Stylized arrow with gradient (blue to white)

**Pixel Design Specifications (48px × 48px):**
```
Background: #012456 (PowerShell dark blue)
Icon: White arrow ">" or "PS>" text
Border: Optional 1px darker blue (#001122)
Style: Bold, clear, readable at small size

Option A: "PS>" text
- Font approximation: Bold monospace
- Color: #FFFFFF
- Size: Large enough to read

Option B: Stylized arrow
- White chevron/arrow pointing right
- Gradient from light blue to white (optional)
- 3-4px thick lines
```

**Recommended:** Option B (Arrow) - more visually distinct at small size

---

**4.2.3 JENKINS ICON**

**Current Issues:**
- Jenkins butler mascot might not be recognizable at 48px

**Official Jenkins Logo Reference:**
- Butler character with mustache
- Bow tie (red)
- Suit (black/grey)
- OR: Just the butler's head/face
- Very distinctive handlebar mustache

**Pixel Design Specifications (48px × 48px):**
```
Background: Transparent or light grey
Design: Butler head (front-facing)

Key Elements:
- Round head: Peach/tan color (#F5D5B8)
- Mustache: Black (#000000), handlebar style, 6-8px wide
- Eyes: 2px black dots
- Bow tie: Red (#DC382D), 6px wide at center neck
- Suit collar: Black "V" shape below bow tie
- Border: 1px outline for clarity

Style: Simple, iconic, focus on mustache
Should be recognizable even at small size
Avoid too much detail - keep it clean
```

**Key Detail:** The mustache is the most iconic part - make it prominent

---

**4.2.4 DOCKER ICON**

**Current Issues:**
- Docker whale and containers might lose detail at small size

**Official Docker Logo Reference:**
- Blue whale (#0DB7ED)
- Stacked containers on back (3-5 boxes)
- Simplified for small sizes

**Pixel Design Specifications (48px × 48px):**
```
Background: Transparent or white
Whale body: #0DB7ED (Docker blue)
Eye: White dot (2px)
Tail: Simple curved flipper (right side)

Containers on back:
- 3 rows × 2-3 columns of small squares
- Each container: 4px × 4px
- Color: Lighter blue (#1D9DD8) or white with blue border
- Gap: 1px between containers

Style: Side-view whale with cargo containers
Keep it simple - recognizable silhouette
Don't over-detail the containers
```

**Simplified Version (if too complex):**
- Just show whale outline with 3-4 box shapes on back
- Focus on iconic shape rather than exact container count

---

**4.2.5 CHEF ICON (Progress Software)**

**Current Issues:**
- Chef uses a chef's hat (toque) as logo
- May not be distinguishable from generic cooking imagery
- Progress Software Chef brand colors: Orange (#F09820)

**Official Chef Logo Reference:**
- White chef's hat (toque)
- Orange circular background (#F09820)
- OR: Stylized flame/food design (older versions)
- Modern: Simple geometric toque on orange

**Pixel Design Specifications (48px × 48px):**
```
Background: Circular orange (#F09820), 44px diameter
Chef hat (toque):
- Color: White (#FFFFFF)
- Style: Traditional tall pleated hat
- Position: Centered on orange circle
- Height: ~24px
- Width: ~20px at base, ~16px at top
- Pleats: 2-3 white vertical lines for texture

Border: Optional 1px darker orange outline
Shadow: Subtle under hat for depth

Style: Clean, geometric
Should look professional, not cartoon-y
Hat should be clearly recognizable
```

**Alternative:** If hat is too complex, use stylized "C" in white on orange circle

---

**4.2.6 SUPABASE ICON**

**Current Issues:**
- Supabase logo might not capture the distinctive layered/stacked design
- Colors might be off

**Official Supabase Logo Reference:**
- Green gradient (#3ECF8E to #3ECF8E or darker teal)
- Stylized "S" shape OR layered database icon
- Modern: Abstract geometric "S" with gradient
- Should feel "data/database" related

**Pixel Design Specifications (48px × 48px):**
```
Background: Transparent or dark (#1F1F1F)
Icon style: Layered database or "S" shape

Option A: Database Stack
- 3 cylindrical layers
- Color: Green gradient (#3ECF8E to #24B574)
- Each layer: 8px height, 32px width
- Stacked with 2px gap
- White highlight on top edge of each

Option B: Geometric "S"
- Blocky "S" shape
- Green fill (#3ECF8E)
- 6-8px thick strokes
- Modern, angular design

Recommended: Option A (Database stack) - clearer symbolism
```

---

**4.2.7 FASTAPI ICON**

**Current Issues:**
- FastAPI lightning bolt might be too thin or unclear
- Teal/cyan color might not be accurate

**Official FastAPI Logo Reference:**
- Teal/cyan color (#009688 or #05998B)
- Lightning bolt + circle (speed symbol)
- Modern, clean geometric design
- "Fast" = lightning, "API" = technical

**Pixel Design Specifications (48px × 48px):**
```
Background: Transparent or white
Design: Lightning bolt + circular ring

Lightning bolt:
- Color: #009688 (FastAPI teal)
- Style: Angular, diagonal from top-left to bottom-right
- Width: 6px thick
- Zigzag: 2 angles (simple, bold)

Circle ring (optional):
- Teal outline, 2px thick
- Diameter: 40px
- Lightning bolt overlays or extends through it

Alternative simple version:
- Just bold lightning bolt, no circle
- More recognizable at small size
- Fill: Solid teal

Recommended: Bold solid lightning bolt only
```

---

**4.2.8 REACT ICON**

**Current Issues:**
- React's atomic orbital design is complex
- May lose detail at 48px

**Official React Logo Reference:**
- Atom symbol with elliptical orbits
- Blue (#61DAFB React blue)
- Three elliptical rings intersecting
- Center: Small blue circle (nucleus)

**Pixel Design Specifications (48px × 48px):**
```
Background: Transparent or white
Color: #61DAFB (React blue)

Simplified design:
- Center circle: 4px diameter
- Three elliptical orbits: 2px stroke width
- Orbits rotated at 60° angles (approximated with pixels)

Orbit paths:
- Horizontal ellipse (flat)
- Diagonal ellipse (60° clockwise)
- Diagonal ellipse (60° counter-clockwise)

Each orbit: 36px wide × 16px tall (ellipse)

Style: Clean, symmetrical
Keep all three orbits visible
Center dot should be clearly visible
Use anti-aliasing sparingly for smooth curves
```

**Simplified Version (if too complex):**
- Just show center circle with one or two orbits
- Focus on recognizable "atom" shape

---

### **4.3 Icon Design Guidelines (All Icons)**

**General Principles:**
1. ✅ **Research official brand guidelines** before designing
2. ✅ **Use exact brand colors** when possible (maintains recognition)
3. ✅ **Simplify complex logos** - remove fine details that don't scale
4. ✅ **Maintain iconic shapes** - what makes each logo instantly recognizable?
5. ✅ **Test at 24px, 32px, 48px** - ensure readability at all sizes
6. ✅ **Use 1-2px outlines** for definition against backgrounds
7. ✅ **Pixel-perfect alignment** - no anti-aliasing blur
8. ✅ **Consistent stroke widths** - use 2px, 3px, or 4px (not mixed)

**Color Accuracy:**
- Python: #3776AB (blue) + #FFD43B (yellow)
- PowerShell: #012456 (dark blue)
- Jenkins: #DC382D (red bow tie)
- Docker: #0DB7ED (blue)
- Chef: #F09820 (orange)
- Supabase: #3ECF8E (green)
- FastAPI: #009688 (teal)
- React: #61DAFB (blue)

**Research Sources:**
- Official brand press kits / media assets
- Wikipedia pages for technology logos
- GitHub repositories (often have SVG logos)
- worldvectorlogo.com
- seeklogo.com
- Official documentation sites

---

## 🎨 Design System Consistency

### Color Palette Adjustments

**Tech Stack Badges - Unified Grey:**
```css
.tech-badge {
  background: #E5E5E5;
  border: 2px solid #808080;
  color: #3C3C3C;
  font-family: 'VT323', monospace;
  font-size: 12px;
  padding: 4px 8px;
  box-shadow: 1px 1px 0px rgba(0,0,0,0.15);
  border-radius: 0;
}

.tech-badge:hover {
  background: #F0F0F0;
  border-color: #00D9FF; /* Cyan on hover */
  transform: translateY(-1px);
  box-shadow: 2px 2px 0px rgba(0,217,255,0.3);
}
```

**Tab System - Unified Pattern:**
```css
.tab-inactive {
  background: #C0C0C0;
  border: 2px solid #808080;
  border-bottom: none;
  color: #808080;
  padding: 8px 16px;
  cursor: pointer;
}

.tab-inactive:hover {
  background: #D4D4D4;
  transform: translateY(-2px);
}

.tab-active {
  background: #FFFFFF;
  border: 2px solid #808080;
  border-bottom: none;
  color: #3C3C3C;
  padding: 8px 16px;
  position: relative;
  z-index: 10;
  transform: translateY(1px); /* Overlaps bottom border */
}

.tab-active::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #FF006E; /* Pink accent */
}
```

---

## ✅ Implementation Checklist

### Hero Section
- [ ] Remove all three StatCards (Trophy, Clock, Coffee)
- [ ] Relocate "3+ years experience" to subtitle OR terminal OR title bar
- [ ] Create "Experience" desktop icon (briefcase design)
- [ ] Create "Skills" desktop icon (wrench design)
- [ ] Position new icons below Projects and Resume
- [ ] Ensure new icons match existing icon style
- [ ] Test icon click navigation to respective sections

### Experience Section
- [ ] Redesign all tech stack badges to unified grey style
- [ ] Remove all brand colors from badges (Python blue, FastAPI teal, etc.)
- [ ] Apply consistent padding, border, shadow to all badges
- [ ] Verify tab spacing matches specification
- [ ] Document tab pattern for reuse

### Projects Section
- [ ] Apply exact same grey badge design as Experience
- [ ] Standardize all tech stack badges across all projects
- [ ] Remove colorful badges completely
- [ ] Apply Experience tab pattern to project tabs (ThaiBridge, Chatbit, Chatbot)
- [ ] Add 3px pink accent bar to active project tab

### Skills Section
- [ ] Apply Experience tab pattern to all 4 category tabs
- [ ] Add pink accent bar to active category tab
- [ ] Redesign Python icon (interlocking snakes, correct colors)
- [ ] Redesign PowerShell icon (dark blue, white arrow/PS>)
- [ ] Redesign Jenkins icon (butler with mustache, bow tie)
- [ ] Redesign Docker icon (blue whale with containers)
- [ ] Redesign Chef icon (chef's hat on orange circle)
- [ ] Redesign Supabase icon (green database stack or S)
- [ ] Redesign FastAPI icon (teal lightning bolt)
- [ ] Redesign React icon (blue atomic orbits)
- [ ] Test all icons at 48px, 32px, 24px sizes
- [ ] Verify icon colors match official brand colors

### Global Consistency
- [ ] All tech stack badges use identical styling across all sections
- [ ] All tab systems use identical active/inactive patterns
- [ ] All new icons follow pixel-art aesthetic
- [ ] No bright colors except for icons themselves
- [ ] Grey monotone maintained for UI elements
- [ ] Pink accent (#FF006E) used consistently for active states
- [ ] Cyan accent (#00D9FF) used consistently for hover states

---

## 📏 Technical Specifications

**Tech Stack Badge Dimensions:**
- Height: 28px (including border)
- Padding: 8px horizontal × 4px vertical
- Border: 2px solid
- Font size: 12px
- Gap between badges: 8px horizontal, 16px vertical (if wrapping)

**Tab Dimensions:**
- Height: 36px (including border)
- Padding: 16px horizontal × 8px vertical
- Border: 2px solid (no bottom border)
- Font size: 14px
- Gap between tabs: 4px
- Active tab accent bar: 3px height

**Desktop Icon Dimensions:**
- Icon size: 48px × 48px
- Total size with label: 64px × 80px
- Border: 2px solid
- Label font: 12px
- Icon-to-label gap: 4px

**Pixel Icon Dimensions:**
- Primary size: 48px × 48px (Skills grid)
- Medium size: 32px × 32px (Tech badges if using icons)
- Small size: 24px × 24px (Inline usage)
- Stroke width: 2-3px for outlines
- Color: Brand-accurate when possible

---

## 🎯 Expected Outcomes

**Visual Consistency:**
- ✅ Tech stack badges no longer create color chaos
- ✅ Tabs have unified appearance across all sections
- ✅ Icons accurately represent their technologies
- ✅ Desktop navigation is complete and intuitive

**Retro Aesthetic Preservation:**
- ✅ Grey monotone UI elements maintain Mac OS System 7 feel
- ✅ Color is reserved for meaningful accents (pink active, cyan hover)
- ✅ Technology icons bring necessary visual interest without overwhelming
- ✅ Pixel-art consistency maintained throughout

**User Experience:**
- ✅ Clearer visual hierarchy (less distraction from colorful badges)
- ✅ Easier navigation with desktop icons for all major sections
- ✅ More professional appearance with standardized badges
- ✅ Better recognition of technologies with improved icons

---

## 📊 Before & After Comparison

**Tech Stack Badges:**
```
BEFORE: [Python] (bright blue) [FastAPI] (bright teal) [React] (bright blue)
AFTER:  [Python] (grey) [FastAPI] (grey) [React] (grey)
Result: Clean, professional, doesn't compete with content
```

**Hero Section:**
```
BEFORE: StatCards showing 3+, 500+, ∞ at bottom
AFTER:  Clean space OR desktop icons, experience integrated into subtitle
Result: More focused hero, better space utilization
```

**Skills Icons:**
```
BEFORE: Python icon may lack detail/accuracy
AFTER:  Python icon clearly shows interlocking blue/yellow snakes
Result: Instantly recognizable, brand-accurate
```

**Tabs:**
```
BEFORE: Skills/Projects tabs lack pink accent on active
AFTER:  All tabs have consistent pink accent bar when active
Result: Clear active state across all sections
```

---

## 🚀 Figma Make Prompt (Condensed Version)

```
Update retro Mac OS portfolio design with these changes:

HERO SECTION:
1. Remove 3 StatCards (Trophy/Clock/Coffee with 3+, 500+, ∞)
2. Add "3+ Years Experience" to subtitle: "Software Engineer • 3+ Years Experience • Builder"
3. Create 2 new desktop icons below existing ones:
   - Experience icon: Pixel-art briefcase, 48px, grey gradient background
   - Skills icon: Pixel-art wrench, 48px, grey gradient background
   - Match existing Projects/Resume icon style exactly

EXPERIENCE + PROJECTS SECTIONS:
1. Standardize ALL tech stack badges:
   - Background: #E5E5E5 (retro grey)
   - Border: 2px solid #808080
   - Text: #3C3C3C, VT323 12px
   - Padding: 8px × 4px
   - Shadow: 1px 1px 0px rgba(0,0,0,0.15)
   - Remove ALL brand colors (no blue, teal, magenta, etc.)
   - All badges pure grey except text

2. Apply Experience tab pattern to Projects tabs:
   - Active tab: White background + 3px pink accent bar at top
   - Inactive tab: Grey background
   - 4px gap between tabs
   - 16px horizontal padding

SKILLS SECTION:
1. Apply same tab pattern (add 3px pink accent to active tab)

2. Redesign these technology icons with brand accuracy:
   - Python: Interlocking blue (#3776AB) and yellow (#FFD43B) snakes, white eye dots
   - PowerShell: Dark blue background (#012456), white arrow/PS> symbol
   - Jenkins: Butler face with prominent black mustache, red bow tie (#DC382D)
   - Docker: Blue whale (#0DB7ED) with stacked containers on back
   - Chef: White chef's hat (toque) on orange circle (#F09820)
   - Supabase: Green (#3ECF8E) database stack or geometric S
   - FastAPI: Teal (#009688) lightning bolt, bold and simple
   - React: Blue (#61DAFB) atom with 3 orbital rings and center dot

All icons: 48px × 48px, pixel-art style, research official logos, maintain brand colors for recognition, use 2-3px outlines, test at multiple sizes.

CONSISTENCY GOALS:
- All tech badges identical grey across Experience + Projects
- All tabs use pink accent for active state
- All icons pixel-perfect and brand-accurate
- Maintain retro Mac OS grey monotone UI
- Color only for icons and accents (pink active, cyan hover)
```

---

**Document Version**: 1.0
**Last Updated**: 2025-11-20
**Related**: FIGMA_DESIGN_BRIEF.md (V2.0)
**Status**: Ready for Figma Implementation
