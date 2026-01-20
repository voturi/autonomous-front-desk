/init

Role: Build an ultra-modern, SEO-first website platform for the "AI Receptionist for Tradies" product.

Mission:
- Deliver a product-like website experience that feels intelligent and premium.
- Make SEO the core infrastructure: every page is a ranking asset.
- Convert buyer intent with high-velocity, founder-grade growth performance.

Primary users:
- Australian tradies (plumbers, electricians, HVAC, builders)
- SMB owners with high phone-call dependency

Secondary users:
- Investors, partners, future hires

Core principles:
- SEO is infrastructure; design is trust; UX behaves like software.
- Content is semantic with minimal visual noise.
- Motion guides comprehension and builds narrative.

Brand voice and tone (initial draft, adjust later):
- Voice: confident, founder-led, premium, no fluff.
- Tone: pragmatic, direct, outcome-driven, credible, calm.
- Style: short sentences, active verbs, clear value proof, avoid hype.
- CTA: service-oriented and clear (book a call, see it work, get a demo).

Scope (MVP Phase 1):
- Pages: Homepage, 2 use-case pages, 2 feature pages, pricing page, basic blog.
- SEO: SSG/SSR hybrid, structured data (SoftwareApplication, FAQ, Product, LocalBusiness),
  one H1 per page, proper H2/H3 hierarchy, sitemap automation.
- Content: MDX for SEO content and JSON content models.

Non-functional targets:
- Performance < 2s, Core Web Vitals green, WCAG AA, mobile-first, 100% indexable.

Technical stack:
- Next.js (SSG + SSR), TypeScript, TailwindCSS, Framer Motion.
- next-seo, structured data injection, Search Console integration.

Experience layer:
- Dark UI, minimal palette, motion-driven narrative, scrollytelling sections,
  micro-interactions, product-like layout.

Expanded page taxonomy (draft):
- Core: Homepage, Pricing, Features, Use-cases, Blog.
- Use-cases: /for-plumbers, /for-electricians, /for-hvac, /for-builders.
- Features: /ai-call-handling, /missed-call-recovery, /after-hours-coverage, /booking-sync.
- Comparisons: /vs-virtual-receptionist, /vs-answering-service.
- Locations (initial): /sydney, /melbourne.
- Trust: /case-studies, /testimonials, /security, /privacy, /terms.

Local SEO decision (default):
- Keep a single canonical Pricing page and single canonical Feature pages.
- Target local intent via use-case pages and (if needed) dedicated location pages with unique, non-duplicative content.

Location page differentiation (initial):
- /sydney: after-hours call handling, high-volume metro coverage, rapid response expectations,
  emergency job capture, local proof points and testimonials.
- /melbourne: seasonal peak load, multi-trade coordination, scheduling-heavy operations,
  no-show reduction, local proof points and testimonials.

Location page mini outline (draft):
- Hero: city-specific value prop + primary CTA.
- Social proof: local logos/testimonials or "serving [City]" proof.
- Problem framing: city-specific call volume and missed-call pain.
- Solution: AI receptionist workflow and integrations.
- Feature highlights: 3-4 features mapped to city pains.
- Use-case strip: plumbers/electricians/HVAC specific snippets.
- FAQ: 4-6 city-tailored questions.
- Final CTA: book a demo in [City].

Location page SEO keyword targets (draft):
- /sydney
  - Primary: ai receptionist sydney, virtual receptionist sydney, ai phone answering sydney
  - Secondary: after hours call answering sydney, missed call handling sydney,
    tradie answering service sydney, plumbing receptionist sydney,
    electrician receptionist sydney, hvac receptionist sydney
  - FAQ intents: "Do you answer calls after hours in Sydney?",
    "How fast can you respond to calls in Sydney?",
    "Can you book jobs for Sydney tradies?"
- /melbourne
  - Primary: ai receptionist melbourne, virtual receptionist melbourne, ai phone answering melbourne
  - Secondary: after hours call answering melbourne, missed call handling melbourne,
    tradie answering service melbourne, plumbing receptionist melbourne,
    electrician receptionist melbourne, hvac receptionist melbourne
  - FAQ intents: "Do you cover peak season call spikes in Melbourne?",
    "Can you integrate with job booking tools in Melbourne?",
    "How do you reduce no-shows for Melbourne tradies?"

Outline to keyword mapping (draft):
- /sydney
  - Hero (H1): "AI Receptionist Sydney" + variants "Virtual Receptionist Sydney"
  - Social proof (H2): "Trusted by Sydney tradies" (mention metro coverage)
  - Problem (H2): "Missed calls in Sydney cost jobs" + "after hours call answering Sydney"
  - Solution (H2): "AI phone answering for Sydney tradies"
  - Feature highlights (H3s): "After-hours coverage", "Missed call recovery",
    "Job booking sync" (include "Sydney" in body copy)
  - Use-case strip (H3s): "Plumbing receptionist Sydney", "Electrician receptionist Sydney",
    "HVAC receptionist Sydney"
  - FAQ (H3s): use FAQ intents verbatim in questions
  - Final CTA: "Book a demo in Sydney"
- /melbourne
  - Hero (H1): "AI Receptionist Melbourne" + variants "Virtual Receptionist Melbourne"
  - Social proof (H2): "Trusted by Melbourne tradies" (mention peak-season load)
  - Problem (H2): "Missed calls in Melbourne cost jobs" + "after hours call answering Melbourne"
  - Solution (H2): "AI phone answering for Melbourne tradies"
  - Feature highlights (H3s): "Seasonal peak coverage", "No-show reduction",
    "Job booking sync" (include "Melbourne" in body copy)
  - Use-case strip (H3s): "Plumbing receptionist Melbourne", "Electrician receptionist Melbourne",
    "HVAC receptionist Melbourne"
  - FAQ (H3s): use FAQ intents verbatim in questions
  - Final CTA: "Book a demo in Melbourne"

Expanded schema targets (draft):
- Organization, LocalBusiness, SoftwareApplication, Product, FAQPage.
- BreadcrumbList, WebSite (search action), WebPage.
- Article or BlogPosting for blog entries.

Future (Phase 2):
- AI modules (call simulator, chat widget, dynamic pricing, persona landing),
  comparison pages, lead intelligence dashboards, A/B testing.
