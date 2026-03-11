# Homepage Migration Spec

**Source:** https://www.ivanchocron.com/
**Measured at:** 1427px viewport (1440px window minus scrollbar)
**Total page height:** ~9806px
**Font stack:** Poppins (primary), system sans-serif fallback

---

## GLOBAL

### Colors (hex)
| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Tan | #9C8A78 | rgb(156,138,120) | Section bg, social icons, muted text |
| Charcoal | #4B4746 | rgb(75,71,70) | Body text, dark buttons, footer bg |
| Black | #000000 | rgb(0,0,0) | Headings in light sections |
| Warm White | #FFFAF4 | rgb(255,250,244) | Light section bg, light text on dark |
| Beige | #D9CFC5 | rgb(217,207,197) | Services bg, Sign-up button bg |
| Muted Teal | #9AAAAF | rgb(154,170,175) | Quote block bg, Explore/Subscribe buttons |
| Footer Muted | #9A9494 | rgb(154,148,148) | Small disclaimer text in footer |

### Typography Scale (at ~1440px)
| Role | Size | Weight | Line-Height | Color |
|------|------|--------|-------------|-------|
| Hero subtitle | 55.3px | 300 | 55.3px | #4B4746 |
| H2 section heading | 45.8px | 500 | — | varies |
| H3 large heading | 35.87px | 500 | 49.94px | varies |
| H4 sub-heading | 25.76px | 500 | 36.76px | varies |
| Methodology title | 158.5px | 500 | 158.5px | #FFFAF4 |
| Accordion title | 24.05px | 300 | — | varies |
| Body text | 15.66px | 300 | 29.28px | #4B4746 |
| Nav links | 17.37px | 300 | 32.48px | #4B4746 |
| Button text | 17.37px | 500 | — | #FFFFFF |

All text is font-family: Poppins. No other display fonts except one handwritten-style logo image.

### Buttons
| Type | BG | Text Color | Font | Padding | Border-Radius |
|------|----|-----------|------|---------|---------------|
| Primary (dark) | #4B4746 | #FFFFFF | 17.37px / 500 | 0 24px | 6.4px |
| Secondary (teal) | #9AAAAF | #FFFFFF | 17.37px / 500 | 0 24px | 6.4px |
| Footer Sign Up | #D9CFC5 | #000000 | 18px / 400 | — | 0 |

### Diagonal Section Dividers
All dividers are ~86px tall (except YouTube-to-Appearances which is ~29px). They are SVG-based angled shapes that sit at the bottom of each section, creating a diagonal transition. Direction is consistently: the upper section's color occupies the top-left and the lower section reveals from bottom-right (slash shape: upper-left to lower-right, like `/`).

---

## HEADER / NAVIGATION

- **Position:** fixed, top: 0, z-index: 10
- **Background:** transparent (content scrolls behind it)
- **Height:** 134px (includes internal padding)
- **Inner content area:** x=57 to x=1355 (width ~1298px), vertically centered at y~67

### Logo
- **Image:** circular icon logo (72x71px)
- **Position:** far left, x=57, y=31

### Nav Items (right-aligned)
Order: Home | About | Services | Explore (dropdown) | Contact

| Item | href | Type |
|------|------|------|
| Home | / | link |
| About | /about | link |
| Services | /services | link |
| Explore | — | dropdown folder |
| Contact | /contact | link |

**Explore dropdown children:**
1. Pillars of My Philosophy -> /pillars-of-my-philosophy
2. Recent Features -> /recent-features
3. Press & Media -> /press-and-media

**Nav positions (x):** Home=879, About=973, Services=1068, Explore=1181, Contact=1285
**Gap between items:** ~42-43px

**Nav font:** Poppins, 17.37px, weight 300, color #4B4746, normal letter-spacing
**Active state:** "Home" has underline when on homepage

---

## SECTION 0: HERO (y=0, h=812)

- **Background:** Full-bleed image (`Ivan+Extended+1.png`), object-fit: cover, object-position: 30.83% 25.60%
- **Section fallback bg:** #9C8A78

