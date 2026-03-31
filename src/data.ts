// ==================== PROJECTS ====================
export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  github: string;
  githubNote?: string;
  status: 'LIVE' | 'BUILDING' | 'NEEDS WORK' | 'DOWN';
  health: 'green' | 'yellow' | 'red';
  revenue: number;
  revenueTarget?: string;
  lastUpdated: string;
  category: string;
  icon: string;
  color: string;
  notes: string;
  bugs?: string[];
  dealStatus?: string;
  dealValue?: string;
  techStack?: string[];
  detailedDescription?: string;
  keyFeatures?: string[];
  knownIssues?: string[];
  setupInstructions?: string;
  pages?: string[];
}

export const projects: Project[] = [
  {
    id: "content-factory",
    name: "Content Factory",
    description: "The Growth Operating System. AI-powered content creation, distribution, and analytics platform.",
    url: "https://content-factory-ochre.vercel.app",
    github: "https://github.com/workwithlos-ui/content-factory",
    status: "BUILDING",
    health: "yellow",
    revenue: 0,
    revenueTarget: "$900/month per customer",
    lastUpdated: "2026-03-31",
    category: "SaaS Platform",
    icon: "Factory",
    color: "#7C3AED",
    notes: "LIVE but upgrading. Fixing broken features (Brand Voice, Competitive Intel, Topic Generator, UTM) and overhauling content quality. Master prompt architecture built. Competitive analysis complete.",
    bugs: ["Brand Voice feature broken", "Competitive Intel not returning results", "Topic Generator producing low-quality output", "UTM tracking not firing"],
    techStack: ["React", "Vite", "Tailwind CSS", "OpenAI API", "Claude API", "Zustand", "React Router"],
    detailedDescription: "Content Factory is a comprehensive AI-powered content marketing platform designed to be the ultimate growth operating system. It enables users to generate high-quality, multi-platform content at scale using advanced AI models (GPT-4, Claude). The platform includes a Brand Voice engine that learns and replicates a company's unique tone, a Competitive Intelligence module that monitors competitor content strategies, a Topic Generator for SEO-optimized content ideas, UTM tracking for campaign attribution, and a content calendar for scheduling and distribution. The goal is to replace an entire content marketing team with an AI-driven system producing $900/month in value per customer.",
    keyFeatures: ["AI Content Generation (GPT-4 + Claude)", "Brand Voice Engine", "Competitive Intelligence Monitor", "Topic Generator with SEO optimization", "UTM Tracking & Campaign Attribution", "Content Calendar & Scheduling", "Multi-platform Distribution", "Analytics Dashboard"],
    knownIssues: ["Brand Voice feature broken - not saving/applying voice profiles", "Competitive Intel not returning results - API integration issue", "Topic Generator producing low-quality output - needs master prompt overhaul", "UTM tracking not firing - event listeners not attached"],
    setupInstructions: "git clone https://github.com/workwithlos-ui/content-factory.git\ncd content-factory\nnpm install\nnpm run dev\n\nEnvironment variables needed:\nVITE_OPENAI_API_KEY=your_openai_key\nVITE_CLAUDE_API_KEY=your_claude_key"
  },
  {
    id: "acquisition-os",
    name: "Acquisition OS",
    description: "Business Acquisition Mastery Platform. 12-module course with AI deal tools and interactive simulators.",
    url: "https://acquisition-os-chi.vercel.app",
    github: "",
    githubNote: "Not yet pushed",
    status: "LIVE",
    health: "green",
    revenue: 0,
    revenueTarget: "$10K product / $1K/month",
    lastUpdated: "2026-03-31",
    category: "Education Platform",
    icon: "GraduationCap",
    color: "#2563EB",
    notes: "Course content fully loaded. 184K words across 12 modules plus 8 supplementary resources. All 18 pages working. AI tools connected. Mobile responsive. Ready for sales launch.",
    techStack: ["React", "Vite", "Tailwind CSS", "OpenAI API", "React Router", "Framer Motion"],
    detailedDescription: "Acquisition OS is a premium business acquisition education platform containing 184,000 words of course content across 12 comprehensive modules plus 8 supplementary resources. The platform teaches the complete process of acquiring businesses, from deal sourcing and evaluation to financing, due diligence, and post-acquisition operations. It includes AI-powered deal analysis tools, interactive P&L simulators, deal stack visualizers, and a community component. All 18 pages are fully functional with mobile-responsive design. The $10K product is ready for sales launch with Stripe integration as the next priority.",
    keyFeatures: ["12 Comprehensive Modules (184K words)", "8 Supplementary Resources", "AI Deal Analysis Tools", "Interactive P&L Simulator", "Deal Stack Visualizer", "Mobile Responsive Design", "18 Fully Functional Pages", "Community Access"],
    knownIssues: ["No Stripe checkout integration yet", "No sales campaign launched", "AI P&L Simulator tool not yet built", "Deal Stack Visualizer not yet built"],
    setupInstructions: "Repository not yet pushed to GitHub.\nOnce available:\ngit clone https://github.com/workwithlos-ui/acquisition-os.git\ncd acquisition-os\nnpm install\nnpm run dev\n\nEnvironment variables needed:\nVITE_OPENAI_API_KEY=your_openai_key"
  },
  {
    id: "fundinghub",
    name: "FundingHub",
    description: "Business funding platform. Multi-step application flow, funding estimator, applicant dashboard, credit advisory.",
    url: "https://fundinghub.co",
    github: "https://github.com/workwithlos-ui/fundinghub",
    status: "BUILDING",
    health: "yellow",
    revenue: 0,
    revenueTarget: "$100K/month",
    lastUpdated: "2026-03-31",
    category: "FinTech Platform",
    icon: "Banknote",
    color: "#0EA5E9",
    notes: "Full platform rebuild underway. Competitive analysis complete. $100K/month roadmap defined. Building multi-step application flow, funding estimator, applicant dashboard, and credit advisory module.",
    techStack: ["React", "Vite", "Tailwind CSS", "React Router", "Zustand", "Node.js"],
    detailedDescription: "FundingHub is a comprehensive business funding platform targeting $100K/month in revenue. The platform connects business owners with funding solutions through a multi-step application flow that pre-qualifies applicants, estimates funding amounts, and matches them with appropriate lenders. Key components include a funding estimator tool, an applicant dashboard for tracking application status, a credit advisory module for improving approval odds, and a lender partner integration system. The competitive analysis is complete and the $100K/month roadmap has been defined. Currently in active rebuild phase.",
    keyFeatures: ["Multi-step Funding Application Flow", "Funding Estimator Tool", "Applicant Dashboard", "Credit Advisory Module", "Lender Partner Integrations", "Pre-qualification Engine", "Application Status Tracking", "Custom Domain (fundinghub.co)"],
    knownIssues: ["Multi-step application flow still being built", "Funding estimator not yet functional", "Applicant dashboard incomplete", "Credit advisory module not started", "Lender integrations pending"],
    setupInstructions: "git clone https://github.com/workwithlos-ui/fundinghub.git\ncd fundinghub\nnpm install\nnpm run dev\n\nEnvironment variables needed:\n(TBD - lender API keys will be added)"
  },
  {
    id: "vault-crm",
    name: "Vault Ventures CRM",
    description: "Self Storage Acquisition CRM. Deal tracking and pipeline management for storage facility acquisitions.",
    url: "https://vault-ventures-crm.vercel.app",
    github: "https://github.com/workwithlos-ui/vault-ventures-crm",
    status: "NEEDS WORK",
    health: "yellow",
    revenue: 0,
    lastUpdated: "2026-03-20",
    category: "CRM Tool",
    icon: "Database",
    color: "#059669",
    notes: "Working prototype using localStorage only. No real backend, no auth. Not production-ready. Needs real database and document storage.",
    techStack: ["React", "Vite", "Tailwind CSS", "localStorage", "React Router"],
    detailedDescription: "Vault Ventures CRM is a specialized deal tracking and pipeline management tool built for self-storage facility acquisitions. The current prototype allows users to track potential acquisition targets, manage deal pipelines with drag-and-drop functionality, store property details and financial projections, and manage contact information for brokers and sellers. However, it currently relies entirely on localStorage for data persistence, has no authentication system, and lacks a real backend database. It needs significant work before it can be used in production for actual deal management.",
    keyFeatures: ["Deal Pipeline Management", "Property Detail Tracking", "Financial Projection Storage", "Contact Management", "Drag-and-Drop Pipeline", "Deal Status Tracking"],
    knownIssues: ["Uses localStorage only - no real database", "No authentication system", "No document storage", "Not production-ready", "Data lost on browser clear"],
    setupInstructions: "git clone https://github.com/workwithlos-ui/vault-ventures-crm.git\ncd vault-ventures-crm\nnpm install\nnpm run dev\n\nNo environment variables needed (localStorage only)"
  },
  {
    id: "vault-investor",
    name: "Vault Ventures Investor",
    description: "Capital Raising Portal. Investor relations and commitment tracking for Vault Ventures deals.",
    url: "https://vault-ventures.vercel.app",
    github: "",
    githubNote: "Not yet pushed",
    status: "NEEDS WORK",
    health: "red",
    revenue: 0,
    lastUpdated: "2026-03-18",
    category: "Finance Platform",
    icon: "Landmark",
    color: "#0891B2",
    notes: "CRITICAL: Zero authentication. Admin panel is publicly accessible. Needs immediate auth implementation before any investor use. Backend API and database required.",
    techStack: ["React", "Vite", "Tailwind CSS", "React Router"],
    detailedDescription: "Vault Ventures Investor is a capital raising portal designed for investor relations and commitment tracking for Vault Ventures self-storage acquisition deals. The platform presents investment opportunities, allows investors to view deal details and financial projections, and tracks capital commitments. CRITICAL SECURITY ISSUE: The admin panel is currently publicly accessible with zero authentication, meaning anyone can view and modify investor data. This must be fixed before any real investor interaction. The platform needs a proper backend API, database, and authentication system before it can be used for actual capital raising.",
    keyFeatures: ["Investment Opportunity Presentation", "Deal Detail Views", "Financial Projections", "Capital Commitment Tracking", "Investor Dashboard"],
    knownIssues: ["CRITICAL: Zero authentication - admin publicly accessible", "No backend API", "No database", "Security risk blocks all capital raising activity"],
    setupInstructions: "Repository not yet pushed to GitHub.\nOnce available:\ngit clone https://github.com/workwithlos-ui/vault-ventures-investor.git\ncd vault-ventures-investor\nnpm install\nnpm run dev\n\nEnvironment variables needed:\n(TBD - auth and database config)"
  },
  {
    id: "boardroom-brain",
    name: "Boardroom Brain",
    description: "Sales Call Intelligence platform. AI coaching, call analysis, and deal scoring for enterprise sales teams.",
    url: "https://boardroom-brain.vercel.app",
    github: "",
    githubNote: "Not yet pushed",
    status: "BUILDING",
    health: "yellow",
    revenue: 0,
    revenueTarget: "$35K-45K deal",
    lastUpdated: "2026-03-31",
    category: "Sales Intelligence",
    icon: "Mic",
    color: "#DC2626",
    dealStatus: "Pre-contract. Waiting on technical demo scheduling with Ed Rosenfield. Contract and Tranche 1 invoice ready.",
    dealValue: "$35,000 - $45,000",
    notes: "Contract and Tranche 1 invoice ready to execute. Blocker: schedule and deliver technical demo with Ed Rosenfield. Deal PDF created. Kent Clothier licensing deal.",
    techStack: ["React", "Vite", "Tailwind CSS", "OpenAI API", "Whisper API", "React Router"],
    detailedDescription: "Boardroom Brain is a Sales Call Intelligence platform that uses AI to analyze sales calls, provide real-time coaching, and score deals for enterprise sales teams. The platform is being developed as a licensing deal with Kent Clothier, valued at $35,000-$45,000. It includes call recording and transcription (via Whisper API), AI-powered call analysis that identifies key moments, objection handling suggestions, deal scoring based on conversation signals, and coaching recommendations. The contract and Tranche 1 invoice are ready to execute, but the blocker is scheduling and delivering a technical demo with Ed Rosenfield.",
    keyFeatures: ["AI Call Analysis", "Real-time Sales Coaching", "Deal Scoring Algorithm", "Call Recording & Transcription", "Objection Handling Suggestions", "Performance Analytics", "Kent Clothier Licensing Deal"],
    knownIssues: ["Waiting on technical demo with Ed Rosenfield", "Contract not yet executed", "Tranche 1 payment pending"],
    setupInstructions: "Repository not yet pushed to GitHub.\nOnce available:\ngit clone https://github.com/workwithlos-ui/boardroom-brain.git\ncd boardroom-brain\nnpm install\nnpm run dev\n\nEnvironment variables needed:\nVITE_OPENAI_API_KEY=your_openai_key\nVITE_WHISPER_API_KEY=your_whisper_key"
  },
  {
    id: "tradesbot",
    name: "TradesBot",
    description: "Roofing material estimator and job pricing tool. QA tested. Critical calculation bug found.",
    url: "https://tradesbot-phase2.vercel.app",
    github: "",
    githubNote: "Not yet pushed",
    status: "NEEDS WORK",
    health: "red",
    revenue: 0,
    lastUpdated: "2026-03-31",
    category: "Trade Tool",
    icon: "Hammer",
    color: "#D97706",
    notes: "QA testing complete. Two critical bugs found that must be fixed before any customer use.",
    bugs: ["CRITICAL: Total Squares calculation inflated by ~60% due to counting accessory bundles in square footage", "Generate Estimate button does not produce a document"],
    techStack: ["React", "Vite", "Tailwind CSS", "React Router"],
    detailedDescription: "TradesBot is a roofing material estimator and job pricing tool designed for roofing contractors. The tool allows users to input roof measurements, select materials, and generate detailed estimates for roofing jobs. It calculates material quantities (shingles, underlayment, flashing, etc.), labor costs, and produces professional estimate documents. QA testing has been completed and revealed two critical bugs that block all customer use: the Total Squares calculation is inflated by approximately 60% because accessory bundles are being incorrectly counted in the square footage calculation, and the Generate Estimate button fails to produce a document output.",
    keyFeatures: ["Roof Measurement Input", "Material Quantity Calculator", "Job Pricing Engine", "Professional Estimate Generation", "Material Selection", "Labor Cost Calculation"],
    knownIssues: ["CRITICAL: Total Squares inflated ~60% (accessory bundles counted in sq ft)", "Generate Estimate button produces no document", "Both bugs block all customer use"],
    setupInstructions: "Repository not yet pushed to GitHub.\nOnce available:\ngit clone https://github.com/workwithlos-ui/tradesbot.git\ncd tradesbot\nnpm install\nnpm run dev\n\nNo environment variables needed"
  },
  {
    id: "elios-hq",
    name: "Elios HQ",
    description: "Master command center. All projects, all statuses, revenue tracking, priority queue, and task management.",
    url: "https://elios-hq.vercel.app",
    github: "https://github.com/workwithlos-ui/elios-hq",
    status: "LIVE",
    health: "green",
    revenue: 0,
    lastUpdated: "2026-03-31",
    category: "Internal Tool",
    icon: "LayoutDashboard",
    color: "#6366F1",
    notes: "ClickUp-style dashboard. 8 pages: Dashboard, Projects, Tasks, Revenue, Timeline, Docs, Settings. All projects tracked.",
    techStack: ["React", "Vite", "Tailwind CSS", "React Router", "Lucide Icons", "TypeScript"],
    detailedDescription: "Elios HQ is the master command center for the entire LOS Empire portfolio. It provides a ClickUp-style dashboard interface for tracking all projects, tasks, revenue goals, and timelines in one centralized location. The dashboard includes 9 pages: Dashboard (overview with priority queue, active/blocked tasks, revenue summary), Projects (directory with list/board views), Project Detail (per-project tasks, notes, bugs, deal status), Tasks (global task management with filters), Docs (Empire Navigator tree, project documentation), Revenue (MRR tracking, revenue roadmap), Timeline (milestone history), and Settings (workspace config, live URLs, GitHub repos). All 9 projects are tracked with full task management.",
    keyFeatures: ["ClickUp-style Dashboard Interface", "Project Directory with List/Board Views", "Per-project Task Management", "Global Task View with Filters", "Revenue & MRR Tracking", "Priority Queue", "Timeline & Milestone History", "Empire Navigator Documentation", "Settings with Live URLs & GitHub Repos"],
    knownIssues: ["GitHub repos were missing for 7/8 projects (now fixed)", "Docs page was shallow (now expanded)", "Settings sub-sections were empty shells (now cleaned up)"],
    setupInstructions: "git clone https://github.com/workwithlos-ui/elios-hq.git\ncd elios-hq\nnpm install\nnpm run dev\n\nNo environment variables needed"
  },
  {
    id: "cmo-os",
    name: "CMO OS",
    description: "Fractional CMO Command Center for Trusted Roofing LLC. Executive performance dashboard with financial diagnostics, market analysis, and growth execution tracking.",
    url: "https://cmo-os.vercel.app",
    github: "",
    githubNote: "Not yet pushed",
    status: "LIVE",
    health: "yellow",
    revenue: 0,
    lastUpdated: "2026-03-31",
    category: "Command Center",
    icon: "BarChart3",
    color: "#F59E0B",
    notes: "Fractional CMO Command Center for Trusted Roofing LLC. Live and functional. Known issues: /plan route 404 (should be /execution), Playbook cards not clickable, data is hardcoded (needs QuickBooks, JobNimbus, Roofr integrations).",
    bugs: ["/plan route 404 (should be /execution)", "Playbook cards not clickable", "Data is hardcoded (needs QuickBooks, JobNimbus, Roofr integrations)"],
    pages: ["Command Center", "Kansas City Market", "St. Louis Market", "Financial P&L", "Unit Economics", "Lead Source P&L", "90-Day Execution Plan", "Rep Scorecard", "Commission Model", "Pricing Analysis", "Leading Indicators"],
    techStack: ["React", "Vite", "Tailwind CSS", "React Router", "Recharts"],
    detailedDescription: "CMO OS is a Fractional CMO Command Center built specifically for Trusted Roofing LLC. It serves as an executive performance dashboard providing comprehensive financial diagnostics, market analysis, and growth execution tracking across multiple markets. The platform includes 11 pages covering the Command Center overview, Kansas City and St. Louis market analysis, Financial P&L breakdowns, Unit Economics modeling, Lead Source P&L attribution, a 90-Day Execution Plan, Rep Scorecard for sales team performance, Commission Model configuration, Pricing Analysis, and Leading Indicators tracking. The dashboard is live and functional but currently uses hardcoded data that needs to be replaced with real integrations to QuickBooks (financials), JobNimbus (job management), and Roofr (roofing estimates).",
    keyFeatures: ["Executive Command Center Dashboard", "Multi-market Analysis (KC & STL)", "Financial P&L Diagnostics", "Unit Economics Modeling", "Lead Source P&L Attribution", "90-Day Execution Plan Tracker", "Rep Scorecard & Performance Tracking", "Commission Model Configuration", "Pricing Analysis Tools", "Leading Indicators Dashboard"],
    knownIssues: ["/plan route returns 404 (should be /execution)", "Playbook cards are not clickable", "All data is hardcoded - needs QuickBooks integration", "Needs JobNimbus integration for job data", "Needs Roofr integration for estimate data"],
    setupInstructions: "Repository not yet pushed to GitHub.\nOnce available:\ngit clone https://github.com/workwithlos-ui/cmo-os.git\ncd cmo-os\nnpm install\nnpm run dev\n\nEnvironment variables needed:\n(TBD - QuickBooks, JobNimbus, Roofr API keys)"
  }
];

