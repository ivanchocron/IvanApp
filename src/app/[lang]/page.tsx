import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import versionData from "../../../version.json";

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

const TESTIMONIALS = [
  { name: "Andrew H.", role: "Assistant City Manager, Governor\u2019s Military Council, California Space Industry Task Force, Lieutenant Colonel (retired), US Air Force", photo: "/images/testimonial-andrew.jpg", quote: "I first met Iv\u00e1n at a retreat and many times, subsequently. His coaching is unlike any I\u2019ve experienced before. Instead of prescriptive advice, he approaches relating to people by listening with empathy and compassion, then helping them connect to how they feel. I\u2019m convinced the toughest challenges we all face simply aren\u2019t accessible to analysis; we have to also (and mostly) find alignment with our feelings and act accordingly. As a person in an executive position, I\u2019m used to relying heavily on my thinking function, so it was really remarkable for me to be able to articulate a challenge to Iv\u00e1n and have him cut through confusion and fear, allowing me to gain direct insight that truly helped me make meaningful changes in every aspect of my life. I look forward to working with Iv\u00e1n again and again!" },
  { name: "Karina Cury", role: "Flight Attendant", photo: "/images/testimonial-karina.jpg", quote: "During a difficult and overwhelming period of my life, I found solace and guidance in Iv\u00e1n Chocron. As a Flight Attendant for 26 years, I was struggling with emotional challenges and heavily relied on medication. Ivan played a crucial role in my healing journey, providing a safe space for me to express my fears and concerns. With his compassionate nature, he listened attentively and offered valuable insights that allowed me to see things from a new perspective. Ivan\u2019s coaching style combines empathy and challenge, encouraging me to step out of my comfort zone, confront my fears, and take proactive steps towards personal growth. He empowered me to believe in myself and reminded me that healing is a gradual process. With his support, I developed new coping strategies, built resilience, and regained control over my life. Today, I am joyful and medication-free, thanks to Ivan\u2019s motivation and guidance." },
  { name: "Hanja H.", role: "Creative Director", photo: "/images/testimonial-hanja.jpg", quote: "Iv\u00e1n is a truly unique and compassionate soul. His rapid-fire brain impresses me as he effortlessly connects the dots, helping clients process deep-rooted emotions. What sets him apart is his ability to seamlessly blend in-depth psychology, Western science, and traditional spirituality. As a public speaker, his wisdom flows effortlessly, and he has a remarkable talent for simplifying complex concepts into relatable terms and analogies. Personally attending his coaching sessions and retreats, I\u2019ve witnessed how he guides and heals countless individuals. I wholeheartedly recommend Iv\u00e1n and am immensely grateful to have crossed paths with such an incredible person. Thank you endlessly for your kindness and support." },
  { name: "Mauricio J", role: "Engineer \u2014 Alcon Laboratories", photo: "/images/testimonial-mauricio.jpg", quote: "Ivan is not just great with abilities related to his practice. He has large set of skills, academic degrees, multiple languages, technical degrees, book and street smart, an athlete, a champion, a fighter, an inspiration and motivation for many. Ultimately, he really cares for people that he comes across. He made me feel welcome, supported and appreciated when I needed the most. I wish I could spend more time and create a stronger friendship, but due to our different schedules, location and his devotion for his work, I simply appreciate the limited time we interacted and wish him the best because he is making the world a better place." },
  { name: "Ekaterina Klyukina", role: "Project Manager", photo: "/images/testimonial-ekaterina.jpg", quote: "I visited Ivan\u2019s retreat twice and it really changed my life. I was deeply depressed for years and I started anti-depressants couple months before coming to Ivan\u2019s retreat. After the first experience with Ivan, I was able to stop antidepressants, I got really better. Now, two years later, I really changed my life for the best, I quit smoking, drinking, doing drugs. My marriage is in the better place. I cannot thank Ivan enough. It all won\u2019t be possible without him, without this beautiful safe space that he creates for people to heal. Ivan\u2019s ability to get people together, to listen and understand their darkest moments without judgment and shame make a huge difference in our life. I\u2019m forever grateful." },
  { name: "George M", role: "Director of Business Development, EV Charging", photo: "/images/testimonial-george.jpg", quote: "Iv\u00e1n curates amazing opportunities for healing. His experience and open heart provides the most comforting environment as he guides participants through journeys that can be quite challenging. 1-1 processing with Iv\u00e1n is truly remarkable as he is somehow able to relate to any number of different people, succinctly engage and often solve many hard and persistent issues. After each time working with Ivan, it really feels like our whole group is family. I cannot recommend him highly enough. As I direct business development for a bidirectional EV charging company, the lessons learned with Iv\u00e1n help me to feel more comfortable and initiating and advancing dialogue across a wide variety of partners and customers. Truly invaluable all around!" },
  { name: "Jennifer Estevez", role: "Founder of OMvino, Consciously Planted, Crystals & Smudge Stick, Palate Club", photo: "/images/testimonial-jennifer.jpg", quote: "Iv\u00e1n Chocron had a profound impact on my life as a stressed-out CEO. His ability to bridge science and spirituality gave me hope when I was overwhelmed and on the brink of burnout. Through personalized coaching sessions, Iv\u00e1n guided me towards self-awareness, acceptance, and the release of stress and limiting beliefs. His approach empowered me to take control of my healing, leading to a transformed CEO who has rediscovered balance, fulfillment, and joy. Iv\u00e1n\u2019s teachings have permeated every aspect of my life, allowing me to lead with compassion and purpose. I wholeheartedly recommend Iv\u00e1n Chocron to anyone seeking inner transformation. Trust in him and embark on your journey towards healing \u2014 it will be the most empowering decision you make." },
  { name: "Jay Deshpande", role: "Wealth Manager", photo: "/images/testimonial-jay.jpg", quote: "Ivan possesses a rare gift of creating a sense of welcoming, love, and safety for everyone he encounters. Meeting him during a wellness retreat in Washington DC, I immediately felt comfortable in his presence, as if we had known each other for years. Ivan\u2019s ability to understand and accept people, regardless of their background or past, is truly remarkable. I have learned invaluable lessons from him, which have helped me navigate and restructure difficulties in my personal life, such as repairing family and relationship dynamics. His advice has grounded me and allowed me to face challenges with a calm mind. In just a short time, I have experienced a profound positive shift in my mood and demeanor. Ivan\u2019s expertise in biochemistry, psychology, and personal wellness shines through as he explains complex topics in an easy-to-understand and compassionate manner. His dedication to self-care enhances his ability to facilitate healing. My overall experience with Ivan has been incredibly therapeutic, and I am excited to continue working with him in the future." },
  { name: "Christiane Robbins", role: "Senior Scientific Review Officer, NICHD/NIH", photo: "/images/testimonial-christiane.jpg", quote: "I am a 55-year-old scientist and mother of two. Overcoming childhood trauma and the unexpected loss of my husband were immense challenges, but nothing prepared me for my son David\u2019s battle with pediatric osteosarcoma. When David eventually passed away, the pain was indescribable. Determined to grieve authentically, I tried various healing modalities before attending Ivan\u2019s retreat in 2020. It was a truly transformative experience, marked by Ivan\u2019s knowledge, care, and professionalism. Despite a large group, he made sure to provide personalized attention to each participant. Through countless conversations with Ivan, I had a major shift in healing. I\u2019ve attended a second retreat and eagerly anticipate future ones. Ivan\u2019s unmatched understanding of psychology and spirituality, coupled with his divine gift for facilitating healing, has been invaluable. I believe David sent Ivan into my life to help me rise from the depths of pain. Aho Ivan!" },
  { name: "Liana Prieto", role: "Attorney", photo: "/images/testimonial-liana.jpg", quote: "Ivan has helped me in countless ways. His ability to simultaneously analyze, empathize, and counsel is unique. After my sessions with Ivan I was able to better understand and tackle the feelings and thoughts that were holding me back in a job and mindset that weren\u2019t healthy, and I was also able to conquer a physical ailment. I cannot recommend Ivan enough." },
  { name: "Devon Anderson", role: "VP Product/AI at Tech Company", photo: "/images/testimonial-devon.jpg", quote: "I joined Ivan\u2019s retreat at Cielos in November 2022. I can\u2019t express enough what a transformational experience that weekend was for me. I had so many insights and breakthroughs from the sessions we had. Ivan and his team were incredibly supportive and helpful, guiding me through the difficult parts of the sessions and helping me make sense of my feelings. I have done many different healing retreats and modalities and this was by far one of the most impactful experiences. I have recommended Ivan\u2019s retreats and will continue to do so. I plan on attending a retreat again in the near future." },
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
  await getDictionary(lang);

  return (
    <div style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
      {/* ─── NAVIGATION ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-[1200px] mx-auto px-[4vw] flex items-center justify-between" style={{ paddingTop: "26px", paddingBottom: "26px" }}>
          <div className="flex items-center gap-3">
            <a href={`/${lang}`}>
              <img src={img("/images/logo-icon.png")} alt="Iván Chocrón" className="h-[72px] w-auto" />
            </a>
            <span className="text-[10px] text-[#4b4746]/40 font-mono hidden md:inline">
              {versionData.version}
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", href: `/${lang}` },
              { label: "About", href: `/${lang}/about` },
              { label: "Services", href: `/${lang}/services` },
              { label: "Explore", href: "#philosophy" },
              { label: "Contact", href: INQUIRY_URL },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-light text-[#4b4746] hover:text-[#333] transition-colors tracking-wide"
                style={{ fontSize: "17px" }}
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-[#d9cfc5]">
        {/* Desktop: full-width background image with overlaid text */}
        <div className="hidden md:block relative w-full" style={{ aspectRatio: "1172 / 710" }}>
          <img
            src={img("/images/hero-ivan.png")}
            alt="Iván Chocrón"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "30.83% 25.60%" }}
          />
          <div className="absolute inset-0">
            <div className="h-full w-full relative">
              <div className="absolute" style={{ left: "34.5%", top: "23%", width: "53%"}}>
                <img
                  src={img("/images/logo-horizontal.png")}
                  alt="Iván Chocrón Logo"
                  className="mb-4 h-auto"
                  style={{ width: "100%" }}
                />
                <p className="font-light text-[#4b4746] leading-snug mb-1" style={{ fontSize: "clamp(1.5rem, 3.91vw, 2.86rem)" }}>
                  Speaker &amp; Healing Coach
                </p>
                <h2 className="font-medium text-black leading-snug" style={{ fontSize: "clamp(1.2rem, 2.78vw, 2.03rem)", lineHeight: 1.39 }}>
                  Bridging the gap between science and spirit through a grounded and approachable healing methodology.
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile: stacked layout */}
        <div className="md:hidden">
          <div className="relative h-[60vh]">
            <img
              src={img("/images/hero-ivan.png")}
              alt="Iván Chocrón"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "25% 15%" }}
            />
          </div>
          <div className="px-6 py-10">
            <img
              src={img("/images/logo-horizontal.png")}
              alt="Iván Chocrón Logo"
              className="mb-4 w-[280px] h-auto"
            />
            <p className="text-2xl font-light text-[#4b4746] leading-snug mb-2">
              Speaker &amp; Healing Coach
            </p>
            <p className="text-base text-[#4b4746]/80 leading-relaxed">
              Bridging the gap between science and spirit through a grounded and approachable healing methodology.
            </p>
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-20 px-6 bg-[#9c8a78]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-medium text-[#4b4746] leading-snug mb-6" style={{ fontSize: "clamp(1.5rem, 2.78vw, 32.53px)" }}>
            Enough is enough. It is time to heal, shift into consciousness from unawareness and discover our unique gifts.
          </h2>
          <p className="font-medium text-[#4b4746] max-w-3xl leading-relaxed" style={{ fontSize: "clamp(1.1rem, 2.06vw, 24.12px)" }}>
            It is my vision to make grounded relatable healing accessible to individuals from every walk of life, belief system and background.
          </p>
        </div>
      </section>

      {/* ─── ABOUT — text left, coaching photo right ─── */}
      <section className="py-20 px-6 bg-[#9c8a78]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="text-[#4b4746]">
            <p className="font-light mb-6" style={{ fontSize: "15.72px" }}>Hi! My name is Iván.</p>
            <p className="font-light leading-relaxed mb-5" style={{ fontSize: "15.72px" }}>
              I&apos;ve been helping people change their lives for over a decade. Whether you need to overcome depression, are curious about what your next steps are in life are or want to heal PTSD or deep trauma from sexual or physical abuse, I am here to support you. I&apos;ve assisted over 10,000+ people in their process of transformation, it&apos;s my goal to guide people from being discontent to being excited to wake up every day.
            </p>
          </div>
          <div className="relative overflow-hidden" style={{ aspectRatio: "488 / 368" }}>
            <img
              src={img("/images/coaching-session.jpg")}
              alt="Iván coaching session"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── QUOTE + APPROACH ─── */}
      <section className="bg-[#9c8a78]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="relative" style={{ aspectRatio: "578 / 905" }}>
            <img
              src={img("/images/ivan-meditating.jpg")}
              alt="Iván meditating"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="text-[#4b4746]">
            {/* Quote block with teal background */}
            <div className="bg-[#b8d8d0] p-10 md:p-12">
              <p className="text-xl md:text-2xl font-bold text-[#4b4746] leading-snug">
                &ldquo;Healing work is the most important thing anyone can do for themselves and the world around them.&rdquo;
              </p>
            </div>
            <div className="px-8 md:px-12 py-8">
              <p className="font-light leading-relaxed mb-5" style={{ fontSize: "15.72px" }}>
                My approach is <strong className="font-bold">grounded</strong>. I have created my own system of healing, working with proven methods based on science and psychology to help people overcome their blocks.
              </p>
              <p className="font-light leading-relaxed mb-5" style={{ fontSize: "15.72px" }}>
                My approach is <strong className="font-bold">relatable</strong>. Whether you are spiritual, scientific, religious, atheist, a mechanic or a CEO, you will feel seen and understood by me.
              </p>
              <p className="font-light leading-relaxed mb-5" style={{ fontSize: "15.72px" }}>
                I merge the worlds of science and spirit and bring a fresh perspective to make healing simple, fun, effective and available for everybody.
              </p>
              <p className="font-light leading-relaxed mb-8" style={{ fontSize: "15.72px" }}>
                I&apos;m excited to be a part of your healing process, witness your natural gifts bloom and share my own with you.
              </p>
              <p className="text-2xl italic font-light text-[#4b4746] mb-8" style={{ fontFamily: "'Dancing Script', cursive" }}>
                Iván Chocrón
              </p>
              <a
                href={INQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-[#4b4746] hover:bg-[#3a3635] text-white font-medium transition-colors text-sm tracking-wider"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIAGONAL DIVIDER: tan → black ─── */}
      <div className="relative h-24 bg-black">
        <div className="absolute inset-0 bg-[#9c8a78]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }} />
      </div>

      {/* ─── METHODOLOGY ─── */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={img("/images/methodology-bg.jpg")}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <p className="uppercase tracking-[0.3em] text-white/50 text-sm mb-4 font-medium text-center">A Three Part</p>
            <h2 className="font-medium mb-16 text-center text-[#fffaf4]" style={{ fontSize: "clamp(3rem, 11.24vw, 131.5px)" }}>Methodology</h2>
            <div className="max-w-[600px] space-y-0">
              {[
                { title: "EDUCATION", desc: "Through YouTube, podcasts, speaking engagements, and retreats, I educate people about what real healing encompasses \u2014 creating those incredible ah-ha moments of insight and breakthroughs that help people understand themselves at a deeper level." },
                { title: "EMOTIONAL PROCESSING", desc: "Using my knowledge of psychology and a decade of experience working in healing retreats, I help people process and heal their trauma while releasing stuck emotions in a safe, supported environment." },
                { title: "RETREATS", desc: "My private retreats fuse philosophies and lessons from leading 500+ healing events. Thousands of people have freed themselves from physical and psychological challenges through these transformative experiences hosted worldwide." },
              ].map((item, i) => (
                <details key={item.title} className={`border-t border-white/20 group ${i === 2 ? "border-b border-white/20" : ""}`}>
                  <summary className="cursor-pointer flex items-center justify-between list-none" style={{ padding: "30px 0" }}>
                    <h3 className="font-light tracking-[0.15em]" style={{ fontSize: "22.7px" }}>{item.title}</h3>
                    <span className="text-2xl text-white/40 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="pb-6 text-white/60 leading-relaxed" style={{ fontSize: "17.14px" }}>{item.desc}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIAGONAL DIVIDER: methodology → warm white ─── */}
      <div className="relative h-24 bg-[#fffaf4]">
        <div className="absolute inset-0 bg-[#1a1a1a]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0%)" }} />
      </div>

      {/* ─── PHILOSOPHY ─── */}
      <section id="philosophy" className="py-24 px-6 bg-[#fffaf4]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-medium text-center text-black mb-16" style={{ fontSize: "clamp(1.8rem, 3.49vw, 40.79px)" }}>
            Pillars of My Philosophy
          </h2>
          <div className="grid gap-12 grid-cols-1 sm:grid-cols-2">
            {[
              { title: "Science & Spirit", icon: "/images/icon-science-spirit.png", desc: "Science and spirit may seem to be incompatible worldviews, but that is not the case. Connecting these two worlds in a relatable way is essential for a balanced healing process." },
              { title: "Real Healing is Real", icon: "/images/icon-real-healing.png", desc: "This might sound obvious, but is it? If we truly knew that we could heal, why would we decide to numb our pain? True healing is possible and there are accessible ways to get there." },
              { title: "Relatability", icon: "/images/icon-relatability.png", desc: "Meeting people where they are at with a rational and grounded approach suitable for the modern western mind is key for everyone to feel that healing work is also meant for them." },
              { title: "Inner Gift", icon: "/images/icon-inner-gift.png", desc: "Every person has unique gifts, but few are aware of them until they heal their wounds. As people walk the path of healing they begin discovering and embodying their gifts, which brings a great sense of purpose and enthusiasm for life." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="h-[127px] mx-auto mb-5 flex items-center justify-center">
                  <img src={img(item.icon)} alt={item.title} className="h-full w-auto object-contain" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                <p className="text-sm text-[#4b4746]/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <a
              href={`/${lang}/about`}
              className="inline-block px-10 py-4 bg-[#9aaaaf] hover:bg-[#8a9a9f] text-white font-medium transition-colors text-sm tracking-wider"
            >
              Explore my Philosophy
            </a>
          </div>
        </div>
      </section>

      {/* ─── DIAGONAL DIVIDER: warm white → beige ─── */}
      <div className="relative h-24 bg-[#d9cfc5]">
        <div className="absolute inset-0 bg-[#fffaf4]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }} />
      </div>

      {/* ─── SERVICES ─── */}
      <section className="py-24 px-6 bg-[#d9cfc5]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-medium text-[#4b4746] mb-6" style={{ fontSize: "clamp(1.8rem, 3.49vw, 40.79px)" }}>Services</h2>
            <div className="space-y-0">
              {[
                { title: "PUBLIC SPEAKING", desc: "Experience inspirational and educational talks on topics including the healing process, human emotions, science and spirituality, psychology, self-love, plant-medicine, and neo-shamanism." },
                { title: "LEADERSHIP COACHING & CONSULTING", desc: "From individuals to executives of Fortune 500 companies \u2014 creating conversation and bringing clarity by opening awareness to release communication blocks and improve team cohesion." },
                { title: "INTEGRATION SUPPORT", desc: "One-on-one support making sense of healing experiences. Grounded and relatable emotional processing techniques to bring your process to a more peaceful completion." },
                { title: "RETREATS", desc: "Private retreats fusing unique methods of emotional processing. Hosted worldwide in luxury settings with organic vegan cuisine and thoughtful amenities." },
              ].map((svc, i) => (
                <details key={svc.title} className={`border-t border-[#4b4746]/20 group ${i === 3 ? "border-b border-[#4b4746]/20" : ""}`}>
                  <summary className="cursor-pointer flex items-center justify-between list-none" style={{ padding: "30px 0" }}>
                    <h3 className="font-light text-[#4b4746] tracking-wider" style={{ fontSize: "22.7px" }}>{svc.title}</h3>
                    <span className="text-xl text-[#4b4746]/40 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="pb-5 text-[#4b4746]/70 font-light leading-relaxed" style={{ fontSize: "17.14px" }}>{svc.desc}</p>
                </details>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-[#4b4746] mb-4">Interested in working together?</p>
              <a
                href={INQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-[#4b4746] hover:bg-[#3a3635] text-white font-medium transition-colors text-sm tracking-wider"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ aspectRatio: "490 / 624" }}>
            <img
              src={img("/images/services-retreat.jpg")}
              alt="Iván Chocrón retreat"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── DIAGONAL DIVIDER: beige → tan ─── */}
      <div className="relative h-24 bg-[#9c8a78]">
        <div className="absolute inset-0 bg-[#d9cfc5]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }} />
      </div>

      {/* ─── TESTIMONIALS (carousel-style, one at a time) ─── */}
      <section className="py-24 px-6 bg-[#9c8a78]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-medium text-center text-[#fffaf4] mb-16" style={{ fontSize: "clamp(1.8rem, 3.49vw, 40.79px)" }}>
            Testimonials
          </h2>
          {/* Show testimonials as scrollable cards */}
          <div className="relative">
            <div className="overflow-x-auto snap-x snap-mandatory flex gap-6 pb-6 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="snap-center flex-shrink-0 w-full max-w-[900px] mx-auto">
                  <div className="text-center px-4">
                    <img
                      src={img(t.photo)}
                      alt={t.name}
                      className="w-[250px] h-[250px] md:w-[311px] md:h-[312px] rounded-full object-cover mx-auto mb-8"
                    />
                    <p className="text-[#fffaf4] font-medium leading-relaxed mb-8" style={{ fontSize: "14.58px" }}>
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="font-light text-[#fffaf4]" style={{ fontSize: "16px" }}>{t.name}</p>
                    <p className="font-light text-[#fffaf4]/50 mt-1" style={{ fontSize: "16px" }}>{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIAGONAL DIVIDER: tan → warm white ─── */}
      <div className="relative h-24 bg-[#fffaf4]">
        <div className="absolute inset-0 bg-[#9c8a78]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0%)" }} />
      </div>

      {/* ─── YOUTUBE CTA ─── */}
      <section className="py-20 px-6 bg-[#fffaf4]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-medium text-black mb-2" style={{ fontSize: "clamp(1.8rem, 3.49vw, 40.79px)" }}>
              Now on <a href="https://youtube.com/@IvanChocron" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700">YouTube</a>
            </h2>
            <h3 className="font-medium text-black mb-6" style={{ fontSize: "24.12px" }}>Youtube: @IvanChocron</h3>
            <p className="font-medium text-black leading-relaxed mb-6" style={{ fontSize: "24.12px" }}>
              Previously exclusively available only through limited private sessions, Iván&apos;s philosophy, methods, and guidance are now available to you online for free.
            </p>
            <blockquote className="mb-8">
              <p className="font-light text-black leading-relaxed" style={{ fontSize: "15.72px" }}>
                &ldquo;After a decade of private events, I&apos;ve decided it&apos;s time to share all I&apos;ve learned with the world. My hope is that by freely passing on the knowledge I hold, millions of people will either begin or move further in their healing journey&rdquo;.
              </p>
              <p className="font-light text-black mt-3" style={{ fontSize: "15.72px" }}>Iván</p>
            </blockquote>
          </div>
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dPly3ltTBso"
              title="Iván Chocrón YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ─── RECENT APPEARANCES ─── */}
      <section id="appearances" className="py-24 px-6 bg-[#d9cfc5]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-medium text-[#4b4746] mb-4" style={{ fontSize: "clamp(1.8rem, 3.49vw, 40.79px)" }}>
            Recent Appearances
          </h2>
          <p className="font-light text-[#4b4746] mb-4" style={{ fontSize: "15.72px" }}>
            Go deeper &amp; learn more by listening to Iv&aacute;n&apos;s interviews with trusted leaders in the health &amp; wellness space.
          </p>
          <h3 className="font-medium text-[#4b4746] mb-12" style={{ fontSize: "24.12px" }}>
            The Science of Psychedelics &amp; Spiritual Medicine Conference
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <img src={img("/images/appearances-psychedelics.png")} alt="Science of Psychedelics conference" className="w-full" />
            <img src={img("/images/appearances-screen1.png")} alt="Recent appearance" className="w-full" />
            <img src={img("/images/appearances-screen2.png")} alt="Recent appearance" className="w-full" />
          </div>
          <div className="text-center">
            <a
              href={`/${lang}/about`}
              className="inline-block px-10 py-4 bg-[#4b4746] hover:bg-[#3a3635] text-white font-medium transition-colors tracking-wider uppercase"
              style={{ fontSize: "17.14px" }}
            >
              See More Features
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-16 px-6 bg-[#4b4746] text-white/70">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Left — socials + contact */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/50 hover:text-white hover:border-white/60 transition-colors"
                    aria-label={s.label}
                  >
                    <SocialIcon d={s.icon} label={s.label} />
                  </a>
                ))}
              </div>
              <div className="mb-4">
                <p className="font-semibold text-white text-sm mb-1">Contact:</p>
                <a href="mailto:ivan@ivanchocron.com" className="text-white/60 hover:text-white text-sm">ivan@ivanchocron.com</a>
              </div>
              <div>
                <p className="font-semibold text-white text-sm mb-1">Press &amp; Media Inquiries:</p>
                <a href="mailto:hello@ivanchocron.com" className="text-white/60 hover:text-white text-sm">hello@ivanchocron.com</a>
              </div>
            </div>

            {/* Center — logo */}
            <div className="flex justify-center">
              <img
                src={img("/images/logo-dark-bg.png")}
                alt="Iván Chocrón"
                className="h-24 w-auto opacity-70"
              />
            </div>

            {/* Right — subscribe */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-2">Subscribe</h3>
              <p className="text-white/60 text-sm mb-4">Type your e-mail to receive updates and stay in touch!</p>
              <form className="space-y-3" action="#">
                <input
                  type="email"
                  placeholder="e-mail address"
                  className="w-full px-4 py-3 bg-transparent border border-white/30 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/60"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-[#9c8a78] hover:bg-[#8a7968] text-white font-medium transition-colors text-sm tracking-wider"
                >
                  Sign up
                </button>
              </form>
              <p className="text-white/40 text-xs mt-3">You can unsubscribe anytime. We don&apos;t spam or sell your data.</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/40 text-xs">
              &copy;Iván Chocrón {new Date().getFullYear()}, All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
