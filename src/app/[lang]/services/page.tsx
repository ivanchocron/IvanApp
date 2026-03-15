import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import versionData from "../../../../version.json";
import MobileNav from "@/components/MobileNav";
import StickyHeader from "@/components/StickyHeader";

const BASE = "/IvanApp";
const img = (path: string) => `${BASE}${path}`;
const INQUIRY_URL = "https://forms.gle/MLqbYfbZhWQvkNpXA";

const SOCIALS = [
  { label: "YouTube", href: "https://youtube.com/@IvanChocron", icon: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { label: "Facebook", href: "https://facebook.com/ivanchocron", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { label: "Instagram", href: "https://www.instagram.com/ivanchocron/", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ivanchocron/", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { label: "X", href: "https://x.com/IvanChocron", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "TikTok", href: "https://tiktok.com/@IvanChocron", icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
];

function SocialIcon({ d, label }: { d: string; label: string }) {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-label={label}>
      <path d={d} />
    </svg>
  );
}

/* ── Service card data ── */
const SERVICES = [
  {
    title: "PUBLIC SPEAKING",
    image: "/images/services-speaking.jpg",
    imageAlt: "Iván speaking at an event",
    imagePosition: "65.75% 30.30%",
    content: (
      <>
        <p>Experience Iv&aacute;n&apos;s enlivening inspirational talks on topics such as:</p>
        <ul className="mt-4 space-y-1.5 ml-4">
          {[
            "The healing process",
            "Emotional intelligence",
            "Interpersonal connection",
            "Science and spirituality",
            "Psychology",
            "Living with an open heart",
            "Self-love and compassion",
            "Living a healthy-minded and joyful life",
            "Plant medicine and personal transformation",
            "Neo-shamanism",
            "Retreat facilitation",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#fffaf4] flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
    cta: "Want him to speak at your event, podcast or conference?",
  },
  {
    title: "LEADERSHIP COACHING & CONSULTATION",
    image: "/images/services-coaching.jpg",
    imageAlt: "Iván in a coaching session",
    imagePosition: "23% 43.5%",
    content: (
      <p>
        From executives of Fortune 500 companies to individuals - Iv&aacute;n continues to profoundly impact his clients through his unique method of communicating, connecting and coaching. Iv&aacute;n specializes in working with companies, executives and teams to create conversation and bring clarity to their next steps by opening their awareness to release what is causing communication blocks and lack of cohesiveness in team connection.
      </p>
    ),
    cta: "Want to book him for coaching sessions?",
  },
  {
    title: "RETREATS",
    image: "/images/services-retreats.jpg",
    imageAlt: "Group retreat gathering",
    imagePosition: "51.8% 85.37%",
    content: (
      <>
        <p className="mb-6">
          Iv&aacute;n has worked with many CEOs, corporate teams, politicians, celebrities, and influential individuals. Using his healing methods as an instrument, he creates an environment to bring in more openness, abundance and joy between teams and individuals.
        </p>
        <p>
          Iv&aacute;n has hosted retreats all over the world in countless locations, from intimate containers to large group settings. Iv&aacute;n&apos;s retreats incorporate relaxed luxurious settings, organic vegan food from top chefs, and countless other amenities that take care of all the little comforts and details to create ease during participants healing journeys.
        </p>
      </>
    ),
    cta: "Interested in a private retreat?",
  },
  {
    title: "INTEGRATION SUPPORT",
    image: "/images/services-integration.jpg",
    imageAlt: "Healing hands in support",
    imagePosition: "51.2% 79.6%",
    content: (
      <>
        <p className="mb-6">
          Healing work can&apos;t finalize without proper integration, an aspect of the healing process which many people struggle with.
        </p>
        <p className="mb-6">
          If you need one-on-one support making sense of a recent experience or you are struggling with how to apply what you have learned in your every day life, book a session with Iv&aacute;n.
        </p>
        <p>
          His unique emotional processing techniques are grounded and relatable and will bring your process to a more peaceful completion.
        </p>
      </>
    ),
    cta: "Do you need help with integration?",
  },
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);

  return (
    <div className="bg-[#9c8a78]" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>

      {/* ─── NAVIGATION — same as homepage ─── */}
      <StickyHeader>
        <div className="max-w-[1298px] mx-auto flex items-center justify-between h-[100px] md:h-[114px] px-[30px] md:px-[57px]">
          <a href={`${BASE}/${lang}`}>
            <img src={img("/images/logo-icon.png")} alt="Iván Chocrón" className="w-[39px] h-[39px] md:w-[72px] md:h-[71px]" />
          </a>
          <MobileNav
            lang={lang}
            logoSrc={img("/images/logo-icon.png")}
            links={[
              { label: "Home", href: `${BASE}/${lang}` },
              { label: "About", href: `${BASE}/${lang}/about` },
              { label: "Services", href: `${BASE}/${lang}/services` },
              { label: "Explore", href: `${BASE}/${lang}#philosophy` },
              { label: "Contact", href: INQUIRY_URL, external: true },
            ]}
          />
          <nav className="hidden md:flex items-center" style={{ gap: "29px" }}>
            {[
              { label: "Home", href: `${BASE}/${lang}` },
              { label: "About", href: `${BASE}/${lang}/about` },
              { label: "Services", href: `${BASE}/${lang}/services` },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-light text-[#4b4746] hover:text-[#333] transition-colors"
                style={{ fontSize: "16.94px", lineHeight: "32.48px" }}
              >
                {link.label}
              </a>
            ))}
            <div className="relative group">
              <a
                href={`${BASE}/${lang}#philosophy`}
                className="font-light text-[#4b4746] hover:text-[#333] transition-colors flex items-center gap-1"
                style={{ fontSize: "16.94px", lineHeight: "32.48px" }}
              >
                Explore
                <svg className="w-3 h-3 opacity-60" viewBox="0 0 12 12" fill="currentColor"><path d="M2 4l4 4 4-4" /></svg>
              </a>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-[#9c8a78] border border-[#4b4746]/10 rounded-md shadow-lg py-2 min-w-[200px]">
                  {[
                    { label: "Pillars of My Philosophy", href: `${BASE}/${lang}#philosophy` },
                    { label: "Recent Features", href: `${BASE}/${lang}#appearances` },
                    { label: "Press & Media", href: `${BASE}/${lang}#press` },
                  ].map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-2 font-light text-[#4b4746] hover:bg-[#b5a393] transition-colors"
                      style={{ fontSize: "14px" }}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a
              href={INQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-light text-[#4b4746] hover:text-[#333] transition-colors"
              style={{ fontSize: "16.94px", lineHeight: "32.48px" }}
            >
              Contact
            </a>
          </nav>
        </div>
      </StickyHeader>

      {/* ─── HERO IMAGE ─── */}
      <section className="relative">
        <div className="w-full overflow-hidden pt-[114px]" style={{ maxHeight: "798px" }}>
          <img
            src={img("/images/services-hero.jpg")}
            alt="Group gathering and conversation"
            className="w-full object-cover"
            style={{ minHeight: "400px", maxHeight: "684px", objectPosition: "center center" }}
          />
        </div>
        {/* Curved diagonal divider at bottom — tan S-curve sweeps into hero */}
        <div className="absolute bottom-[-1px] left-0 w-full" style={{ height: "81px" }}>
          <svg className="w-full h-full block" preserveAspectRatio="none" viewBox="0 0 1440 80">
            <path d="M0,5 C200,5 400,5 720,40 S1240,80 1440,80 L1440,80 L0,80 Z" fill="#9c8a78" />
          </svg>
        </div>
      </section>

      {/* ─── SERVICES TITLE ─── */}
      <section className="bg-[#9c8a78] pt-8 pb-4 px-6">
        <p
          className="text-center text-[#fffaf4]"
          style={{ fontSize: "clamp(32px, 3.2vw, 46px)", fontWeight: 500 }}
        >
          SERVICES
        </p>
      </section>

      {/* ─── SERVICE CARDS — 2-column grid on desktop, stacked on mobile ─── */}
      <section className="bg-[#9c8a78] px-6 pb-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.title} className="flex flex-col">
              {/* Card image — 3:2 aspect ratio matching Squarespace */}
              <div className="w-full overflow-hidden" style={{ aspectRatio: "3 / 2" }}>
                <img
                  src={img(service.image)}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: service.imagePosition }}
                />
              </div>
              {/* Card text */}
              <div className="flex-1 pt-8 pb-6">
                <h2
                  className="text-[#fffaf4] mb-6"
                  style={{ fontSize: "clamp(24px, 2.2vw, 31px)", fontWeight: 500, lineHeight: 1.2 }}
                >
                  {service.title}
                </h2>
                <div
                  className="text-[#fffaf4]"
                  style={{ fontSize: "17.7px", fontWeight: 300, lineHeight: 1.87 }}
                >
                  {service.content}
                </div>
                <p
                  className="text-[#fffaf4] font-bold mt-6"
                  style={{ fontSize: "17.7px", lineHeight: 1.87 }}
                >
                  {service.cta}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CONTACT FOR DETAILS button */}
        <div className="flex justify-center mt-8 mb-4">
          <a
            href={`${BASE}/${lang}/contact`}
            className="flex items-center justify-center bg-[#4b4746] text-white hover:bg-[#3a3635] transition-colors"
            style={{ fontSize: "17.4px", fontWeight: 500, borderRadius: "6.4px", width: "241px", height: "84px", letterSpacing: "0.5px" }}
          >
            CONTACT FOR DETAILS
          </a>
        </div>
      </section>

      {/* ─── FOOTER (identical to homepage/about) ─── */}
      <footer className="relative py-16 px-6 bg-[#4b4746]">
        {/* Wavy top edge — wider gentle waves overlapping tan section */}
        <div className="absolute top-0 left-0 w-full" style={{ transform: "translateY(-100%)", pointerEvents: "none" }}>
          <svg className="w-full block" viewBox="0 0 1440 40" preserveAspectRatio="none" style={{ height: "40px" }}>
            <path d="M0,28 C480,10 960,38 1440,18 L1440,40 L0,40 Z" fill="#4b4746" />
          </svg>
        </div>
        <div className="max-w-[1189px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Left — socials + contact */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-[#9c8a78] text-[#4b4746] hover:bg-[#b8a694] transition-colors"
                    aria-label={s.label}
                  >
                    <SocialIcon d={s.icon} label={s.label} />
                  </a>
                ))}
              </div>
              <div className="mb-4">
                <p className="font-bold text-[#fffaf4] mb-1" style={{ fontSize: "15.66px" }}>Contact:</p>
                <a href="mailto:ivan@ivanchocron.com" className="text-[#fffaf4] hover:text-white" style={{ fontSize: "15.66px", fontWeight: 300 }}>ivan@ivanchocron.com</a>
              </div>
              <div>
                <p className="font-bold text-[#fffaf4] mb-1" style={{ fontSize: "15.66px" }}>Press &amp; Media Inquiries:</p>
                <a href="mailto:hello@ivanchocron.com" className="text-[#fffaf4] hover:text-white" style={{ fontSize: "15.66px", fontWeight: 300 }}>hello@ivanchocron.com</a>
              </div>
            </div>

            {/* Center — logo */}
            <div className="flex justify-center">
              <img
                src={img("/images/logo-dark-bg.png")}
                alt="Iván Chocrón"
                style={{ width: "216px", height: "171px", objectFit: "contain" }}
              />
            </div>

            {/* Right — subscribe */}
            <div>
              <h4 className="text-[#9c8a78]" style={{ fontSize: "40px", fontWeight: 400, lineHeight: 1.2 }}>Subscribe</h4>
              <p className="text-[#9c8a78] mb-4" style={{ fontSize: "17px", fontWeight: 400 }}>
                Type your e-mail to receive updates and stay in touch!
              </p>
              <form className="space-y-3" action="#">
                <input
                  type="email"
                  placeholder="e-mail address"
                  className="w-full px-4 bg-white text-black placeholder-gray-400 focus:outline-none"
                  style={{ height: "43px", fontSize: "16px", border: "0.8px solid #CCC" }}
                />
                <p className="text-[#9a9494]" style={{ fontSize: "10px", fontWeight: 300 }}>
                  You can unsubscribe anytime. We don&apos;t spam or sell your data.
                </p>
                <button
                  type="submit"
                  className="w-full bg-[#d9cfc5] hover:bg-[#c9bfb5] text-black transition-colors"
                  style={{ fontSize: "18px", fontWeight: 400, height: "41px" }}
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-[#fffaf4]" style={{ fontSize: "15.66px", fontWeight: 300 }}>
              &copy;Iv&aacute;n Chocr&oacute;n 2024, All Rights Reserved.
            </p>
            <p className="text-[#fffaf4] mt-2" style={{ fontSize: "15.66px", fontWeight: 300 }}>
              Credits: <a href="https://www.deusmarca.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">DE&#362;S MARCA</a> + <a href="https://crystalsandsmudgesticks.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Crystals &amp; Smudge Sticks</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Version badge */}
      <div className="fixed bottom-2 right-2 z-50 text-[10px] text-white/30 pointer-events-none select-none">
        {versionData.version}
      </div>
    </div>
  );
}
