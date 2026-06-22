import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import ProjectThumb from "../components/ProjectThumb";

// ════════════════════════════════════════════════════════
// ✏️  ADD MORE PROJECTS — copy a block and fill it in.
//     shape: "blob" | "capsule" | "diamond" | "wireframe" | "orb"
//            (abstract auto-generated thumbnail — no images needed)
//     featured: true → shows "FEATURED" badge
//     live: null      → card shows a "Demo coming soon" placeholder
//                        instead of a broken/missing button.
//                        Swap to a real URL whenever it's ready.
// ════════════════════════════════════════════════════════
const projects = [
  {
    id: 1,
    title: "MOTOVEX — Bike-Base Marketplace",
    description:
      "A premium full-stack MERN motorcycle marketplace with listings, specs, community blog, search autocomplete, JWT auth, and an admin dashboard for inventory and user management. Top 10% finalist among 200+ teams at the Naan Mudhalvan State-Level Hackathon.",
    shape: "blob",
    category: "Web",
    featured: true,
    badge: "Hackathon — Top 10% Finalist",
    tech: ["React 19", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Tailwind CSS"],
    github: "https://github.com/HariVarma2004/Bike-Base",
    live: "https://bike-base-frontend.onrender.com/",
  },
  {
    id: 2,
    title: "Smart Campus Management System",
    description:
      "A QR-based smart attendance and campus management platform with GPS-fenced check-ins, real-time messaging, and push notifications across Student, Faculty, and Admin role tiers — eliminating proxy attendance with sub-1-second alert delivery.",
    shape: "wireframe",
    category: "Android",
    featured: true,
    badge: null,
    tech: ["Flutter", "Node.js", "MongoDB", "Firebase", "Socket.io", "JWT"],
    github: "https://github.com/bharathkumar205/smart-campus-managemnt-system",
    live: null, // ✏️ add live demo link here once deployed
  },
  {
    id: 3,
    title: "Email Scraper Tool",
    description:
      "A Python tool that recursively crawls a starting URL, follows every link it finds, and extracts email addresses from each visited page using regex pattern matching — a fast way to gather contact data from a site.",
    shape: "orb",
    category: "Data",
    featured: false,
    badge: null,
    tech: ["Python", "Requests", "BeautifulSoup4", "lxml"],
    github: "https://github.com/Ashwinthraj05/E-mail_Scraper",
    live: null, // ✏️ CLI tool — no live demo applicable
  },
  // {
  //   id: 4,
  //   title: "New Project",
  //   description: "What it does...",
  //   shape: "diamond",        // "blob" | "capsule" | "diamond" | "wireframe" | "orb"
  //   category: "Web",         // "Web" | "Android" | "Data" | "Other"
  //   featured: false,
  //   badge: null,             // or a short string e.g. "Hackathon Winner"
  //   tech: ["Tech1", "Tech2"],
  //   github: "https://github.com/...",
  //   live: null,              // add URL once deployed
  // },
];

const FILTERS = ["All", "Web", "Android", "Data"];

/* ── 3D tilt on hover ── */
function TiltCard({ children, className, style }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-6px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)";
  };
  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: "transform 0.15s ease", willChange: "transform", ...style }}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const hdrRef = useRef(null);

  useEffect(() => {
    const el = hdrRef.current;
    if (!el) return;
    el.classList.add("reveal", "up");
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("visible"); io.disconnect(); } },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="section-container">
      {/* Header */}
      <div ref={hdrRef} className="section-header">
        <div className="section-tag">// SELECTED WORK</div>
        <h2 className="section-title"><span>Projects</span></h2>
        <p className="section-sub">A curated selection of projects that showcase my skills and passion.</p>
      </div>

      {/* Filter tabs */}
      <motion.div
        className="filter-tabs"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`filter-tab ${filter === f ? "active" : "inactive"}`}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Cards grid */}
      <div className="projects-v2-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: "100%" }}
            >
              <TiltCard className="pv2-card" style={{ height: "100%" }}>
                {/* Thumbnail area — abstract shape */}
                <div className="pv2-img-wrap">
                  <ProjectThumb shape={project.shape} />

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="pv2-featured-badge">
                      <FaStar style={{ fontSize: 9 }} /> FEATURED
                    </div>
                  )}

                  {/* Hover: quick-action icons */}
                  <div className="pv2-hover-actions">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="pv2-action-btn" title="View Code">
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="pv2-action-btn" title="Live Demo">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>

                {/* Body — fixed layout so cards align regardless of content length */}
                <div className="pv2-body">
                  <h3 className="pv2-title">{project.title}</h3>

                  {project.badge && (
                    <div className="pv2-achievement-badge">🏆 {project.badge}</div>
                  )}

                  <p className="pv2-desc">{project.description}</p>

                  {/* Tech tags */}
                  <div className="pv2-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="pv2-tag">{t}</span>
                    ))}
                  </div>

                  {/* CTA row — always rendered, so card heights stay aligned */}
                  <div className="pv2-actions">
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="pv2-btn-live">
                        <FaExternalLinkAlt style={{ fontSize: 11 }} /> LIVE DEMO
                      </a>
                    ) : (
                      <span className="pv2-btn-pending">
                        <FaExternalLinkAlt style={{ fontSize: 11 }} /> DEMO SOON
                      </span>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="pv2-btn-code">
                        <FaGithub style={{ fontSize: 12 }} /> CODE
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
