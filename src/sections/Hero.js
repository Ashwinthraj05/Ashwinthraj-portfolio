import React, { useEffect, useRef, useState, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";
import { useTheme } from "../ThemeContext";
import { getCSSVar, hexToRgba } from "../utils/cssVars";
import profileImage from "../assets/Ashwinth's.jpeg";

/* ── 3D distorted wireframe sphere — core ─────────────── */
function DistortSphere({ color, opacity }) {
  const mesh = useRef();
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.11;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.17;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.5}>
      <Sphere ref={mesh} args={[1, 96, 96]} scale={2.0}>
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={2.2}
          roughness={0}
          metalness={0.05}
          wireframe
          transparent
          opacity={opacity}
        />
      </Sphere>
    </Float>
  );
}

/* ── Orbit ring ────────────────────────────────────────── */
function OrbitRing({ radius, speed, tiltX, tiltZ, color, opacity }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = tiltX + clock.getElapsedTime() * speed * 0.5;
      ref.current.rotation.z = tiltZ + clock.getElapsedTime() * speed * 0.3;
    }
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.022, 16, 140]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={opacity}
        emissive={color}
        emissiveIntensity={0.55}
      />
    </mesh>
  );
}

/* ── Floating gem ──────────────────────────────────────── */
function FloatingDot({ pos, color }) {
  const ref = useRef();
  const offset = pos[0] * 100;
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y =
        pos[1] + Math.sin(clock.getElapsedTime() * 0.8 + offset) * 0.3;
      ref.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });
  return (
    <mesh ref={ref} position={pos}>
      <octahedronGeometry args={[0.12, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.8}
      />
    </mesh>
  );
}

/* ── Scene: built ONLY from --a / --a-d / --a-l so any
       accent + theme combo "just works" ─────────────────── */
function ThreeScene({ isDark, accentMain, accentDeep, accentLight }) {
  const sphereOpacity = isDark ? 0.14 : 0.1;
  const ringOpacity = isDark ? 0.35 : 0.22;

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 52 }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[8, 8, 8]} intensity={1.0} color={accentMain} />
      <pointLight position={[-8, -6, -8]} intensity={0.5} color={accentLight} />
      <Stars
        radius={90}
        depth={55}
        count={700}
        factor={3}
        saturation={0}
        fade
        speed={0.6}
      />
      <DistortSphere color={accentMain} opacity={sphereOpacity} />
      <OrbitRing
        radius={3.2}
        speed={0.08}
        tiltX={Math.PI / 3}
        tiltZ={0.1}
        color={accentLight}
        opacity={ringOpacity}
      />
      <OrbitRing
        radius={4.4}
        speed={0.05}
        tiltX={-Math.PI / 5}
        tiltZ={0.3}
        color={accentDeep}
        opacity={ringOpacity}
      />
      <OrbitRing
        radius={5.4}
        speed={0.03}
        tiltX={Math.PI / 6}
        tiltZ={-0.2}
        color={accentMain}
        opacity={ringOpacity}
      />
      {[
        [3.5, 1.5, 0.5],
        [-3.2, -1.8, 1],
        [2.8, -2.2, -0.5],
        [-2.5, 2.4, -1],
      ].map((pos, i) => (
        <FloatingDot
          key={i}
          pos={pos}
          color={i % 2 === 0 ? accentMain : accentLight}
        />
      ))}
    </Canvas>
  );
}

/* ── Particle canvas background — colors follow theme/accent ── */
function ParticleCanvas({ themeKey, accentMain, accentDeep }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const PC = hexToRgba(accentMain, 1).replace(/[\d.]+\)$/, ""); // "rgba(r,g,b,"
    const LC = hexToRgba(accentDeep, 1).replace(/[\d.]+\)$/, "");
    const N = 48,
      D = 115;
    let W, H, pts, raf;
    const rnd = (a, b) => Math.random() * (b - a) + a;
    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    const init = () => {
      pts = Array.from({ length: N }, () => ({
        x: rnd(0, W),
        y: rnd(0, H),
        vx: rnd(-0.2, 0.2),
        vy: rnd(-0.2, 0.2),
        r: rnd(1.1, 2.2),
        a: rnd(0.25, 0.7),
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x,
            dy = pts[i].y - pts[j].y,
            d = Math.hypot(dx, dy);
          if (d < D) {
            ctx.beginPath();
            ctx.strokeStyle = `${LC}${(1 - d / D) * 0.18})`;
            ctx.lineWidth = 0.45;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      pts.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${PC}${p.a})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });
      raf = requestAnimationFrame(draw);
    };
    resize();
    init();
    draw();
    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [themeKey, accentMain, accentDeep]);
  return <canvas ref={canvasRef} className="hero-canvas" />;
}

