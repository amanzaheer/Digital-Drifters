/**
 * Long-form, page-specific content for each /services/[slug] page.
 * Merged into SERVICES by lib/services.js. Keep every page's copy unique —
 * duplicated text across service pages weakens rankings.
 */

export const SERVICE_DETAILS = {
  seo: {
    overview: [
      "Most buyers start with a Google search, and the top three organic results receive the majority of clicks. If your website isn’t on page one for the services you sell, those enquiries go straight to your competitors. Our SEO service is built to change that with a plan based on data, not guesswork.",
      "We start with a technical audit to fix anything that stops Google crawling, indexing or trusting your site—slow pages, broken links, duplicate content, missing structured data and poor mobile experience. Then we research the exact keywords your customers use at every stage of buying, and map each one to a page that deserves to rank for it.",
      "From there we optimise and expand your content, strengthen internal linking and earn high-quality backlinks from relevant, reputable websites. Every month you receive a clear report showing rankings, organic traffic, leads and what we’re doing next—so you always see the return on your investment.",
    ],
    whoFor: [
      "Local service businesses wanting more calls and bookings",
      "eCommerce stores that need product and category pages to rank",
      "B2B and SaaS companies targeting high-value search terms",
      "Multi-location and international brands",
      "New websites that need a strong SEO foundation from day one",
    ],
    steps: [
      { title: "SEO audit", text: "Technical crawl, Core Web Vitals, backlink profile and competitor gap analysis." },
      { title: "Keyword strategy", text: "Intent-based keyword research mapped to existing and new pages." },
      { title: "On-page & content", text: "Optimised titles, headings, copy, schema and new content that answers searcher intent." },
      { title: "Authority building", text: "White-hat link building, digital PR and local citations." },
      { title: "Measure & refine", text: "Monthly reporting on rankings, traffic and conversions, with continuous improvements." },
    ],
    moreFaqs: [
      {
        q: "What is included in a technical SEO audit?",
        a: "Our technical audit checks crawlability, indexing, site speed and Core Web Vitals, mobile usability, broken links, redirects, duplicate content, canonical tags, XML sitemaps, robots.txt and structured data, and delivers a prioritised fix list.",
      },
      {
        q: "Is SEO better than Google Ads?",
        a: "They work best together. Google Ads delivers immediate traffic you pay for per click, while SEO builds long-term organic visibility that keeps generating leads without per-click costs. Many clients use ads for quick wins while SEO compounds in the background.",
      },
      {
        q: "Do you write content as part of SEO?",
        a: "Yes. Our team writes SEO-optimised service pages, product descriptions, blog articles and FAQs based on keyword research, written for real readers first and search engines second.",
      },
    ],
  },

  "aeo-answer-engine-optimization": {
    overview: [
      "Search engines increasingly answer questions directly on the results page—through featured snippets, People Also Ask boxes, knowledge panels and voice assistants. When someone asks a question and gets the answer instantly, the business behind that answer wins the trust and the click. Answer Engine Optimization (AEO) is how you become that business.",
      "We research the real questions your customers ask on Google, forums, social media and AI assistants, then restructure and write your content so each question has a clear, concise, authoritative answer near the top of the page. We use question-led headings, short answer paragraphs, lists and tables—formats search engines prefer to extract.",
      "We then add FAQ, HowTo and Q&A structured data so search engines understand exactly what each answer is, and we build topical authority across related questions so your brand becomes the go-to source in your niche.",
    ],
    whoFor: [
      "Businesses whose customers research before they buy",
      "Professional services answering common client questions",
      "Brands wanting visibility in voice search on Siri, Alexa and Google Assistant",
      "Websites already ranking on page one but missing featured snippets",
      "Companies preparing for AI-driven search",
    ],
    steps: [
      { title: "Question research", text: "Collect the questions buyers ask across search, forums and AI tools." },
      { title: "Snippet gap analysis", text: "Identify snippets and PAA boxes competitors own that you could win." },
      { title: "Answer-first content", text: "Write clear 40–60 word answers backed by detailed supporting content." },
      { title: "Structured data", text: "Implement FAQ, HowTo and Q&A schema and validate it." },
      { title: "Track & expand", text: "Monitor snippet wins and expand into related question clusters." },
    ],
    moreFaqs: [
      {
        q: "What is a featured snippet?",
        a: "A featured snippet is the highlighted answer box Google shows at the top of some search results, often called “position zero”. It pulls a short answer, list or table directly from a web page and links to the source.",
      },
      {
        q: "How long should an answer be to win a featured snippet?",
        a: "Paragraph snippets typically use answers of around 40–60 words. We pair that concise answer with more detailed content underneath so the page is both quotable and genuinely helpful.",
      },
      {
        q: "Does FAQ schema still help SEO?",
        a: "FAQ structured data helps search engines and AI systems understand your questions and answers clearly. Even where Google limits FAQ rich results, well-structured Q&A content continues to support snippets, voice answers and AI citations.",
      },
    ],
  },

  "geo-generative-engine-optimization": {
    overview: [
      "Millions of people now ask ChatGPT, Gemini, Perplexity and Copilot to recommend a provider instead of scrolling through search results. Google’s AI Overviews also summarise answers above the traditional listings. If AI tools don’t know about your business—or describe it inaccurately—you’re invisible in the fastest-growing search channel.",
      "Generative Engine Optimization (GEO) makes your brand easy for AI systems to find, understand, trust and cite. We audit how leading AI tools currently describe you and your competitors, then fix the gaps: clear entity information, consistent business details across the web, authoritative content with facts and statistics AI can quote, and structured data that removes ambiguity.",
      "Because large language models learn from what the wider web says about you, we also grow your presence on trusted third-party sources—industry directories, review platforms, publications and relevant communities. The result is a brand that AI assistants mention accurately and recommend confidently.",
    ],
    whoFor: [
      "Businesses that want to be recommended when buyers ask AI for suggestions",
      "Brands that AI tools currently describe incorrectly or not at all",
      "Competitive industries where early AI visibility is an advantage",
      "Companies already investing in SEO who want to future-proof it",
      "Agencies, SaaS, eCommerce and professional service firms",
    ],
    steps: [
      { title: "AI visibility audit", text: "Test prompts across ChatGPT, Gemini, Perplexity, Copilot and AI Overviews." },
      { title: "Entity foundation", text: "Consistent name, address, services and descriptions across the web." },
      { title: "Citable content", text: "Fact-rich, well-structured pages AI models can quote and attribute." },
      { title: "Off-site authority", text: "Mentions on trusted directories, publications and review platforms." },
      { title: "Monitor AI answers", text: "Track how AI tools describe and recommend you, and keep improving." },
    ],
    moreFaqs: [
      {
        q: "What is the difference between GEO and SEO?",
        a: "SEO focuses on ranking web pages in search engine results. GEO focuses on how AI tools generate answers—making sure your brand is mentioned, cited and recommended inside those answers. GEO builds on strong SEO but adds entity optimisation, citable content and third-party authority.",
      },
      {
        q: "What is llms.txt?",
        a: "llms.txt is a plain-text file placed at the root of a website that summarises the business and links to its most important pages in a format that large language models can easily read. We create and maintain it as part of our GEO service.",
      },
      {
        q: "Can you track if ChatGPT recommends my business?",
        a: "Yes. We run a consistent set of buyer-style prompts across major AI tools on a regular schedule and report on whether your brand appears, how it’s described and which sources are cited.",
      },
    ],
  },

  "google-business-profile-management": {
    overview: [
      "When someone searches for a service “near me” or in their city, Google shows a map with three businesses—the local 3-pack—above the regular results. Those three listings receive most of the calls, direction requests and website clicks. Your Google Business Profile (formerly Google My Business) decides whether you’re one of them.",
      "We handle everything from scratch: creating your profile, choosing the right primary and secondary categories, writing a keyword-rich description, adding services, products, opening hours, attributes and service areas, and guiding you through Google’s verification process. Already have a profile? We audit and fully optimise it, and fix suspensions, duplicates or incorrect information.",
      "Ranking is an ongoing effort, so we keep your profile active with weekly Google posts, fresh photos, answers to customer questions, review generation and professional review responses. We also build consistent local citations across directories so Google trusts your business details.",
    ],
    whoFor: [
      "Local businesses with a shop, office or service area",
      "Trades and home services such as plumbers, electricians and cleaners",
      "Clinics, salons, restaurants, law firms and estate agents",
      "Multi-location businesses needing every branch to rank",
      "Businesses with a suspended, duplicate or unverified profile",
    ],
    steps: [
      { title: "Create or audit", text: "Set up a new profile or audit an existing one against ranking factors." },
      { title: "Verify", text: "Guide verification by postcard, phone, email or video." },
      { title: "Optimise", text: "Categories, services, description, photos, hours, attributes and service areas." },
      { title: "Stay active", text: "Weekly posts, photo updates, Q&A and review responses." },
      { title: "Report", text: "Monthly insights on calls, directions, website clicks and map rankings." },
    ],
    moreFaqs: [
      {
        q: "Is Google Business Profile free?",
        a: "Yes. Creating and maintaining a Google Business Profile is free. Our service covers the expertise and time required to set it up correctly, optimise it and manage it so it ranks and converts.",
      },
      {
        q: "Can I rank on Google Maps without a physical shop?",
        a: "Yes. Service-area businesses that visit customers can hide their address and set service areas instead. We configure this correctly so you remain eligible to appear in local results.",
      },
      {
        q: "What if my Google Business Profile is suspended?",
        a: "We review the likely cause, correct any guideline issues and prepare a reinstatement request with the supporting evidence Google typically asks for.",
      },
    ],
  },

  "social-media-marketing": {
    overview: [
      "Social media is often the first place customers check before they buy from a business. An inactive or inconsistent account quietly costs you trust and sales. Our social media marketing service gives you a professional, consistent presence that builds a loyal audience and drives measurable results.",
      "We start by understanding your brand, audience and goals, then build a platform strategy and a monthly content calendar. Our team designs graphics, edits short-form videos and Reels, writes captions and schedules everything for the best times to post. We also manage comments and messages so your community feels heard.",
      "For faster growth we plan and manage paid campaigns on Meta (Facebook and Instagram), TikTok and LinkedIn, with careful audience targeting, creative testing and conversion tracking. Monthly reports show reach, engagement, followers, leads and sales—not just vanity metrics.",
    ],
    whoFor: [
      "Startups building brand awareness from zero",
      "Retail and eCommerce brands driving online sales",
      "Restaurants, salons and local businesses growing footfall",
      "B2B companies generating leads on LinkedIn",
      "Busy owners who want social handled professionally",
    ],
    steps: [
      { title: "Brand & audience review", text: "Understand your goals, audience and competitors." },
      { title: "Strategy & calendar", text: "Choose platforms and plan a monthly content calendar." },
      { title: "Create & publish", text: "Design, video, copywriting and scheduling." },
      { title: "Engage & advertise", text: "Community management and targeted paid campaigns." },
      { title: "Report & optimise", text: "Monthly performance review and content improvements." },
    ],
    moreFaqs: [
      {
        q: "How many posts per month do you create?",
        a: "Packages are tailored to your goals and budget, typically ranging from 8 to 30 posts per month across your chosen platforms, including a mix of graphics, carousels, Reels and Stories.",
      },
      {
        q: "Do you run Facebook and Instagram ads?",
        a: "Yes. We plan, create and manage Meta ad campaigns for awareness, traffic, leads and sales, including pixel and conversion tracking setup, audience targeting and ongoing optimisation.",
      },
      {
        q: "Can social media help my SEO?",
        a: "Social activity isn’t a direct ranking factor, but it increases brand searches, content distribution and mentions—signals that support both SEO and AI visibility.",
      },
    ],
  },

  "software-development": {
    overview: [
      "Off-the-shelf software forces your team to work around its limits. Custom software is built around the way your business actually operates—automating manual tasks, connecting your tools and giving you data you can act on. Digital Drifters designs and develops reliable software for startups, SMEs and growing enterprises.",
      "Every project begins with discovery: we learn your workflows, users and goals, then define the scope, features and milestones. Our designers create clear, modern interfaces and clickable prototypes before development starts, so you see exactly what you’re getting.",
      "Our developers build with modern, proven technology such as React, Next.js, Node.js, Python and React Native, following best practice for security, performance and SEO. We test thoroughly, launch smoothly and provide ongoing maintenance, hosting and feature development after go-live.",
    ],
    whoFor: [
      "Startups building an MVP or SaaS product",
      "Businesses replacing spreadsheets with a proper system",
      "Companies needing a CRM, ERP, booking or inventory platform",
      "Brands needing a fast, SEO-friendly website or web app",
      "Teams wanting mobile apps for iOS and Android",
    ],
    steps: [
      { title: "Discovery", text: "Workshops to define goals, users, features and success metrics." },
      { title: "Design", text: "Wireframes, UI design and interactive prototypes." },
      { title: "Agile development", text: "Fortnightly sprints with demos so you see progress early." },
      { title: "Testing & launch", text: "Quality assurance, security checks and smooth deployment." },
      { title: "Support & growth", text: "Maintenance, monitoring and new features after launch." },
    ],
    moreFaqs: [
      {
        q: "How long does it take to build custom software?",
        a: "A focused MVP typically takes 4–12 weeks. Larger platforms with multiple integrations can take several months. We break every project into milestones so you get working software early.",
      },
      {
        q: "Will I own the source code?",
        a: "Yes. On full payment you own the source code and intellectual property for the custom software we build for you.",
      },
      {
        q: "Do you provide support after launch?",
        a: "Yes. We offer maintenance plans covering hosting, monitoring, security updates, bug fixes and ongoing feature development.",
      },
    ],
  },

  "ai-integration": {
    overview: [
      "Artificial intelligence is now practical for businesses of every size. The right AI tools can answer customers instantly, handle routine calls, qualify leads and automate hours of repetitive admin every week. Digital Drifters helps you adopt AI safely and effectively—integrated into the systems you already use.",
      "We build AI chatbots for your website, WhatsApp and social inboxes that are trained on your own knowledge—services, prices, policies and FAQs—so answers are accurate and on-brand. For phone lines, we deploy AI voice agents that answer calls, book appointments and route urgent issues to your team.",
      "Behind the scenes we automate workflows by connecting AI to your CRM, helpdesk, email and spreadsheets: summarising enquiries, drafting replies, updating records and producing reports. Every solution includes human hand-off, monitoring and continuous improvement.",
    ],
    whoFor: [
      "Businesses receiving high volumes of repetitive enquiries",
      "Call-heavy businesses wanting extended-hours coverage",
      "eCommerce stores needing instant pre-sales answers",
      "Teams spending hours on manual admin and data entry",
      "Companies exploring AI but unsure where to start",
    ],
    steps: [
      { title: "Opportunity mapping", text: "Identify the tasks where AI will save the most time or money." },
      { title: "Knowledge preparation", text: "Gather and structure your data so AI answers accurately." },
      { title: "Build & integrate", text: "Develop chatbots, voice agents or automations connected to your tools." },
      { title: "Test & launch", text: "Real-world testing, guardrails and human hand-off rules." },
      { title: "Monitor & improve", text: "Review conversations and retrain for better results." },
    ],
    moreFaqs: [
      {
        q: "Is my business data safe with AI tools?",
        a: "We use reputable AI providers, limit the data shared to what’s needed, apply access controls and follow data protection best practice, including UK GDPR considerations.",
      },
      {
        q: "Can AI answer phone calls for my business?",
        a: "Yes. AI voice agents can answer calls with a natural voice, respond to common questions, take messages, book appointments and transfer callers to a person when needed.",
      },
      {
        q: "Which systems can you integrate AI with?",
        a: "Common integrations include websites, WhatsApp, Facebook and Instagram messaging, CRMs, helpdesks, Google Workspace, Microsoft 365, Shopify and custom databases through APIs.",
      },
    ],
  },

  "ecommerce-management": {
    overview: [
      "Selling on Amazon and eBay can be extremely profitable—but only with constant attention to listings, advertising, pricing, stock and account health. Many sellers lose sales to weak listings or wasteful ad spend, or risk suspension through avoidable policy issues. Our eCommerce management service takes that pressure off your team.",
      "We create and optimise listings that rank and convert: keyword-researched titles, persuasive bullet points, detailed descriptions, backend search terms and high-quality images. On Amazon we can build A+ Content and Brand Store pages; on eBay we optimise item specifics and Promoted Listings for maximum visibility.",
      "We manage Amazon PPC campaigns with structured targeting and regular bid optimisation to grow sales profitably, and we monitor inventory, pricing, buy box, customer messages, returns and account health metrics daily—handling cases with seller support when issues arise.",
    ],
    whoFor: [
      "Brands launching on Amazon or eBay for the first time",
      "Established sellers whose sales have plateaued",
      "Sellers struggling with high ad spend or ACoS",
      "Businesses expanding to Amazon US, UK or EU marketplaces",
      "Owners who want their stores managed day-to-day",
    ],
    steps: [
      { title: "Account audit", text: "Review listings, ads, pricing, inventory and account health." },
      { title: "Listing optimisation", text: "Keyword research, copywriting, images and A+ Content." },
      { title: "Advertising", text: "Launch and optimise Amazon PPC and eBay Promoted Listings." },
      { title: "Daily management", text: "Inventory, pricing, messages, returns and case handling." },
      { title: "Growth reporting", text: "Monthly sales, profitability and next-step recommendations." },
    ],
    moreFaqs: [
      {
        q: "What is ACoS on Amazon?",
        a: "ACoS (Advertising Cost of Sales) is the percentage of ad-attributed sales spent on advertising. We manage campaigns towards a target ACoS that fits your margins, balancing growth and profitability.",
      },
      {
        q: "Can you help with Amazon account suspensions?",
        a: "Yes. We review the suspension notice, identify the root cause and prepare a clear plan of action for reinstatement, then put processes in place to reduce future risk.",
      },
      {
        q: "Which Amazon marketplaces do you work with?",
        a: "We work primarily with Amazon UK and Amazon US alongside eBay. If you sell through your own Shopify or WooCommerce website, our online store management service covers that separately.",
      },
    ],
  },

  "operation-management": {
    overview: [
      "As a business grows, informal processes start to break: orders slip, tasks get duplicated, suppliers are chased late and leaders lose visibility. Operation management brings structure to the work behind the scenes so your business runs smoothly and scales without chaos.",
      "We map how work currently flows through your business, identify bottlenecks and redesign processes for speed and accuracy. We document clear standard operating procedures (SOPs), define responsibilities and set up the tools—project boards, CRMs and dashboards—that keep everyone aligned.",
      "We can also run operations for you: processing orders, coordinating fulfilment, managing suppliers, handling admin and producing KPI reports. You get a dependable operations team without the cost and time of hiring in-house.",
    ],
    whoFor: [
      "Growing SMEs whose processes haven’t kept up",
      "eCommerce businesses managing orders and suppliers",
      "Founders stuck doing day-to-day admin",
      "Teams lacking clear reporting and KPIs",
      "Businesses wanting to outsource back-office work",
    ],
    steps: [
      { title: "Operations review", text: "Map current workflows, tools, roles and pain points." },
      { title: "Process design", text: "Redesign workflows and document SOPs." },
      { title: "Tools & dashboards", text: "Set up systems and KPI reporting for visibility." },
      { title: "Run & support", text: "Manage day-to-day operations or support your team." },
      { title: "Continuous improvement", text: "Review KPIs monthly and refine processes." },
    ],
    moreFaqs: [
      {
        q: "Why should I outsource operations?",
        a: "Outsourcing operations gives you experienced people and proven processes without recruitment costs, so leadership can focus on sales, strategy and growth while day-to-day work runs reliably.",
      },
      {
        q: "What KPIs do you report on?",
        a: "It depends on your business, but common KPIs include order processing time, fulfilment accuracy, supplier lead times, task completion, customer response times and cost per order.",
      },
      {
        q: "Do you provide virtual assistants?",
        a: "Yes. We provide trained virtual assistants for admin, data entry, scheduling, inbox management, order processing and customer follow-ups.",
      },
    ],
  },

  "call-center-services": {
    overview: [
      "Every missed call can be a missed sale, and slow support damages your reputation. Our call center services give you a trained, professional team that represents your brand on the phone, live chat, email and social messages—without the cost of building an in-house department.",
      "For inbound support, our agents answer customer enquiries, take orders, handle bookings, resolve issues and escalate when needed, following scripts and knowledge bases built around your business. For outbound work, we run lead qualification, appointment setting, sales follow-ups and customer satisfaction campaigns.",
      "Every interaction is logged in your CRM, and calls are monitored for quality. Combined with AI voice agents for out-of-hours and overflow calls, you can offer extended-hours coverage and scale up or down as demand changes.",
    ],
    whoFor: [
      "Businesses missing calls during busy periods or after hours",
      "eCommerce brands needing order and returns support",
      "Companies wanting outbound lead generation and appointment setting",
      "Startups that need support without hiring a team",
      "Businesses serving both UK and US customers",
    ],
    steps: [
      { title: "Requirements", text: "Understand call volumes, channels, hours and service levels." },
      { title: "Scripts & training", text: "Build scripts, FAQs and train agents on your business." },
      { title: "Integration", text: "Connect phone lines, CRM and helpdesk tools." },
      { title: "Go live", text: "Launch with quality monitoring from day one." },
      { title: "Report & improve", text: "Regular reports on volumes, resolution and satisfaction." },
    ],
    moreFaqs: [
      {
        q: "Can your agents use my CRM?",
        a: "Yes. Our agents work inside your existing CRM or helpdesk where possible, logging every interaction so your team has full visibility.",
      },
      {
        q: "Do you offer outbound sales calling?",
        a: "Yes. We run outbound campaigns for lead qualification, appointment setting, follow-ups, renewals and customer feedback, with clear reporting on outcomes.",
      },
      {
        q: "Can I scale the service up or down?",
        a: "Yes. Coverage can be adjusted for seasonal peaks, product launches or growth, combining human agents and AI voice agents for flexible capacity.",
      },
    ],
  },
  "website-design-development": {
    overview: [
      "Your website is usually the first place a potential customer checks before they call, book or buy. A slow, dated or confusing site loses those people within seconds. Our website design and development service gives you a professional, fast and easy-to-use site that explains what you do and makes it simple to get in touch.",
      "We begin by understanding your business, customers and goals, then plan the page structure and the journey from landing page to enquiry. Our designers create a custom layout around your brand—no generic templates—and we review it with you before development starts.",
      "We build every site mobile-first, with clean code, optimised images and fast loading. Technical SEO foundations come as standard: descriptive titles and meta descriptions, a logical heading structure, structured data, an XML sitemap and correct redirects. After launch we can host, maintain and keep improving the site for you.",
    ],
    whoFor: [
      "New businesses that need a professional website",
      "Companies with an outdated or slow website",
      "Service businesses that want more enquiries and bookings",
      "Brands that need a site their team can update easily",
      "Businesses preparing for SEO or Google Ads campaigns",
    ],
    steps: [
      { title: "Discovery", text: "Goals, audience, competitors and the pages your site needs." },
      { title: "Structure & content", text: "Sitemap, page layouts and guidance on copy and imagery." },
      { title: "Design", text: "Custom designs for desktop and mobile, reviewed with you." },
      { title: "Build & test", text: "Responsive development, speed optimisation and cross-device testing." },
      { title: "Launch & care", text: "Go-live, redirects, analytics setup, hosting and maintenance." },
    ],
    moreFaqs: [
      {
        q: "Do you redesign existing websites?",
        a: "Yes. We audit your current site, keep what works, and plan redirects from old URLs to new ones so you don’t lose existing search rankings during the redesign.",
      },
      {
        q: "Can I update the website myself?",
        a: "Yes. We can build on a content management system so your team can edit text, images and pages without touching code, and we provide a short walkthrough at handover.",
      },
      {
        q: "Do you provide hosting and maintenance?",
        a: "Yes. We offer hosting, security updates, backups, uptime monitoring and small content changes as an ongoing care plan.",
      },
    ],
  },

  "mobile-app-development": {
    overview: [
      "A well-built mobile app puts your business on your customers’ home screens—making it faster for them to book, order, track or get support. For internal teams, a mobile app can replace paperwork and spreadsheets with tools that work on site and on the move.",
      "We start by defining who the app is for, the key tasks it must make easy and how it will connect to your existing systems. Our designers create user journeys and interfaces that follow iOS and Android conventions, and we validate them with clickable prototypes before development.",
      "For most projects we use a cross-platform approach, such as React Native, so one codebase serves both iPhone and Android, and we build the APIs, accounts, notifications and integrations the app needs. We then handle App Store and Google Play submission and keep the app updated as operating systems change.",
    ],
    whoFor: [
      "Businesses wanting customers to book, order or pay in an app",
      "Startups launching a mobile-first product",
      "Companies adding a mobile app to an existing web platform",
      "Field teams that need tools that work on site",
      "Organisations replacing paper forms and manual processes",
    ],
    steps: [
      { title: "Scope", text: "Users, core features, platforms and integrations." },
      { title: "UX & prototype", text: "User journeys and clickable prototypes for feedback." },
      { title: "Build", text: "App and back-end development in short, demoed sprints." },
      { title: "Test & submit", text: "Device testing, then App Store and Google Play submission." },
      { title: "Support", text: "Monitoring, OS updates, fixes and new feature releases." },
    ],
    moreFaqs: [
      {
        q: "How long does it take to build a mobile app?",
        a: "A focused first version typically takes around 8–16 weeks, depending on features, integrations and design complexity. We plan the project in milestones so you can test working builds early.",
      },
      {
        q: "Can the app connect to my existing website or software?",
        a: "Yes. We connect apps to existing systems through APIs—for example your CRM, booking system, eCommerce store or a custom back end we build for you.",
      },
    ],
  },

  "it-software-consulting": {
    overview: [
      "Many small and growing businesses end up with a patchwork of tools, accounts and subscriptions that nobody fully owns. Licences go unused, access isn’t removed when people leave, and important decisions about new software are made without technical advice. Our IT and software consulting service brings order and clear direction.",
      "We start with an audit of your current technology: devices, accounts, business software, data, security practices and costs. From there we give practical, prioritised recommendations—what to keep, what to replace, what to fix first—and help you choose new software or plan custom development when off-the-shelf tools don’t fit.",
      "We can also manage your business software day to day: setting up and administering Microsoft 365 or Google Workspace, managing users, permissions and licences in your CRM and SaaS tools, handling IT support requests and keeping security settings and integrations in good order.",
    ],
    whoFor: [
      "Small businesses without an in-house IT team",
      "Companies planning a new software project",
      "Teams unsure which software or platform to choose",
      "Businesses with too many disconnected tools and subscriptions",
      "Owners who want IT and accounts managed properly",
    ],
    steps: [
      { title: "Technology audit", text: "Review systems, software, accounts, security and costs." },
      { title: "Recommendations", text: "A prioritised plan with clear, practical next steps." },
      { title: "Selection & planning", text: "Software selection, specifications and project scoping." },
      { title: "Implementation", text: "Set up, migrate and integrate the agreed tools." },
      { title: "Ongoing management", text: "IT support and day-to-day business software administration." },
    ],
    moreFaqs: [
      {
        q: "Do you provide remote IT support?",
        a: "Yes. We provide remote IT support for software, accounts, email and configuration issues, and help your team follow good security practice.",
      },
      {
        q: "Can you help us decide between off-the-shelf and custom software?",
        a: "Yes. We compare suitable off-the-shelf products against a custom build on cost, fit, scalability and long-term maintenance, and give you an independent recommendation.",
      },
    ],
  },

  "online-store-management": {
    overview: [
      "Running your own online store involves far more than launching it. Products need updating, promotions planned, orders and enquiries handled, apps maintained and pages improved so more visitors buy. When that work falls behind, sales usually follow. Our online store management service keeps your Shopify or WooCommerce store running smoothly.",
      "We take care of the day-to-day work: uploading and editing products, writing descriptions, organising collections, setting up discounts and seasonal campaigns, and supporting order and inventory processes. We also manage store apps, payment and shipping settings and integrations with your other systems.",
      "Alongside routine management we look for ways to increase sales—improving product pages, navigation, site speed, store SEO and the checkout experience—and report monthly on traffic, conversion rate and revenue so you can see what’s working.",
    ],
    whoFor: [
      "Shopify and WooCommerce store owners",
      "Brands moving from marketplaces to their own website",
      "Stores whose product catalogue has become hard to manage",
      "Businesses wanting better conversion from existing traffic",
      "Owners who want store admin handled for them",
    ],
    steps: [
      { title: "Store audit", text: "Products, theme, apps, speed, SEO and checkout review." },
      { title: "Quick fixes", text: "Resolve issues that are costing sales right now." },
      { title: "Ongoing management", text: "Products, promotions, orders support and integrations." },
      { title: "Optimisation", text: "Product pages, navigation, speed and checkout improvements." },
      { title: "Reporting", text: "Monthly traffic, conversion and revenue reporting." },
    ],
    moreFaqs: [
      {
        q: "Do you build new Shopify or WooCommerce stores?",
        a: "Yes. We can set up a new store—theme, products, payments, shipping and key apps—and then manage it for you, or hand it over to your team with training.",
      },
      {
        q: "Can you connect my online store to Amazon or eBay?",
        a: "Yes. We can connect your store with marketplace channels and inventory tools so stock and orders stay in sync, alongside our Amazon & eBay management service.",
      },
    ],
  },
};