// ==================== TASKS ====================
export interface Task {
  id: string;
  title: string;
  status: 'in-progress' | 'todo' | 'done' | 'blocked';
  priority: 'urgent' | 'high' | 'medium' | 'low';
  assignee: string;
  dueDate: string;
  projectId: string;
  tags: string[];
}

export const tasks: Task[] = [
  {id:"cf-1",title:"Fix Brand Voice feature (broken)",status:"in-progress",priority:"urgent",assignee:"Los",dueDate:"2026-04-02",projectId:"content-factory",tags:["bug","core"]},
  {id:"cf-2",title:"Fix Competitive Intel feature (not returning results)",status:"in-progress",priority:"urgent",assignee:"Los",dueDate:"2026-04-02",projectId:"content-factory",tags:["bug","core"]},
  {id:"cf-3",title:"Fix Topic Generator (low-quality output)",status:"todo",priority:"urgent",assignee:"Los",dueDate:"2026-04-03",projectId:"content-factory",tags:["bug","ai"]},
  {id:"cf-4",title:"Fix UTM tracking (not firing)",status:"todo",priority:"urgent",assignee:"Los",dueDate:"2026-04-03",projectId:"content-factory",tags:["bug","analytics"]},
  {id:"cf-5",title:"Overhaul content quality with master prompt architecture",status:"in-progress",priority:"high",assignee:"Los",dueDate:"2026-04-05",projectId:"content-factory",tags:["ai","quality"]},
  {id:"cf-6",title:"Add Stripe billing and subscription tiers",status:"todo",priority:"high",assignee:"Los",dueDate:"2026-04-08",projectId:"content-factory",tags:["billing","revenue"]},
  {id:"cf-7",title:"Phase 1 core platform launched",status:"done",priority:"high",assignee:"Los",dueDate:"2026-03-28",projectId:"content-factory",tags:["core"]},
  {id:"cf-8",title:"Competitive analysis complete",status:"done",priority:"medium",assignee:"Los",dueDate:"2026-03-31",projectId:"content-factory",tags:["strategy"]},
  {id:"cf-9",title:"Master prompt architecture built",status:"done",priority:"high",assignee:"Los",dueDate:"2026-03-31",projectId:"content-factory",tags:["ai"]},
  {id:"ao-1",title:"Course content loaded (184K words, 12 modules)",status:"done",priority:"urgent",assignee:"Los",dueDate:"2026-03-31",projectId:"acquisition-os",tags:["content"]},
  {id:"ao-2",title:"All 18 pages verified working",status:"done",priority:"high",assignee:"Los",dueDate:"2026-03-31",projectId:"acquisition-os",tags:["qa"]},
  {id:"ao-3",title:"AI tools connected and tested",status:"done",priority:"high",assignee:"Los",dueDate:"2026-03-31",projectId:"acquisition-os",tags:["ai"]},
  {id:"ao-4",title:"Mobile responsive confirmed",status:"done",priority:"medium",assignee:"Los",dueDate:"2026-03-31",projectId:"acquisition-os",tags:["design"]},
  {id:"ao-5",title:"Launch sales campaign for Acquisition OS",status:"todo",priority:"urgent",assignee:"Los",dueDate:"2026-04-05",projectId:"acquisition-os",tags:["revenue","marketing"]},
  {id:"ao-6",title:"Set up Stripe checkout for $10K product",status:"todo",priority:"urgent",assignee:"Los",dueDate:"2026-04-06",projectId:"acquisition-os",tags:["billing"]},
  {id:"ao-7",title:"Build AI P&L Simulator tool",status:"todo",priority:"medium",assignee:"Los",dueDate:"2026-04-18",projectId:"acquisition-os",tags:["ai","tools"]},
  {id:"ao-8",title:"Build Deal Stack Visualizer",status:"todo",priority:"medium",assignee:"Los",dueDate:"2026-04-20",projectId:"acquisition-os",tags:["tools"]},
  {id:"fh-1",title:"Competitive analysis complete",status:"done",priority:"high",assignee:"Los",dueDate:"2026-03-31",projectId:"fundinghub",tags:["strategy"]},
  {id:"fh-2",title:"$100K/month roadmap defined",status:"done",priority:"high",assignee:"Los",dueDate:"2026-03-31",projectId:"fundinghub",tags:["strategy"]},
  {id:"fh-3",title:"Build multi-step funding application flow",status:"in-progress",priority:"urgent",assignee:"Los",dueDate:"2026-04-07",projectId:"fundinghub",tags:["core","ux"]},
  {id:"fh-4",title:"Build funding estimator tool",status:"todo",priority:"high",assignee:"Los",dueDate:"2026-04-10",projectId:"fundinghub",tags:["tools"]},
  {id:"fh-5",title:"Build applicant dashboard",status:"todo",priority:"high",assignee:"Los",dueDate:"2026-04-12",projectId:"fundinghub",tags:["dashboard"]},
  {id:"fh-6",title:"Build credit advisory module",status:"todo",priority:"medium",assignee:"Los",dueDate:"2026-04-15",projectId:"fundinghub",tags:["features"]},
  {id:"fh-7",title:"Lender partner integrations",status:"todo",priority:"medium",assignee:"Los",dueDate:"2026-04-20",projectId:"fundinghub",tags:["integrations"]},
  {id:"vc-1",title:"Add real database backend (replace localStorage)",status:"todo",priority:"high",assignee:"Los",dueDate:"2026-04-10",projectId:"vault-crm",tags:["backend"]},
  {id:"vc-2",title:"Implement authentication",status:"todo",priority:"high",assignee:"Los",dueDate:"2026-04-10",projectId:"vault-crm",tags:["auth"]},
  {id:"vc-3",title:"Implement document storage system",status:"todo",priority:"medium",assignee:"Los",dueDate:"2026-04-15",projectId:"vault-crm",tags:["storage"]},
  {id:"vc-4",title:"Deploy working prototype",status:"done",priority:"high",assignee:"Los",dueDate:"2026-03-20",projectId:"vault-crm",tags:["core"]},
  {id:"vi-1",title:"URGENT: Implement authentication (admin publicly accessible)",status:"todo",priority:"urgent",assignee:"Los",dueDate:"2026-04-05",projectId:"vault-investor",tags:["auth","security"]},
  {id:"vi-2",title:"Build backend API and database",status:"todo",priority:"high",assignee:"Los",dueDate:"2026-04-10",projectId:"vault-investor",tags:["backend"]},
  {id:"vi-3",title:"Add document downloads and investment commitments",status:"todo",priority:"medium",assignee:"Los",dueDate:"2026-04-15",projectId:"vault-investor",tags:["features"]},
  {id:"vi-4",title:"Deploy capital raising portal",status:"done",priority:"high",assignee:"Los",dueDate:"2026-03-18",projectId:"vault-investor",tags:["core"]},
  {id:"bb-1",title:"Schedule technical demo with Ed Rosenfield",status:"in-progress",priority:"urgent",assignee:"Los",dueDate:"2026-04-03",projectId:"boardroom-brain",tags:["deal","demo"]},
  {id:"bb-2",title:"Deliver technical demo",status:"todo",priority:"urgent",assignee:"Los",dueDate:"2026-04-07",projectId:"boardroom-brain",tags:["deal","demo"]},
  {id:"bb-3",title:"Execute licensing contract (ready to sign)",status:"blocked",priority:"urgent",assignee:"Los",dueDate:"2026-04-10",projectId:"boardroom-brain",tags:["deal","legal"]},
  {id:"bb-4",title:"Collect Tranche 1 payment",status:"blocked",priority:"urgent",assignee:"Los",dueDate:"2026-04-12",projectId:"boardroom-brain",tags:["deal","revenue"]},
  {id:"bb-5",title:"Deal document PDF created",status:"done",priority:"high",assignee:"Los",dueDate:"2026-03-31",projectId:"boardroom-brain",tags:["deal"]},
  {id:"bb-6",title:"Landing page deployed",status:"done",priority:"high",assignee:"Los",dueDate:"2026-03-10",projectId:"boardroom-brain",tags:["core"]},
  {id:"tb-1",title:"FIX: Total Squares inflated 60% (accessory bundles counted in sq ft)",status:"todo",priority:"urgent",assignee:"Los",dueDate:"2026-04-03",projectId:"tradesbot",tags:["bug","critical"]},
  {id:"tb-2",title:"FIX: Generate Estimate button not producing document",status:"todo",priority:"urgent",assignee:"Los",dueDate:"2026-04-03",projectId:"tradesbot",tags:["bug","critical"]},
  {id:"tb-3",title:"QA testing complete (bugs documented)",status:"done",priority:"high",assignee:"Los",dueDate:"2026-03-31",projectId:"tradesbot",tags:["qa"]},
  {id:"tb-4",title:"Add user accounts and saved estimates",status:"todo",priority:"medium",assignee:"Los",dueDate:"2026-04-15",projectId:"tradesbot",tags:["auth"]},
  {id:"hq-1",title:"ClickUp-style redesign deployed",status:"done",priority:"high",assignee:"Los",dueDate:"2026-03-31",projectId:"elios-hq",tags:["core"]},
  {id:"hq-2",title:"All 9 projects tracked with tasks and status",status:"done",priority:"high",assignee:"Los",dueDate:"2026-03-31",projectId:"elios-hq",tags:["core"]},
  {id:"hq-3",title:"Update with latest project statuses",status:"done",priority:"high",assignee:"Los",dueDate:"2026-03-31",projectId:"elios-hq",tags:["update"]},
  {id:"hq-4",title:"Add live uptime monitoring for all URLs",status:"todo",priority:"medium",assignee:"Los",dueDate:"2026-04-10",projectId:"elios-hq",tags:["features"]},
  // CMO OS tasks
  {id:"cmo-1",title:"Fix /plan route 404 (should be /execution)",status:"todo",priority:"high",assignee:"Los",dueDate:"2026-04-05",projectId:"cmo-os",tags:["bug","routing"]},
  {id:"cmo-2",title:"Make Playbook cards clickable",status:"todo",priority:"medium",assignee:"Los",dueDate:"2026-04-07",projectId:"cmo-os",tags:["bug","ux"]},
  {id:"cmo-3",title:"Integrate QuickBooks for financial data",status:"todo",priority:"high",assignee:"Los",dueDate:"2026-04-15",projectId:"cmo-os",tags:["integration"]},
  {id:"cmo-4",title:"Integrate JobNimbus for job data",status:"todo",priority:"high",assignee:"Los",dueDate:"2026-04-18",projectId:"cmo-os",tags:["integration"]},
  {id:"cmo-5",title:"Integrate Roofr for estimate data",status:"todo",priority:"medium",assignee:"Los",dueDate:"2026-04-20",projectId:"cmo-os",tags:["integration"]},
  {id:"cmo-6",title:"CMO Command Center deployed and live",status:"done",priority:"high",assignee:"Los",dueDate:"2026-03-31",projectId:"cmo-os",tags:["core"]},
];

