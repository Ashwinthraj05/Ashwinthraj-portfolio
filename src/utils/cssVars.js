// Small helpers for reading the live CSS custom properties so that
// canvas/Three.js code automatically follows whatever theme + accent
// is currently active — no hardcoded color tables to maintain.

export function getCSSVar(name, fallback = "#7c8bff") {
  if (typeof window === "undefined") return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

// "#7c8bff" -> "124,139,255"
export function hexToRgbTriplet(hex) {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const num = parseInt(h, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `${r},${g},${b}`;
}

// "#7c8bff", 0.4 -> "rgba(124,139,255,0.4)"
export function hexToRgba(hex, alpha) {
  return `rgba(${hexToRgbTriplet(hex)},${alpha})`;
}
