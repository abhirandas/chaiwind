# 🍵 ChaiWind

A lightweight utility-first CSS engine that reads `chai-*` class names, parses them, and applies inline styles — no build step, no config, no dependencies.

```html
<script src="chaiwind.js"></script>

<div class="chai-p-6 chai-bg-orange-500 chai-text-white chai-rounded-xl">
  Hello, ChaiWind!
</div>
```

That's it. No npm. No config. No build step.

---

## How it works

ChaiWind runs three steps every time the page loads:

1. **Scan** — finds every element with a `chai-*` class using `querySelectorAll`
2. **Parse** — converts each class name into a plain JS style object
3. **Apply** — writes the styles inline and removes the `chai-*` classes

A `MutationObserver` watches for dynamically added elements, so anything injected into the DOM after load is handled automatically too.

---

## File structure

```
chaiwind/
├── chai.html         # Demo page
├── chaiwind.js       # Core engine (scan → parse → apply)
├── palette.js        # Color data — 20 palettes, 11 shades each
├── typography.js     # Font sizes, weights, line heights, tracking
├── spacing.js        # Padding and margin scale
├── borders.js        # Border widths, styles, radius values
├── layout.js         # Flexbox, grid, position, sizing
└── shadows.js        # Box shadows, opacity, cursor, visibility
```

Load order matters — data files must come before `chaiwind.js`:

```html
<script src="palette.js"></script>
<script src="typography.js"></script>
<script src="spacing.js"></script>
<script src="borders.js"></script>
<script src="layout.js"></script>
<script src="shadows.js"></script>
<script src="chaiwind.js"></script>
```

---

## Utility classes

### Spacing
```
chai-p-{n}        padding (n × 0.25rem)
chai-px-{n}       padding left + right
chai-py-{n}       padding top + bottom
chai-m-{n}        margin
chai-mx-auto      center a block element
```

### Colors
```
chai-bg-orange-500          background color
chai-text-blue-300          text color
chai-bg-[#ff6600]           arbitrary hex
chai-bg-[rgb(255,100,0)]    arbitrary rgb
```
20 color palettes, 11 shades each (50–950).

### Typography
```
chai-text-{xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl}
chai-font-{thin|light|normal|medium|semibold|bold|extrabold|black}
chai-text-{left|center|right|justify}
chai-italic
chai-uppercase / chai-lowercase / chai-capitalize
chai-tracking-{tighter|tight|normal|wide|wider|widest}
chai-leading-{none|tight|snug|normal|relaxed|loose}
```

### Borders
```
chai-border           1px solid border
chai-border-{n}       n px border width
chai-border-dashed    dashed border
chai-border-red-400   border color
chai-rounded-{sm|md|lg|xl|2xl|3xl|full}
```

### Layout
```
chai-flex / chai-grid
chai-flex-col / chai-flex-row
chai-justify-{start|end|center|between|around|evenly}
chai-items-{start|end|center|stretch|baseline}
chai-grid-cols-{n}
chai-gap-{n}
chai-w-full / chai-h-screen
chai-absolute / chai-relative / chai-fixed / chai-sticky
chai-z-{n}
```

### Shadows & Effects
```
chai-shadow-{sm|md|lg|xl|2xl}
chai-opacity-{0|5|10|20|25|50|75|100}
chai-cursor-pointer
chai-select-none
chai-invisible
```

---

## Public API

ChaiWind exposes three functions on `window.ChaiWind`:

```js
// Re-run the engine on the whole page
ChaiWind.run()

// Run on a specific element
ChaiWind.run(element)

// Parse a single class name → returns a style object
ChaiWind.parse("chai-p-4")
// → { padding: "1rem" }

ChaiWind.parse("chai-bg-orange-500")
// → { backgroundColor: "#f97316" }
```

---

## Arbitrary values

Use square brackets to pass any valid CSS color value directly:

```html
<div class="chai-bg-[#ff6600]">custom hex</div>
<div class="chai-bg-[rgb(100,200,100)]">custom rgb</div>
<div class="chai-text-[hsl(200,80%,50%)]">custom hsl</div>
```

---

## Adding your own utilities

Each data file just exports a plain object on `window`. To add new values, open the relevant file and add an entry:

```js
// spacing.js
window.ChaiSpacing.SPECIAL["chai-px-page"] = {
  paddingLeft: "2rem",
  paddingRight: "2rem"
};
```

To add a whole new category, create a new data file and write a new parser function in `chaiwind.js` following the same pattern as the existing six.

---

## Browser support

Works in any browser that supports:
- `querySelectorAll` (all modern browsers)
- `MutationObserver` (all modern browsers)
- `element.style` (universal)

No polyfills needed.

---

## License

MIT — built for the ChaiCode Hackathon.