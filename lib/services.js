/**
 * Single source of truth for every service: powers the homepage cards,
 * the /services/[slug] pages, structured data, the sitemap and llms.txt.
 */

import { SERVICE_DETAILS } from "./serviceDetails";

export const CATEGORIES = [
  { id: "all", label: "All services" },
  { id: "search", label: "SEO & Visibility" },
  { id: "build", label: "Software & AI" },
  { id: "growth", label: "Commerce & Operations" },
];

export const PROCESS = [
  {
    title: "Discover",
    text: "We audit where you are today, learn your goals and map the quickest route to measurable results.",
  },
  {
    title: "Plan",
    text: "A clear roadmap with priorities, timelines and KPIs—so you always know what happens next.",
  },
  {
    title: "Execute",
    text: "Our specialists build, optimise and manage the work, with weekly progress you can see.",
  },
  {
    title: "Report & grow",
    text: "Transparent reporting, honest insights and continuous improvement month after month.",
  },
];

const BASE_SERVICES = [
  {
    slug: "seo",
    icon: "search",
    category: "search",
    title: "SEO Services",
    cardTitle: "Search Engine Optimization",
    tagline: "Rank higher on Google and turn search traffic into customers.",
    summary:
      "Technical, on-page and local SEO that lifts your rankings for the keywords your customers actually search.",
    intro:
      "SEO (search engine optimization) is the process of improving your website so it ranks higher on Google and Bing for the searches your customers make. Digital Drifters combines technical SEO, keyword-led content, on-page optimisation and authority building to grow organic traffic and leads for businesses in the UK, US and worldwide.",
    features: ["Technical SEO audits", "Keyword & content strategy", "Link building"],
    included: [
      "Full technical audit: speed, Core Web Vitals, indexing and crawl errors",
      "Keyword research mapped to buyer intent",
      "On-page optimisation of titles, headings, content and internal links",
      "Schema markup (structured data) for rich results",
      "Local and international SEO for multi-location brands",
      "Ethical, white-hat link building and digital PR",
      "Monthly ranking, traffic and conversion reporting",
    ],
    benefits: [
      "Consistent, compounding traffic without paying per click",
      "More qualified leads from people already searching for you",
      "A faster, healthier website that converts better",
    ],
    keywords: ["SEO agency", "SEO services London", "technical SEO", "local SEO", "SEO company UK"],
    faqs: [
      {
        q: "How long does SEO take to show results?",
        a: "Most businesses see early improvements within 6–12 weeks, with significant ranking and traffic growth typically between 3 and 6 months. Results depend on competition, your site’s current health and how consistently the strategy is executed.",
      },
      {
        q: "Do you offer local SEO and international SEO?",
        a: "Yes. We optimise for local searches (\"near me\" and city-based keywords) as well as national and international SEO for brands targeting multiple countries, including hreflang setup for multi-language sites.",
      },
      {
        q: "Can you guarantee a #1 ranking on Google?",
        a: "No honest agency can guarantee a specific position, because Google controls its algorithm. What we guarantee is a proven, transparent process focused on the rankings, traffic and leads that matter to your business.",
      },
    ],
  },
  {
    slug: "aeo-answer-engine-optimization",
    icon: "answer",
    category: "search",
    title: "AEO – Answer Engine Optimization",
    cardTitle: "AEO – Answer Engine Optimization",
    tagline: "Become the answer in featured snippets, voice search and People Also Ask.",
    summary:
      "Structure your content so Google, Siri, Alexa and AI assistants pick your business as the direct answer.",
    intro:
      "AEO (Answer Engine Optimization) is the practice of structuring content so search engines and voice assistants use it as the direct answer to a question. Digital Drifters optimises your pages for featured snippets, People Also Ask boxes, voice search and AI answers using question-led content, FAQ schema and clear, concise answers.",
    features: ["Featured snippets", "Voice search", "FAQ & HowTo schema"],
    included: [
      "Question research across Google, forums and AI assistants",
      "Answer-first content written for snippets and voice",
      "FAQ, HowTo and Q&A structured data",
      "People Also Ask and featured snippet targeting",
      "Conversational and voice search optimisation",
      "Entity and topical authority building",
    ],
    benefits: [
      "Appear at “position zero” above traditional results",
      "Capture fast-growing voice and mobile searches",
      "Build trust by being the source of the answer",
    ],
    keywords: ["answer engine optimization", "AEO agency", "featured snippet optimization", "voice search SEO"],
    faqs: [
      {
        q: "What is the difference between SEO and AEO?",
        a: "SEO helps your pages rank in the list of search results. AEO focuses on getting your content chosen as the direct answer—in featured snippets, voice assistants and answer boxes. The best results come from doing both together.",
      },
      {
        q: "Does AEO help with voice search?",
        a: "Yes. Voice assistants like Siri, Alexa and Google Assistant read out a single answer, usually taken from a featured snippet or well-structured page. AEO is how you become that answer.",
      },
    ],
  },
  {
    slug: "geo-generative-engine-optimization",
    icon: "spark",
    category: "search",
    title: "GEO – Generative Engine Optimization",
    cardTitle: "GEO – Generative Engine Optimization",
    tagline: "Get recommended by ChatGPT, Gemini, Perplexity and Google AI Overviews.",
    summary:
      "Make your brand visible, cited and recommended inside AI-generated answers and AI search engines.",
    intro:
      "GEO (Generative Engine Optimization) is the process of making your brand visible and recommended in AI-generated answers from tools like ChatGPT, Google Gemini, Perplexity, Microsoft Copilot and Google AI Overviews. Digital Drifters builds the authoritative content, citations, structured data and brand mentions that large language models rely on when recommending businesses.",
    features: ["ChatGPT & Gemini visibility", "AI Overviews", "Brand citations"],
    included: [
      "AI visibility audit across ChatGPT, Gemini, Perplexity and Copilot",
      "Authoritative, fact-rich content LLMs can cite",
      "Entity optimisation and consistent brand information online",
      "Structured data and llms.txt implementation",
      "Digital PR and third-party mentions on trusted sources",
      "Ongoing AI answer monitoring and reporting",
    ],
    benefits: [
      "Be recommended when buyers ask AI for a provider",
      "Future-proof your visibility as search shifts to AI",
      "Stand out while competitors are still invisible to AI",
    ],
    keywords: ["generative engine optimization", "GEO agency", "ChatGPT SEO", "AI search optimization", "LLM SEO"],
    faqs: [
      {
        q: "What is GEO (Generative Engine Optimization)?",
        a: "GEO is the practice of optimising your brand and content so AI tools such as ChatGPT, Gemini, Perplexity and Google AI Overviews mention, cite and recommend you in their answers.",
      },
      {
        q: "How do you get a business recommended by ChatGPT?",
        a: "AI models favour brands that are consistently described across trusted sources. We strengthen your website content, structured data, reviews, directory listings and third-party mentions so AI tools have clear, credible information to recommend you.",
      },
    ],
  },
  {
    slug: "google-business-profile-management",
    icon: "pin",
    category: "search",
    title: "Google Business Profile Management",
    cardTitle: "Google Business Profile",
    tagline: "Get found on Google Maps and win the local 3-pack.",
    summary:
      "Profile creation, verification, optimisation and ongoing management to rank in Google Maps and local search.",
    intro:
      "Google Business Profile management is the creation, verification and ongoing optimisation of your business listing on Google Search and Google Maps. Digital Drifters sets up and manages your profile—categories, services, photos, posts, reviews and Q&A—so you rank in the local 3-pack and win more calls, visits and enquiries.",
    features: ["Profile creation & verification", "Maps 3-pack ranking", "Review management"],
    included: [
      "New profile creation and verification support",
      "Category, service, product and attribute optimisation",
      "Keyword-rich business description",
      "Professional photo uploads and weekly Google posts",
      "Review generation strategy and response management",
      "Local citations and NAP consistency across directories",
      "Monthly insights: calls, direction requests and website clicks",
    ],
    benefits: [
      "Show up when locals search “near me”",
      "More phone calls, bookings and store visits",
      "A trusted, review-rich first impression",
    ],
    keywords: ["Google Business Profile management", "Google My Business optimization", "Google Maps ranking", "local SEO services"],
    faqs: [
      {
        q: "Can you create and verify a new Google Business Profile?",
        a: "Yes. We create the profile, choose the right categories, complete every field and guide you through Google’s verification process (postcard, phone, email or video verification).",
      },
      {
        q: "How do I rank higher on Google Maps?",
        a: "Google Maps rankings depend on relevance, distance and prominence. We improve relevance with optimised categories and content, and prominence with reviews, posts, photos and consistent local citations.",
      },
      {
        q: "Do you manage reviews?",
        a: "We set up an ethical review-request process and write professional, on-brand responses to reviews—positive and negative—to build trust and local ranking signals.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    icon: "megaphone",
    category: "search",
    title: "Social Media Marketing",
    cardTitle: "Social Media Marketing",
    tagline: "Content, campaigns and community that grow real customers.",
    summary:
      "Content, campaigns and growth strategy that turn followers into loyal, paying customers.",
    intro:
      "Social media marketing is the use of platforms like Instagram, Facebook, TikTok, LinkedIn and X to build your brand and drive sales. Digital Drifters plans, creates and manages your content and paid campaigns, with clear reporting on reach, engagement and conversions.",
    features: ["Content creation", "Paid social campaigns", "Growth reporting"],
    included: [
      "Platform strategy and content calendar",
      "Graphic design, short-form video and copywriting",
      "Community management and engagement",
      "Meta, TikTok and LinkedIn ad campaigns",
      "Influencer and UGC coordination",
      "Monthly performance reporting",
    ],
    benefits: [
      "A consistent, professional brand presence",
      "Lower cost per lead with targeted ads",
      "An engaged audience that buys again",
    ],
    keywords: ["social media marketing agency", "social media management", "Instagram marketing", "paid social"],
    faqs: [
      {
        q: "Which social platforms do you manage?",
        a: "We manage Instagram, Facebook, TikTok, LinkedIn, X (Twitter), YouTube and Pinterest, choosing the platforms where your audience is most active.",
      },
    ],
  },
  {
    slug: "software-development",
    icon: "code",
    category: "build",
    title: "Custom Software Development",
    cardTitle: "Software Development",
    tagline: "Custom software built around how your business actually works.",
    summary:
      "Custom web apps, dashboards, APIs and integrations built around how your business actually works.",
    intro:
      "Custom software development is the design and build of applications tailored to your exact business processes. Digital Drifters builds web applications, mobile apps, CRMs, dashboards and API integrations using modern, scalable technology—delivered on time and supported after launch.",
    features: ["Web & mobile apps", "CRM / ERP systems", "API integrations"],
    included: [
      "Discovery, UX research and product planning",
      "UI/UX design and interactive prototypes",
      "Web applications and SEO-friendly websites",
      "iOS and Android mobile apps",
      "CRM, ERP and internal dashboards",
      "Third-party API and payment integrations",
      "Cloud hosting, maintenance and support",
    ],
    benefits: [
      "Software that fits your workflow, not the other way round",
      "Automate manual work and reduce errors",
      "Own a scalable platform that grows with you",
    ],
    keywords: ["custom software development", "software development company London", "web app development", "mobile app development"],
    faqs: [
      {
        q: "How much does custom software cost?",
        a: "Every project is scoped individually based on features, integrations and timeline. After a free discovery call we provide a fixed, transparent quote with clear milestones.",
      },
      {
        q: "What technologies do you use?",
        a: "We use modern, proven stacks such as React, Next.js, Node.js, Python, React Native and cloud platforms like AWS and Vercel—chosen for performance, security and long-term maintainability.",
      },
    ],
  },
  {
    slug: "ai-integration",
    icon: "cpu",
    category: "build",
    title: "AI Integration & Automation",
    cardTitle: "AI Integration",
    tagline: "Chatbots, call bots and automation that save hours every week.",
    summary:
      "Chatbots, automation and AI-powered workflows that save hours and scale your operations.",
    intro:
      "AI integration means adding artificial intelligence—such as chatbots, voice agents and workflow automation—into your existing business systems. Digital Drifters designs, builds and trains AI assistants on your own company knowledge so customers get instant, accurate answers and your team spends less time on repetitive tasks.",
    features: ["AI chatbots", "Voice call agents", "Process automation"],
    included: [
      "AI chatbots for websites, WhatsApp and social channels",
      "AI voice agents for inbound and outbound calls",
      "Knowledge-base assistants trained on your data",
      "Workflow automation with CRMs and helpdesks",
      "AI content and reporting tools",
      "Monitoring, training and continuous improvement",
    ],
    benefits: [
      "24/7 instant responses for customers",
      "Lower support and admin costs",
      "Faster, data-driven decisions",
    ],
    keywords: ["AI integration services", "AI chatbot development", "business automation", "AI voice agent"],
    faqs: [
      {
        q: "Can an AI chatbot be trained on my business information?",
        a: "Yes. We train assistants on your website, documents, FAQs and product data so answers are accurate and on-brand, with human hand-off when needed.",
      },
    ],
  },
  {
    slug: "ecommerce-management",
    icon: "cart",
    category: "growth",
    title: "Amazon & eBay eCommerce Management",
    cardTitle: "eCommerce Management",
    tagline: "Full Amazon & eBay account management for sustainable growth.",
    summary:
      "Full Amazon & eBay account management—listings, PPC, inventory and sustainable store growth.",
    intro:
      "eCommerce management is the day-to-day running and growth of your online stores. Digital Drifters manages Amazon and eBay seller accounts end-to-end—product listings, SEO-optimised titles, PPC advertising, inventory, pricing and account health—to increase sales and protect your seller performance.",
    features: ["Amazon & eBay stores", "Listing optimisation", "PPC & analytics"],
    included: [
      "Seller account setup and store branding",
      "Product research and listing creation",
      "Amazon & eBay SEO for titles, bullets and keywords",
      "Amazon PPC and eBay Promoted Listings",
      "Inventory, pricing and order management",
      "Account health monitoring and case handling",
      "Shopify and WooCommerce store support",
    ],
    benefits: [
      "Higher visibility and conversion on marketplaces",
      "Profitable advertising with lower ACoS",
      "A healthy account free from costly suspensions",
    ],
    keywords: ["Amazon account management", "eBay store management", "eCommerce agency UK", "Amazon PPC management"],
    faqs: [
      {
        q: "Do you manage both Amazon and eBay accounts?",
        a: "Yes. We manage Amazon (UK, US, EU) and eBay stores, including listings, advertising, inventory and customer messages, and can also support Shopify and WooCommerce.",
      },
    ],
  },
  {
    slug: "operation-management",
    icon: "layers",
    category: "growth",
    title: "Operation Management",
    cardTitle: "Operation Management",
    tagline: "Processes and delivery aligned so your team ships with clarity.",
    summary:
      "Processes, delivery and day-to-day operations aligned so your team ships work with clarity—not chaos.",
    intro:
      "Operation management is the planning, organisation and improvement of the processes that run your business day to day. Digital Drifters designs efficient workflows, KPI reporting and back-office operations—order processing, supply chain, admin and team coordination—so you scale without chaos.",
    features: ["Workflow design", "KPI reporting", "Order & supply ops"],
    included: [
      "Process mapping and workflow optimisation",
      "Standard operating procedures (SOPs)",
      "KPI dashboards and performance reporting",
      "Order processing and fulfilment coordination",
      "Supplier and supply chain management",
      "Virtual assistant and back-office support",
    ],
    benefits: [
      "Lower operating costs and fewer errors",
      "Clear visibility of what’s happening across the business",
      "More time for leaders to focus on growth",
    ],
    keywords: ["operation management services", "business operations outsourcing", "back office support", "process optimization"],
    faqs: [
      {
        q: "What does an operation management service include?",
        a: "It covers process design, SOPs, KPI reporting, order and supplier management and back-office support—tailored to the size and industry of your business.",
      },
    ],
  },
  {
    slug: "call-center-services",
    icon: "headset",
    category: "growth",
    title: "Call Center Services",
    cardTitle: "Call Center Solutions",
    tagline: "Professional customer support that strengthens your brand.",
    summary:
      "Professional inbound and outbound customer support that strengthens your brand experience.",
    intro:
      "Call center services are outsourced customer communication handled by trained agents over phone, chat and email. Digital Drifters provides inbound support, outbound sales and appointment setting, and multichannel customer service—with optional AI voice agents—for businesses that want reliable support without hiring in-house.",
    features: ["Inbound support", "Outbound campaigns", "Live chat & email"],
    included: [
      "Inbound customer support and order enquiries",
      "Outbound sales, lead qualification and appointment setting",
      "Live chat, email and social inbox management",
      "CRM logging and call quality monitoring",
      "AI voice agents for after-hours coverage",
      "Detailed call and satisfaction reporting",
    ],
    benefits: [
      "Never miss a customer call or lead",
      "Scale support up or down as you need",
      "Consistent, professional brand experience",
    ],
    keywords: ["call center services UK", "outsourced customer support", "inbound call center", "outbound call center"],
    faqs: [
      {
        q: "Do you offer 24/7 call center support?",
        a: "Yes. We can provide extended and 24/7 coverage through a combination of trained agents and AI voice agents for out-of-hours calls.",
      },
    ],
  },
];

export const SERVICES = BASE_SERVICES.map((s) => {
  const { moreFaqs = [], ...details } = SERVICE_DETAILS[s.slug] ?? {};
  return { ...s, ...details, faqs: [...s.faqs, ...moreFaqs] };
});

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);

/** General FAQs shown on the homepage (AEO / FAQPage schema). */
export const HOME_FAQS = [
  {
    q: "What services does Digital Drifters offer?",
    a: "Digital Drifters offers custom software development, SEO, AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), Google Business Profile management, social media marketing, AI integration, Amazon & eBay eCommerce management, operation management and call center services.",
  },
  {
    q: "Where is Digital Drifters based and which countries do you serve?",
    a: "Our headquarters is at 375-377 High Street North, London E12 6PG, United Kingdom. We work remotely with clients across the UK, United States, Ireland, Europe, Canada, Australia, the Middle East and worldwide.",
  },
  {
    q: "What is the difference between SEO, AEO and GEO?",
    a: "SEO helps your website rank in Google’s search results. AEO (Answer Engine Optimization) gets your content chosen as the direct answer in featured snippets and voice search. GEO (Generative Engine Optimization) makes your brand visible and recommended inside AI tools like ChatGPT, Gemini, Perplexity and Google AI Overviews.",
  },
  {
    q: "Can you create and manage my Google Business Profile?",
    a: "Yes. We create, verify and fully optimise your Google Business Profile, publish regular posts and photos, manage reviews and build local citations so you rank higher on Google Maps and local search.",
  },
  {
    q: "How do I get started with Digital Drifters?",
    a: "Contact us by phone on +44 7466 908663 or email digitaldrifters12@gmail.com. We’ll arrange a free discovery call, review your goals and send a clear proposal with timelines and pricing.",
  },
  {
    q: "How long does it take to see results?",
    a: "Software projects follow agreed milestones, typically 4–12 weeks. SEO and Google Business Profile work usually shows early gains in 6–12 weeks, with strong growth in 3–6 months. Paid campaigns and eCommerce optimisations can show results within weeks.",
  },
];
