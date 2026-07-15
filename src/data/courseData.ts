import { CourseModule, FAQItem, BonusItem, AudienceCard } from "../types";

export const BRAND_NAME = "TechMark Solutions";
export const FOUNDER_NAME = "Mark Diaz";
export const FOUNDING_DATE = "January 1, 2026";
export const COURSE_NAME = "TechMark Solutions – AI Automation Course";
export const COURSE_PRICE = "₱4,999";
export const ENROLLMENT_LINK = "https://app.youform.com/forms/9kpqcl2s";

export const AUDIENCE_LIST: AudienceCard[] = [
  {
    id: "va",
    title: "Virtual Assistants",
    description: "Learn how to automate clients' daily administrative tasks, email sorting, scheduling, and standard workflows. Double your hourly value.",
    tagline: "Increase your rates & stand out",
    iconName: "User"
  },
  {
    id: "freelancer",
    title: "Freelancers",
    description: "Optimize your delivery times and scale your client throughput. Automate lead nurturing, client onboarding, and invoice tracking easily.",
    tagline: "Work less hours per project",
    iconName: "Briefcase"
  },
  {
    id: "business-owner",
    title: "Business Owners",
    description: "Streamline operations without expensive custom software. Connect your CRM, drive, lead capture forms, and social media natively.",
    tagline: "Save thousands on custom tech",
    iconName: "Building"
  },
  {
    id: "admin-prof",
    title: "Administrative Professionals",
    description: "Eliminate repetitive manual entry, CSV processing, and reporting copy-pasting. Shift your career into strategic, high-leverage roles.",
    tagline: "Become the automation hero",
    iconName: "FileText"
  },
  {
    id: "digital-marketer",
    title: "Digital Marketers",
    description: "Automate social media cross-posting, dynamic content creation, and lead distribution from Google Sheets to CRMs immediately.",
    tagline: "Sync advertising & workflows",
    iconName: "Megaphone"
  },
  {
    id: "student",
    title: "Students",
    description: "Build an in-demand professional skillset in AI and SaaS automation. Prepare yourself for the modern tech-first global workspace.",
    tagline: "Get a headstart in tech",
    iconName: "GraduationCap"
  },
  {
    id: "beginner",
    title: "AI Automation Beginners",
    description: "No tech background required. We walk you through every click, trigger, and parameter step-by-step from zero code experience.",
    tagline: "Learn AI automation from scratch",
    iconName: "Sparkles"
  }
];

