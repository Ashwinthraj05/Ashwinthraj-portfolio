import React, { useEffect, useRef, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { FaArrowsAlt } from "react-icons/fa";
import { useTheme } from "../ThemeContext";
import { getCSSVar } from "../utils/cssVars";

/* ════════════════════════════════════════════════════════
   The 3D "crystal" — outer + inner wireframe shells around
   a glowing core. Rotation = (scroll progress) + (manual drag).
   Both refs are mutable objects updated outside React, read
   inside useFrame — zero re-renders, smooth 60fps.
════════════════════════════════════════════════════════ */

function Crystal({ scrollRef, dragRef, accentMain, accentDeep, accentLight }) {
  const group = useRef();
  const outer = useRef();
  const inner = useRef();
  const coreRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const scrollSpin = scrollRef.current * Math.PI * 3;     // up to 1.5 full turns across page
    const idle = t * 0.06;

    if (group.current) {
      group.current.rotation.y = scrollSpin + idle + dragRef.current.y;
      group.current.rotation.x = dragRef.current.x + Math.sin(t * 0.2) * 0.08;
    }
    if (outer.current) outer.current.rotation.z = t * 0.05;
    if (inner.current) {
      inner.current.rotation.x = -t * 0.09;
      inner.current.rotation.y = t * 0.07;
    }
    if (coreRef.current) {
      const pulse = 1 + Math.sin(t * 1.6) * 0.06;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group ref={group}>
      {/* Outer wireframe shell */}
      <mesh ref={outer}>
        <icosahedronGeometry args={[2.4, 0]} />
        <meshBasicMaterial color={accentLight} wireframe transparent opacity={0.35} />
      </mesh>

      {/* Inner wireframe shell — counter-rotating */}
      <mesh ref={inner} scale={0.62}>
        <icosahedronGeometry args={[2.4, 1]} />
        <meshBasicMaterial color={accentMain} wireframe transparent opacity={0.45} />
      </mesh>

      {/* Glowing core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.85, 48, 48]} />
        <meshBasicMaterial color={accentMain} transparent opacity={0.95} />
      </mesh>

      {/* Halo — bigger, softer, additive */}
      <mesh>
        <sphereGeometry args={[1.5, 48, 48]} />
        <meshBasicMaterial color={accentDeep} transparent opacity={0.18} depthWrite={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.1, 32, 32]} />
        <meshBasicMaterial color={accentDeep} transparent opacity={0.06} depthWrite={false} />
      </mesh>
    </group>
  );
}

function EvolveScene({ scrollRef, dragRef, accentMain, accentDeep, accentLight }) {
  return (
    <Canvas camera={{ position: [0, 0, 6.5], fov: 50 }} style={{ background: "transparent" }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 6, 6]} intensity={1.1} color={accentMain} />
      <pointLight position={[-6, -4, -6]} intensity={0.6} color={accentLight} />
      <Stars radius={80} depth={50} count={400} factor={3} saturation={0} fade speed={0.4} />
      <Crystal scrollRef={scrollRef} dragRef={dragRef} accentMain={accentMain} accentDeep={accentDeep} accentLight={accentLight} />
    </Canvas>
  );
}

/* ── Accent color hook (mirrors Hero's) ─────────────────── */
function useAccentColors(theme, accent) {
  const [colors, setColors] = useState({ main: "#7c8bff", deep: "#5f6fe0", light: "#a5b0ff" });
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setColors({
        main:  getCSSVar("--a",   "#7c8bff"),
        deep:  getCSSVar("--a-d", "#5f6fe0"),
        light: getCSSVar("--a-l", "#a5b0ff"),
      });
    });
    return () => cancelAnimationFrame(id);
  }, [theme, accent]);
  return colors;
}

export default function Evolve() {
  const { theme, accent } = useTheme();
  const { main, deep, light } = useAccentColors(theme, accent);
  const sceneKey = `${theme}-${accent}`;

  const wrapRef = useRef(null);
  const scrollRef = useRef(0);        // 0 → 1 across entire page
  const dragRef = useRef({ x: 0, y: 0 });
  const draggingRef = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  /* Track page scroll progress */
  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = docHeight > 0 ? window.scrollY / docHeight : 0;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Manual drag-to-rotate */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const down = (e) => {
      draggingRef.current = true;
      setDragging(true);
      const p = e.touches ? e.touches[0] : e;
      lastPointer.current = { x: p.clientX, y: p.clientY };
    };
    const move = (e) => {
      if (!draggingRef.current) return;
      const p = e.touches ? e.touches[0] : e;
      const dx = p.clientX - lastPointer.current.x;
      const dy = p.clientY - lastPointer.current.y;
      dragRef.current = {
        x: Math.max(-0.6, Math.min(0.6, dragRef.current.x + dy * 0.005)),
        y: dragRef.current.y + dx * 0.005,
      };
      lastPointer.current = { x: p.clientX, y: p.clientY };
    };
    const up = () => { draggingRef.current = false; setDragging(false); };

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    el.addEventListener("touchstart", down, { passive: true });
    el.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", up);

    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      el.removeEventListener("touchstart", down);
      el.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, []);

  /* Reveal */
  const textRef = useRef(null);
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    el.classList.add("reveal", "left");
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); io.disconnect(); } }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="section-container evolve-container">
      <div className="evolve-grid">
        {/* LEFT — text */}
        <div ref={textRef} className="evolve-text">
          <div className="evolve-tag">
            <span className="evolve-tag-line" />
            INTERACTIVE 3D EXPERIENCE
          </div>
          <h2 className="evolve-title">
            Scroll To <span>Evolve</span>
          </h2>
          <p className="evolve-desc">
            This interactive 3D model reacts dynamically to your scroll position across the
            entire page. As you scroll, the geometric core rotates and adapts — built with
            React Three Fiber and Framer Motion.
          </p>
          <div className="evolve-tip">
            <FaArrowsAlt style={{ fontSize: 12 }} />
            TIP: Click and drag the model to rotate it manually.
          </div>
        </div>

        {/* RIGHT — 3D crystal */}
        <div
          ref={wrapRef}
          className={`evolve-canvas-wrap${dragging ? " dragging" : ""}`}
        >
          <Suspense fallback={null}>
            <EvolveScene key={sceneKey} scrollRef={scrollRef} dragRef={dragRef} accentMain={main} accentDeep={deep} accentLight={light} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