// ==================== PRIORITY QUEUE ====================
export interface PriorityItem {
  id: number;
  action: string;
  project: string;
  projectId: string;
  estimatedTime: string;
  revenueImpact: string;
  priority: 'critical' | 'high' | 'medium';
}

export const priorityQueue: PriorityItem[] = [
  {id:1,action:"Fix TradesBot Total Squares calculation bug (60% inflation)",project:"TradesBot",projectId:"tradesbot",estimatedTime:"1-2 hours",revenueImpact:"Blocks all customer use",priority:"critical"},
  {id:2,action:"Fix TradesBot Generate Estimate button (no document output)",project:"TradesBot",projectId:"tradesbot",estimatedTime:"1-2 hours",revenueImpact:"Blocks all customer use",priority:"critical"},
  {id:3,action:"Schedule technical demo with Ed Rosenfield (Boardroom Brain)",project:"Boardroom Brain",projectId:"boardroom-brain",estimatedTime:"30 min",revenueImpact:"$35K-45K deal",priority:"critical"},
  {id:4,action:"Launch Acquisition OS sales campaign",project:"Acquisition OS",projectId:"acquisition-os",estimatedTime:"2-3 hours",revenueImpact:"$10K product ready to sell",priority:"critical"},
  {id:5,action:"Add Stripe to Acquisition OS ($10K checkout)",project:"Acquisition OS",projectId:"acquisition-os",estimatedTime:"2-3 hours",revenueImpact:"Unlocks immediate revenue",priority:"critical"},
  {id:6,action:"Fix Content Factory broken features (Brand Voice, UTM, Topic Gen)",project:"Content Factory",projectId:"content-factory",estimatedTime:"4-6 hours",revenueImpact:"Required before charging $900/mo",priority:"high"},
  {id:7,action:"Add auth to Vault Ventures Investor (admin publicly accessible)",project:"Vault Ventures Investor",projectId:"vault-investor",estimatedTime:"3-4 hours",revenueImpact:"Security risk, blocks capital raising",priority:"high"},
  {id:8,action:"Build FundingHub multi-step application flow",project:"FundingHub",projectId:"fundinghub",estimatedTime:"8-12 hours",revenueImpact:"$100K/month target",priority:"high"},
  {id:9,action:"Add Stripe billing to Content Factory",project:"Content Factory",projectId:"content-factory",estimatedTime:"3-4 hours",revenueImpact:"$900/month per customer",priority:"high"},
  {id:10,action:"Add real database to Vault Ventures CRM",project:"Vault Ventures CRM",projectId:"vault-crm",estimatedTime:"4-5 hours",revenueImpact:"Required for production use",priority:"medium"},
];

