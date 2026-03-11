"use client";

import { useState } from "react";

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export default function MobileNav({
  links,
  logoSrc,
  lang,
}: {
  links: NavLink[];
  logoSrc: string;
  lang: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        className="md:hidden flex flex-col justify-center items-center gap-[7px]"
        aria-label="Menu"
        style={{ width: "47px", height: "37px" }}
        onClick={() => setOpen(true)}
      >
        <span
          className="block w-[30px] h-[1.5px] bg-[#4b4746] transition-transform"
        />
        <span
          className="block w-[30px] h-[1.5px] bg-[#4b4746] transition-opacity"
        />
        <span
          className="block w-[30px] h-[1.5px] bg-[#4b4746] transition-transform"
        />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[60]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-out drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#9c8a78] z-[70] transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4b4746"
              strokeWidth="1.5"
              className="w-6 h-6"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-8 gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-light text-[#4b4746] text-lg"
              onClick={() => setOpen(false)}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
