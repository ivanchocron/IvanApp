import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import Link from "next/link";

const INQUIRY_URL = "https://forms.gle/MLqbYfbZhWQvkNpXA";

const SOCIALS = [
  { label: "YouTube", href: "https://youtube.com/@IvanChocron", icon: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { label: "Instagram", href: "https://www.instagram.com/ivanchocron/", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ivanchocron/", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { label: "Facebook", href: "https://facebook.com/ivanchocron", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { label: "TikTok", href: "https://tiktok.com/@IvanChocron", icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
];

const TESTIMONIALS = [
  { name: "Andrew H.", role: "Assistant City Manager, Lt. Colonel (ret.) US Air Force", quote: "His coaching is unlike any I've experienced before. The insights and tools he provides have been transformative." },
  { name: "Karina Cury", role: "Flight Attendant, 26 years", quote: "During a difficult and overwhelming period of my life, I found solace and guidance that truly changed everything." },
  { name: "Jennifer Estevez", role: "Founder & CEO, OMvino", quote: "A profound impact on my life as a stressed-out CEO. The clarity and peace I gained were beyond what I expected." },
  { name: "Devon Anderson", role: "VP Product/AI, Tech Company", quote: "An incredibly powerful experience. The approach is grounded, relatable, and deeply effective." },
  { name: "Christiane Robbins", role: "Senior Scientific Review Officer, NIH", quote: "As a scientist, I was skeptical at first. The results spoke for themselves in ways I couldn't have predicted." },
  { name: "Jay Deshpande", role: "Wealth Manager", quote: "A rare gift of creating a sense of welcoming, love, and safety that allows real transformation to happen." },
];

function SocialIcon({ d, label }: { d: string; label: string }) {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-label={label}>
      <path d={d} />
    </svg>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  const dict = await getDictionary(lang);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center text-white overflow-hidden bg-[#0f2318]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2318]/80 via-[#0f2318]/60 to-[#0f2318]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-24">
          <p className="uppercase tracking-[0.3em] text-emerald-400/80 text-sm mb-6 font-medium">
            Iv&aacute;n Chocr&oacute;n
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
            Speaker &amp;<br />Healing Coach
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Bridging the gap between science and spirit through a grounded and approachable healing methodology.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={INQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium transition-colors text-sm tracking-wide uppercase"
            >
              Get In Touch
            </a>
            <Link
              href={`/${lang}/about`}
              className="inline-block px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors text-sm tracking-wide uppercase border border-white/20"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 leading-tight">
            Enough is enough.<br />
            It is time to <span className="text-emerald-700">heal</span>.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            It is my vision to make grounded, relatable healing accessible to individuals from every walk of life, belief system and background.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            I&apos;ve been helping people change their lives for over a decade, assisting over <strong className="text-slate-900">10,000+ people</strong> in their process of transformation. My goal is to guide people from feeling discontent to being excited to wake up every day.
          </p>
          <blockquote className="border-l-4 border-emerald-600 pl-6 py-2 text-left max-w-xl mx-auto">
            <p className="text-xl italic text-slate-700 leading-relaxed">
              &ldquo;Healing work is the most important thing anyone can do for themselves and the world around them.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ─── APPROACH ─── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.2em] text-emerald-700 text-sm mb-3 font-medium">My Approach</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Grounded. Relatable. Transformative.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Grounded", desc: "I have created my own system of healing, working with proven methods based on science and psychology to help people overcome their blocks." },
              { title: "Relatable", desc: "Whether you are spiritual, scientific, religious, atheist, a mechanic or a CEO, you will feel seen and understood." },
              { title: "Bridging Worlds", desc: "I merge the worlds of science and spirit and bring a fresh perspective to make healing simple, fun, effective and available for everybody." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── METHODOLOGY ─── */}
      <section className="py-24 px-6 bg-[#0f2318] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.2em] text-emerald-400/80 text-sm mb-3 font-medium">Methodology</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Three Pillars of Healing</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { num: "01", title: "Education", desc: "Through YouTube, podcasts, speaking, and retreats, I build up knowledge about what real healing encompasses \u2014 creating those incredible ah-ha moments of insight and breakthroughs." },
              { num: "02", title: "Emotional Processing", desc: "Using my knowledge of psychology and a decade of experience working in healing retreats, I help people process and heal their trauma while releasing stuck emotions." },
              { num: "03", title: "Retreats", desc: "My private retreats fuse philosophies and lessons from leading 500+ healing events. Thousands of people have freed themselves from physical and psychological challenges through these experiences." },
            ].map((item) => (
              <div key={item.num} className="border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors">
                <span className="text-emerald-400 font-mono text-sm mb-4 block">{item.num}</span>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.2em] text-emerald-700 text-sm mb-3 font-medium">Pillars of My Philosophy</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What I Believe</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              { title: "Science & Spirit", desc: "Science and spirit may seem to be incompatible worldviews, but that is not the case. Connecting these two worlds in a relatable way is essential for a balanced healing process.", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" },
              { title: "Real Healing is Real", desc: "If we truly knew that we could heal, why would we decide to numb our pain? True healing is possible and there are accessible ways to get there.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
              { title: "Relatability", desc: "Meeting people where they are at with a rational and grounded approach suitable for the modern western mind is key for everyone to feel that healing work is also meant for them.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
              { title: "Inner Gift", desc: "Every person has unique gifts, but few are aware of them until they heal their wounds. As people walk the path of healing they begin discovering and embodying their gifts.", icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 shrink-0 rounded-full bg-emerald-50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.2em] text-emerald-700 text-sm mb-3 font-medium">Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How I Can Help</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              { title: "Public Speaking", desc: "Experience inspirational and educational talks on topics including the healing process, human emotions, science and spirituality, psychology, and living with an open heart.", topics: ["Healing Process", "Science & Spirituality", "Psychology", "Self-Love"] },
              { title: "Leadership Coaching & Consulting", desc: "From individuals to executives of Fortune 500 companies \u2014 creating conversation and bringing clarity by opening awareness to release communication blocks.", topics: ["Executive Coaching", "Team Connection", "Corporate Retreats"] },
              { title: "Integration Support", desc: "One-on-one support making sense of healing experiences. Grounded and relatable emotional processing techniques to bring your process to a more peaceful completion.", topics: ["1-on-1 Sessions", "Post-Retreat Integration", "Emotional Processing"] },
              { title: "Retreats", desc: "Private retreats fusing unique methods of emotional processing. Hosted worldwide in luxury settings with organic vegan cuisine and thoughtful amenities.", topics: ["Private Groups", "Corporate Teams", "Luxury Settings", "Global Locations"] },
            ].map((svc) => (
              <div key={svc.title} className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-shadow flex flex-col">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{svc.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-5 flex-1">{svc.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {svc.topics.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium">{t}</span>
                  ))}
                </div>
                <a
                  href={INQUIRY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-emerald-700 hover:text-emerald-900 transition-colors uppercase tracking-wide"
                >
                  Submit Inquiry &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 px-6 bg-[#0f2318] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.2em] text-emerald-400/80 text-sm mb-3 font-medium">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-bold">What People Say</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
                <p className="text-white/70 leading-relaxed mb-5 text-sm italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Interested in working together?
          </h2>
          <p className="text-slate-500 mb-10 text-lg">
            Whether you&apos;re looking for a speaker, coach, integration support, or retreat experience &mdash; I&apos;d love to connect.
          </p>
          <a
            href={INQUIRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full font-medium transition-colors text-sm tracking-wide uppercase"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* ─── SOCIAL BAR ─── */}
      <section className="py-8 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-700 transition-colors"
              aria-label={s.label}
            >
              <SocialIcon d={s.icon} label={s.label} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