// ==================== TIMELINE ====================
export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  project: string;
  type: 'milestone' | 'update' | 'launch';
}

export const timelineEvents: TimelineEvent[] = [
  {date:"2026-03-31",title:"Elios HQ v3.0 ClickUp Redesign",description:"Full ClickUp-style redesign. 9 pages, sidebar nav, list/board views, task management per project.",project:"Elios HQ",type:"milestone"},
  {date:"2026-03-31",title:"Acquisition OS Fully Loaded",description:"184K words, 12 modules, 8 supplementary resources. All 18 pages working. AI tools connected. Mobile responsive.",project:"Acquisition OS",type:"milestone"},
  {date:"2026-03-31",title:"TradesBot QA Testing Complete",description:"QA pass complete. Two critical bugs found: Total Squares inflated 60%, Generate Estimate button broken.",project:"TradesBot",type:"update"},
  {date:"2026-03-31",title:"FundingHub Competitive Analysis Done",description:"$100K/month roadmap defined. Full platform rebuild underway.",project:"FundingHub",type:"milestone"},
  {date:"2026-03-31",title:"Content Factory Master Prompt Architecture Built",description:"Competitive analysis complete. Master prompt system built to overhaul content quality.",project:"Content Factory",type:"milestone"},
  {date:"2026-03-31",title:"Boardroom Brain Deal Document Created",description:"Contract and Tranche 1 invoice ready. Waiting on Ed Rosenfield for technical demo scheduling.",project:"Boardroom Brain",type:"update"},
  {date:"2026-03-31",title:"LOS Empire Folder Structure Created",description:"36 files, 25 directories. Full empire structure documented.",project:"Elios HQ",type:"milestone"},
  {date:"2026-03-31",title:"CMO OS Command Center Live",description:"Fractional CMO Command Center for Trusted Roofing LLC deployed. 11 pages of executive dashboards.",project:"CMO OS",type:"launch"},
  {date:"2026-03-30",title:"Elios HQ v2.0 Deployed",description:"Rebranded from Los Command Center. Empire Navigator, Boardroom Brain deal pipeline added.",project:"Elios HQ",type:"update"},
  {date:"2026-03-28",title:"Content Factory Phase 1 Complete",description:"Core platform live. UTM tracking and Claude integration in development.",project:"Content Factory",type:"milestone"},
  {date:"2026-03-25",title:"Acquisition OS Course Content Rewritten",description:"21 files, 184K words of course content rewritten.",project:"Acquisition OS",type:"milestone"},
  {date:"2026-03-20",title:"Vault Ventures CRM Prototype",description:"Working prototype with localStorage. Needs real database backend.",project:"Vault Ventures CRM",type:"launch"},
  {date:"2026-03-18",title:"Vault Investor Platform Deployed",description:"Capital raising portal deployed. Needs authentication and real backend.",project:"Vault Ventures Investor",type:"launch"},
  {date:"2026-03-15",title:"TradesBot Live",description:"Roofing material estimator deployed and functional.",project:"TradesBot",type:"launch"},
  {date:"2026-03-10",title:"Boardroom Brain Landing Page",description:"Landing page deployed. Kent Clothier licensing deal initiated.",project:"Boardroom Brain",type:"launch"},
];

