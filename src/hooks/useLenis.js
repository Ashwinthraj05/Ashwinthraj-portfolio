import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // wire react-scroll anchors to lenis
    const handleAnchor = (e) => {
      const target = e.target.closest("[data-scroll-to]");
      if (target) {
        e.preventDefault();
        const id = target.getAttribute("data-scroll-to");
        const el = document.getElementById(id);
        if (el) lenis.scrollTo(el, { offset: -64, duration: 1.6 });
      }
    };
    document.addEventListener("click", handleAnchor);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleAnchor);
    };
  }, []);
}
