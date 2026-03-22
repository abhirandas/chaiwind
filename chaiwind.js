
(function (global) {
  "use strict";

  // ── Pull data from the separate files ───────────────────────
  const PALETTE    = window.ChaiPalette;
  const TYPO       = window.ChaiTypography;
  const SPACING    = window.ChaiSpacing;
  const BORDERS    = window.ChaiBorders;
  const LAYOUT     = window.ChaiLayout;
  const SHADOWS    = window.ChaiShadows;

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

    const hexMatch = value.match(/^#([0-9a-fA-F]{3,8})$/);
    if (hexMatch) {
      const len = hexMatch[1].length;
      if ([3, 4, 6, 8].includes(len)) return value;
      return null;
    }

    const rgbMatch = value.match(/^rgb\((.+)\)$/);
    if (rgbMatch) {
      const parts = rgbMatch[1].split(",").map(p => p.trim());
      if (parts.length !== 3) return null;
      const valid = parts.every(n => { const num = Number(n); return Number.isInteger(num) && num >= 0 && num <= 255; });
      return valid ? value : null;
    }

    const rgbaMatch = value.match(/^rgba\((.+)\)$/);
    if (rgbaMatch) {
      const parts = rgbaMatch[1].split(",").map(p => p.trim());
      if (parts.length !== 4) return null;
      const [r, g, b, a] = parts.map(Number);
      const validRGB = [r, g, b].every(n => Number.isInteger(n) && n >= 0 && n <= 255);
      const validAlpha = !isNaN(a) && a >= 0 && a <= 1;
      return validRGB && validAlpha ? value : null;
    }

    const hslMatch = value.match(/^hsl\((.+)\)$/);
    if (hslMatch) {
      const parts = hslMatch[1].split(",").map(p => p.trim());
      if (parts.length !== 3) return null;
      const h = Number(parts[0]); const s = parts[1]; const l = parts[2];
      const validH = h >= 0 && h <= 360;
      const validS = /^\d+%$/.test(s) && Number(s.slice(0, -1)) <= 100;
      const validL = /^\d+%$/.test(l) && Number(l.slice(0, -1)) <= 100;
      return validH && validS && validL ? value : null;
    }

    const hslaMatch = value.match(/^hsla\((.+)\)$/);
    if (hslaMatch) {
      const parts = hslaMatch[1].split(",").map(p => p.trim());
      if (parts.length !== 4) return null;
      const h = Number(parts[0]); const s = parts[1]; const l = parts[2]; const a = Number(parts[3]);
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
    if (token.startsWith("[") && token.endsWith("]")) {
      return parseArbitraryColor(token.slice(1, -1));
    }
    const shadeMatch = token.match(/^([a-z]+)-(\d+)$/);
    if (shadeMatch) {
      const [, colorName, shade] = shadeMatch;
      return PALETTE[colorName]?.[Number(shade)] ?? null;
    }
    if (PALETTE[token]) {
      return PALETTE[token][500] ?? PALETTE[token].DEFAULT ?? null;
    }
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

  function parseSpacing(className) {
    if (SPACING.SPECIAL[className]) return SPACING.SPECIAL[className];
    for (const [prefix, styleFn] of Object.entries(SPACING.MAP)) {
      if (className.startsWith(prefix)) {
        const raw = styleFn(toRem(className.slice(prefix.length)));
        const valid = Object.fromEntries(Object.entries(raw).filter(([, v]) => v !== null));
        return Object.keys(valid).length ? valid : {};
      }
    }
    return {};
  }

  // ── Typography ───────────────────────────────────────────────
  function parseTypography(className) {
    if (TYPO.STATIC[className]) return TYPO.STATIC[className];
    if (className.startsWith("chai-text-")) {
      const token = className.slice("chai-text-".length);
      if (TYPO.FONT_SIZES[token])  return { fontSize: TYPO.FONT_SIZES[token] };
      if (TYPO.TEXT_ALIGNS[token]) return { textAlign: TYPO.TEXT_ALIGNS[token] };
    }
    if (className.startsWith("chai-font-")) {
      const token = className.slice("chai-font-".length);
      if (TYPO.FONT_WEIGHTS[token]) return { fontWeight: TYPO.FONT_WEIGHTS[token] };
    }
    if (className.startsWith("chai-leading-")) {
      const token = className.slice("chai-leading-".length);
      if (TYPO.LINE_HEIGHTS[token]) return { lineHeight: TYPO.LINE_HEIGHTS[token] };
      const num = parseFloat(token);
      if (!isNaN(num)) return { lineHeight: `${num * 0.25}rem` };
    }
    if (className.startsWith("chai-tracking-")) {
      const token = className.slice("chai-tracking-".length);
      if (TYPO.TRACKING[token]) return { letterSpacing: TYPO.TRACKING[token] };
    }
    return {};
  }

  // ── Borders ──────────────────────────────────────────────────
  function parseBorders(className) {
    if (BORDERS.STATIC[className]) return BORDERS.STATIC[className];
    if (className.startsWith("chai-rounded-")) {
      const token = className.slice("chai-rounded-".length);
      if (BORDERS.RADIUS[token]) return { borderRadius: BORDERS.RADIUS[token] };
    }
    if (className.startsWith("chai-border-")) {
      const token = className.slice("chai-border-".length);
      const num = parseFloat(token);
      if (!isNaN(num) && String(num) === token) return { borderWidth: `${num}px` };
      if (BORDERS.STYLES.includes(token)) return { borderStyle: token };
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
  function parseLayout(className) {
    if (LAYOUT.STATIC[className]) return LAYOUT.STATIC[className];
    for (const [prefix, handler] of LAYOUT.DYNAMIC) {
      if (className.startsWith(prefix)) {
        const suffix = className.slice(prefix.length);
        const result = handler(suffix);
        if (result) return result;
      }
    }
    return {};
  }

  // ── Shadows ──────────────────────────────────────────────────
  function parseShadows(className) {
    if (SHADOWS.BOX_SHADOWS[className]) return { boxShadow: SHADOWS.BOX_SHADOWS[className] };
    if (SHADOWS.STATIC[className])      return SHADOWS.STATIC[className];
    if (className.startsWith("chai-opacity-")) {
      const token = className.slice("chai-opacity-".length);
      if (SHADOWS.OPACITY[token]) return { opacity: SHADOWS.OPACITY[token] };
    }
    return {};
  }

  // ============================================================
  // MASTER PARSER
  // ============================================================

  const PARSERS = [parseColor, parseSpacing, parseTypography, parseBorders, parseLayout, parseShadows];

  function parse(className) {
    return PARSERS.reduce((acc, fn) => ({ ...acc, ...fn(className) }), {});
  }

  // ============================================================
  // SCANNER
  // ============================================================

  function extractChaiClasses(element) {
    return Array.from(element.classList).filter(cls => cls.startsWith("chai-"));
  }

  function scanElements(root) {
    const results = [];
    root.querySelectorAll('[class*="chai-"]').forEach(element => {
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
    chaiClasses.forEach(cls => element.classList.remove(cls));
    if (element.classList.length === 0) element.removeAttribute("class");
  }

  function processElement(element, chaiClasses) {
    const mergedStyles = chaiClasses.reduce((acc, cls) => ({ ...acc, ...parse(cls) }), {});
    applyStyles(element, mergedStyles);
    removeChaiClasses(element, chaiClasses);
  }

  // ============================================================
  // CORE ENGINE
  // ============================================================

  function run(root) {
    root = root || document.body;
    if (root !== document.body) {
      const chaiClasses = extractChaiClasses(root);
      if (chaiClasses.length > 0) processElement(root, chaiClasses);
    }
    scanElements(root).forEach(({ element, chaiClasses }) => processElement(element, chaiClasses));
  }

  function observeDOM() {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType !== 1) return;
          run(node);
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return observer;
  }

  function init() {
    run();
    observeDOM();
  }


  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  var ChaiWind = { init, run, parse };
  if (typeof module !== "undefined" && module.exports) module.exports = ChaiWind;
  global.ChaiWind = ChaiWind;

}(typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : this));