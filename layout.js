// ─────────────────────────────────────────
//  ChaiWind — layout.js
//  Load this BEFORE chaiwind.js
// ─────────────────────────────────────────

window.ChaiLayout = {

  STATIC: {
    // display
    "chai-block":             { display: "block" },
    "chai-inline":            { display: "inline" },
    "chai-inline-block":      { display: "inline-block" },
    "chai-hidden":            { display: "none" },
    "chai-flex":              { display: "flex" },
    "chai-inline-flex":       { display: "inline-flex" },
    "chai-grid":              { display: "grid" },
    "chai-inline-grid":       { display: "inline-grid" },
    // flex direction
    "chai-flex-row":          { flexDirection: "row" },
    "chai-flex-row-reverse":  { flexDirection: "row-reverse" },
    "chai-flex-col":          { flexDirection: "column" },
    "chai-flex-col-reverse":  { flexDirection: "column-reverse" },
    // flex wrap
    "chai-flex-wrap":         { flexWrap: "wrap" },
    "chai-flex-nowrap":       { flexWrap: "nowrap" },
    "chai-flex-wrap-reverse": { flexWrap: "wrap-reverse" },
    // flex sizing
    "chai-flex-1":            { flex: "1 1 0%" },
    "chai-flex-auto":         { flex: "1 1 auto" },
    "chai-flex-none":         { flex: "none" },
    "chai-grow":              { flexGrow: "1" },
    "chai-grow-0":            { flexGrow: "0" },
    "chai-shrink":            { flexShrink: "1" },
    "chai-shrink-0":          { flexShrink: "0" },
    // justify
    "chai-justify-start":     { justifyContent: "flex-start" },
    "chai-justify-end":       { justifyContent: "flex-end" },
    "chai-justify-center":    { justifyContent: "center" },
    "chai-justify-between":   { justifyContent: "space-between" },
    "chai-justify-around":    { justifyContent: "space-around" },
    "chai-justify-evenly":    { justifyContent: "space-evenly" },
    // align items
    "chai-items-start":       { alignItems: "flex-start" },
    "chai-items-end":         { alignItems: "flex-end" },
    "chai-items-center":      { alignItems: "center" },
    "chai-items-stretch":     { alignItems: "stretch" },
    "chai-items-baseline":    { alignItems: "baseline" },
    // align self
    "chai-self-auto":         { alignSelf: "auto" },
    "chai-self-start":        { alignSelf: "flex-start" },
    "chai-self-end":          { alignSelf: "flex-end" },
    "chai-self-center":       { alignSelf: "center" },
    "chai-self-stretch":      { alignSelf: "stretch" },
    // position
    "chai-static":            { position: "static" },
    "chai-relative":          { position: "relative" },
    "chai-absolute":          { position: "absolute" },
    "chai-fixed":             { position: "fixed" },
    "chai-sticky":            { position: "sticky" },
    // overflow
    "chai-overflow-auto":     { overflow: "auto" },
    "chai-overflow-hidden":   { overflow: "hidden" },
    "chai-overflow-visible":  { overflow: "visible" },
    "chai-overflow-scroll":   { overflow: "scroll" },
    "chai-overflow-x-auto":   { overflowX: "auto" },
    "chai-overflow-x-hidden": { overflowX: "hidden" },
    "chai-overflow-y-auto":   { overflowY: "auto" },
    "chai-overflow-y-hidden": { overflowY: "hidden" },
    // sizing
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
  },

  // handlers receive raw suffix — toRem is called inside each one
  DYNAMIC: [
    ["chai-gap-x-",    (n) => { const v = `${parseFloat(n)*0.25}rem`; return isNaN(parseFloat(n)) ? null : { columnGap: v }; }],
    ["chai-gap-y-",    (n) => { const v = `${parseFloat(n)*0.25}rem`; return isNaN(parseFloat(n)) ? null : { rowGap: v }; }],
    ["chai-gap-",      (n) => { const v = `${parseFloat(n)*0.25}rem`; return isNaN(parseFloat(n)) ? null : { gap: v }; }],
    ["chai-grid-cols-",(n) => { const i = parseInt(n); return isNaN(i) ? null : { gridTemplateColumns: `repeat(${i}, minmax(0, 1fr))` }; }],
    ["chai-grid-rows-",(n) => { const i = parseInt(n); return isNaN(i) ? null : { gridTemplateRows:    `repeat(${i}, minmax(0, 1fr))` }; }],
    ["chai-col-span-", (n) => { const i = parseInt(n); return isNaN(i) ? null : { gridColumn: `span ${i} / span ${i}` }; }],
    ["chai-w-",        (n) => { const v = `${parseFloat(n)*0.25}rem`; return isNaN(parseFloat(n)) ? null : { width: v }; }],
    ["chai-h-",        (n) => { const v = `${parseFloat(n)*0.25}rem`; return isNaN(parseFloat(n)) ? null : { height: v }; }],
    ["chai-min-w-",    (n) => { const v = `${parseFloat(n)*0.25}rem`; return isNaN(parseFloat(n)) ? null : { minWidth: v }; }],
    ["chai-min-h-",    (n) => { const v = `${parseFloat(n)*0.25}rem`; return isNaN(parseFloat(n)) ? null : { minHeight: v }; }],
    ["chai-max-w-",    (n) => { const v = `${parseFloat(n)*0.25}rem`; return isNaN(parseFloat(n)) ? null : { maxWidth: v }; }],
    ["chai-max-h-",    (n) => { const v = `${parseFloat(n)*0.25}rem`; return isNaN(parseFloat(n)) ? null : { maxHeight: v }; }],
    ["chai-top-",      (n) => { const v = `${parseFloat(n)*0.25}rem`; return isNaN(parseFloat(n)) ? null : { top: v }; }],
    ["chai-bottom-",   (n) => { const v = `${parseFloat(n)*0.25}rem`; return isNaN(parseFloat(n)) ? null : { bottom: v }; }],
    ["chai-left-",     (n) => { const v = `${parseFloat(n)*0.25}rem`; return isNaN(parseFloat(n)) ? null : { left: v }; }],
    ["chai-right-",    (n) => { const v = `${parseFloat(n)*0.25}rem`; return isNaN(parseFloat(n)) ? null : { right: v }; }],
    ["chai-z-",        (n) => { const i = parseInt(n); return isNaN(i) ? null : { zIndex: String(i) }; }],
    ["chai-order-",    (n) => { const i = parseInt(n); return isNaN(i) ? null : { order: String(i) }; }],
  ],

};