/** Search-result titles (≤45 chars, brand suffix added by the layout) and meta descriptions (≤160). */
export const SEO_META = {
  seo: {
    title: "SEO Services in London & the UK",
    description: "Technical, on-page and local SEO from a London agency. Keyword strategy, content and link building that grow organic traffic and enquiries.",
  },
  "aeo-answer-engine-optimization": {
    title: "AEO – Answer Engine Optimization",
    description: "Win featured snippets, People Also Ask and voice answers with question-led content and FAQ schema. AEO services from Digital Drifters, London.",
  },
  "geo-generative-engine-optimization": {
    title: "GEO – Generative Engine Optimization",
    description: "Help ChatGPT, Gemini, Perplexity and Google AI Overviews understand and cite your brand with GEO: entity, content and citation work.",
  },
  "google-business-profile-management": {
    title: "Google Business Profile Management",
    description: "Google Business Profile creation, verification, optimisation and review management for local businesses in London and across the UK.",
  },
  "social-media-marketing": {
    title: "Social Media Management & Marketing",
    description: "Social media strategy, content creation, community management and paid campaigns for Instagram, Facebook, TikTok and LinkedIn.",
  },
  "software-development": {
    title: "Software & Application Development",
    description: "Custom software and application development in London: web apps, SaaS platforms, CRMs, dashboards and API integrations built around you.",
  },
  "website-design-development": {
    title: "Website Design & Development London",
    description: "Custom, mobile-first business websites designed and built in East London—fast, SEO-ready and easy to update, with hosting and care plans.",
  },
  "mobile-app-development": {
    title: "Mobile App Development – iOS & Android",
    description: "iOS and Android app development from a London software company: UX design, cross-platform builds, App Store launch and ongoing support.",
  },
  "it-software-consulting": {
    title: "IT & Software Consulting London",
    description: "Independent IT and software consulting, IT support and business software management—Microsoft 365, Google Workspace, CRM and SaaS.",
  },
  "ai-integration": {
    title: "AI Integration & Automation Services",
    description: "AI chatbots, voice agents and workflow automation trained on your business data and integrated with your CRM, helpdesk and website.",
  },
  "ecommerce-management": {
    title: "Amazon & eBay Account Management",
    description: "Amazon and eBay seller account management: listing optimisation, Amazon PPC, inventory, pricing and account health for UK and US sellers.",
  },
  "online-store-management": {
    title: "Shopify & WooCommerce Store Management",
    description: "Day-to-day Shopify and WooCommerce store management: products, promotions, orders support, apps, store SEO and conversion optimisation.",
  },
  "operation-management": {
    title: "Operations Management Services",
    description: "Business operations management: workflow design, SOPs, KPI dashboards, order and supplier coordination and back-office support.",
  },
  "call-center-services": {
    title: "Call Center & Customer Support Services",
    description: "Outsourced inbound and outbound call center support, live chat and email handling, with CRM logging and optional AI voice agents.",
  },
};
