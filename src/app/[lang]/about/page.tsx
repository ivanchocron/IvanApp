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

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang as Locale;
  await getDictionary(lang);

  return (
    <div className="bg-[#d9cfc5]" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>

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

      {/* ─── HERO IMAGE BANNER ─── */}
      <section className="bg-[#d9cfc5] pt-[114px]">
        <img
          src={img("/images/about-ivan-hero.jpg")}
          alt="Iván Chocrón"
          className="w-full object-cover"
          style={{ height: "clamp(250px, 30vw, 500px)", objectPosition: "center 20%" }}
        />
      </section>

      {/* ─── HEADING + HOW IT ALL STARTED ─── */}
      <section className="relative bg-[#d9cfc5] pt-20 pb-16 px-6" style={{ zIndex: 1 }}>
        <div className="w-[90%] md:w-[62%] max-w-[900px] mx-auto">
          <h1
            className="text-[#4b4746]"
            style={{ fontSize: "clamp(42px, 6vw, 86px)", fontWeight: 500, lineHeight: 1 }}
          >
            About Iv&aacute;n Chocr&oacute;n
          </h1>
          <p
            className="text-[#4b4746] mt-3"
            style={{ fontSize: "clamp(22px, 2.5vw, 36px)", fontWeight: 500, lineHeight: 1.4 }}
          >
            Educator, Consultant &amp; Coach
          </p>
        </div>
        <div className="w-[90%] md:w-[62%] max-w-[900px] mx-auto mt-16">
          <p className="text-[#4b4746] font-bold mb-6" style={{ fontSize: "15.66px", lineHeight: 1.87 }}>
            Here is how it all started...
          </p>
          <p className="text-[#4b4746] mb-8" style={{ fontSize: "15.66px", lineHeight: 1.87, fontWeight: 300 }}>
            My journey began in Argentina where I studied Engineering at the National Technological University of Buenos Aires and taught mathematics and chemistry for a living. If you had told me then that I would be doing what I am now, I would have thought you were crazy. I&apos;ve always been the skeptical type and used to consider myself an atheist. However, I always felt that we, as humans, could be doing much better and that there must be a reality in which we treat each other and ourselves with much more kindness and compassion. You probably feel your own version of that too. I started to study western psychology, eastern philosophy, meditation and different healing modalities. I learned from modern westernized practitioners and also traveled to the jungle to learn from traditional shamans. Because of the clear potential that doing proper healing work has, I decided to dedicate my life to it.
          </p>
          <p className="text-[#4b4746] mb-8" style={{ fontSize: "15.66px", lineHeight: 1.87, fontWeight: 300 }}>
            What started first as a desire to do inner work with myself, and then amongst small gatherings of friends, has grown so much more than I ever could have imagined. For more than a decade, I have shared my practices and processes to help thousands of people in over 20 countries begin or deepen their healing journey. I work with people from all walks of life, from addicts to CEO&apos;s and travel across the globe not only leading retreats, but also speaking to and educating people on how essential doing healing work is and how to do it.  Through this, I&apos;ve witnessed incredible positive shifts within myself and those around me, getting all of us closer to that world that my heart always knew was available to us.
          </p>
          <p className="text-[#4b4746]" style={{ fontSize: "15.66px", lineHeight: 1.87, fontWeight: 300 }}>
            Throughout the years, I noticed that the majority of healing settings are missing something. How could people be led to face their deepest traumas and stuck emotions if some of them can&apos;t relate to their facilitator? Often they are too spiritual, ungrounded or hard to relate to. In some cases the facilitator&apos;s moral standards and intentions were not coming from a place of integrity, there was a lot of ego involved or they didn&apos;t create a space that felt safe. In many cases, the knowledge of how the western mind gets wounded and heals wasn&apos;t there. Whatever it was, most of the healing and spiritual circles I&apos;d partaken in felt unsafe, &ldquo;not for everyone&rdquo;, just for a small niche group of people interested solely in one narrow perspective of looking at the world.
          </p>
        </div>
        {/* Wavy bottom edge overlapping onto image below */}
        <div className="absolute bottom-0 left-0 w-full" style={{ transform: "translateY(95%)", zIndex: 2, pointerEvents: "none" }}>
          <svg className="w-full block" viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ height: "50px" }}>
            <path d="M0,0 L1440,0 L1440,10 C1200,45 960,48 720,30 C480,12 240,42 0,35 Z" fill="#d9cfc5" />
          </svg>
        </div>
      </section>

      {/* ─── FULL-BLEED IMAGE — Group retreat ─── */}
      <section className="relative" style={{ zIndex: 0 }}>
        <img
          src={img("/images/about-section2.jpg")}
          alt="Group healing retreat - people sitting in a circle"
          className="w-full h-auto object-cover"
          style={{ maxHeight: "680px", objectPosition: "center center", display: "block" }}
        />
      </section>

      {/* ─── HOW IT'S GOING ─── */}
      <section className="relative bg-[#d9cfc5] py-16 px-6" style={{ zIndex: 1 }}>
        {/* Wavy top edge overlapping onto image above */}
        <div className="absolute top-0 left-0 w-full" style={{ transform: "translateY(-95%)", zIndex: 2, pointerEvents: "none" }}>
          <svg className="w-full block" viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ height: "50px" }}>
            <path d="M0,40 C240,8 480,38 720,20 C960,2 1200,35 1440,15 L1440,50 L0,50 Z" fill="#d9cfc5" />
          </svg>
        </div>
        <div className="w-[90%] md:w-[62%] max-w-[900px] mx-auto">
          <p className="text-[#4b4746] font-bold mb-6" style={{ fontSize: "15.66px", lineHeight: 1.87 }}>
            Here is how it&apos;s going...
          </p>
          <p className="text-[#4b4746]" style={{ fontSize: "15.66px", lineHeight: 1.87, fontWeight: 300 }}>
            I used these experiences as inspiration to develop my own theories and methodology about how the human mind works and how I could most effectively support people in their healing. It was important for me to meet each person where they are at. I believe this creates a space for them to release emotions that are hard to feel and holds them compassionately in the things that they are ashamed to face. In order to make healing work rational and approachable to everyone, I had to bridge the gap between the worlds of science and spirit. The containers I create are approachable, non-dogmatic and can be understood by every participant regardless of their beliefs.
          </p>
        </div>
        {/* Wavy bottom edge overlapping onto image below */}
        <div className="absolute bottom-0 left-0 w-full" style={{ transform: "translateY(95%)", zIndex: 2, pointerEvents: "none" }}>
          <svg className="w-full block" viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ height: "50px" }}>
            <path d="M0,0 L1440,0 L1440,15 C1200,42 960,5 720,25 C480,45 240,10 0,38 Z" fill="#d9cfc5" />
          </svg>
        </div>
      </section>

      {/* ─── FULL-BLEED IMAGE — Group circle ─── */}
      <section className="relative" style={{ zIndex: 0 }}>
        <img
          src={img("/images/about-section4.jpg")}
          alt="Group of people in a healing circle"
          className="w-full h-auto object-cover"
          style={{ maxHeight: "500px", objectPosition: "center center", display: "block" }}
        />
      </section>

      {/* ─── HERE IS WHY ─── */}
      <section className="relative bg-[#d9cfc5] py-16 px-6" style={{ zIndex: 1 }}>
        {/* Wavy top edge overlapping onto image above */}
        <div className="absolute top-0 left-0 w-full" style={{ transform: "translateY(-95%)", zIndex: 2, pointerEvents: "none" }}>
          <svg className="w-full block" viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ height: "50px" }}>
            <path d="M0,25 C240,48 480,5 720,30 C960,48 1200,10 1440,35 L1440,50 L0,50 Z" fill="#d9cfc5" />
          </svg>
        </div>
        <div className="w-[90%] md:w-[62%] max-w-[900px] mx-auto">
          <p className="text-[#4b4746] font-bold mb-6" style={{ fontSize: "15.66px", lineHeight: 1.87 }}>
            Here is why...
          </p>
          <p className="text-[#4b4746] mb-8" style={{ fontSize: "15.66px", lineHeight: 1.87, fontWeight: 300 }}>
            To be able to create a space where everyone feels welcomed and believes that this kind of healing is for them was not an easy process but has always been the center of my focus. We don&apos;t live in a society that believes that real healing is real and it is not an essential part of our culture. As a replacement for real healing we numb. Pharmaceuticals, alcohol, drugs, pornography and mindless social media scrolling are all ways in which we unconsciously numb our pain. However, numbing is temporary, so we do it again. Why do we do this? If we would heal whatever is causing that pain, we wouldn&apos;t have to numb.
          </p>
          <p className="text-[#4b4746] mb-8" style={{ fontSize: "15.66px", lineHeight: 1.87, fontWeight: 300 }}>
            I believe each person has the capacity to heal themselves and learning how is a skill I believe everyone should learn. I&apos;m not here to heal you, but to show you how to walk the path of self-healing so that your wellbeing can be independent from me and from everyone else. I consider myself a facilitator of healing work and a wisdom keeper. I work with people to release shame, embrace their shadows and start accepting themselves just as they are with more love and kindness.
          </p>
          <p className="text-[#4b4746] mb-8" style={{ fontSize: "15.66px", lineHeight: 1.87, fontWeight: 300 }}>
            What I call the &ldquo;wounding-healing process&rdquo; helps us discover and develop our inner gifts. Once we embody our gifts, what shows up is a clearer sense of purpose and alignment with our life&apos;s mission. When in this state, modern psychological diseases like depression and anxiety have very little room to thrive. We all get wounded, but not all of us get healed. Healing ultimately gives meaning to the wounding we have experienced by completing that &ldquo;wounding-healing&rdquo; process and allowing our gifts to flourish. Healing, in essence, is our right. It is my mission, purpose and part of my gifts to spread the message of healing and reach as many people as I can because everyone is deserving of living a life of fulfillment and joy, and because I want to live in a world that my heart knows is possible.
          </p>
          <p className="text-[#4b4746]" style={{ fontSize: "15.66px", lineHeight: 1.87, fontWeight: 300 }}>
            Because we are part of collective human consciousness, our pain is a part of it too. Therefore, in order to heal the collective pain, we must heal our own. I knew that if we want the whole world to heal, we must create spaces that are relatable to people from every background and mindset. We can&apos;t exclude the scientists, the skeptics and the atheists and of course, we shouldn&apos;t exclude the spiritual, the believers and the religious either. This is why in my retreats we have elements of science, psychology, chemistry, spirituality, philosophy and lots of educational talks on the topic of healing. Everyone gets it and feels seen.
          </p>
        </div>
        {/* Wavy bottom edge overlapping onto image below */}
        <div className="absolute bottom-0 left-0 w-full" style={{ transform: "translateY(95%)", zIndex: 2, pointerEvents: "none" }}>
          <svg className="w-full block" viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ height: "50px" }}>
            <path d="M0,0 L1440,0 L1440,10 C1200,45 960,48 720,30 C480,12 240,42 0,35 Z" fill="#d9cfc5" />
          </svg>
        </div>
      </section>

      {/* ─── FULL-BLEED IMAGE — Hands close-up ─── */}
      <section className="relative" style={{ zIndex: 0 }}>
        <img
          src={img("/images/about-section6.jpg")}
          alt="Two people in a close moment of healing"
          className="w-full h-auto object-cover"
          style={{ maxHeight: "700px", objectPosition: "center center", display: "block" }}
        />
      </section>

      {/* ─── HERE IS WHAT'S NEXT ─── */}
      <section className="relative bg-[#d9cfc5] py-16 px-6" style={{ zIndex: 1 }}>
        {/* Wavy top edge overlapping onto image above */}
        <div className="absolute top-0 left-0 w-full" style={{ transform: "translateY(-95%)", zIndex: 2, pointerEvents: "none" }}>
          <svg className="w-full block" viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ height: "50px" }}>
            <path d="M0,35 C240,10 480,45 720,20 C960,2 1200,40 1440,18 L1440,50 L0,50 Z" fill="#d9cfc5" />
          </svg>
        </div>
        <div className="w-[90%] md:w-[62%] max-w-[900px] mx-auto">
          <p className="text-[#4b4746] font-bold mb-6" style={{ fontSize: "15.66px", lineHeight: 1.87 }}>
            Here is what&apos;s next&hellip;
          </p>
          <p className="text-[#4b4746] mb-8" style={{ fontSize: "15.66px", lineHeight: 1.87, fontWeight: 300 }}>
            Today, more than 10000 people have been a part of my refreshed approach to healing. One of the most common pieces of feedback I receive from people is that they felt truly welcomed and understood. Many people tell me because of this, my healing retreat has been the most effective of any other modality they&apos;ve ever participated in.
          </p>
          <p className="text-[#4b4746] mb-8" style={{ fontSize: "15.66px", lineHeight: 1.87, fontWeight: 300 }}>
            I can&apos;t wait to bring more of this healing to the world.  In this moment, I am working on more creative ways to do just that while I prioritize my own continued healing, growth and expansion.  I am currently writing a book, starting a YouTube channel, planning retreats, speaking in conferences and podcasts, and training for my next Iron Man while I travel the world with my fianc&eacute;.
          </p>
          <p className="text-[#4b4746] mb-16" style={{ fontSize: "15.66px", lineHeight: 1.87, fontWeight: 300 }}>
            My intention with all of the things that I am creating is not for me to do healing with 20 people at a time in retreats, but for millions of people to understand the importance of healing and make it their daily practice. If I could wish for anything, it would be that these millions of people will prioritize their healing as much as the other important things in their life like physical health, work and family. I believe that dream can become a reality and I won&apos;t stop until I see it come true. I would much rather try and fail than believe that this dream is impossible.  I hope you feel inspired to join this movement and I can&apos;t wait to hear from you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a
              href={`${BASE}/${lang}#press`}
              className="flex items-center justify-center bg-[#4b4746] text-white hover:bg-[#3a3635] transition-colors"
              style={{ fontSize: "17px", fontWeight: 500, borderRadius: "6.4px", width: "316px", height: "67px" }}
            >
              Press and Media
            </a>
            <a
              href={`${BASE}/${lang}/services`}
              className="flex items-center justify-center bg-[#4b4746] text-white hover:bg-[#3a3635] transition-colors"
              style={{ fontSize: "17px", fontWeight: 500, borderRadius: "6.4px", width: "316px", height: "67px" }}
            >
              Services
            </a>
          </div>
        </div>
        {/* Wavy bottom edge overlapping onto image below */}
        <div className="absolute bottom-0 left-0 w-full" style={{ transform: "translateY(95%)", zIndex: 2, pointerEvents: "none" }}>
          <svg className="w-full block" viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ height: "50px" }}>
            <path d="M0,0 L1440,0 L1440,15 C1200,42 960,5 720,25 C480,45 240,10 0,38 Z" fill="#d9cfc5" />
          </svg>
        </div>
      </section>

      {/* ─── FULL-BLEED IMAGE — Hands touching ─── */}
      <section className="relative" style={{ zIndex: 0 }}>
        <img
          src={img("/images/about-section8.jpg")}
          alt="Healing hands reaching together"
          className="w-full h-auto object-cover"
          style={{ maxHeight: "500px", objectPosition: "center center", display: "block" }}
        />
      </section>

      {/* ─── FOOTER (identical to homepage) ─── */}
      <footer className="relative py-16 px-6 bg-[#4b4746]" style={{ zIndex: 1 }}>
        {/* Wavy top edge overlapping onto image above */}
        <div className="absolute top-0 left-0 w-full" style={{ transform: "translateY(-95%)", zIndex: 2, pointerEvents: "none" }}>
          <svg className="w-full block" viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ height: "50px" }}>
            <path d="M0,30 C240,8 480,42 720,22 C960,5 1200,38 1440,15 L1440,50 L0,50 Z" fill="#4b4746" />
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
              Credits: <a href="https://www.deusmarca.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">DEŪS MARCA</a> + <a href="https://crystalsandsmudgesticks.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Crystals &amp; Smudge Sticks</a>
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
