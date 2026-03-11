"use client";

import { useState, useEffect } from "react";

export default function StickyHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Header fades out once user scrolls past the hero section (~114px header height)
    // On the live Squarespace site, the header is transparent with pointer-events:none
    // and simply becomes invisible against non-brown sections.
    // We simulate this by fading the header out after scrolling past 50px.
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          // Show header when near top, hide when scrolled down
          if (scrollY < 50) {
            setVisible(true);
          } else {
            setVisible(false);
          }
          lastScrollY = scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#9c8a78] transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
    >
      {children}
    </header>
  );
}
