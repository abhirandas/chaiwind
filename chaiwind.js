/*!
 * ChaiWind v1.0.0
 * A lightweight utility-first CSS engine
 * https://github.com/yourusername/chaiwind
 *
 * Usage:
 *   <script src="chaiwind.js"></script>
 *   import 'chaiwind'
 */

(function (global) {
  "use strict";

  // ============================================================
  // PALETTE
  // ============================================================

  const PALETTE = {
    white: { DEFAULT: "#ffffff" },
    black: { DEFAULT: "#000000" },

    slate: {
      50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",
      400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",
      800:"#1e293b",900:"#0f172a",950:"#020617",
    },
    gray: {
      50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",
      400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",
      800:"#1f2937",900:"#111827",950:"#030712",
    },
    zinc: {
      50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",
      400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",
      800:"#27272a",900:"#18181b",950:"#09090b",
    },
    neutral: {
      50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",
      400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",
      800:"#262626",900:"#171717",950:"#0a0a0a",
    },
    stone: {
      50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",
      400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",
      800:"#292524",900:"#1c1917",950:"#0c0a09",
    },
    red: {
      50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",
      400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",
      800:"#991b1b",900:"#7f1d1d",950:"#450a0a",
    },
    orange: {
      50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",
      400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",
      800:"#9a3412",900:"#7c2d12",950:"#431407",
    },
    amber: {
      50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",
      400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",
      800:"#92400e",900:"#78350f",950:"#451a03",
    },
    yellow: {
      50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",
      400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",
      800:"#854d0e",900:"#713f12",950:"#422006",
    },
    lime: {
      50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",
      400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",
      800:"#3f6212",900:"#365314",950:"#1a2e05",
    },
    green: {
      50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",
      400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",
      800:"#166534",900:"#14532d",950:"#052e16",
    },
    emerald: {
      50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",
      400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",
      800:"#065f46",900:"#064e3b",950:"#022c22",
    },
    teal: {
      50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",
      400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",
      800:"#115e59",900:"#134e4a",950:"#042f2e",
    },
    cyan: {
      50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",
      400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",
      800:"#155e75",900:"#164e63",950:"#083344",
    },
    sky: {
      50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",
      400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",
      800:"#075985",900:"#0c4a6e",950:"#082f49",
    },
    blue: {
      50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",
      400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",
      800:"#1e40af",900:"#1e3a8a",950:"#172554",
    },
    indigo: {
      50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",
      400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",
      800:"#3730a3",900:"#312e81",950:"#1e1b4b",
    },
    violet: {
      50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",
      400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",
      800:"#5b21b6",900:"#4c1d95",950:"#2e1065",
    },
    purple: {
      50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",
      400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",
      800:"#6b21a8",900:"#581c87",950:"#3b0764",
    },
    fuchsia: {
      50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",
      400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",
      800:"#86198f",900:"#701a75",950:"#4a044e",
    },
    pink: {
      50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",
      400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",
      800:"#9d174d",900:"#831843",950:"#500724",
    },
    rose: {
      50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",
      400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",
      800:"#9f1239",900:"#881337",950:"#4c0519",
    },
  };

  // ============================================================
  // COLOR RESOLVER
  // ============================================================

  const CSS_NAMED_COLORS = new Set([
    "red","blue","green","yellow","orange","purple","pink",
    "white","black","gray","grey","cyan","magenta","lime",
    "maroon","navy","olive","teal","aqua","coral","salmon",
    "gold","violet","indigo","turquoise","brown","beige",
    "ivory","lavender","transparent","currentColor",
  ]);

 function parseArbitraryColor(value) {
  if (typeof value !== "string") return null;
  value = value.trim();

  // HEX (#RGB, #RGBA, #RRGGBB, #RRGGBBAA)
  const hexMatch = value.match(/^#([0-9a-fA-F]{3,8})$/);
  if (hexMatch) {
    const len = hexMatch[1].length;
    if ([3, 4, 6, 8].includes(len)) return value;
    return null;
  }

  // RGB
  const rgbMatch = value.match(/^rgb\((.+)\)$/);
  if (rgbMatch) {
    const parts = rgbMatch[1].split(",").map(p => p.trim());
    if (parts.length !== 3) return null;

    const valid = parts.every(n => {
      const num = Number(n);
      return Number.isInteger(num) && num >= 0 && num <= 255;
    });

    return valid ? value : null;
  }

  // RGBA
  const rgbaMatch = value.match(/^rgba\((.+)\)$/);
  if (rgbaMatch) {
    const parts = rgbaMatch[1].split(",").map(p => p.trim());
    if (parts.length !== 4) return null;

    const [r, g, b, a] = parts.map(Number);

    const validRGB =
      [r, g, b].every(n => Number.isInteger(n) && n >= 0 && n <= 255);

    const validAlpha =
      !isNaN(a) && a >= 0 && a <= 1;

    return validRGB && validAlpha ? value : null;
  }

  // HSL
  const hslMatch = value.match(/^hsl\((.+)\)$/);
  if (hslMatch) {
    const parts = hslMatch[1].split(",").map(p => p.trim());
    if (parts.length !== 3) return null;

    const h = Number(parts[0]);
    const s = parts[1];
    const l = parts[2];

    const validH = h >= 0 && h <= 360;
    const validS = /^\d+%$/.test(s) && Number(s.slice(0, -1)) <= 100;
    const validL = /^\d+%$/.test(l) && Number(l.slice(0, -1)) <= 100;

    return validH && validS && validL ? value : null;
  }

  // HSLA
  const hslaMatch = value.match(/^hsla\((.+)\)$/);
  if (hslaMatch) {
    const parts = hslaMatch[1].split(",").map(p => p.trim());
    if (parts.length !== 4) return null;

    const h = Number(parts[0]);
    const s = parts[1];
    const l = parts[2];
    const a = Number(parts[3]);

    const validH = h >= 0 && h <= 360;
    const validS = /^\d+%$/.test(s) && Number(s.slice(0, -1)) <= 100;
    const validL = /^\d+%$/.test(l) && Number(l.slice(0, -1)) <= 100;
    const validA = a >= 0 && a <= 1;

    return validH && validS && validL && validA ? value : null;
  }

  return null;
}
  function resolveColor(token) {
    if (!token) return null;

    // arbitrary: [#fff] or [rgb(...)]
    if (token.startsWith("[") && token.endsWith("]")) {
      return parseArbitraryColor(token.slice(1, -1));
    }

    // palette shade: red-500
    const shadeMatch = token.match(/^([a-z]+)-(\d+)$/);
    if (shadeMatch) {
      const [, colorName, shade] = shadeMatch;
      return PALETTE[colorName]?.[Number(shade)] ?? null;
    }

    // palette base: orange → 500
    if (PALETTE[token]) {
      return PALETTE[token][500] ?? PALETTE[token].DEFAULT ?? null;
    }

    // css named color
    if (CSS_NAMED_COLORS.has(token.toLowerCase())) {
      return token.toLowerCase();
    }

    return null;
  }

  // ============================================================
  // PARSERS
  // ============================================================

  // ── Colors ───────────────────────────────────────────────────
  const TEXT_SIZE_KEYWORDS = new Set([
    "xs","sm","base","lg","xl","2xl","3xl","4xl",
    "left","center","right","justify",
  ]);

  function parseColor(className) {
    if (className.startsWith("chai-bg-")) {
      const value = resolveColor(className.slice("chai-bg-".length));
      if (value) return { backgroundColor: value };
    }
    if (className.startsWith("chai-text-")) {
      const token = className.slice("chai-text-".length);
      if (TEXT_SIZE_KEYWORDS.has(token)) return {};
      const value = resolveColor(token);
      if (value) return { color: value };
    }
    return {};
  }

  // ── Spacing ──────────────────────────────────────────────────
  function toRem(n) {
    const num = parseFloat(n);
    if (isNaN(num)) return null;
    return `${num * 0.25}rem`;
  }

  const SPACING_MAP = {
    "chai-p-":  (n) => ({ padding: toRem(n) }),
    "chai-pt-": (n) => ({ paddingTop: toRem(n) }),
    "chai-pb-": (n) => ({ paddingBottom: toRem(n) }),
    "chai-pl-": (n) => ({ paddingLeft: toRem(n) }),
    "chai-pr-": (n) => ({ paddingRight: toRem(n) }),
    "chai-px-": (n) => ({ paddingLeft: toRem(n), paddingRight: toRem(n) }),
    "chai-py-": (n) => ({ paddingTop: toRem(n), paddingBottom: toRem(n) }),
    "chai-m-":  (n) => ({ margin: toRem(n) }),
    "chai-mt-": (n) => ({ marginTop: toRem(n) }),
    "chai-mb-": (n) => ({ marginBottom: toRem(n) }),
    "chai-ml-": (n) => ({ marginLeft: toRem(n) }),
    "chai-mr-": (n) => ({ marginRight: toRem(n) }),
    "chai-mx-": (n) => ({ marginLeft: toRem(n), marginRight: toRem(n) }),
    "chai-my-": (n) => ({ marginTop: toRem(n), marginBottom: toRem(n) }),
  };

  const SPACING_SPECIAL = {
    "chai-mx-auto": { marginLeft: "auto", marginRight: "auto" },
    "chai-my-auto": { marginTop: "auto", marginBottom: "auto" },
    "chai-m-auto":  { margin: "auto" },
  };

  function parseSpacing(className) {
    if (SPACING_SPECIAL[className]) return SPACING_SPECIAL[className];
    for (const [prefix, styleFn] of Object.entries(SPACING_MAP)) {
      if (className.startsWith(prefix)) {
        const styles = styleFn(className.slice(prefix.length));
        const valid = Object.fromEntries(
          Object.entries(styles).filter(([, v]) => v !== null)
        );
        return Object.keys(valid).length ? valid : {};
      }
    }
    return {};
  }

  // ── Typography ───────────────────────────────────────────────
  const FONT_SIZES = {
    xs:"0.75rem", sm:"0.875rem", base:"1rem", lg:"1.125rem",
    xl:"1.25rem", "2xl":"1.5rem", "3xl":"1.875rem",
    "4xl":"2.25rem", "5xl":"3rem", "6xl":"3.75rem",
  };

  const FONT_WEIGHTS = {
    thin:"100", light:"300", normal:"400", medium:"500",
    semibold:"600", bold:"700", extrabold:"800", black:"900",
  };

  const TEXT_ALIGNS = { left:"left", center:"center", right:"right", justify:"justify" };

  const TRACKING = {
    tighter:"-0.05em", tight:"-0.025em", normal:"0em",
    wide:"0.025em", wider:"0.05em", widest:"0.1em",
  };

  const STATIC_TYPOGRAPHY = {
    "chai-italic":              { fontStyle: "italic" },
    "chai-not-italic":          { fontStyle: "normal" },
    "chai-uppercase":           { textTransform: "uppercase" },
    "chai-lowercase":           { textTransform: "lowercase" },
    "chai-capitalize":          { textTransform: "capitalize" },
    "chai-normal-case":         { textTransform: "none" },
    "chai-underline":           { textDecoration: "underline" },
    "chai-line-through":        { textDecoration: "line-through" },
    "chai-no-underline":        { textDecoration: "none" },
    "chai-break-normal":        { wordBreak: "normal" },
    "chai-break-words":         { wordBreak: "break-word" },
    "chai-break-all":           { wordBreak: "break-all" },
    "chai-whitespace-normal":   { whiteSpace: "normal" },
    "chai-whitespace-nowrap":   { whiteSpace: "nowrap" },
    "chai-whitespace-pre":      { whiteSpace: "pre" },
    "chai-whitespace-pre-wrap": { whiteSpace: "pre-wrap" },
  };

  function parseTypography(className) {
    if (STATIC_TYPOGRAPHY[className]) return STATIC_TYPOGRAPHY[className];
    if (className.startsWith("chai-text-")) {
      const token = className.slice("chai-text-".length);
      if (FONT_SIZES[token])  return { fontSize: FONT_SIZES[token] };
      if (TEXT_ALIGNS[token]) return { textAlign: TEXT_ALIGNS[token] };
    }
    if (className.startsWith("chai-font-")) {
      const token = className.slice("chai-font-".length);
      if (FONT_WEIGHTS[token]) return { fontWeight: FONT_WEIGHTS[token] };
    }
    if (className.startsWith("chai-leading-")) {
      const token = className.slice("chai-leading-".length);
      const NAMED_LEADING = {
        none:"1", tight:"1.25", snug:"1.375",
        normal:"1.5", relaxed:"1.625", loose:"2",
      };
      if (NAMED_LEADING[token]) return { lineHeight: NAMED_LEADING[token] };
      const num = parseFloat(token);
      if (!isNaN(num)) return { lineHeight: `${num * 0.25}rem` };
    }
    if (className.startsWith("chai-tracking-")) {
      const token = className.slice("chai-tracking-".length);
      if (TRACKING[token]) return { letterSpacing: TRACKING[token] };
    }
    return {};
  }

  // ── Borders ──────────────────────────────────────────────────
  const BORDER_RADIUS = {
    none:"0", sm:"0.125rem", DEFAULT:"0.25rem", md:"0.375rem",
    lg:"0.5rem", xl:"0.75rem", "2xl":"1rem", "3xl":"1.5rem", full:"9999px",
  };

  const BORDER_STYLES = new Set(["solid","dashed","dotted","double","none","hidden"]);

  const STATIC_BORDERS = {
    "chai-border":   { borderWidth: "1px" },
    "chai-border-t": { borderTopWidth: "1px" },
    "chai-border-b": { borderBottomWidth: "1px" },
    "chai-border-l": { borderLeftWidth: "1px" },
    "chai-border-r": { borderRightWidth: "1px" },
    "chai-rounded":  { borderRadius: BORDER_RADIUS.DEFAULT },
  };

  function parseBorders(className) {
    if (STATIC_BORDERS[className]) return STATIC_BORDERS[className];
    if (className.startsWith("chai-rounded-")) {
      const token = className.slice("chai-rounded-".length);
      if (BORDER_RADIUS[token]) return { borderRadius: BORDER_RADIUS[token] };
    }
    if (className.startsWith("chai-border-")) {
      const token = className.slice("chai-border-".length);
      const num = parseFloat(token);
      if (!isNaN(num) && String(num) === token) return { borderWidth: `${num}px` };
      if (BORDER_STYLES.has(token)) return { borderStyle: token };
      const sideMatch = token.match(/^(t|b|l|r)-(\d+)$/);
      if (sideMatch) {
        const SIDE_MAP = { t:"borderTopWidth", b:"borderBottomWidth", l:"borderLeftWidth", r:"borderRightWidth" };
        return { [SIDE_MAP[sideMatch[1]]]: `${sideMatch[2]}px` };
      }
      const color = resolveColor(token);
      if (color) return { borderColor: color };
    }
    return {};
  }

  // ── Layout ───────────────────────────────────────────────────
  const STATIC_LAYOUT = {
    "chai-block":             { display: "block" },
    "chai-inline":            { display: "inline" },
    "chai-inline-block":      { display: "inline-block" },
    "chai-hidden":            { display: "none" },
    "chai-flex":              { display: "flex" },
    "chai-inline-flex":       { display: "inline-flex" },
    "chai-grid":              { display: "grid" },
    "chai-inline-grid":       { display: "inline-grid" },
    "chai-flex-row":          { flexDirection: "row" },
    "chai-flex-row-reverse":  { flexDirection: "row-reverse" },
    "chai-flex-col":          { flexDirection: "column" },
    "chai-flex-col-reverse":  { flexDirection: "column-reverse" },
    "chai-flex-wrap":         { flexWrap: "wrap" },
    "chai-flex-nowrap":       { flexWrap: "nowrap" },
    "chai-flex-wrap-reverse": { flexWrap: "wrap-reverse" },
    "chai-flex-1":            { flex: "1 1 0%" },
    "chai-flex-auto":         { flex: "1 1 auto" },
    "chai-flex-none":         { flex: "none" },
    "chai-grow":              { flexGrow: "1" },
    "chai-grow-0":            { flexGrow: "0" },
    "chai-shrink":            { flexShrink: "1" },
    "chai-shrink-0":          { flexShrink: "0" },
    "chai-justify-start":     { justifyContent: "flex-start" },
    "chai-justify-end":       { justifyContent: "flex-end" },
    "chai-justify-center":    { justifyContent: "center" },
    "chai-justify-between":   { justifyContent: "space-between" },
    "chai-justify-around":    { justifyContent: "space-around" },
    "chai-justify-evenly":    { justifyContent: "space-evenly" },
    "chai-items-start":       { alignItems: "flex-start" },
    "chai-items-end":         { alignItems: "flex-end" },
    "chai-items-center":      { alignItems: "center" },
    "chai-items-stretch":     { alignItems: "stretch" },
    "chai-items-baseline":    { alignItems: "baseline" },
    "chai-self-auto":         { alignSelf: "auto" },
    "chai-self-start":        { alignSelf: "flex-start" },
    "chai-self-end":          { alignSelf: "flex-end" },
    "chai-self-center":       { alignSelf: "center" },
    "chai-self-stretch":      { alignSelf: "stretch" },
    "chai-static":            { position: "static" },
    "chai-relative":          { position: "relative" },
    "chai-absolute":          { position: "absolute" },
    "chai-fixed":             { position: "fixed" },
    "chai-sticky":            { position: "sticky" },
    "chai-overflow-auto":     { overflow: "auto" },
    "chai-overflow-hidden":   { overflow: "hidden" },
    "chai-overflow-visible":  { overflow: "visible" },
    "chai-overflow-scroll":   { overflow: "scroll" },
    "chai-overflow-x-auto":   { overflowX: "auto" },
    "chai-overflow-x-hidden": { overflowX: "hidden" },
    "chai-overflow-y-auto":   { overflowY: "auto" },
    "chai-overflow-y-hidden": { overflowY: "hidden" },
    "chai-w-full":            { width: "100%" },
    "chai-w-screen":          { width: "100vw" },
    "chai-w-auto":            { width: "auto" },
    "chai-w-fit":             { width: "fit-content" },
    "chai-h-full":            { height: "100%" },
    "chai-h-screen":          { height: "100vh" },
    "chai-h-auto":            { height: "auto" },
    "chai-h-fit":             { height: "fit-content" },
    "chai-min-w-full":        { minWidth: "100%" },
    "chai-min-h-full":        { minHeight: "100%" },
    "chai-min-h-screen":      { minHeight: "100vh" },
    "chai-max-w-full":        { maxWidth: "100%" },
    "chai-max-w-screen":      { maxWidth: "100vw" },
    "chai-max-h-full":        { maxHeight: "100%" },
    "chai-max-h-screen":      { maxHeight: "100vh" },
  };

  const DYNAMIC_LAYOUT = [
    ["chai-gap-x-",    (n) => { const v = toRem(n); return v ? { columnGap: v } : null; }],
    ["chai-gap-y-",    (n) => { const v = toRem(n); return v ? { rowGap: v } : null; }],
    ["chai-gap-",      (n) => { const v = toRem(n); return v ? { gap: v } : null; }],
    ["chai-grid-cols-",(n) => { const i = parseInt(n); return !isNaN(i) ? { gridTemplateColumns: `repeat(${i}, minmax(0, 1fr))` } : null; }],
    ["chai-grid-rows-",(n) => { const i = parseInt(n); return !isNaN(i) ? { gridTemplateRows: `repeat(${i}, minmax(0, 1fr))` } : null; }],
    ["chai-col-span-", (n) => { const i = parseInt(n); return !isNaN(i) ? { gridColumn: `span ${i} / span ${i}` } : null; }],
    ["chai-w-",        (n) => { const v = toRem(n); return v ? { width: v } : null; }],
    ["chai-h-",        (n) => { const v = toRem(n); return v ? { height: v } : null; }],
    ["chai-min-w-",    (n) => { const v = toRem(n); return v ? { minWidth: v } : null; }],
    ["chai-min-h-",    (n) => { const v = toRem(n); return v ? { minHeight: v } : null; }],
    ["chai-max-w-",    (n) => { const v = toRem(n); return v ? { maxWidth: v } : null; }],
    ["chai-max-h-",    (n) => { const v = toRem(n); return v ? { maxHeight: v } : null; }],
    ["chai-top-",      (n) => { const v = toRem(n); return v ? { top: v } : null; }],
    ["chai-bottom-",   (n) => { const v = toRem(n); return v ? { bottom: v } : null; }],
    ["chai-left-",     (n) => { const v = toRem(n); return v ? { left: v } : null; }],
    ["chai-right-",    (n) => { const v = toRem(n); return v ? { right: v } : null; }],
    ["chai-z-",        (n) => { const i = parseInt(n); return !isNaN(i) ? { zIndex: String(i) } : null; }],
    ["chai-order-",    (n) => { const i = parseInt(n); return !isNaN(i) ? { order: String(i) } : null; }],
  ];

  function parseLayout(className) {
    if (STATIC_LAYOUT[className]) return STATIC_LAYOUT[className];
    for (const [prefix, handler] of DYNAMIC_LAYOUT) {
      if (className.startsWith(prefix)) {
        const result = handler(className.slice(prefix.length));
        if (result) return result;
      }
    }
    return {};
  }

  // ── Shadows & Opacity ────────────────────────────────────────
const BOX_SHADOWS = {
  "chai-shadow-sm":   "0 1px 2px 0 rgba(0,0,0,0.15)",
  "chai-shadow":      "0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 2px -1px rgba(0,0,0,0.15)",
  "chai-shadow-md":   "0 4px 6px -1px rgba(0,0,0,0.25), 0 2px 4px -2px rgba(0,0,1)",
  "chai-shadow-lg":   "0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -4px rgba(0,0,0,0.2)",
  "chai-shadow-xl":   "0 20px 25px -5px rgba(0,0,0,0.35), 0 8px 10px -6px rgba(0,0,0,0.2)",
  "chai-shadow-2xl":  "0 25px 50px -12px rgba(0,0,0,0.45)",
  "chai-shadow-inner":"inset 0 2px 4px 0 rgba(0,0,0,0.2)",
  "chai-shadow-none": "none",
};

  const OPACITY_VALUES = {
    "0":"0","5":"0.05","10":"0.1","20":"0.2","25":"0.25",
    "30":"0.3","40":"0.4","50":"0.5","60":"0.6","70":"0.7",
    "75":"0.75","80":"0.8","90":"0.9","95":"0.95","100":"1",
  };

  const STATIC_EFFECTS = {
    "chai-visible":              { visibility: "visible" },
    "chai-invisible":            { visibility: "hidden" },
    "chai-pointer-events-none":  { pointerEvents: "none" },
    "chai-pointer-events-auto":  { pointerEvents: "auto" },
    "chai-select-none":          { userSelect: "none" },
    "chai-select-text":          { userSelect: "text" },
    "chai-select-all":           { userSelect: "all" },
    "chai-select-auto":          { userSelect: "auto" },
    "chai-cursor-auto":          { cursor: "auto" },
    "chai-cursor-default":       { cursor: "default" },
    "chai-cursor-pointer":       { cursor: "pointer" },
    "chai-cursor-wait":          { cursor: "wait" },
    "chai-cursor-text":          { cursor: "text" },
    "chai-cursor-move":          { cursor: "move" },
    "chai-cursor-not-allowed":   { cursor: "not-allowed" },
    "chai-cursor-grab":          { cursor: "grab" },
    "chai-cursor-grabbing":      { cursor: "grabbing" },
    "chai-resize-none":          { resize: "none" },
    "chai-resize-y":             { resize: "vertical" },
    "chai-resize-x":             { resize: "horizontal" },
    "chai-resize":               { resize: "both" },
  };

  function parseShadows(className) {
    if (BOX_SHADOWS[className])   return { boxShadow: BOX_SHADOWS[className] };
    if (STATIC_EFFECTS[className]) return STATIC_EFFECTS[className];
    if (className.startsWith("chai-opacity-")) {
      const token = className.slice("chai-opacity-".length);
      if (OPACITY_VALUES[token]) return { opacity: OPACITY_VALUES[token] };
    }
    return {};
  }

  // ============================================================
  // MASTER PARSER
  // ============================================================

  const PARSERS = [
    parseColor,
    parseSpacing,
    parseTypography,
    parseBorders,
    parseLayout,
    parseShadows,
  ];

  function parse(className) {
    return PARSERS.reduce((acc, parserFn) => {
      return { ...acc, ...parserFn(className) };
    }, {});
  }

  // ============================================================
  // SCANNER
  // ============================================================

  const CHAI_PREFIX = "chai-";

  function extractChaiClasses(element) {
    return Array.from(element.classList).filter((cls) =>
      cls.startsWith(CHAI_PREFIX)
    );
  }

  function scanElements(root) {
    const results = [];
    const elements = root.querySelectorAll('[class*="chai-"]');
    elements.forEach((element) => {
      const chaiClasses = extractChaiClasses(element);
      if (chaiClasses.length > 0) results.push({ element, chaiClasses });
    });
    return results;
  }

  // ============================================================
  // APPLIER
  // ============================================================

  function applyStyles(element, styles) {
    Object.entries(styles).forEach(([property, value]) => {
      if (value !== null && value !== undefined && value !== "") {
        element.style[property] = value;
      }
    });
  }

  function removeChaiClasses(element, chaiClasses) {
    chaiClasses.forEach((cls) => element.classList.remove(cls));
    if (element.classList.length === 0) element.removeAttribute("class");
  }

  function processElement(element, chaiClasses) {
    const mergedStyles = chaiClasses.reduce((acc, cls) => {
      return { ...acc, ...parse(cls) };
    }, {});
    applyStyles(element, mergedStyles);
    removeChaiClasses(element, chaiClasses);
  }

  // ============================================================
  // CORE ENGINE
  // ============================================================

  function run(root) {
    root = root || document.body;
    // process root itself if it has chai-* classes
    if (root !== document.body) {
      const chaiClasses = extractChaiClasses(root);
      if (chaiClasses.length > 0) processElement(root, chaiClasses);
    }
    // process all descendants
    const elements = scanElements(root);
    elements.forEach(({ element, chaiClasses }) => {
      processElement(element, chaiClasses);
    });
  }

  function observeDOM() {
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType !== 1) return; // only element nodes
          run(node);
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return observer;
  }

  function init() {
    run();
    observeDOM();
  }

  // ============================================================
  // BOOT
  // ============================================================

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // ── Expose public API ─────────────────────────────────────────
  // for npm / module environments
  var ChaiWind = { init: init, run: run, parse: parse };

  // CommonJS (Node / older bundlers)
  if (typeof module !== "undefined" && module.exports) {
    module.exports = ChaiWind;
  }

  // ES Module default export via global
  global.ChaiWind = ChaiWind;

}(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this));