export const COURSE_MODULES: CourseModule[] = [
  {
    id: "module-1",
    number: 1,
    title: "Automation Fundamentals",
    topics: [
      "Introduction to workflow automation and how modern businesses scale",
      "Core terminology: Triggers, Actions, Filters, Routers, and Variables",
      "Business process mapping and identifying manual friction points",
      "Selecting the right automation tool stack for client budgets",
      "Best practices for documentation, security, and process safety"
    ],
    durationEstimate: "2 Hours",
    n8nSimulationStep: {
      nodes: [
        { id: "1", type: "trigger", label: "Manual Flow Hook", x: 20, y: 80 },
        { id: "2", type: "router", label: "Analyze Process Map", x: 180, y: 80 },
        { id: "3", type: "action", label: "Identify Friction", x: 340, y: 30 },
        { id: "4", type: "action", label: "Select Right Stack", x: 340, y: 130 }
      ],
      connections: [
        { from: "1", to: "2" },
        { from: "2", to: "3" },
        { from: "2", to: "4" }
      ],
      description: "Concept Map Simulation: Learning how to analyze any business process, identify steps that waste human hours, and prepare a logical flowchart before building."
    }
  },
  {
    id: "module-2",
    number: 2,
    title: "n8n Workflow Automation",
    topics: [
      "n8n architecture, setting up your canvas and workspace",
      "Defining Triggers (Webhooks, Schedules, Pollers, Events)",
      "Configuring Actions, standard HTTP Requests, and authentication",
      "Connecting multiple applications and mapping JSON payloads",
      "Error handling, automatic retries, and n8n workspace debugging"
    ],
    durationEstimate: "4 Hours",
    n8nSimulationStep: {
      nodes: [
        { id: "1", type: "trigger", label: "Incoming Webhook", x: 20, y: 80 },
        { id: "2", type: "action", label: "HTTP Node (Get CRM)", x: 160, y: 80 },
        { id: "3", type: "action", label: "Check Error State", x: 300, y: 80 },
        { id: "4", type: "action", label: "Slack Error Notice", x: 440, y: 30 },
        { id: "5", type: "action", label: "Format & Return JSON", x: 440, y: 130 }
      ],
      connections: [
        { from: "1", to: "2" },
        { from: "2", to: "3" },
        { from: "3", to: "4" },
        { from: "3", to: "5" }
      ],
      description: "Interactive n8n Simulation: Catching errors instantly. If the CRM database fetch fails, the webhook triggers a fallback flow to notify the Slack admin with specific debug parameters."
    }
  },
  {
    id: "module-3",
    number: 3,
    title: "Zapier & Make.com Automation",
    topics: [
      "Zapier vs. Make.com: choosing based on client requirements",
      "Creating multi-step 'Zaps' and complex Make 'scenarios'",
      "Custom Webhooks: payload parsing and query parameters",
      "Data formatting (text extraction, splitting strings, date/time normalization)",
      "Optimizing task usage and cost-efficiency in premium automation portals"
    ],
    durationEstimate: "3 Hours",
    zapierSimulationStep: {
      steps: [
        { id: "z1", type: "trigger", label: "New Lead in Typeform", details: "Captures name, email, and company size" },
        { id: "z2", type: "action", label: "Formatter by Zapier", details: "Splits full name into First and Last names" },
        { id: "z3", type: "action", label: "Make Scenario Bridge", details: "Triggers Make scenario to validate business email" },
        { id: "z4", type: "action", label: "Google Sheets Row Add", details: "Inserts clean customer row with custom variables" }
      ],
      description: "Multi-Platform Blueprint: Connecting a frontend form to Zapier, parsing raw client input, sending it to Make.com for email verification, and cataloging structured data in Google Sheets."
    }
  },
  {
    id: "module-4",
    number: 4,
    title: "AI-Powered Automation",
    topics: [
      "Integrating OpenAI API and ChatGPT inside your workflows",
      "Advanced Prompt Engineering for system nodes (roles, constraints, structured output)",
      "Creating dynamic context windows from incoming Webhook payloads",
      "Building persistent AI assistants that summarize, tag, and analyze text on the fly",
      "Bulk AI content generation (auto-creating social media copy, draft emails, reports)",
      "Optimizing tokens and managing API limits inside automation modules"
    ],
    durationEstimate: "4 Hours",
    n8nSimulationStep: {
      nodes: [
        { id: "ai1", type: "trigger", label: "Incoming Customer Ticket", x: 10, y: 80 },
        { id: "ai2", type: "action", label: "ChatGPT: Classify Sentiment", x: 150, y: 80 },
        { id: "ai3", type: "router", label: "Is Urgent Complaint?", x: 290, y: 80 },
        { id: "ai4", type: "action", label: "Generate AI Reply Draft & Notify Admin", x: 430, y: 30 },
        { id: "ai5", type: "action", label: "Save Ticket to CRM", x: 430, y: 130 }
      ],
      connections: [
        { from: "ai1", to: "ai2" },
        { from: "ai2", to: "ai3" },
        { from: "ai3", to: "ai4" },
        { from: "ai3", to: "ai5" }
      ],
      description: "AI-Workflow Integration: Incoming support tickets are analyzed by ChatGPT for mood/urgency. High-priority complaints draft a custom AI-informed reply and ping the admin team immediately."
    }
  },
  {
    id: "module-5",
    number: 5,
    title: "Real-World Automation Projects",
    topics: [
      "Project 1: Lead generation scraping & database syncing pipeline",
      "Project 2: CRM synchronization (HubSpot, Salesforce, Pipedrive)",
      "Project 3: Custom email triage (auto-reading incoming attachments and categorizing them)",
      "Project 4: File sync (Google Drive, Dropbox) with automated naming rules",
      "Project 5: Content Repurposing (YouTube to Twitter/Blog post via AI automation)",
      "Project 6: Automated scheduling, SMS reminders, and notification hubs"
    ],
    durationEstimate: "5 Hours",
    zapierSimulationStep: {
      steps: [
        { id: "p1", type: "trigger", label: "YouTube Upload Complete", details: "Monitors mark diaz channel for new 16:9 video" },
        { id: "p2", type: "action", label: "OpenAI: Audio Whisper Transcription", details: "Extracts video speech and transcribes to TXT" },
        { id: "p3", type: "action", label: "ChatGPT: Rewrite Blog & Tweets", details: "Creates 1 blog post and a thread of 5 Tweets" },
        { id: "p4", type: "action", label: "WordPress & Twitter Post", details: "Saves blog to WordPress drafts, schedules Twitter thread" }
      ],
      description: "Content Factory Project Blueprint: Absolute proof of AI Automation leverage. Turn a 10-minute video into a highly engaging SEO-optimized blog post and an educational Twitter thread automatically."
    }
  }
];