### Content (right-aligned, over image)
1. **Horizontal logo lockup** (image, not text): x=503, y=181, 733x146px, object-fit: contain
   - Shows icon + "Iván Chocrón" wordmark
2. **"Speaker & Healing Coach"**: P tag, 55.3px, weight 300, color #4B4746, y=338
3. **"Bridging the gap between science and spirit through a grounded and approachable healing methodology."**: H3, 35.87px, weight 500, color #000000, line-height 49.94px, y=416, width ~753px

### Layout
- Text block starts at x=548 (~38% from left)
- Ivan's photo (from the bg image) appears on the left ~30% of the viewport
- 86px diagonal divider at bottom (tan to next section tan — same color, barely visible)

---

## SECTION 1: ABOUT / INTRO (y=812, h=2154)

**Background:** #9C8A78 (tan) throughout entire section

This is ONE large section containing multiple content blocks:

### Block A: Intro Heading (y=914)
- **H3:** "Enough is enough. It is time to heal, shift into consciousness from unawareness and discover our unique gifts."
  - 35.87px, weight 500, color #4B4746, width ~1189px (full content width)
  - x=112

### Block B: Vision Statement (y=1048)
- **H4:** "It is my vision to make grounded relatable healing accessible to individuals from every walk of life, belief system and background."
  - 25.76px, weight 500, color #4B4746

### Block C: About Text + Photo (y=1205)
**Two-column layout:**
- **Left column (x=112, w=534):**
  - **"Hi! My name is Iván."** — `<strong>`, 15.66px, weight 700, color #4B4746
  - **Body paragraph** — 15.66px, weight 300, color #4B4746, line-height 29.28px
    - Text: "I've been helping people change their lives for over a decade. Whether you need to overcome depression, are curious about what your next steps are in life are or want to heal PTSD or deep trauma from sexual or physical abuse, I am here to support you. I've assisted over 10,000+ people in their process of transformation, it's my goal to guide people from being discontent to being excited to wake up every day."
- **Right column (x=712, w=589):**
  - Image: `2023-05-13-bahareh.co-555.jpg` (coaching/community photo, people in social setting)
  - 589x420px, object-fit: cover

### Block D: Meditation Photo + Quote + Approach (y=1675)
**Two-column layout:**
- **Left column (x=57, w=698):**
  - Image: `2023-05-13-bahareh.co-303.jpg` (Ivan meditating/seated alone)
  - 698x1009px, object-fit: cover (tall portrait orientation)
- **Right column (x=657):**
  - **Teal quote block (y=1715):** bg #9AAAAF, 589x303px, padding 35.33px
    - H3: "Healing work is the most important thing anyone can do for themselves and the world around them."
    - 35.87px, weight 500, color #4B4746
  - **Approach paragraphs (y=2068+):** 15.66px, weight 300, color #4B4746
    1. "My approach is **grounded**. I have created my own system of healing, working with proven methods based on science and psychology to help people overcome their blocks."
    2. "My approach is **relatable**. Whether you are spiritual, scientific, religious, atheist, a mechanic or a CEO, you will feel seen and understood by me."
    3. "I merge the worlds of science and spirit and bring a fresh perspective to make healing simple, fun, effective and available for everybody."
    4. "I'm excited to be a part of your healing process, witness your natural gifts bloom and share my own with you."
    - Words "grounded" and "relatable" are `<strong>` (weight 700)
  - **Signature logo** (y=2578): image `Ivan+-+logo+-+large+-+png+-+main.png`, 332x107px (handwritten-style "Iván Chocrón")
  - **"Get In Touch" button** (y=2735): bg #4B4746, white text, 17.37px/500, padding 0 24px, border-radius 6.4px, 316x67px
    - href: Google Forms link

### Divider at bottom: 86px diagonal, #9C8A78 (tan) to dark/black (Methodology bg)

---

## SECTION 2: METHODOLOGY (y=2966, h=1016)

- **Background:** Full-bleed image (`2023-05-13-bahareh.co-575.jpg`) with **black overlay**
- **Text color:** #FFFAF4 (warm white)

