// ─────────────────────────────────────────
//  ChaiWind — shadows.js
//  Load this BEFORE chaiwind.js
// ─────────────────────────────────────────

window.ChaiShadows = {

  BOX_SHADOWS: {
    "chai-shadow-sm":    "0 1px 2px 0 rgba(0,0,0,0.15)",
    "chai-shadow":       "0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 2px -1px rgba(0,0,0,0.15)",
    "chai-shadow-md":    "0 4px 6px -1px rgba(0,0,0,0.25), 0 2px 4px -2px rgba(0,0,0,0.1)",
    "chai-shadow-lg":    "0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -4px rgba(0,0,0,0.2)",
    "chai-shadow-xl":    "0 20px 25px -5px rgba(0,0,0,0.35), 0 8px 10px -6px rgba(0,0,0,0.2)",
    "chai-shadow-2xl":   "0 25px 50px -12px rgba(0,0,0,0.45)",
    "chai-shadow-inner": "inset 0 2px 4px 0 rgba(0,0,0,0.2)",
    "chai-shadow-none":  "none",
  },

  OPACITY: {
    "0":"0", "5":"0.05", "10":"0.1", "20":"0.2", "25":"0.25",
    "30":"0.3", "40":"0.4", "50":"0.5", "60":"0.6", "70":"0.7",
    "75":"0.75", "80":"0.8", "90":"0.9", "95":"0.95", "100":"1",
  },

  STATIC: {
    "chai-visible":             { visibility: "visible" },
    "chai-invisible":           { visibility: "hidden" },
    "chai-pointer-events-none": { pointerEvents: "none" },
    "chai-pointer-events-auto": { pointerEvents: "auto" },
    "chai-select-none":         { userSelect: "none" },
    "chai-select-text":         { userSelect: "text" },
    "chai-select-all":          { userSelect: "all" },
    "chai-select-auto":         { userSelect: "auto" },
    "chai-cursor-auto":         { cursor: "auto" },
    "chai-cursor-default":      { cursor: "default" },
    "chai-cursor-pointer":      { cursor: "pointer" },
    "chai-cursor-wait":         { cursor: "wait" },
    "chai-cursor-text":         { cursor: "text" },
    "chai-cursor-move":         { cursor: "move" },
    "chai-cursor-not-allowed":  { cursor: "not-allowed" },
    "chai-cursor-grab":         { cursor: "grab" },
    "chai-cursor-grabbing":     { cursor: "grabbing" },
    "chai-resize-none":         { resize: "none" },
    "chai-resize-y":            { resize: "vertical" },
    "chai-resize-x":            { resize: "horizontal" },
    "chai-resize":              { resize: "both" },
  },

};