// ==================== RECENTLY COMPLETED ====================
export const recentlyCompleted = [
  {date:"2026-03-31",item:"Acquisition OS course content loaded (184K words, 12 modules, 18 pages working)"},
  {date:"2026-03-31",item:"TradesBot QA testing complete (2 critical bugs identified)"},
  {date:"2026-03-31",item:"FundingHub competitive analysis complete ($100K/month roadmap defined)"},
  {date:"2026-03-31",item:"Content Factory competitive analysis complete"},
  {date:"2026-03-31",item:"Content Factory master prompt architecture built"},
  {date:"2026-03-31",item:"LOS Empire folder structure created (36 files, 25 directories)"},
  {date:"2026-03-31",item:"Boardroom Brain deal document PDF created"},
  {date:"2026-03-31",item:"CMO OS Command Center deployed for Trusted Roofing LLC"},
];

// ==================== GITHUB REPOS ====================
export const githubRepos = [
  { name: "content-factory", url: "https://github.com/workwithlos-ui/content-factory", project: "Content Factory", status: "Active" },
  { name: "vault-ventures-crm", url: "https://github.com/workwithlos-ui/vault-ventures-crm", project: "Vault Ventures CRM", status: "Active" },
  { name: "fundinghub", url: "https://github.com/workwithlos-ui/fundinghub", project: "FundingHub", status: "Active" },
  { name: "elios-hq", url: "https://github.com/workwithlos-ui/elios-hq", project: "Elios HQ", status: "Active" },
  { name: "acquisition-os", url: "", project: "Acquisition OS", status: "Not yet pushed" },
  { name: "vault-ventures-investor", url: "", project: "Vault Ventures Investor", status: "Not yet pushed" },
  { name: "boardroom-brain", url: "", project: "Boardroom Brain", status: "Not yet pushed" },
  { name: "tradesbot", url: "", project: "TradesBot", status: "Not yet pushed" },
  { name: "cmo-os", url: "", project: "CMO OS", status: "Not yet pushed" },
];