### Content
1. **"A THREE PART"** — P, 24.05px, weight 300, center-aligned, color #FFFAF4
   - Text is typed uppercase (not text-transform)
2. **"Methodology"** — H2, **158.5px**, weight 500, center-aligned, color #FFFAF4, line-height 158.5px
3. **Accordion items** (left-aligned, x=166, w=534):
   - Each ~97px tall (collapsed)
   - Title: 24.05px, weight 300, color #FFFAF4
   - Border: thin lines between items (color matching text at low opacity)
   - **+ icon** on right, rotates to x on expand
   - Items:
     1. **EDUCATION** — "Education is a key component of Iván's approach in every service. Through Youtube, Podcasts, Speaking, and Retreats, Iván builds up his audience's knowledge..."
     2. **EMOTIONAL PROCESSING** — "Using my knowledge of psychology and a decade of experience working in healing retreats..."
     3. **RETREATS** — "My private retreats fuse philosophies and lessons from leading 500+ healing events..."

### Divider at bottom: 86px diagonal to #FFFAF4

---

## SECTION 3: PHILOSOPHY (y=3982, h=1369)

- **Background:** #FFFAF4 (warm white)

### Content
1. **"Pillars of My Philosophy"** — H2, 45.8px, weight 500, color #000000, center-aligned
2. **2x2 icon grid** (centered, ~1189px wide):
   - **Row 1:** Science & Spirit | Real Healing is Real
   - **Row 2:** Relatability | Inner Gift
   - Each cell: ~480px wide
   - **Icon:** Black line-art illustration, centered above title
   - **Title:** H3, 35.87px, weight 500, color #000000, center-aligned
   - **Description:** P, 15.66px, weight 300, color #000000, center-aligned

   **Full text for each pillar:**
   - **Science & Spirit:** "Science and spirit may seem to be incompatible worldviews, but that is not the case. Connecting these two worlds in a relatable way is essential for a balanced healing process."
   - **Real Healing is Real:** "This might sound obvious, but is it? If we truly knew that we could heal, why would we decide to numb our pain? True healing is possible and there are accessible ways to get there."
   - **Relatability:** "Meeting people where they are at with a rational and grounded approach suitable for the modern western mind is key for everyone to feel that healing work is also meant for them."
   - **Inner Gift:** "Every person has unique gifts, but few are aware of them until they heal their wounds. As people walk the path of healing they begin discovering and embodying their gifts, which brings a great sense of purpose and enthusiasm for life."

3. **"Explore my Philosophy" button:** bg #9AAAAF, white text, centered below grid

### Divider at bottom: 86px diagonal to #D9CFC5

---

## SECTION 4: SERVICES (y=5351, h=993)

- **Background:** #D9CFC5 (beige)

### Content (two-column)
- **Left column (x=112, w=589):**
  1. **"Services"** — H2, 45.8px, weight 500, color #4B4746
  2. **Accordion items** — same style as Methodology but in #4B4746 color:
     - **PUBLIC SPEAKING** — "Experience inspirational and educational talks on topics including the healing process, human emotions, science and spirituality, psychology, self-love, plant-medicine, and neo-shamanism."
     - **LEADERSHIP COACHING & CONSULTING** — "From individuals to executives of Fortune 500 companies — creating conversation and bringing clarity by opening awareness to release communication blocks and improve team cohesion."
     - **INTEGRATION SUPPORT** — "One-on-one support making sense of healing experiences. Grounded and relatable emotional processing techniques to bring your process to a more peaceful completion."
     - **RETREATS** — "Private retreats fusing unique methods of emotional processing. Hosted worldwide in luxury settings with organic vegan cuisine and thoughtful amenities."
     - Title: 24.05px, weight 300, color #4B4746, borders between items
  3. **"Interested in working together?"** — P, color #4B4746
  4. **"GET IN TOUCH" button** — bg #4B4746, white, uppercase

- **Right column:**
  - Image: retreat photo, object-fit: cover (fills column)

### Divider at bottom: 86px diagonal to #9C8A78

