import { getDictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import versionData from "../../../version.json";

const BASE = "/IvanApp";
const img = (path: string) => `${BASE}${path}`;

const INQUIRY_URL = "https://forms.gle/MLqbYfbZhWQvkNpXA";

const SOCIALS = [
  { label: "YouTube", href: "https://youtube.com/@IvanChocron", icon: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { label: "Instagram", href: "https://www.instagram.com/ivanchocron/", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ivanchocron/", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { label: "Facebook", href: "https://facebook.com/ivanchocron", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { label: "TikTok", href: "https://tiktok.com/@IvanChocron", icon: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
  { label: "X", href: "https://x.com/IvanChocron", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
];

const TESTIMONIALS = [
  {
    name: "Andrew H.",
    role: "Assistant City Manager, Governor\u2019s Military Council, California Space Industry Task Force, Lieutenant Colonel (retired), US Air Force",
    quote: "I first met Iv\u00e1n at a retreat and many times, subsequently. His coaching is unlike any I\u2019ve experienced before. Instead of prescriptive advice, he approaches relating to people by listening with empathy and compassion, then helping them connect to how they feel. I\u2019m convinced the toughest challenges we all face simply aren\u2019t accessible to analysis; we have to also (and mostly) find alignment with our feelings and act accordingly. As a person in an executive position, I\u2019m used to relying heavily on my thinking function, so it was really remarkable for me to be able to articulate a challenge to Iv\u00e1n and have him cut through confusion and fear, allowing me to gain direct insight that truly helped me make meaningful changes in every aspect of my life. I look forward to working with Iv\u00e1n again and again!",
  },
  {
    name: "Karina Cury",
    role: "Flight Attendant",
    quote: "During a difficult and overwhelming period of my life, I found solace and guidance in Iv\u00e1n Chocron. As a Flight Attendant for 26 years, I was struggling with emotional challenges and heavily relied on medication. Ivan played a crucial role in my healing journey, providing a safe space for me to express my fears and concerns. With his compassionate nature, he listened attentively and offered valuable insights that allowed me to see things from a new perspective. Ivan\u2019s coaching style combines empathy and challenge, encouraging me to step out of my comfort zone, confront my fears, and take proactive steps towards personal growth. He empowered me to believe in myself and reminded me that healing is a gradual process. With his support, I developed new coping strategies, built resilience, and regained control over my life. Today, I am joyful and medication-free, thanks to Ivan\u2019s motivation and guidance.",
  },
  {
    name: "Hanja H.",
    role: "Creative Director",
    quote: "Iv\u00e1n is a truly unique and compassionate soul. His rapid-fire brain impresses me as he effortlessly connects the dots, helping clients process deep-rooted emotions. What sets him apart is his ability to seamlessly blend in-depth psychology, Western science, and traditional spirituality. As a public speaker, his wisdom flows effortlessly, and he has a remarkable talent for simplifying complex concepts into relatable terms and analogies. Personally attending his coaching sessions and retreats, I\u2019ve witnessed how he guides and heals countless individuals. I wholeheartedly recommend Iv\u00e1n and am immensely grateful to have crossed paths with such an incredible person. Thank you endlessly for your kindness and support.",
  },
  {
    name: "Mauricio J",
    role: "Engineer \u2014 Alcon Laboratories",
    quote: "Ivan is not just great with abilities related to his practice. He has large set of skills, academic degrees, multiple languages, technical degrees, book and street smart, an athlete, a champion, a fighter, an inspiration and motivation for many. Ultimately, he really cares for people that he comes across. He made me feel welcome, supported and appreciated when I needed the most. I wish I could spend more time and create a stronger friendship, but due to our different schedules, location and his devotion for his work, I simply appreciate the limited time we interacted and wish him the best because he is making the world a better place.",
  },
  {
    name: "Ekaterina Klyukina",
    role: "Project Manager",
    quote: "I visited Ivan\u2019s retreat twice and it really changed my life. I was deeply depressed for years and I started anti-depressants couple months before coming to Ivan\u2019s retreat. After the first experience with Ivan, I was able to stop antidepressants, I got really better. Now, two years later, I really changed my life for the best, I quit smoking, drinking, doing drugs. My marriage is in the better place. I cannot thank Ivan enough. It all won\u2019t be possible without him, without this beautiful safe space that he creates for people to heal. Ivan\u2019s ability to get people together, to listen and understand their darkest moments without judgment and shame make a huge difference in our life. I\u2019m forever grateful.",
  },
  {
    name: "George M",
    role: "Director of Business Development, EV Charging",
    quote: "Iv\u00e1n curates amazing opportunities for healing. His experience and open heart provides the most comforting environment as he guides participants through journeys that can be quite challenging. 1-1 processing with Iv\u00e1n is truly remarkable as he is somehow able to relate to any number of different people, succinctly engage and often solve many hard and persistent issues. After each time working with Ivan, it really feels like our whole group is family. I cannot recommend him highly enough. As I direct business development for a bidirectional EV charging company, the lessons learned with Iv\u00e1n help me to feel more comfortable and initiating and advancing dialogue across a wide variety of partners and customers. Truly invaluable all around!",
  },
  {
    name: "Jennifer Estevez",
    role: "Founder of OMvino, Consciously Planted, Crystals & Smudge Stick, Palate Club",
    quote: "Iv\u00e1n Chocron had a profound impact on my life as a stressed-out CEO. His ability to bridge science and spirituality gave me hope when I was overwhelmed and on the brink of burnout. Through personalized coaching sessions, Iv\u00e1n guided me towards self-awareness, acceptance, and the release of stress and limiting beliefs. His approach empowered me to take control of my healing, leading to a transformed CEO who has rediscovered balance, fulfillment, and joy. Iv\u00e1n\u2019s teachings have permeated every aspect of my life, allowing me to lead with compassion and purpose. I wholeheartedly recommend Iv\u00e1n Chocron to anyone seeking inner transformation. Trust in him and embark on your journey towards healing \u2014 it will be the most empowering decision you make.",
  },
  {
    name: "Jay Deshpande",
    role: "Wealth Manager",
    quote: "Ivan possesses a rare gift of creating a sense of welcoming, love, and safety for everyone he encounters. Meeting him during a wellness retreat in Washington DC, I immediately felt comfortable in his presence, as if we had known each other for years. Ivan\u2019s ability to understand and accept people, regardless of their background or past, is truly remarkable. I have learned invaluable lessons from him, which have helped me navigate and restructure difficulties in my personal life, such as repairing family and relationship dynamics. His advice has grounded me and allowed me to face challenges with a calm mind. In just a short time, I have experienced a profound positive shift in my mood and demeanor. Ivan\u2019s expertise in biochemistry, psychology, and personal wellness shines through as he explains complex topics in an easy-to-understand and compassionate manner. His dedication to self-care enhances his ability to facilitate healing. My overall experience with Ivan has been incredibly therapeutic, and I am excited to continue working with him in the future.",
  },
  {
    name: "Christiane Robbins",
    role: "Senior Scientific Review Officer, NICHD/NIH",
    quote: "I am a 55-year-old scientist and mother of two. Overcoming childhood trauma and the unexpected loss of my husband were immense challenges, but nothing prepared me for my son David\u2019s battle with pediatric osteosarcoma. When David eventually passed away, the pain was indescribable. Determined to grieve authentically, I tried various healing modalities before attending Ivan\u2019s retreat in 2020. It was a truly transformative experience, marked by Ivan\u2019s knowledge, care, and professionalism. Despite a large group, he made sure to provide personalized attention to each participant. Through countless conversations with Ivan, I had a major shift in healing. I\u2019ve attended a second retreat and eagerly anticipate future ones. Ivan\u2019s unmatched understanding of psychology and spirituality, coupled with his divine gift for facilitating healing, has been invaluable. I believe David sent Ivan into my life to help me rise from the depths of pain. Aho Ivan!",
  },
  {
    name: "Liana Prieto",
    role: "Attorney",
    quote: "Ivan has helped me in countless ways. His ability to simultaneously analyze, empathize, and counsel is unique. After my sessions with Ivan I was able to better understand and tackle the feelings and thoughts that were holding me back in a job and mindset that weren\u2019t healthy, and I was also able to conquer a physical ailment. I cannot recommend Ivan enough.",
  },
  {
    name: "Devon Anderson",
    role: "VP Product/AI at Tech Company",
    quote: "I joined Ivan\u2019s retreat at Cielos in November 2022. I can\u2019t express enough what a transformational experience that weekend was for me. I had so many insights and breakthroughs from the sessions we had. Ivan and his team were incredibly supportive and helpful, guiding me through the difficult parts of the sessions and helping me make sense of my feelings. I have done many different healing retreats and modalities and this was by far one of the most impactful experiences. I have recommended Ivan\u2019s retreats and will continue to do so. I plan on attending a retreat again in the near future.",
  },
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
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#9c8a78]/80">
        <div className="max-w-[1500px] mx-auto px-[4vw] flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <a href={`/${lang}`}>
              <img src={img("/images/logo-icon.png")} alt="Iv&aacute;n Chocr&oacute;n" className="h-[50px] w-auto" />
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
              { label: "Contact", href: INQUIRY_URL },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#4b4746] hover:text-[#333] transition-colors tracking-wide"
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-[#c4b5a5] pt-20">
        <div className="max-w-[1500px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-end">
          {/* Photo — light background so Ivan pops */}
          <div className="relative h-[60vh] md:h-[85vh] bg-[#f0ece6]">
            <img
              src={img("/images/hero-ivan.png")}
              alt="Iván Chocrón"
              className="absolute inset-0 w-full h-full object-contain object-bottom"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-12 py-12 md:py-24">
            <img
              src={img("/images/logo-horizontal.png")}
              alt="Iván Chocrón Logo"
              className="mb-6 w-[280px] md:w-[500px] h-auto"
            />
            <h1 className="text-2xl md:text-[2.5rem] font-light text-[#4b4746] mb-4 leading-snug">
              Speaker &amp; Healing Coach
            </h1>
            <p className="text-base md:text-lg text-[#4b4746]/80 leading-relaxed max-w-lg">
              Bridging the gap between science and spirit through a grounded and approachable healing methodology.
            </p>
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-20 px-6 bg-[#9c8a78]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#fffaf4] mb-6 leading-snug">
            Enough is enough. It is time to heal, shift into consciousness<br className="hidden md:block" /> from unawareness and discover our unique gifts.
          </h2>
          <p className="text-lg text-[#fffaf4]/80 max-w-2xl mx-auto leading-relaxed">
            It is my vision to make grounded relatable healing accessible to individuals from every walk of life, belief system and background.
          </p>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-20 px-6 bg-[#9c8a78]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Photo */}
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <img
              src={img("/images/about-ivan.jpg")}
              alt="Iván Chocrón"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="text-[#4b4746]">
            <h2 className="text-3xl font-semibold mb-6">Hi! My name is Iv&aacute;n.</h2>
            <p className="text-base leading-relaxed mb-5">
              I&apos;ve been helping people change their lives for over a decade. Whether you need to overcome depression, are curious about what your next steps are in life are or want to heal PTSD or deep trauma from sexual or physical abuse, I am here to support you. I&apos;ve assisted over 10,000+ people in their process of transformation, it&apos;s my goal to guide people from being discontent to being excited to wake up every day.
            </p>
            <p className="text-base leading-relaxed mb-5">
              My approach is <strong>grounded</strong>. I have created my own system of healing, working with proven methods based on science and psychology to help people overcome their blocks.
            </p>
            <p className="text-base leading-relaxed mb-5">
              My approach is <strong>relatable</strong>. Whether you are spiritual, scientific, religious, atheist, a mechanic or a CEO, you will feel seen and understood by me.
            </p>
            <p className="text-base leading-relaxed mb-5">
              I merge the worlds of science and spirit and bring a fresh perspective to make healing simple, fun, effective and available for everybody.
            </p>
            <p className="text-base leading-relaxed mb-8">
              I&apos;m excited to be a part of your healing process, witness your natural gifts bloom and share my own with you.
            </p>
            <p className="text-2xl italic font-light text-[#4b4746] mb-8" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Iv&aacute;n Chocr&oacute;n
            </p>
            <a
              href={INQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-[#4b4746] hover:bg-[#3a3635] text-white font-medium transition-colors text-sm tracking-wider uppercase"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* ─── QUOTE ─── */}
      <section className="py-20 px-6 bg-[#b8d8d0]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-semibold text-[#4b4746] leading-snug italic">
            &ldquo;Healing work is the most important thing anyone can do for themselves and the world around them.&rdquo;
          </p>
        </div>
      </section>

      {/* ─── METHODOLOGY ─── */}
      <section className="relative text-white overflow-hidden">
        {/* Background image */}
        <div className="relative">
          <div className="absolute inset-0 z-0">
            <img
              src={img("/images/methodology-ivan.jpg")}
              alt="Methodology"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 py-24 px-6">
            <div className="max-w-[1200px] mx-auto">
              <p className="uppercase tracking-[0.2em] text-white/60 text-sm mb-3 font-medium">A Three Part</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-16">Methodology</h2>
              <div className="space-y-0">
                {[
                  { title: "EDUCATION", desc: "Through YouTube, podcasts, speaking engagements, and retreats, I educate people about what real healing encompasses \u2014 creating those incredible ah-ha moments of insight and breakthroughs that help people understand themselves at a deeper level." },
                  { title: "EMOTIONAL PROCESSING", desc: "Using my knowledge of psychology and a decade of experience working in healing retreats, I help people process and heal their trauma while releasing stuck emotions in a safe, supported environment." },
                  { title: "RETREATS", desc: "My private retreats fuse philosophies and lessons from leading 500+ healing events. Thousands of people have freed themselves from physical and psychological challenges through these transformative experiences hosted worldwide." },
                ].map((item, i) => (
                  <div key={item.title} className={`border-t border-white/20 py-6 ${i === 2 ? "border-b" : ""}`}>
                    <h3 className="text-xl font-semibold tracking-wider">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="py-24 px-6 bg-[#ece5de]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#333] mb-16">
            Pillars of My Philosophy
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Science & Spirit", icon: "/images/icon-science-spirit.png", desc: "Science and spirit may seem to be incompatible worldviews, but that is not the case. Connecting these two worlds in a relatable way is essential for a balanced healing process." },
              { title: "Real Healing is Real", icon: "/images/icon-real-healing.png", desc: "This might sound obvious, but is it? If we truly knew that we could heal, why would we decide to numb our pain? True healing is possible and there are accessible ways to get there." },
              { title: "Relatability", icon: "/images/icon-relatability.png", desc: "Meeting people where they are at with a rational and grounded approach suitable for the modern western mind is key for everyone to feel that healing work is also meant for them." },
              { title: "Inner Gift", icon: "/images/icon-inner-gift.png", desc: "Every person has unique gifts, but few are aware of them until they heal their wounds. As people walk the path of healing they begin discovering and embodying their gifts, which brings a great sense of purpose and enthusiasm for life." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-24 h-24 mx-auto mb-5">
                  <img src={img(item.icon)} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-[#333] mb-3">{item.title}</h3>
                <p className="text-sm text-[#4b4746]/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-24 px-6 bg-[#ece5de]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Photo */}
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <img
              src={img("/images/services-ivan.jpg")}
              alt="Iván Chocrón Services"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Services list */}
          <div>
            <p className="uppercase tracking-[0.2em] text-[#4b4746]/60 text-sm mb-3 font-medium">Services</p>
            <div className="space-y-0">
              {[
                { title: "PUBLIC SPEAKING", desc: "Experience inspirational and educational talks on topics including the healing process, human emotions, science and spirituality, psychology, self-love, plant-medicine, and neo-shamanism." },
                { title: "LEADERSHIP COACHING & CONSULTING", desc: "From individuals to executives of Fortune 500 companies \u2014 creating conversation and bringing clarity by opening awareness to release communication blocks and improve team cohesion." },
                { title: "INTEGRATION SUPPORT", desc: "One-on-one support making sense of healing experiences. Grounded and relatable emotional processing techniques to bring your process to a more peaceful completion." },
                { title: "RETREATS", desc: "Private retreats fusing unique methods of emotional processing. Hosted worldwide in luxury settings with organic vegan cuisine and thoughtful amenities." },
              ].map((svc, i) => (
                <div key={svc.title} className={`border-t border-[#4b4746]/20 py-5 ${i === 3 ? "border-b" : ""}`}>
                  <h3 className="text-base font-semibold text-[#4b4746] tracking-wider">{svc.title}</h3>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-[#4b4746] mb-4">Interested in working together?</p>
              <a
                href={INQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 bg-[#4b4746] hover:bg-[#3a3635] text-white font-medium transition-colors text-sm tracking-wider uppercase"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 px-6 bg-[#9c8a78] relative overflow-hidden">
        {/* Decorative diagonal divider at top */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-[#ece5de]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)" }} />
        <div className="max-w-[1200px] mx-auto pt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#fffaf4] mb-16">
            Testimonials
          </h2>
          <div className="space-y-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-[#fffaf4]/10 backdrop-blur-sm rounded-xl p-8 border border-[#fffaf4]/10">
                <p className="text-[#fffaf4]/90 leading-relaxed mb-5 text-sm italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[#fffaf4] text-sm">{t.name}</p>
                  <p className="text-[#fffaf4]/50 text-xs mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── YOUTUBE CTA ─── */}
      <section className="py-20 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-white/50 text-sm mb-3 font-medium">Now on YouTube</p>
            <h2 className="text-3xl font-bold mb-4">Youtube: @IvanChocron</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Previously exclusively available only through limited private sessions, Iv&aacute;n&apos;s philosophy, methods, and guidance are now available to you online for free.
            </p>
            <blockquote className="border-l-4 border-white/30 pl-5 mb-8">
              <p className="text-white/80 italic leading-relaxed">
                &ldquo;After a decade of private events, I&apos;ve decided it&apos;s time to share all I&apos;ve learned with the world. My hope is that by freely passing on the knowledge I hold, millions of people will either begin or move further in their healing journey&rdquo;.
              </p>
              <p className="text-white/60 mt-3 italic">Iv&aacute;n</p>
            </blockquote>
            <a
              href="https://youtube.com/@IvanChocron"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium transition-colors text-sm tracking-wider uppercase"
            >
              Subscribe
            </a>
          </div>
          <div className="flex justify-center">
            <img
              src={img("/images/logo-large.png")}
              alt="Iván Chocrón"
              width={300}
              height={300}
              className="opacity-60"
            />
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-12 px-6 bg-[#1a1a1a] border-t border-white/10">
        <div className="max-w-[1200px] mx-auto">
          {/* Social links */}
          <div className="flex items-center justify-center gap-6 mb-8">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/80 transition-colors"
                aria-label={s.label}
              >
                <SocialIcon d={s.icon} label={s.label} />
              </a>
            ))}
          </div>
          <p className="text-center text-white/30 text-xs">
            &copy;Iv&aacute;n Chocr&oacute;n {new Date().getFullYear()}, All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