// ==================== EMPIRE NAVIGATOR ====================
export const empireNavigator = [
  {
    name: "LOS EMPIRE",
    type: "folder" as const,
    children: [
      {
        name: "SaaS Products",
        type: "folder" as const,
        children: [
          { name: "Content Factory (BUILDING)", type: "link" as const, url: "https://content-factory-ochre.vercel.app" },
          { name: "Acquisition OS (LIVE)", type: "link" as const, url: "https://acquisition-os-chi.vercel.app" },
          { name: "FundingHub (REBUILDING)", type: "link" as const, url: "https://fundinghub.co" },
          { name: "CMO OS (LIVE)", type: "link" as const, url: "https://cmo-os.vercel.app" },
          { name: "TradesBot (NEEDS WORK)", type: "link" as const, url: "https://tradesbot-phase2.vercel.app" },
        ]
      },
      {
        name: "Real Estate / Vault Ventures",
        type: "folder" as const,
        children: [
          { name: "Vault CRM (prototype)", type: "link" as const, url: "https://vault-ventures-crm.vercel.app" },
          { name: "Investor Platform (needs auth)", type: "link" as const, url: "https://vault-ventures.vercel.app" },
        ]
      },
      {
        name: "Partnerships / Licensing",
        type: "folder" as const,
        children: [
          { name: "Boardroom Brain - Kent Clothier deal ($35K-45K)", type: "link" as const, url: "https://boardroom-brain.vercel.app" },
        ]
      },
      {
        name: "Command Centers",
        type: "folder" as const,
        children: [
          { name: "Elios HQ (this dashboard)", type: "link" as const, url: "https://elios-hq.vercel.app" },
          { name: "CMO OS Dashboard", type: "link" as const, url: "https://cmo-os.vercel.app" },
        ]
      },
      {
        name: "GitHub Repos",
        type: "folder" as const,
        children: [
          { name: "content-factory", type: "link" as const, url: "https://github.com/workwithlos-ui/content-factory" },
          { name: "vault-ventures-crm", type: "link" as const, url: "https://github.com/workwithlos-ui/vault-ventures-crm" },
          { name: "fundinghub", type: "link" as const, url: "https://github.com/workwithlos-ui/fundinghub" },
          { name: "elios-hq", type: "link" as const, url: "https://github.com/workwithlos-ui/elios-hq" },
          { name: "acquisition-os (not yet pushed)", type: "file" as const },
          { name: "vault-ventures-investor (not yet pushed)", type: "file" as const },
          { name: "boardroom-brain (not yet pushed)", type: "file" as const },
          { name: "tradesbot (not yet pushed)", type: "file" as const },
          { name: "cmo-os (not yet pushed)", type: "file" as const },
        ]
      },
      {
        name: "Domains / Web Properties",
        type: "folder" as const,
        children: [
          { name: "elios-hq.vercel.app", type: "link" as const, url: "https://elios-hq.vercel.app" },
          { name: "fundinghub.co", type: "link" as const, url: "https://fundinghub.co" },
          { name: "cmo-os.vercel.app", type: "link" as const, url: "https://cmo-os.vercel.app" },
          { name: "EliosAI.com (for sale - $1,999)", type: "file" as const },
        ]
      }
    ]
  }
];
