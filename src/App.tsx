import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { VisitorCounter } from './components/VisitorCounter';
import logoMonogram from './assets/logo-monogram.svg';
import logoWordmark from './assets/logo-2-wordmark.svg';
import logoImg from './assets/logo-modified.png';
import githubAvatarImg from './assets/github-avatar.png';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X, 
  Copy, 
  Check, 
  ExternalLink, 
  Code2, 
  Sparkles, 
  Zap, 
  Laptop, 
  Layers, 
  Eye, 
  Send,
  Building2,
  Globe,
  MonitorSmartphone
} from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/919730717210?text=hello,%20i%20am%20reaching%20out%20from%20your%20link';

function WhatsAppIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      width={size} 
      height={size} 
      fill="currentColor" 
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}

interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: 'all' | 'fullstack' | 'frontend' | 'client';
  description: string;
  longDescription: string;
  tags: string[];
  metrics?: string;
  githubUrl: string;
  liveUrl?: string;
  keyFeatures: string[];
}

const EXTRACTED_PROJECTS: Project[] = [
  {
    id: 'mohalkar-architects-react',
    number: '01',
    title: 'Mohalkar Architects & Planners',
    tagline: 'Modern enterprise architecture platform built with React 19 & Framer Motion.',
    category: 'fullstack',
    description: 'A full-stack architecture suite featuring interactive project typologies, interactive cost estimator modal, administrative control panels, and custom PDF report exports.',
    longDescription: 'Engineered as a high-performance web platform for Mohalkar Architects & Planners. Showcases residential bungalows, 3-star hotels, industrial sheds, and urban planning schemes with fluid transitions, preloaded typologies, client inquiry flows, and Vercel analytics integration.',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'jsPDF', 'Vercel Analytics'],
    metrics: 'React 19 + Interactive Cost Estimator',
    githubUrl: 'https://github.com/shreeyash2010/Mohalkar-Architects',
    liveUrl: 'https://mohalkar-architects-planners-9a3t.vercel.app/',
    keyFeatures: [
      'Interactive architecture project categorizer (Residential, Commercial, Industrial, 3D)',
      'Built-in construction cost estimator modal with dynamic calculations',
      'Client inquiry management & PDF specification generator using jsPDF',
      'Fluid animations powered by Framer Motion and optimized image preloading'
    ]
  },
  {
    id: 'mohalkar-architects-planners-portal',
    number: '02',
    title: 'Mohalkar Architects & Planners Portal',
    tagline: 'Production multi-page architecture firm website deployed on Vercel.',
    category: 'client',
    description: 'Multi-page firm portal presenting architectural expertise, portfolio galleries, comprehensive service breakdowns, and dedicated enquiry pipelines.',
    longDescription: 'Developed to showcase comprehensive architectural projects across Maharashtra. Structured with clean semantic HTML5, Bootstrap 5 responsiveness, interactive JavaScript gallery filters, and deployed to production on Vercel.',
    tags: ['HTML5', 'Bootstrap 5', 'JavaScript', 'Responsive UI', 'Vercel'],
    metrics: 'Live Production Client Site',
    githubUrl: 'https://github.com/shreeyash2010/Mohalkar_Architects_Planners',
    liveUrl: 'https://mohalkar-architects-planners-9a3t.vercel.app/',
    keyFeatures: [
      'Multi-page architecture showcase with deep service breakdowns',
      'Interactive project filtering across urban design and commercial domains',
      'Mobile-optimized navigation with touch-friendly navigation drawer',
      'Integrated enquiry forms and contact routes for prospective clients'
    ]
  },
  {
    id: 'shreeyash-official-site',
    number: '03',
    title: 'Official Personal Website (V1)',
    tagline: 'The foundational portfolio and personal brand website.',
    category: 'frontend',
    description: 'Shreeyash\'s inaugural official personal website introducing his coding journey, design and development skills, brand identity, and client contact channels.',
    longDescription: 'The starting point of Shreeyash\'s developer presence on the web. Built with hand-crafted CSS, custom branding assets, Google Search verification, and responsive layout styling, deployed live on GitHub Pages.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Brand Identity', 'GitHub Pages'],
    metrics: 'Foundational Web Release',
    githubUrl: 'https://github.com/shreeyash2010/Offical-Site',
    liveUrl: 'https://shreeyash2010.github.io/Offical-Site/',
    keyFeatures: [
      'Original brand logo and identity design creation',
      'Responsive full-page layout with custom animations and graphics',
      'Search engine registration and Google site ownership verification',
      'Direct visitor inquiry integration with dedicated contact routing'
    ]
  }
];

