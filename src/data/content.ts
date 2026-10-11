/**
 * All site content lives here. When a headless CMS is connected (PRD §7),
 * replace these constants with fetches that return the same types — the
 * pages won't need to change.
 */
import type { ComponentType, SVGProps } from 'react';
import {
  Camera, CheckCircle, Code, Compass, Gem, Handshake, Layout, LifeBuoy, Megaphone,
  Monitor, Palette, PenTool, Rocket, Search, Sparkles, TrendingUp, Users,
  Building, Briefcase, Layers, Target,
} from '../components/Icons';

export type Icon = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

/* ---------------------------------------------------------------- site */

export const SITE = {
  name: 'BEYOND',
  url: 'https://www.example.com', // TODO: replace with the live company domain
  tagline: 'Transforming services. Creating value. Making impact.',
  description:
    'BEYOND designs and builds websites, web applications, software and AI-powered automation for businesses, startups and professionals.',
};

export const CONTACT = {
  whatsapp: '+234 000 000 0000',
  whatsappLink: 'https://wa.me/2340000000000',
  email: 'hello@[company-domain]',
  partnershipsEmail: 'partners@[company-domain]',
  careersEmail: 'careers@[company-domain]',
  privacyEmail: 'privacy@[company-domain]',
  phone: '+234 000 000 0000',
  address: 'Lagos, Nigeria',
  hours: 'Mon – Fri, 9:00 – 18:00 WAT',
};

export const SOCIALS = {
  linkedin: '#',
  instagram: '#',
  x: '#',
  github: '#',
};

export type NavItem = { label: string; to: string };

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Team', to: '/team' },
  { label: 'Contact', to: '/contact' },
];

/* --------------------------------------------------------------- about */

export const MISSION =
  'BEYOND exists to transform services into solutions, and solutions into lasting impact.';
export const VISION =
  'To build a world where individuals and businesses create meaningful impact, achieve purposeful fulfillment, and attain sustainable prosperity through innovation, collaboration, and enterprise.';

export const VALUES = [
  'Purpose', 'Excellence', 'Integrity', 'Collaboration', 'Innovation', 'Growth', 'Mutual Success',
];

export const VALUE_DETAILS: { name: string; description: string }[] = [
  { name: 'Purpose', description: 'Every project starts with why. We build things that move a real goal forward.' },
  { name: 'Excellence', description: 'We hold our craft to a high bar — in code, design and how we communicate.' },
  { name: 'Integrity', description: 'Honest scopes, honest timelines, honest advice — even when it’s not what you expected.' },
  { name: 'Collaboration', description: 'We work with clients and each other as one team, with shared decisions.' },
  { name: 'Innovation', description: 'We use modern tools and AI where they genuinely help, not for the buzzword.' },
  { name: 'Growth', description: 'We build for where you’re going, and we keep growing our own capabilities.' },
  { name: 'Mutual Success', description: 'Our success is measured by yours. Long relationships over quick wins.' },
];

export type DivisionStatus = 'live' | 'expanding' | 'future';

export const DIVISIONS: { name: string; status: DivisionStatus; description: string }[] = [
  {
    name: 'Technology & Digital Solutions',
    status: 'live',
    description: 'Websites, web applications, software, UI/UX and AI automation. Fully operational today.',
  },
  {
    name: 'Creative & Digital',
    status: 'expanding',
    description: 'Brand design, digital branding, marketing and media — being built out as the team grows.',
  },
  {
    name: 'Business Solutions',
    status: 'future',
    description: 'A future division. It will be introduced only when it is ready to deliver.',
  },
  {
    name: 'Other Strategic Divisions',
    status: 'future',
    description: 'BEYOND is progressively expanding into additional sectors as our capabilities grow.',
  },
];

/* ------------------------------------------------------------ services */

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: Icon;
  idealFor: string;
  deliverables: string[];
};

