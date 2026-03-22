// ─────────────────────────────────────────
//  ChaiWind — borders.js
//  Load this BEFORE chaiwind.js
// ─────────────────────────────────────────

window.ChaiBorders = {

  RADIUS: {
    none:"0", sm:"0.125rem", DEFAULT:"0.25rem", md:"0.375rem",
    lg:"0.5rem", xl:"0.75rem", "2xl":"1rem", "3xl":"1.5rem", full:"9999px",
  },

  STYLES: ["solid", "dashed", "dotted", "double", "none", "hidden"],

  STATIC: {
    "chai-border":   { borderWidth: "1px" },
    "chai-border-t": { borderTopWidth: "1px" },
    "chai-border-b": { borderBottomWidth: "1px" },
    "chai-border-l": { borderLeftWidth: "1px" },
    "chai-border-r": { borderRightWidth: "1px" },
    "chai-rounded":  { borderRadius: "0.25rem" },
  },

};