export const TOOLS_LIST = [
  { name: "n8n", category: "Workflow Canvas", desc: "No-code / low-code self-hosted powerful automation engine.", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  { name: "Zapier", category: "Integration", desc: "Industry standard for connecting over 6,000+ business applications.", color: "bg-orange-600/10 text-orange-300 border-orange-600/20" },
  { name: "Make.com", category: "Integration", desc: "Visual automation canvas for creating advanced multi-step routers.", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
  { name: "ChatGPT", category: "Large Language Model", desc: "Generative AI used to categorize, analyze, draft, and expand data.", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  { name: "OpenAI API", category: "AI Integration", desc: "Connects GPT model parameters directly inside custom workflow nodes.", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
  { name: "Google Sheets", category: "Data Storage", desc: "Acts as a simple, powerful relational spreadsheet database.", color: "bg-green-500/10 text-green-400 border-green-500/20" },
  { name: "Google Drive", category: "File Storage", desc: "Automate report generation, directory creation, and PDF uploads.", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  { name: "Gmail", category: "Messaging", desc: "Send automated reports, lead confirmation drafts, and notification logs.", color: "bg-red-500/10 text-red-400 border-red-500/20" },
  { name: "Google Forms", category: "Input", desc: "Collect customer records, surveys, or lead generation details.", color: "bg-purple-600/10 text-purple-300 border-purple-600/20" },
  { name: "Webhooks", category: "Protocol", desc: "Send instant HTTP POST data payloads between disparate SaaS portals.", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
  { name: "APIs", category: "Protocol", desc: "Communicate securely with cloud tools to query databases and logs.", color: "bg-teal-500/10 text-teal-400 border-teal-500/20" },
  { name: "JSON", category: "Data Format", desc: "Universal data structure utilized to communicate between workflow steps.", color: "bg-pink-500/10 text-pink-400 border-pink-500/20" },
  { name: "HTTP Requests", category: "Protocol", desc: "Make custom GET/POST calls to external services with API keys.", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" }
];

export const BONUS_LIST: BonusItem[] = [
  {
    id: "b1",
    title: "Lifetime Course Access",
    description: "Learn at your own rhythm. No expiry dates, no monthly bills, and no rush. Return to lessons whenever you need reference material.",
    tag: "Access",
    iconName: "Clock"
  },
  {
    id: "b2",
    title: "Private Community Access",
    description: "Join an active network of Mark Diaz's students, freelancers, and automation consultants. Collaborate, find clients, and share workflows.",
    tag: "Networking",
    iconName: "Users"
  },
  {
    id: "b3",
    title: "Ready-to-use Automation Templates",
    description: "Import fully functional JSON templates with a single click. Start servicing clients instantly with pre-verified lead pipelines.",
    tag: "Time-Saver",
    iconName: "FileJson"
  },
  {
    id: "b4",
    title: "Workflow Blueprints",
    description: "Exquisite visual and process architecture PDFs mapped for client pitch decks. Show customers what automation looks like.",
    tag: "Pitch Deck",
    iconName: "Map"
  },
  {
    id: "b5",
    title: "Downloadable Automation Resources",
    description: "Cheat sheets, parameter definitions, JSON reference files, and onboarding questionnaires to send to your future clients.",
    tag: "Assets",
    iconName: "Download"
  },
  {
    id: "b6",
    title: "AI Prompt Library",
    description: "Tested prompt frameworks for ChatGPT nodes. Achieve clean, structured, JSON-validated outputs without trial-and-error.",
    tag: "LLM Power",
    iconName: "BookOpen"
  },
  {
    id: "b7",
    title: "Monthly Live Q&A Sessions",
    description: "Join interactive group consulting calls with Mark Diaz. Ask specific n8n/Zapier questions and get live design coaching.",
    tag: "Coaching",
    iconName: "Video"
  },
  {
    id: "b8",
    title: "Certificate of Completion",
    description: "Receive a professional certificate from TechMark Solutions to display on your LinkedIn, portfolio website, or Upwork profile.",
    tag: "Credibility",
    iconName: "Award"
  },
  {
    id: "b9",
    title: "Future Course Updates",
    description: "SaaS automation moves rapidly. When n8n, Make, or Zapier update their features, you get the updated lessons completely free.",
    tag: "Lifetime Value",
    iconName: "RefreshCw"
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is TechMark Solutions?",
    answer: "TechMark Solutions is an online learning platform founded by Mark Diaz on January 1, 2026, focused on teaching AI-powered workflow automation using beginner-friendly no-code and low-code tools."
  },
  {
    id: "faq-2",
    question: "How much is the course?",
    answer: "The course costs ₱4,999 as a one-time payment with no monthly subscription fees."
  },
  {
    id: "faq-3",
    question: "Who is this course for?",
    answer: "The course is designed for virtual assistants, freelancers, business owners, administrative professionals, digital marketers, students, and anyone interested in AI automation."
  },
  {
    id: "faq-4",
    question: "Do I need coding experience?",
    answer: "No. The course is beginner-friendly and does not require programming experience."
  },
  {
    id: "faq-5",
    question: "Is the course beginner-friendly?",
    answer: "Yes. Lessons are explained step-by-step using beginner-friendly automation platforms."
  },
  {
    id: "faq-6",
    question: "Will I receive future updates?",
    answer: "Yes. Students receive lifetime access including future lessons, resources, and updates."
  },
  {
    id: "faq-7",
    question: "Is certification included?",
    answer: "Yes. Students who complete the course receive a Certificate of Completion."
  },
  {
    id: "faq-8",
    question: "Is Tagalog available?",
    answer: "Yes. The course is available in both English and Tagalog."
  },
  {
    id: "faq-9",
    question: "How do I enroll?",
    answer: "Complete the enrollment form, complete payment, and receive your course access link through email."
  }
];
