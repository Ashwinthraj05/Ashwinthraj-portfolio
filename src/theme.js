/**
 * ══════════════════════════════════════════════════════════
 *  PORTFOLIO THEME CONFIG  —  edit THIS file to restyle everything
 *
 *  To change the whole accent colour:
 *    1. Update `accent`, `accentDeep`, `accentLight` below
 *    2. Save — hot-reload applies it instantly in dev,
 *       or rebuild for production.
 *    No other files need touching.
 *
 *  BACKGROUNDS / TEXT live in App.css :root (structural colours).
 *  FONTS: swap the Google Fonts @import at the top of App.css.
 * ══════════════════════════════════════════════════════════
 */

/** Converts #rrggbb → "rgba(r,g,b,alpha)" */
function h2r(hex, alpha) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0,2), 16);
  const g = parseInt(h.slice(2,4), 16);
  const b = parseInt(h.slice(4,6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export const THEME = {
  // ─── ACCENT COLOUR ────────────────────────────────────
  accent:      "#ea323e",   // ← CHANGE THIS to repaint the whole site
  accentDeep:  "#c1222d",   // darker  (hover, gradient end)
  accentLight: "#f4727a",   // lighter (labels, tints)

  // ─── DERIVED TOKENS (auto-computed — no manual edits needed) ──
  get glow()    { return h2r(this.accent,      0.15); },
  get glowLg()  { return h2r(this.accent,      0.26); },
  get glowSm()  { return h2r(this.accent,      0.08); },
  get b2()      { return h2r(this.accent,      0.32); },
  get b3()      { return h2r(this.accent,      0.12); },
  get shadowA() { return `0 6px 32px ${h2r(this.accent, 0.20)}`; },

  gradAngle: "135deg",
};

/**
 * Injects all accent tokens onto <html> as CSS custom properties.
 * Called once on app mount via ThemeContext — after this every
 * var(--a), var(--glow), var(--grad) etc. across the entire
 * stylesheet reflects the THEME values above.
 */
export function applyTheme() {
  const s = document.documentElement.style;
  const T = THEME;
  s.setProperty("--a",        T.accent);
  s.setProperty("--a-d",      T.accentDeep);
  s.setProperty("--a-l",      T.accentLight);
  s.setProperty("--glow",     T.glow);
  s.setProperty("--glow-lg",  T.glowLg);
  s.setProperty("--b2",       T.b2);
  s.setProperty("--b3",       T.b3);
  s.setProperty("--shadow-a", T.shadowA);
  s.setProperty("--grad",
    `linear-gradient(${T.gradAngle}, ${T.accent}, ${T.accentDeep})`);
  s.setProperty("--grad-r",
    `linear-gradient(${T.gradAngle}, ${T.accentDeep}, ${T.accent})`);
  s.setProperty("--grad-soft",
    `linear-gradient(${T.gradAngle}, ${T.glowSm}, ${h2r(T.accentDeep, 0.08)})`);
  s.setProperty("--grad-text",
    `linear-gradient(120deg, ${T.accentLight}, ${T.accent})`);
}