/* ── Cursor glow ─────────────────────────────────────── */
function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div ref={ref} className="cursor-glow" />;
}

/* ── Typewriter ──────────────────────────────────────── */
const ROLES = [
  "MERN Stack Developer",
  "SAP ABAP Developer",
  "Data Scientist",
  "Full-Stack Engineer",
  "Frontend Developer",
];
function useTypewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);
  useEffect(() => {
    const full = ROLES[idx];
    let t;
    if (typing) {
      if (text.length < full.length)
        t = setTimeout(() => setText(full.slice(0, text.length + 1)), 62);
      else t = setTimeout(() => setTyping(false), 1900);
    } else {
      if (text.length > 0) t = setTimeout(() => setText(text.slice(0, -1)), 32);
      else {
        setTyping(true);
        setIdx((i) => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(t);
  }, [text, typing, idx]);
  return text;
}

/* ── Hook: read accent colors from CSS vars, re-reads on theme/accent change ── */
function useAccentColors(theme, accent) {
  const [colors, setColors] = useState({
    main: "#7c8bff",
    deep: "#5f6fe0",
    light: "#a5b0ff",
  });

  useEffect(() => {
    // Run after the browser has applied the new data-theme/data-accent attrs
    const id = requestAnimationFrame(() => {
      setColors({
        main: getCSSVar("--a", "#7c8bff"),
        deep: getCSSVar("--a-d", "#5f6fe0"),
        light: getCSSVar("--a-l", "#a5b0ff"),
      });
    });
    return () => cancelAnimationFrame(id);
  }, [theme, accent]);

  return colors;
}

/* ── Hero ────────────────────────────────────────────── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const { theme, accent } = useTheme();
  const isDark = theme === "dark";
  const role = useTypewriter();
  const { main, deep, light } = useAccentColors(theme, accent);
  const sceneKey = `${theme}-${accent}`; // remount Three scene on swap so materials update cleanly

  return (
    <>
      <CursorGlow />
      <div className="hero-section">
        <ParticleCanvas
          themeKey={sceneKey}
          accentMain={main}
          accentDeep={deep}
        />
        <div className="hero-vignette" />
        <div className="hero-three">
          <Suspense fallback={null}>
            <ThreeScene
              key={sceneKey}
              isDark={isDark}
              accentMain={main}
              accentDeep={deep}
              accentLight={light}
            />
          </Suspense>
        </div>

        <div className="hero-inner">
          {/* LEFT */}
          <div className="hero-content">
            <motion.div className="hero-badge" {...fade(0)}>
              <span className="dot" />
              Available for internships &amp; freelance
            </motion.div>

            <motion.h1 className="hero-greeting" {...fade(0.1)}>
              <span className="hi">Hi, I'm</span>
              <span className="name">SG Ashwinthraj</span>
            </motion.h1>

            <motion.div className="hero-typewriter" {...fade(0.2)}>
              {role}
              <span className="cursor">|</span>
            </motion.div>

            <motion.p className="hero-desc" {...fade(0.3)}>
              Transforming ideas into scalable applications through modern web
              technologies and SAP ecosystems.
            </motion.p>

            <motion.div className="hero-actions" {...fade(0.4)}>
              <Link to="projects" smooth duration={1000} offset={-64}>
                <button className="btn-primary">
                  View Projects <FaArrowDown style={{ fontSize: 12 }} />
                </button>
              </Link>
              <Link to="contact" smooth duration={1000} offset={-64}>
                <button className="btn-secondary">Get in Touch</button>
              </Link>
            </motion.div>

            <motion.div className="hero-stats" {...fade(0.5)}>
              {[
                { num: "3+", label: "Projects" },
                { num: "3+", label: "Internships" },
                { num: "2", label: "Certifications" },
              ].map((s) => (
                <div className="hero-stat" key={s.label}>
                  <div className="num">{s.num}</div>
                  <div className="label">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            className="hero-image-side"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-avatar-wrap">
              <div className="hero-avatar-ring" />
              <div className="hero-avatar">
                <img src={profileImage} alt="SG Ashwinthraj" />
              </div>
            </div>
            <div className="hero-social-row">
              <a
                href="https://github.com/Ashwinthraj05"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-chip"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