const SKILLS = [
  { name: 'HTML5 Semantic Markup', group: 'Front-end' },
  { name: 'CSS3 & Modern Layouts', group: 'Front-end' },
  { name: 'JavaScript (ES6+)', group: 'Front-end' },
  { name: 'TypeScript', group: 'Front-end' },
  { name: 'React 19 & Next.js', group: 'Front-end' },
  { name: 'Tailwind CSS', group: 'Front-end' },
  { name: 'Bootstrap 5', group: 'Front-end' },
  { name: 'Responsive Design', group: 'Architecture' },
  { name: 'Node.js & Express', group: 'Back-end' },
  { name: 'RESTful APIs', group: 'Back-end' },
  { name: 'Git & GitHub', group: 'Workflow' },
  { name: 'Web Performance Optimization', group: 'Architecture' }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'fullstack' | 'client' | 'frontend'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeLogo, setActiveLogo] = useState<'monogram' | 'wordmark'>('monogram');
  const [brandModalOpen, setBrandModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll reading progress across viewport
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Contact form state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState<{ text: string; isError: boolean } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // New official email as requested
  const CONTACT_EMAIL = 'shreeyash.mali.in@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = formName.trim();
    const email = formEmail.trim();
    const message = formMessage.trim();

    if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      setFormStatus({
        text: 'Please fill in your name, a valid email, and your message.',
        isError: true
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({
      text: 'Opening your email client... Just hit send to reach Shreeyash!',
      isError: false
    });

    const subject = encodeURIComponent(`Website message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);

    setTimeout(() => {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
    }, 600);
  };

  const filteredProjects = activeCategory === 'all' 
    ? EXTRACTED_PROJECTS 
    : EXTRACTED_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen text-[#1f1b16] selection:bg-[#fde8d8] selection:text-[#c9501a] relative">
      {/* Thin, Fixed Reading Progress Bar at the Top of the Viewport */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3.5px] z-50 pointer-events-none bg-[#e8e1d6]/30 backdrop-blur-2xs"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div 
          className="h-full bg-gradient-to-r from-[#e8662a] via-[#f7935b] to-[#e8662a] transition-[width] duration-100 ease-out shadow-[0_0_8px_rgba(232,102,42,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#fbf8f3]/90 backdrop-blur-md border-b border-[#e8e1d6] transition-all">
        <div className="w-[min(1080px,100%-40px)] mx-auto flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8662a] rounded-lg p-1">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#e8662a] bg-[#1f1b16] flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
              <img 
                src={logoMonogram} 
                alt="Shreeyash Mali Seal Monogram" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-[1.05rem] tracking-tight leading-tight group-hover:text-[#e8662a] transition-colors">
                Shreeyash Mali
              </span>
              <span className="text-xs text-[#6a6258] font-medium hidden sm:inline-block">
                Full-Stack Web Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            <a 
              href="#about" 
              className="text-[#6a6258] hover:text-[#1f1b16] font-medium text-[0.97rem] transition-colors"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-[#6a6258] hover:text-[#1f1b16] font-medium text-[0.97rem] transition-colors"
            >
              Skills
            </a>
            <a 
              href="#work" 
              className="text-[#6a6258] hover:text-[#1f1b16] font-medium text-[0.97rem] transition-colors"
            >
              Work
            </a>
            <button
              type="button"
              onClick={() => setBrandModalOpen(true)}
              className="text-[#6a6258] hover:text-[#e8662a] font-medium text-[0.97rem] transition-colors flex items-center gap-1.5"
            >
              <Sparkles size={14} className="text-[#e8662a]" />
              <span>Brand Kit</span>
            </button>
            <a 
              href="#contact" 
              className="text-[#1f1b16] border-[1.5px] border-[#1f1b16] px-4 py-1.5 rounded-full font-medium text-[0.95rem] hover:bg-[#1f1b16] hover:text-[#fbf8f3] transition-all"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center gap-2 border-[1.5px] border-[#e8e1d6] bg-white/70 px-3 py-1.5 rounded-lg text-sm font-semibold hover:border-[#1f1b16] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            <span>Menu</span>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#e8e1d6] bg-[#fbf8f3] px-6 py-4 space-y-3 shadow-lg animate-in fade-in slide-in-from-top duration-200">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#6a6258] hover:text-[#1f1b16] font-medium"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#6a6258] hover:text-[#1f1b16] font-medium"
            >
              Skills
            </a>
            <a 
              href="#work" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#6a6258] hover:text-[#1f1b16] font-medium"
            >
              Work
            </a>
            <button 
              type="button"
              onClick={() => { setMobileMenuOpen(false); setBrandModalOpen(true); }}
              className="block py-2 text-[#e8662a] hover:text-[#c9501a] font-semibold text-left w-full"
            >
              Brand Kit (New Logos)
            </button>
            <div className="pt-2 border-t border-[#e8e1d6]/60 flex items-center justify-between">
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block border-[1.5px] border-[#1f1b16] px-5 py-2 rounded-full font-bold text-sm bg-[#1f1b16] text-[#fbf8f3]"
              >
                Get in touch
              </a>
              <div className="flex gap-2">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 text-[#6a6258] hover:text-[#25D366] transition-colors"
                  aria-label="WhatsApp Contact"
                  title="Chat on WhatsApp"
                >
                  <WhatsAppIcon size={20} />
                </a>
                <a 
                  href="https://github.com/shreeyash2010" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 text-[#6a6258] hover:text-[#1f1b16] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/shreeyash-mali-13497b22b/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 text-[#6a6258] hover:text-[#1f1b16] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="w-[min(1080px,100%-40px)] mx-auto py-16 sm:py-24 grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-center relative">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fde8d8]/80 border border-[#f5ba90] text-[#c9501a] text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#e8662a] animate-pulse" />
              Full-Stack Web Developer
            </div>

            <h1 className="font-serif-display font-semibold text-3xl sm:text-4xl lg:text-[3.25rem] leading-[1.18] tracking-tight text-[#1f1b16]">
              I build websites that are{' '}
              <span className="scribble font-semibold">
                simple
                <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 8 C 40 2, 70 12, 110 6 S 170 3, 198 7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
              , fast and easy to use.
            </h1>

            <p className="text-lg text-[#6a6258] max-w-xl leading-relaxed">
              Hi, I'm Shreeyash. I design and develop websites and web apps from the first sketch to the final deploy with clean architecture and responsive craft.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-[#e8662a] text-white border-2 border-[#e8662a] rounded-full px-7 py-3 font-bold hover:bg-[#c9501a] hover:border-[#c9501a] transition-all shadow-sm hover:shadow active:scale-95"
              >
                Get in touch
              </a>
              <a 
                href="#work" 
                className="inline-flex items-center justify-center bg-transparent text-[#1f1b16] border-2 border-[#1f1b16] rounded-full px-7 py-3 font-bold hover:bg-[#1f1b16] hover:text-[#fbf8f3] transition-all active:scale-95"
              >
                See my work
              </a>

              {/* Direct WhatsApp contact button */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#1f1b16] hover:text-white bg-white hover:bg-[#25D366] border border-[#e8e1d6] hover:border-[#25D366] px-4 py-3 rounded-full transition-all shadow-2xs group active:scale-95"
                title="Chat with Shreeyash on WhatsApp (+91 97307 17210)"
              >
                <WhatsAppIcon size={16} className="text-[#25D366] group-hover:text-white transition-colors" />
                <span>WhatsApp</span>
              </a>

              {/* Quick copy email tool */}
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#6a6258] hover:text-[#1f1b16] bg-white border border-[#e8e1d6] px-3.5 py-3 rounded-full hover:border-[#1f1b16] transition-colors"
                title={`Copy ${CONTACT_EMAIL}`}
              >
                {copiedEmail ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Quick availability pill */}
            <div className="flex flex-wrap items-center gap-4 pt-3 text-xs text-[#6a6258]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                <span>Open for freelance & full-stack roles</span>
              </div>
              <span className="text-[#e8e1d6] hidden sm:inline">|</span>
              <span className="text-[#1f1b16] font-medium">{CONTACT_EMAIL}</span>
              <span className="text-[#e8e1d6] hidden sm:inline">|</span>
              <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#1f1b16] hover:text-[#25D366] font-medium transition-colors"
              >
                <WhatsAppIcon size={13} className="text-[#25D366]" />
                <span>+91 97307 17210</span>
              </a>
            </div>
          </div>

          {/* Whimsical Hero Illustration with User's Official Logo */}
          <div className="relative flex items-center justify-center min-h-[280px] sm:min-h-[340px]">
            {/* Animated Morphing Organic Blob */}
            <div 
              className="absolute w-[260px] h-[260px] sm:w-[310px] sm:h-[310px] bg-[#f8d3b8] animate-blob -z-10 shadow-inner"
              aria-hidden="true" 
            />

            {/* Decorative dot matrix */}
            <div 
              className="absolute right-0 bottom-4 w-24 h-24 opacity-60 pointer-events-none -z-10"
              style={{
                backgroundImage: 'radial-gradient(#e8662a 2px, transparent 2.4px)',
                backgroundSize: '16px 16px'
              }}
              aria-hidden="true"
            />

            {/* Floating Shapes */}
            <div 
              className="absolute top-4 right-6 w-9 h-9 border-4 border-[#1f1b16] rounded-full animate-bob pointer-events-none" 
              aria-hidden="true" 
            />
            <div 
              className="absolute left-4 top-10 text-3xl font-extrabold text-[#1f1b16] select-none animate-bob-reverse pointer-events-none" 
              aria-hidden="true"
            >
              +
            </div>
            <div 
              className="absolute left-6 bottom-6 w-16 text-[#c9501a] pointer-events-none" 
              aria-hidden="true"
            >
              <svg viewBox="0 0 80 20" className="w-full">
                <path d="M2 10 Q 12 0 22 10 T 42 10 T 62 10 T 78 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>

            {/* New Official Logo Display & Interactive Switcher */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="p-3 bg-white/90 backdrop-blur-xs rounded-full border-2 border-[#e8662a] shadow-xl hover:scale-105 transition-transform duration-300">
                <div className="w-[190px] sm:w-[220px] h-[190px] sm:h-[220px] rounded-full overflow-hidden flex items-center justify-center p-2 bg-[#fbf8f3]">
                  <img 
                    src={activeLogo === 'monogram' ? logoMonogram : logoWordmark} 
                    alt={`Shreeyash Mali ${activeLogo} Logo`} 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Logo Style Switcher Controls */}
              <div className="flex items-center gap-1 p-1 bg-white/95 backdrop-blur-md border border-[#e8e1d6] rounded-full shadow-sm text-xs">
                <button
                  type="button"
                  onClick={() => setActiveLogo('monogram')}
                  className={`px-3.5 py-1 rounded-full font-semibold transition-all ${
                    activeLogo === 'monogram' ? 'bg-[#1f1b16] text-white shadow-xs' : 'text-[#6a6258] hover:text-[#1f1b16]'
                  }`}
                >
                  Monogram Seal
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLogo('wordmark')}
                  className={`px-3.5 py-1 rounded-full font-semibold transition-all ${
                    activeLogo === 'wordmark' ? 'bg-[#1f1b16] text-white shadow-xs' : 'text-[#6a6258] hover:text-[#1f1b16]'
                  }`}
                >
                  Wordmark
                </button>
                <button
                  type="button"
                  onClick={() => setBrandModalOpen(true)}
                  className="px-2.5 py-1 text-[11px] font-bold text-[#e8662a] hover:text-[#c9501a] border-l border-[#e8e1d6] pl-2.5 transition-colors"
                >
                  Brand Kit
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Organic Wave Divider */}
        <div className="h-14 -mt-2 leading-none w-full pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-full block">
            <path d="M0 30 C 240 70, 480 -10, 720 30 S 1200 70, 1440 30 L1440 60 L0 60 Z" fill="#f3ebde" />
          </svg>
        </div>

        {/* Section 01: About Me */}
        <section id="about" className="bg-[#f3ebde] py-16 sm:py-24 border-t-0">
          <div className="w-[min(1080px,100%-40px)] mx-auto">
            <p className="font-serif-display font-semibold text-[#e8662a] text-sm tracking-widest flex items-center gap-3 uppercase mb-2">
              <span>01</span>
              <span className="w-12 h-[1.5px] bg-[#e8662a]/60 inline-block" />
            </p>

            <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold mb-8 text-[#1f1b16]">
              About me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#6a6258] text-[1.05rem] leading-relaxed">
              <div className="space-y-4">
                <p>
                  I started coding when I was 12. I wanted to make my own game, but my computer couldn't run a game engine. Web development ran fine on it, so I switched, and I've enjoyed it ever since.
                </p>
                <p>
                  That early experience shaped how I think about software today: technology shouldn't demand excessive hardware to feel delightful. Simple, well-written code runs fast anywhere.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Today I work as a full-stack developer. I care about clean code, clear layouts, and sites that load quickly on any device, including old computers like mine was.
                </p>
                <p>
                  Whether crafting modern responsive interfaces with React & Tailwind or developing robust architectural portals, my focus stays on maintainability, performance, and simplicity.
                </p>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12 pt-8 border-t border-[#e8e1d6]">
              <div className="bg-[#fbf8f3] p-6 rounded-xl border border-[#e8e1d6] space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#fde8d8] text-[#c9501a] flex items-center justify-center font-bold">
                  <Zap size={20} />
                </div>
                <h3 className="font-serif-display text-lg font-semibold text-[#1f1b16]">Speed & Performance</h3>
                <p className="text-sm text-[#6a6258]">
                  Optimized assets, minimal bundle footprint, and sub-second load times for every user.
                </p>
              </div>

              <div className="bg-[#fbf8f3] p-6 rounded-xl border border-[#e8e1d6] space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#fde8d8] text-[#c9501a] flex items-center justify-center font-bold">
                  <Laptop size={20} />
                </div>
                <h3 className="font-serif-display text-lg font-semibold text-[#1f1b16]">Clean Code Standards</h3>
                <p className="text-sm text-[#6a6258]">
                  Semantic markup, strict typing, clean separation of concerns, and accessible UI patterns.
                </p>
              </div>

              <div className="bg-[#fbf8f3] p-6 rounded-xl border border-[#e8e1d6] space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#fde8d8] text-[#c9501a] flex items-center justify-center font-bold">
                  <Layers size={20} />
                </div>
                <h3 className="font-serif-display text-lg font-semibold text-[#1f1b16]">End-to-End Build</h3>
                <p className="text-sm text-[#6a6258]">
                  From initial wireframes and frontend components to backend logic and deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Skills */}
        <section id="skills" className="py-16 sm:py-24 border-t border-[#e8e1d6]">
          <div className="w-[min(1080px,100%-40px)] mx-auto">
            <p className="font-serif-display font-semibold text-[#e8662a] text-sm tracking-widest flex items-center gap-3 uppercase mb-2">
              <span>02</span>
              <span className="w-12 h-[1.5px] bg-[#e8662a]/60 inline-block" />
            </p>

            <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold mb-4 text-[#1f1b16]">
              Skills & Toolkit
            </h2>

            <p className="text-[#6a6258] max-w-2xl mb-8">
              A balanced toolkit centered on modern web standards, client architecture portals, and clean developer workflows.
            </p>

            <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
              {SKILLS.map((skill, index) => (
                <li
                  key={skill.name}
                  className="bg-white border border-[#e8e1d6] rounded-full px-5 py-2.5 text-[0.95rem] font-medium text-[#1f1b16] flex items-center gap-2.5 shadow-xs hover:border-[#e8662a] hover:-translate-y-0.5 transition-all duration-150 cursor-default"
                >
                  <span 
                    className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-[#e8662a]' : 'bg-[#1f1b16]'}`} 
                    aria-hidden="true"
                  />
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>

            {/* Quick Experience Context */}
            <div className="mt-12 bg-white/80 border border-[#e8e1d6] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1">
                <h4 className="font-bold text-base text-[#1f1b16] flex items-center gap-2">
                  <Code2 size={18} className="text-[#e8662a]" />
                  Always Building & Refining
                </h4>
                <p className="text-sm text-[#6a6258] max-w-xl">
                  Building real production solutions for architecture firms, web apps, and modern digital experiences.
                </p>
              </div>
              <a 
                href="https://github.com/shreeyash2010" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#c9501a] hover:text-[#e8662a] group"
              >
                <span>Browse my GitHub commits</span>
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 03: Selected Work - Real Extracted Projects */}
        <section id="work" className="py-16 sm:py-24 border-t border-[#e8e1d6]">
          <div className="w-[min(1080px,100%-40px)] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <p className="font-serif-display font-semibold text-[#e8662a] text-sm tracking-widest flex items-center gap-3 uppercase mb-2">
                  <span>03</span>
                  <span className="w-12 h-[1.5px] bg-[#e8662a]/60 inline-block" />
                </p>
                <h2 className="font-serif-display text-3xl sm:text-4xl font-semibold text-[#1f1b16]">
                  Extracted Projects & Work
                </h2>
                <p className="text-sm text-[#6a6258] mt-1">
                  Repositories and production client web platforms from <span className="font-semibold text-[#1f1b16]">@shreeyash2010</span>
                </p>
              </div>

              {/* Filter controls */}
              <div className="flex items-center gap-1.5 p-1 bg-white border border-[#e8e1d6] rounded-xl self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveCategory('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeCategory === 'all' 
                      ? 'bg-[#1f1b16] text-white shadow-xs' 
                      : 'text-[#6a6258] hover:text-[#1f1b16]'
                  }`}
                >
                  All ({EXTRACTED_PROJECTS.length})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('fullstack')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeCategory === 'fullstack' 
                      ? 'bg-[#1f1b16] text-white shadow-xs' 
                      : 'text-[#6a6258] hover:text-[#1f1b16]'
                  }`}
                >
                  Full-Stack
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('client')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeCategory === 'client' 
                      ? 'bg-[#1f1b16] text-white shadow-xs' 
                      : 'text-[#6a6258] hover:text-[#1f1b16]'
                  }`}
                >
                  Client Portal
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('frontend')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    activeCategory === 'frontend' 
                      ? 'bg-[#1f1b16] text-white shadow-xs' 
                      : 'text-[#6a6258] hover:text-[#1f1b16]'
                  }`}
                >
                  Brand V1
                </button>
              </div>
            </div>

            {/* Extracted Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group relative bg-white border border-[#e8e1d6] rounded-xl p-7 pt-9 transition-all duration-300 ease-out hover:scale-[1.025] hover:-translate-y-1.5 hover:border-[#e8662a] hover:shadow-xl overflow-hidden flex flex-col justify-between"
                >
                  {/* Accent Top Border Fill on Hover */}
                  <div 
                    className="absolute top-0 left-0 h-1.5 bg-[#e8662a] w-1/4 transition-all duration-300 group-hover:w-full"
                    aria-hidden="true" 
                  />

                  {/* Big Number Watermark */}
                  <span 
                    className="absolute right-5 top-3 font-serif-display text-5xl font-bold text-[#f1e6d6] select-none pointer-events-none transition-colors group-hover:text-[#f8d3b8]/60"
                    aria-hidden="true"
                  >
                    {project.number}
                  </span>

                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center gap-2">
                      {project.id.includes('architects') ? (
                        <Building2 size={16} className="text-[#e8662a]" />
                      ) : (
                        <Globe size={16} className="text-[#e8662a]" />
                      )}
                      <span className="text-xs font-bold text-[#c9501a] tracking-wider uppercase">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="font-serif-display text-xl font-semibold text-[#1f1b16] group-hover:text-[#c9501a] transition-colors pr-10">
                      {project.title}
                    </h3>

                    <p className="text-sm font-medium text-[#1f1b16]/80 italic">
                      {project.tagline}
                    </p>

                    <p className="text-[#6a6258] text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="text-[11px] text-[#6a6258] bg-[#fbf8f3] border border-[#e8e1d6] px-2 py-0.5 rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#e8e1d6]/80 flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#c9501a] bg-[#fdf5ee] hover:bg-[#c9501a] hover:text-white border border-[#f5ba90]/70 hover:border-[#c9501a] px-3.5 py-2 rounded-lg transition-colors duration-200 ease-in-out shadow-2xs group/btn"
                      >
                        <Github size={15} className="transition-transform duration-200 group-hover/btn:scale-110" />
                        <span>Source Code</span>
                        <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#6a6258] hover:text-[#1f1b16] bg-[#fbf8f3] hover:bg-white border border-[#e8e1d6] hover:border-[#1f1b16] px-2.5 py-2 rounded-lg transition-colors duration-200 shadow-2xs"
                      >
                        <Eye size={13} />
                        <span>Features</span>
                      </button>
                    </div>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#1f1b16] bg-[#fde8d8] hover:bg-[#e8662a] hover:text-white px-3.5 py-2 rounded-lg transition-colors duration-200 ease-in-out border border-[#f5ba90] hover:border-[#e8662a] shadow-2xs group/live"
                      >
                        <ExternalLink size={13} className="text-[#e8662a] group-hover/live:text-white transition-colors duration-200" />
                        <span>Visit Live Site</span>
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Repositories Direct Links Banner */}
            <div className="mt-10 p-6 bg-white border border-[#e8e1d6] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fde8d8] flex items-center justify-center text-[#e8662a]">
                  <Github size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1f1b16]">Extracted from GitHub Profile</h4>
                  <p className="text-xs text-[#6a6258]">
                    Offical-Site · Mohalkar_Architects_Planners · Mohalkar-Architects
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <a 
                  href="https://github.com/shreeyash2010/Mohalkar-Architects" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#fbf8f3] border border-[#e8e1d6] hover:border-[#1f1b16] transition-colors flex items-center gap-1"
                >
                  <span>Mohalkar-Architects</span>
                  <ArrowUpRight size={13} />
                </a>
                <a 
                  href="https://github.com/shreeyash2010/Mohalkar_Architects_Planners" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#fbf8f3] border border-[#e8e1d6] hover:border-[#1f1b16] transition-colors flex items-center gap-1"
                >
                  <span>Mohalkar_Planners</span>
                  <ArrowUpRight size={13} />
                </a>
                <a 
                  href="https://github.com/shreeyash2010/Offical-Site" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#fbf8f3] border border-[#e8e1d6] hover:border-[#1f1b16] transition-colors flex items-center gap-1"
                >
                  <span>Offical-Site</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04: Let's Work Together (Updated to new email) */}
        <section className="w-[min(1080px,100%-40px)] mx-auto my-12 sm:my-16">
          <div 
            id="contact" 
            className="bg-[#1f1b16] text-[#f6efe4] rounded-3xl p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-xl"
          >
            {/* Background geometric accents */}
            <div 
              className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#e8662a] opacity-90 blur-xs pointer-events-none"
              aria-hidden="true" 
            />
            <div 
              className="absolute right-16 -bottom-8 w-28 h-28 pointer-events-none opacity-30"
              style={{
                backgroundImage: 'radial-gradient(#f6efe4 2px, transparent 2.4px)',
                backgroundSize: '16px 16px'
              }}
              aria-hidden="true" 
            />

            <div className="relative z-10 max-w-2xl">
              <p className="font-serif-display font-semibold text-[#e8662a] text-sm tracking-widest flex items-center gap-3 uppercase mb-2">
                <span>04</span>
                <span className="w-12 h-[1.5px] bg-[#e8662a]/60 inline-block" />
              </p>

              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-white">
                Let's work together
              </h2>

              <p className="text-[#cfc5b6] text-lg leading-relaxed mb-6">
                Have a project or a question? Send me a message and I'll reply promptly.
              </p>

              {/* Direct Quick Contact Buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow active:scale-95 group"
                >
                  <WhatsAppIcon size={18} className="transition-transform group-hover:scale-110" />
                  <span>Chat on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 bg-[#2b261f] hover:bg-[#383127] border border-[#41392f] text-sm text-[#f6efe4] px-4 py-2.5 rounded-xl transition-colors"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  <span>{copiedEmail ? 'Copied to clipboard!' : CONTACT_EMAIL}</span>
                </button>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 bg-[#e8662a] hover:bg-[#c9501a] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  <Mail size={16} />
                  <span>Send to {CONTACT_EMAIL}</span>
                </a>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleContactSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name-input" className="block text-sm font-medium text-[#f6efe4]">
                      Your name
                    </label>
                    <input 
                      id="name-input"
                      type="text" 
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Jane Doe"
                      required
                      autoComplete="name"
                      className="w-full bg-[#2b261f] border border-[#41392f] rounded-xl px-4 py-3 text-[#f6efe4] placeholder-[#8a7f70] focus:outline-none focus:border-[#e8662a] focus:ring-2 focus:ring-[#e8662a]/30 transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email-input" className="block text-sm font-medium text-[#f6efe4]">
                      Your email
                    </label>
                    <input 
                      id="email-input"
                      type="email" 
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="jane@example.com"
                      required
                      autoComplete="email"
                      className="w-full bg-[#2b261f] border border-[#41392f] rounded-xl px-4 py-3 text-[#f6efe4] placeholder-[#8a7f70] focus:outline-none focus:border-[#e8662a] focus:ring-2 focus:ring-[#e8662a]/30 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message-input" className="block text-sm font-medium text-[#f6efe4]">
                    Message
                  </label>
                  <textarea 
                    id="message-input"
                    rows={4}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Tell me about what you're building..."
                    required
                    className="w-full bg-[#2b261f] border border-[#41392f] rounded-xl px-4 py-3 text-[#f6efe4] placeholder-[#8a7f70] focus:outline-none focus:border-[#e8662a] focus:ring-2 focus:ring-[#e8662a]/30 transition-colors text-sm resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 bg-[#e8662a] hover:bg-[#c9501a] text-white font-bold px-8 py-3 rounded-full transition-all disabled:opacity-60 active:scale-95 shadow-md"
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? 'Preparing...' : 'Send message'}</span>
                  </button>

                  {formStatus && (
                    <p 
                      role="status" 
                      className={`text-sm ${formStatus.isError ? 'text-[#ff9a8f]' : 'text-[#8ee0a1]'}`}
                    >
                      {formStatus.text}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="bg-[#fbf8f3] max-w-lg w-full rounded-2xl border border-[#e8e1d6] p-7 shadow-2xl space-y-5 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-[#6a6258] hover:text-[#1f1b16] hover:bg-[#e8e1d6]/50 transition-colors"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="space-y-1">
              <span className="font-serif-display text-sm font-bold text-[#e8662a]">
                Project {selectedProject.number}
              </span>
              <h3 id="modal-title" className="font-serif-display text-2xl font-bold text-[#1f1b16]">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-medium text-[#c9501a]">
                {selectedProject.tagline}
              </p>
            </div>

            <div className="space-y-3 text-sm text-[#6a6258] leading-relaxed">
              <p>{selectedProject.longDescription}</p>
              
              {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  <span className="text-xs font-bold text-[#1f1b16] uppercase tracking-wider block">Key Highlights:</span>
                  <ul className="space-y-1 text-xs text-[#6a6258] list-disc pl-4">
                    {selectedProject.keyFeatures.map((kf, i) => (
                      <li key={i}>{kf}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.metrics && (
                <div className="p-3 bg-white border border-[#e8e1d6] rounded-xl flex items-center gap-2 text-xs font-semibold text-[#1f1b16]">
                  <Sparkles size={15} className="text-[#e8662a]" />
                  <span>Key Attribute: {selectedProject.metrics}</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase font-bold text-[#6a6258] tracking-wider">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map(t => (
                  <span key={t} className="text-xs bg-white border border-[#e8e1d6] px-2.5 py-1 rounded-md text-[#1f1b16] font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#e8e1d6] flex items-center justify-between gap-3">
              {selectedProject.liveUrl ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1f1b16] hover:text-[#e8662a] transition-colors duration-200"
                >
                  <Globe size={14} />
                  <span>Live Site</span>
                </a>
              ) : <div />}

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-sm font-semibold text-[#6a6258] hover:text-[#1f1b16] transition-colors duration-200"
                >
                  Close
                </button>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#e8662a] hover:bg-[#c9501a] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors duration-200 shadow-2xs hover:shadow-sm"
                >
                  <span>View Repository</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Brand Kit / New Logos Modal */}
      {brandModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150 overflow-y-auto"
          onClick={() => setBrandModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="brand-modal-title"
        >
          <div 
            className="bg-[#fbf8f3] max-w-2xl w-full rounded-2xl border border-[#e8e1d6] p-6 sm:p-8 shadow-2xl space-y-6 relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setBrandModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-[#6a6258] hover:text-[#1f1b16] hover:bg-[#e8e1d6]/50 transition-colors"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="space-y-1">
              <span className="font-serif-display text-sm font-bold text-[#e8662a]">
                Official Brand Identity
              </span>
              <h3 id="brand-modal-title" className="font-serif-display text-2xl font-bold text-[#1f1b16]">
                Shreeyash Mali Logo Suite
              </h3>
              <p className="text-sm text-[#6a6258]">
                Three bespoke brand marks designed with warm terracotta typography, modern serif styling, and developer code symbolism.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {/* Logo 1: Monogram (Seal Badge) */}
              <div className={`p-5 rounded-2xl border bg-white flex flex-col items-center text-center space-y-3 transition-all ${activeLogo === 'monogram' ? 'border-[#e8662a] ring-2 ring-[#e8662a]/20 shadow-md' : 'border-[#e8e1d6]'}`}>
                <div className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center p-2 bg-[#fbf8f3] border border-[#e8e1d6]/60 shadow-xs">
                  <img src={logoMonogram} alt="Monogram Seal Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-serif-display font-bold text-base text-[#1f1b16]">01. Official Monogram Seal</h4>
                  <p className="text-xs text-[#6a6258] mt-1">Signature circular emblem with arched typography, stitched ring, and center &lt; S &gt; mark.</p>
                </div>
                <div className="flex gap-2 w-full pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveLogo('monogram')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-colors ${activeLogo === 'monogram' ? 'bg-[#e8662a] text-white shadow-xs' : 'bg-[#fbf8f3] text-[#1f1b16] hover:bg-[#e8e1d6]'}`}
                  >
                    {activeLogo === 'monogram' ? 'Active Hero Logo' : 'Set as Hero Logo'}
                  </button>
                  <a
                    href="/image/logo-monogram.svg"
                    download="shreeyash-mali-monogram.svg"
                    className="p-2 rounded-xl bg-[#fbf8f3] hover:bg-[#e8e1d6] text-[#1f1b16] border border-[#e8e1d6] flex items-center justify-center"
                    title="Download SVG"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Logo 2: Wordmark */}
              <div className={`p-5 rounded-2xl border bg-white flex flex-col items-center text-center space-y-3 transition-all ${activeLogo === 'wordmark' ? 'border-[#e8662a] ring-2 ring-[#e8662a]/20 shadow-md' : 'border-[#e8e1d6]'}`}>
                <div className="w-full h-28 rounded-2xl overflow-hidden flex items-center justify-center p-3 bg-[#fbf8f3] border border-[#e8e1d6]/60 shadow-xs">
                  <img src={logoWordmark} alt="Wordmark Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-serif-display font-bold text-base text-[#1f1b16]">02. Horizontal Wordmark</h4>
                  <p className="text-xs text-[#6a6258] mt-1">Horizontal brand mark with &lt; / &gt; icon, full name serif typography, and developer title.</p>
                </div>
                <div className="flex gap-2 w-full pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveLogo('wordmark')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-colors ${activeLogo === 'wordmark' ? 'bg-[#e8662a] text-white shadow-xs' : 'bg-[#fbf8f3] text-[#1f1b16] hover:bg-[#e8e1d6]'}`}
                  >
                    {activeLogo === 'wordmark' ? 'Active Hero Logo' : 'Set as Hero Logo'}
                  </button>
                  <a
                    href="/image/logo-2-wordmark.svg"
                    download="shreeyash-mali-wordmark.svg"
                    className="p-2 rounded-xl bg-[#fbf8f3] hover:bg-[#e8e1d6] text-[#1f1b16] border border-[#e8e1d6] flex items-center justify-center"
                    title="Download SVG"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#e8e1d6] flex items-center justify-between text-xs text-[#6a6258]">
              <span>Vector assets ready for use across web, GitHub, and resumes</span>
              <button
                type="button"
                onClick={() => setBrandModalOpen(false)}
                className="px-5 py-2 rounded-full font-bold bg-[#1f1b16] text-[#fbf8f3] hover:bg-[#e8662a] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Site Footer */}
      <footer className="border-t-4 border-[#e8662a] bg-[#fbf8f3] py-8 text-[#6a6258] text-sm">
        <div className="w-[min(1080px,100%-40px)] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <p>© {new Date().getFullYear()} Shreeyash Mali · <a href="https://shreeyash-mali-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1f1b16] hover:underline font-medium">shreeyash-mali-zeta.vercel.app</a></p>
            <VisitorCounter />
          </div>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setBrandModalOpen(true)}
              className="hover:text-[#e8662a] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Sparkles size={14} className="text-[#e8662a]" />
              <span>Brand Kit</span>
            </button>
            <span>·</span>
            <a 
              href="https://www.linkedin.com/in/shreeyash-mali-13497b22b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#1f1b16] hover:underline flex items-center gap-1.5 transition-colors"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>
            <span>·</span>
            <a 
              href="https://github.com/shreeyash2010" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#1f1b16] hover:underline flex items-center gap-1.5 transition-colors"
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>
            <span>·</span>
            <a 
              href={WHATSAPP_LINK}
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#25D366] hover:underline flex items-center gap-1.5 transition-colors"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon size={15} />
              <span>WhatsApp</span>
            </a>
            <span>·</span>
            <a 
              href="#top" 
              className="hover:text-[#1f1b16] hover:underline transition-colors"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
