# Custom Cursor Implementation Guide

## 📋 Cursor Files

The following custom cursor SVG files are implemented:

1. **cursor.svg** - Default arrow cursor (28×28px)
2. **pointinghand.svg** - Hand pointer for clickable elements (32×32px)
3. **move.svg** - Move/grab cursor for draggable windows (18×18px)
4. **notallowed.svg** - Not-allowed cursor for disabled elements (28×40px)

## 🎯 Cursor Hotspots

- **cursor.svg**: Hotspot at (3, 3) - tip of arrow
- **pointinghand.svg**: Hotspot at (9, 3) - fingertip
- **move.svg**: Hotspot at (9, 9) - center
- **notallowed.svg**: Hotspot at (14, 20) - center of circle

## 🖱️ Cursor Usage Map

### Default Arrow (cursor.svg)
Used on:
- Desktop background
- Window content areas
- Non-interactive text
- Empty spaces

### Pointing Hand (pointinghand.svg)
Used on:
- All buttons (Press Start, Portfolio, Send Email, Connect, Download)
- Navigation dots (.nav-dot)
- Arrow navigation buttons (.arrow-nav)
- All links (email, LinkedIn, GitHub)
- Desktop icons (.desktop-icon)
- Project folder tabs (.project-tab)
- Skill cards (.skill-card)
- Stat cards (.stat-card)
- Interest tags (.interest-tag)
- Tech badges (.tech-badge)
- Traffic light buttons (window controls)

### Move Cursor (move.svg)
Used on:
- Window title bars (.window-title)
- Draggable elements
- Shows "grab" state on hover
- Shows "grabbing" state when actively dragging

### Not Allowed (notallowed.svg)
Used on:
- Disabled buttons (button:disabled)
- Disabled navigation arrows
- Locked/unavailable features
- Read-only areas

## 💻 CSS Implementation

```css
/* Default cursor */
* {
  cursor: url('/cursors/cursor.svg') 3 3, auto;
}

/* Pointing hand for interactive elements */
button, a, .cursor-pointer, [role="button"] {
  cursor: url('/cursors/pointinghand.svg') 9 3, pointer;
}

/* Move cursor for draggable elements */
.cursor-grab, .window-title {
  cursor: url('/cursors/move.svg') 9 9, grab;
}

.cursor-grabbing, .window-title:active {
  cursor: url('/cursors/move.svg') 9 9, grabbing;
}

/* Not allowed for disabled elements */
.cursor-not-allowed, button:disabled, [disabled] {
  cursor: url('/cursors/notallowed.svg') 14 20, not-allowed;
}
```

## ✅ Testing Checklist

- [x] Desktop background shows default arrow
- [x] All buttons show pointing hand on hover
- [x] Window title bars show move cursor
- [x] Links show pointing hand
- [x] Navigation dots show pointing hand
- [x] Desktop icons show pointing hand
- [x] Skill cards show pointing hand
- [x] Disabled elements show not-allowed cursor
- [x] Arrow buttons show pointing hand (when enabled)
- [x] Cursors visible on both orange background and grey windows

## 🎨 Visual States

### Button Hover
- Cursor changes to pointinghand.svg
- Button lifts up (-translate-y-0.5)
- Shadow/glow effect appears

### Window Title Bar Hover
- Cursor changes to move.svg
- Title bar highlights slightly
- Indicates draggable state

### Disabled State
- Cursor changes to notallowed.svg
- Element opacity reduced to 50%
- No hover effects

## 📱 Mobile Considerations

On touch devices, custom cursors are not applicable. Standard touch interactions apply:
- Tap for click
- Long press for context
- Drag gestures for window movement (if implemented)