export const TECH_SERVICES: Service[] = [
  {
    slug: 'website-development',
    title: 'Website Development',
    description: 'Fast, responsive, SEO-ready websites that represent your brand and turn visitors into enquiries.',
    icon: Monitor,
    idealFor: 'Businesses, startups and professionals who need a credible online presence that generates leads.',
    deliverables: [
      'Company websites & landing pages',
      'CMS so your team can update content',
      'On-page SEO, analytics & conversion tracking',
      'Performance tuned to Core Web Vitals',
    ],
  },
  {
    slug: 'web-applications',
    title: 'Web Applications',
    description: 'Secure, scalable web apps and dashboards built around how your business actually works.',
    icon: Layout,
    idealFor: 'Teams running operations on spreadsheets, or startups launching a product.',
    deliverables: [
      'Customer portals & internal dashboards',
      'Role-based access & authentication',
      'Payments, bookings & integrations',
      'Cloud hosting, monitoring & backups',
    ],
  },
  {
    slug: 'software-development',
    title: 'Software Development',
    description: 'Custom software that automates operations, connects your tools and removes manual work.',
    icon: Code,
    idealFor: 'Organizations with processes that off-the-shelf tools don’t fit.',
    deliverables: [
      'Custom business systems',
      'APIs & third-party integrations',
      'Data migration & reporting',
      'Maintenance & support plans',
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Research-led interfaces and product design that make complex products feel effortless.',
    icon: PenTool,
    idealFor: 'Products that need to be easier to use, or new products that need a clear direction.',
    deliverables: [
      'User research & UX audits',
      'Wireframes, flows & prototypes',
      'High-fidelity UI in Figma',
      'Design systems & developer handoff',
    ],
  },
  {
    slug: 'ai-integration-automation',
    title: 'AI Integration & Automation',
    description: 'Practical AI assistants, workflows and integrations that save time and unlock new value.',
    icon: Sparkles,
    idealFor: 'Businesses that want to respond faster, cut repetitive work, or use their data better.',
    deliverables: [
      'AI chat assistants for websites & WhatsApp',
      'Workflow automation across your tools',
      'Document & data processing',
      'AI features inside existing products',
    ],
  },
];

export const CREATIVE_SERVICES: { label: string; icon: Icon; description: string }[] = [
  { label: 'Graphics & Brand Design', icon: Palette, description: 'Logos, identity systems and brand assets.' },
  { label: 'Digital Branding', icon: Gem, description: 'Positioning and a consistent brand across every channel.' },
  { label: 'Digital Marketing', icon: Megaphone, description: 'Campaigns, social content and paid media.' },
  { label: 'Media & Photography', icon: Camera, description: 'Product, brand and corporate photography and video.' },
];

export const PROCESS: { title: string; description: string; icon: Icon }[] = [
  { title: 'Discover', description: 'We learn your goals, users and constraints, then agree a clear scope and quotation.', icon: Search },
  { title: 'Design', description: 'Flows, wireframes and visual design — reviewed with you before a line of code.', icon: Compass },
  { title: 'Build', description: 'Iterative development with regular demos so you see progress every week.', icon: Code },
  { title: 'Launch', description: 'Testing, performance and accessibility checks, then a smooth go-live.', icon: Rocket },
  { title: 'Support', description: 'Training, maintenance and improvements as your business grows.', icon: LifeBuoy },
];

export const REASONS: { title: string; description: string; icon: Icon }[] = [
  {
    title: 'Skilled Professionals',
    description: 'Vetted developers, designers and specialists who are officially part of BEYOND’s operating team.',
    icon: Users,
  },
  {
    title: 'Collaborative Approach',
    description: 'We work with you, not just for you — clear communication and shared decisions at every stage.',
    icon: Handshake,
  },
  {
    title: 'Quality, Always',
    description: 'Accessible, fast and secure by default — built to WCAG AA and Core Web Vitals standards.',
    icon: CheckCircle,
  },
  {
    title: 'Built for Growth',
    description: 'Scalable architecture that grows with your business instead of holding it back.',
    icon: TrendingUp,
  },
];

/* ------------------------------------------------------------ projects */

export type Project = {
  slug: string;
  name: string;
  client: string;
  industry: string;
  year: string;
  summary: string;
  problem: string;
  solution: string;
  services: string[];
  technologies: string[];
  results: { value: string; label: string }[];
  /** Image path in /public (e.g. /projects/01.jpg). Empty = gradient placeholder. */
  image: string;
  liveUrl?: string;
};

/** Placeholder content — replace with real client projects before go-live (PRD Phase 2). */
export const PROJECTS: Project[] = [
  {
    slug: 'project-name-01',
    name: 'Project Name 01',
    client: 'Client Name',
    industry: 'Industry',
    year: '2026',
    summary: 'Problem: slow, outdated website losing leads. Solution: rebuilt as a fast, SEO-ready Next.js site.',
    problem:
      'The client’s website was slow, hard to update and not built for mobile. Enquiries were dropping and the team couldn’t change content without a developer.',
    solution:
      'We redesigned the site around the client’s key services, rebuilt it on Next.js with a headless CMS, and added conversion tracking for every enquiry path.',
    services: ['Website Development', 'UI/UX Design'],
    technologies: ['Next.js', 'TypeScript', 'Headless CMS', 'Vercel'],
    results: [
      { value: '−00%', label: 'Page load time' },
      { value: '+00%', label: 'Monthly enquiries' },
      { value: '00', label: 'Lighthouse score' },
    ],
    image: '',
  },
  {
    slug: 'project-name-02',
    name: 'Project Name 02',
    client: 'Client Name',
    industry: 'Industry',
    year: '2026',
    summary: 'Problem: manual operations across spreadsheets. Solution: custom web app with role-based dashboards.',
    problem:
      'Operations ran across dozens of spreadsheets and WhatsApp groups. Reporting took days and errors were common.',
    solution:
      'We built a custom web application with role-based dashboards, automated reports and a single source of truth for the whole team.',
    services: ['Web Applications', 'Software Development'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    results: [
      { value: '+00%', label: 'Team productivity' },
      { value: '00 hrs', label: 'Saved on reporting' },
      { value: '00%', label: 'Fewer data errors' },
    ],
    image: '',
  },
  {
    slug: 'project-name-03',
    name: 'Project Name 03',
    client: 'Client Name',
    industry: 'Industry',
    year: '2026',
    summary: 'Problem: slow customer responses. Solution: AI assistant integrated with the client’s CRM.',
    problem:
      'Customers waited hours for answers to routine questions, and the support team was overloaded with repeat enquiries.',
    solution:
      'We deployed an AI assistant on the website and WhatsApp, connected to the client’s CRM, that answers common questions and hands complex cases to a human.',
    services: ['AI Integration & Automation'],
    technologies: ['OpenAI API', 'WhatsApp Cloud API', 'Node.js', 'CRM API'],
    results: [
      { value: '00 hrs', label: 'Saved per week' },
      { value: '−00%', label: 'Response time' },
      { value: '00%', label: 'Queries auto-resolved' },
    ],
    image: '',
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);

/* ---------------------------------------------------------------- team */

export type Department = 'Technology' | 'Design' | 'AI & Automation';

export type TeamMember = {
  name: string;
  role: string;
  department: Department;
  bio: string;
  skills: string[];
  /** Photo path in /public (e.g. /team/jane.jpg). Empty = placeholder. */
  photo: string;
  links: { linkedin?: string; github?: string; portfolio?: string };
};

/** Only professionals officially active in BEYOND’s operating structure (PRD §5). */
export const TEAM: TeamMember[] = [
  {
    name: 'Full Name', role: 'Lead Developer', department: 'Technology',
    bio: 'Short bio — one or two lines about experience and focus.',
    skills: ['Skill', 'Skill', 'Skill'], photo: '', links: { linkedin: '#', github: '#', portfolio: '#' },
  },
  {
    name: 'Full Name', role: 'Product Designer', department: 'Design',
    bio: 'Short bio — one or two lines about experience and focus.',
    skills: ['Skill', 'Skill', 'Skill'], photo: '', links: { linkedin: '#', github: '#', portfolio: '#' },
  },
  {
    name: 'Full Name', role: 'Software Engineer', department: 'Technology',
    bio: 'Short bio — one or two lines about experience and focus.',
    skills: ['Skill', 'Skill', 'Skill'], photo: '', links: { linkedin: '#', github: '#', portfolio: '#' },
  },
  {
    name: 'Full Name', role: 'AI Engineer', department: 'AI & Automation',
    bio: 'Short bio — one or two lines about experience and focus.',
    skills: ['Skill', 'Skill', 'Skill'], photo: '', links: { linkedin: '#', github: '#', portfolio: '#' },
  },
];

/* ---------------------------------------------------------- contact form */

export const SERVICE_OPTIONS = [
  'Website Development',
  'Web Applications',
  'Software Development',
  'UI/UX Design',
  'AI Integration & Automation',
  'Creative & Digital',
  'Not sure yet',
];

export const BUDGET_OPTIONS = [
  'Under ₦500k',
  '₦500k – ₦2M',
  '₦2M – ₦5M',
  '₦5M+',
  'Let’s discuss',
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: 'How much does a project cost?',
    a: 'It depends on scope. After a short discovery call we send a fixed quotation with clear deliverables, so there are no surprises. The budget field on our form helps us suggest the right approach.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'A business website usually takes 3–6 weeks. Web applications and custom software are scoped in phases, with the first usable version typically ready in 6–12 weeks.',
  },
  {
    q: 'Can I update my website myself after launch?',
    a: 'Yes. We set up a content management system and show your team how to use it, so day-to-day updates don’t need a developer.',
  },
  {
    q: 'Do you work with startups and individuals?',
    a: 'Yes. We work with businesses, organizations, startups, entrepreneurs and professionals — the process scales to the size of the project.',
  },
  {
    q: 'Do you offer support after launch?',
    a: 'Yes. Every project includes a support period, and we offer ongoing maintenance and improvement plans after that.',
  },
  {
    q: 'Are your Creative & Digital services available now?',
    a: 'Our Technology Division is fully operational. Creative & Digital services are expanding — get in touch and we’ll tell you honestly what we can deliver today.',
  },
];

/* ---------------------------------------------------------- partnerships */

export const PARTNER_TYPES: { title: string; description: string; icon: Icon }[] = [
  { title: 'Businesses', description: 'Long-term technology partner for growing companies.', icon: Building },
  { title: 'Startups', description: 'Product, design and engineering support from idea to launch.', icon: Rocket },
  { title: 'Professionals', description: 'Freelancers and specialists who want to collaborate on projects.', icon: Briefcase },
  { title: 'Organizations', description: 'NGOs, institutions and associations with digital goals.', icon: Users },
  { title: 'Technology Companies', description: 'Agencies and tech firms looking for delivery or integration partners.', icon: Layers },
];

export const PARTNER_MODELS: { title: string; description: string; icon: Icon }[] = [
  { title: 'Referral Partnership', description: 'Refer clients who need technology solutions and share in the success.', icon: Handshake },
  { title: 'Delivery Partnership', description: 'We become your extended team — white-label or co-branded delivery.', icon: Layers },
  { title: 'Strategic Partnership', description: 'Joint offerings, shared ventures and long-term collaboration.', icon: Target },
];

export const PARTNER_TYPE_OPTIONS = PARTNER_TYPES.map((t) => t.title).concat('Other');
export const PARTNER_MODEL_OPTIONS = PARTNER_MODELS.map((m) => m.title).concat('Not sure yet');
