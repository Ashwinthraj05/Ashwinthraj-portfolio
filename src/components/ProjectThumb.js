import React, { useId } from "react";

/* ════════════════════════════════════════════════════════
   Abstract project thumbnails — no photos needed.
   Pick a `shape` per project and it renders a clean
   gradient/wireframe illustration that always matches
   the active accent + theme.

   ✏️ AVAILABLE SHAPES:
     "blob"      → organic rounded blob
     "capsule"   → rotated pill / capsule
     "diamond"   → rotated rounded square
     "wireframe" → faceted crystal outline
     "orb"       → soft glowing circle

   Add a new one by adding a case to the switch below.
════════════════════════════════════════════════════════ */
export default function ProjectThumb({ shape = "blob", className = "" }) {
  const uid = useId().replace(/[:]/g, ""); // unique, valid-for-SVG id fragment
  const gradMain = `grad-main-${uid}`;
  const gradSoft = `grad-soft-${uid}`;

  const defs = (
    <defs>
      <linearGradient id={gradMain} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--a)" />
        <stop offset="100%" stopColor="var(--a-d)" />
      </linearGradient>
      <linearGradient id={gradSoft} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--a-l)" />
        <stop offset="100%" stopColor="var(--a)" />
      </linearGradient>
    </defs>
  );

  let shapeEl;
  switch (shape) {
    case "capsule":
      shapeEl = (
        <rect x="62" y="38" width="92" height="224" rx="46"
          fill={`url(#${gradSoft})`}
          transform="rotate(-20 108 150)" opacity="0.92" />
      );
      break;

    case "diamond":
      shapeEl = (
        <rect x="62" y="62" width="176" height="176" rx="22"
          fill={`url(#${gradMain})`}
          transform="rotate(35 150 150)" opacity="0.92" />
      );
      break;

    case "wireframe":
      shapeEl = (
        <g fill="none" stroke="var(--a)" strokeWidth="1.3" opacity="0.7">
          <polygon points="150,45 232,85 252,173 196,245 104,245 48,173 68,85" />
          <line x1="150" y1="45" x2="252" y2="173" />
          <line x1="150" y1="45" x2="104" y2="245" />
          <line x1="150" y1="45" x2="48" y2="173" />
          <line x1="68" y1="85" x2="196" y2="245" />
          <line x1="232" y1="85" x2="104" y2="245" />
          <line x1="48" y1="173" x2="252" y2="173" />
          <circle cx="150" cy="45" r="3.5" fill="var(--a)" stroke="none" />
          <circle cx="252" cy="173" r="3" fill="var(--a-l)" stroke="none" />
          <circle cx="104" cy="245" r="3" fill="var(--a-l)" stroke="none" />
        </g>
      );
      break;

    case "orb":
      shapeEl = (
        <>
          <circle cx="150" cy="150" r="105" fill={`url(#${gradMain})`} opacity="0.18" />
          <circle cx="150" cy="150" r="68" fill={`url(#${gradSoft})`} opacity="0.95" />
        </>
      );
      break;

    case "blob":
    default:
      shapeEl = (
        <path
          d="M150,38 C204,34 252,72 257,124 C262,180 230,224 176,238
             C122,252 64,228 43,177 C22,126 41,64 92,44 C112,36 130,40 150,38 Z"
          fill={`url(#${gradMain})`}
          opacity="0.92"
        />
      );
      break;
  }

  return (
    <svg
      viewBox="0 0 300 300"
      className={`project-thumb ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {defs}
      {shapeEl}
    </svg>
  );
}
