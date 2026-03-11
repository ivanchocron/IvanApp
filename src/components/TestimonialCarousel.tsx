"use client";

import { useState, useCallback } from "react";

interface Testimonial {
  name: string;
  role: string;
  photo: string;
  quote: string;
}

export default function TestimonialCarousel({
  testimonials,
  imgBase,
}: {
  testimonials: Testimonial[];
  imgBase: string;
}) {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const t = testimonials[current];

  return (
    <div className="relative">
      {/* Left arrow */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[60px] h-[60px] flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
        style={{ left: "-10px" }}
      >
        <svg
          viewBox="0 0 44 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-10 h-4 text-white/60"
        >
          <path d="M9.9 16.96L2.12 9.18L9.9 1.39" />
          <path d="M42.86 9.18H3.38" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[60px] h-[60px] flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
        style={{ right: "-10px" }}
      >
        <svg
          viewBox="0 0 44 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-10 h-4 text-white/60"
        >
          <path d="M34.15 1.39L41.93 9.18L34.15 16.96" />
          <path d="M1.19 9.17H40.68" />
        </svg>
      </button>

      {/* Testimonial content */}
      <div className="text-center px-16">
        <img
          src={`${imgBase}${t.photo}`}
          alt={t.name}
          className="w-[250px] h-[250px] md:w-[311px] md:h-[312px] rounded-full object-cover mx-auto mb-8"
        />
        <p
          className="text-[#fffaf4] font-medium leading-relaxed mb-8"
          style={{ fontSize: "14.58px" }}
        >
          &ldquo;{t.quote}&rdquo;
        </p>
        <p className="font-light text-[#fffaf4]" style={{ fontSize: "16px" }}>
          {t.name}
        </p>
        <p
          className="font-light text-[#fffaf4]/50 mt-1"
          style={{ fontSize: "16px" }}
        >
          {t.role}
        </p>
      </div>
    </div>
  );
}