---

## SECTION 5: TESTIMONIALS (y=6344, h=1015)

- **Background:** #9C8A78 (tan)

### Content
1. **"Testimonials"** — heading (likely H2), warm white color (#FFFAF4), center-aligned
2. **Carousel** showing one testimonial at a time:
   - **Photo:** circular (border-radius 50%), ~311x312px on desktop, centered
   - **Quote:** warm white, 14-15px, centered, in quotation marks
   - **Name:** warm white, ~16px, centered
   - **Role:** warm white at reduced opacity, ~16px, centered
3. **Navigation arrows:** Previous/Next buttons
   - 60x60px, circular, positioned at left (x~36) and right (x~1076) edges
   - SVG arrow icons (long horizontal arrows with chevron tips)
   - viewBox: 0 0 44 18, stroke-based (not filled)

### 11 testimonials total (in order):
1. Andrew H. — Assistant City Manager, Governor's Military Council...
2. Karina Cury — Flight Attendant
3. Hanja H. — Creative Director
4. Mauricio J — Engineer, Alcon Laboratories
5. Ekaterina Klyukina — Project Manager
6. George M — Director of Business Development, EV Charging
7. Jennifer Estevez — Founder of OMvino...
8. Jay Deshpande — Wealth Manager
9. Christiane Robbins — Senior Scientific Review Officer, NICHD/NIH
10. Liana Prieto — Attorney
11. Devon Anderson — VP Product/AI at Tech Company

### Divider at bottom: 86px diagonal to #FFFAF4

---

## SECTION 6: YOUTUBE CTA (y=7358, h=857)

- **Background:** #FFFAF4 (warm white)

### Content (two-column)
- **Left column (x=112, w=589):**
  1. **"Now on YouTube"** — H2, 45.8px, weight 500, color #000000
     - "YouTube" word in red (linked)
  2. **Body text:** "Previously exclusively available only through limited private sessions, Iván's philosophy, methods, and guidance are now available to you online for free."
     - H4, 25.76px, weight 500, color #000000
  3. **Quote:** "After a decade of private events, I've decided it's time to share all I've learned with the world. My hope is that by freely passing on the knowledge I hold, millions of people will either begin or move further in their healing journey."
     - P, 15.66px, weight 300
  4. **"Iván"** — signature, 15.66px, weight 300
  5. **"SUBSCRIBE" button** — bg #9AAAAF (muted teal), white text, uppercase
  6. **"Youtube: @IvanChocron"** — H4, 25.76px, weight 500, color #000000

- **Right column:**
  - YouTube video embed (iframe), aspect-ratio ~16:9

### Divider at bottom: ~29px (subtle) to #D9CFC5

---

## SECTION 7: RECENT APPEARANCES (y=8215, h=1016)

- **Background:** #D9CFC5 (beige)

### Content
1. **"Recent Appearances"** — H2, 45.8px, weight 500, color #4B4746, center-aligned
2. **Conference details:**
   - **"The Science of Psychedelics & Spiritual Medicine Conference"** — H4, 25.76px, weight 500
   - **Topic/date description** — P, 15.66px, weight 300
3. **Three images** in a row (grid):
   - Conference promo images/screenshots
4. **"Go deeper & learn more..."** — P, 15.66px
5. **"SEE MORE FEATURES" button** — bg #4B4746, white, uppercase, centered

### Divider at bottom: 86px diagonal to #4B4746

---

## SECTION 8 / FOOTER (y=9232, h=574)

- **Background:** #4B4746 (charcoal)

### Layout: 3-column grid
**Left column (x=111):**
1. **Social icons row:** 6 icons, each 48x48px, circular (border-radius 50%)
   - Icons: YouTube, Facebook, Instagram, LinkedIn, X, TikTok
   - **Style:** transparent bg, NO border, SVG icon color #9C8A78
   - Gap between icons: ~12px (centers 60px apart)
2. **"Contact:"** — bold label, followed by ivan@ivanchocron.com
3. **"Press & Media Inquiries:"** — bold label, followed by hello@ivanchocron.com
   - All text: 15.66px, weight 300 (labels are bold/strong), color #9C8A78

**Center column:**
- **Logo image:** handwritten "Iván Chocrón" with circular outline, 216x171px, white/light color

**Right column (x=888):**
1. **"Subscribe"** — H4, 40px, weight 400, color #9C8A78
2. **"Type your e-mail to receive updates and stay in touch!"** — P, 17px, weight 400, color #9C8A78
3. **Email input:** white bg (#FFF), border 0.8px solid #CCC, font-size 16px, height 43px
4. **"You can unsubscribe anytime. We don't spam or sell your data."** — P, 10px, weight 300, color #9A9494
5. **"Sign up" button:** bg #D9CFC5, color #000, font-size 18px, weight 400, height 41px

### Bottom bar:
- **"©Iván Chocrón 2024, All Rights Reserved."** — 15.66px, weight 300, color #9C8A78
- **"Credits: DEŪS MARCA + Crystals & Smudge Sticks"** — 15.66px, weight 300, color #9C8A78, links underlined

---

## PAGE INVENTORY (all pages on the site)

| Page | URL |
|------|-----|
| Home | / |
| About | /about |
| Services | /services |
| Contact | /contact |
| Pillars of My Philosophy | /pillars-of-my-philosophy |
| Recent Features | /recent-features |
| Press & Media | /press-and-media |

---

## IMAGES REQUIRED

| Filename | Section | Dimensions | Notes |
|----------|---------|-----------|-------|
| Ivan+Extended+1.png | Hero bg | full-bleed | obj-position 30.83% 25.60% |
| Logo icon circle | Header | 72x71px | nav logo |
| Logo lockup horizontal | Hero | 733x146px | icon + wordmark |
| bahareh.co-555.jpg | About | 589x420px | coaching/community photo (RIGHT) |
| bahareh.co-303.jpg | About | 698x1009px | meditation photo (LEFT, tall) |
| Logo large main | About | 332x107px | handwritten signature |
| bahareh.co-575.jpg | Methodology bg | full-bleed | dark overlay |
| 4 philosophy icons | Philosophy | varied | black line-art PNGs |
| Retreat photo | Services | fills column | right side |
| 11 testimonial photos | Testimonials | ~311x312px circle | |
| YouTube embed | YouTube | 16:9 | iframe |
| 3 appearance images | Appearances | grid row | conference promo |
| Footer logo | Footer | 216x171px | white, circular outline |

---

## RESPONSIVE NOTES (to be verified at 768px and 390px)

At smaller viewports, Squarespace typically:
- Stacks 2-column layouts to single column
- Reduces heading sizes proportionally
- Collapses nav to hamburger menu
- Reduces section padding
- Testimonial carousel stays single-item but arrows may reposition
- Philosophy grid goes from 2x2 to 1 column
- Footer columns stack vertically

**These need to be verified by inspecting the live site at 768px and 390px breakpoints.**

---

## MANDATORY IMPLEMENTATION STATUS

All 12 previously identified differences have been incorporated into the spec above as mandatory target values.
The spec IS the source of truth — no separate list needed. Key callouts embedded in their respective sections:

- Quote block: #9AAAAF (Section 1, Block D)
- Section 1: ONE `<section>` tag with blocks A–D
- "Hi! My name is Iván.": `<strong>`, weight 700 (Section 1, Block C)
- "Methodology" heading: 158.5px (Section 2)
- Testimonials: Carousel with arrow nav, NOT horizontal scroll (Section 5)
- Social icons: transparent bg, #9C8A78 SVG fill (Footer)
- Button border-radius: 6.4px on all buttons (Global)
- Sign up button: #D9CFC5 bg, #000 text (Footer)
- Image placement: 555.jpg RIGHT in Block C, 303.jpg LEFT in Block D (Section 1)
- "Subscribe" heading: 40px, weight 400, color #9C8A78 (Footer)
- Copyright: hardcoded "2024" (Footer)
- "A THREE PART": 24.05px, weight 300, no letter-spacing (Section 2)
