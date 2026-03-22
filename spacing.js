// ─────────────────────────────────────────
//  ChaiWind — spacing.js
//  Load this BEFORE chaiwind.js
// ─────────────────────────────────────────

window.ChaiSpacing = {

  // n × 0.25rem — same scale as Tailwind
  MAP: {
    "chai-p-":  (n) => ({ padding:       n }),
    "chai-pt-": (n) => ({ paddingTop:    n }),
    "chai-pb-": (n) => ({ paddingBottom: n }),
    "chai-pl-": (n) => ({ paddingLeft:   n }),
    "chai-pr-": (n) => ({ paddingRight:  n }),
    "chai-px-": (n) => ({ paddingLeft:   n, paddingRight:  n }),
    "chai-py-": (n) => ({ paddingTop:    n, paddingBottom: n }),
    "chai-m-":  (n) => ({ margin:        n }),
    "chai-mt-": (n) => ({ marginTop:     n }),
    "chai-mb-": (n) => ({ marginBottom:  n }),
    "chai-ml-": (n) => ({ marginLeft:    n }),
    "chai-mr-": (n) => ({ marginRight:   n }),
    "chai-mx-": (n) => ({ marginLeft:    n, marginRight:   n }),
    "chai-my-": (n) => ({ marginTop:     n, marginBottom:  n }),
  },

  SPECIAL: {
    "chai-mx-auto": { marginLeft: "auto", marginRight: "auto" },
    "chai-my-auto": { marginTop:  "auto", marginBottom: "auto" },
    "chai-m-auto":  { margin: "auto" },
  },

};
