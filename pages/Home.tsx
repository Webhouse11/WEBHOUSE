import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight, Code, TrendingUp, Palette, Zap, Feather, Globe, Users, CheckCircle, Quote, Bot, Sparkles, Monitor, Layers, MousePointer2, ChevronRight, ChevronLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDE_DURATION = 6000;

const WHATSAPP_MESSAGE = `👋 Hello! I'm interested in working with Webhouse Media. I'd like to discuss a project.`;
const WHATSAPP_URL = `https://wa.me/2348152469749?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const slides = [
  {
    id: 1,
    accent: "text-indigo-400",
    bg: "bg-indigo-600/10",
    pill: "Global Digital Systems",
    title: "<h1 class='text-5xl md:text-8xl lg:text-[110px] font-display font-bold text-white leading-[0.9] tracking-tighter max-w-6xl animate-in slide-in-from-bottom duration-1000 delay-100'>Global Digital Systems & <span class='text-gradient'>Growth Studio</span> for Modern Businesses</h1>",
    desc: "Webhouse Media & Marketing Studio is a global digital solutions company specializing in website and app development, AI business automation, digital sales and marketing systems, branding, and social media management.",
    cta: "Start Project",
    link: "/contact",
    icon: Globe
  },
  {
    id: 2,
    accent: "text-cyan-400",
    bg: "bg-cyan-600/10",
    pill: "Programming & AI Automation",
    title: "<h2 class='text-5xl md:text-8xl lg:text-[110px] font-display font-bold text-white leading-[0.9] tracking-tighter max-w-6xl animate-in slide-in-from-bottom duration-1000 delay-100'>Website, <span class='text-gradient-accent'>App Development</span> & AI Business Automation</h2>",
    desc: "Deploying enterprise-grade SaaS, custom portals, and predictive AI models that replace manual stress with automated precision.",
    cta: "Explore Tech",
    link: "/services/programming-ai",
    icon: Code
  },
  {
    id: 3,
    accent: "text-emerald-400",
    bg: "bg-emerald-600/10",
    pill: "Digital Sales Systems",
    title: "<h2 class='text-5xl md:text-8xl lg:text-[110px] font-display font-bold text-white leading-[0.9] tracking-tighter max-w-6xl animate-in slide-in-from-bottom duration-1000 delay-100'>Digital Sales & <span class='text-emerald-400'>Marketing Systems</span> That Convert</h2>",
    desc: "Stop guessing. We build conversion-optimized sales engines that turn traffic into predictable, high-ticket revenue pipelines.",
    cta: "Build Funnel",
    link: "/services/digital-sales",
    icon: TrendingUp
  },
  {
    id: 4,
    accent: "text-amber-400",
    bg: "bg-amber-600/10",
    pill: "Global Branding Systems",
    title: "<h2 class='text-5xl md:text-8xl lg:text-[110px] font-display font-bold text-white leading-[0.9] tracking-tighter max-w-6xl animate-in slide-in-from-bottom duration-1000 delay-100'>Professional <span class='text-amber-400'>Branding</span> & Graphic Design Solutions</h2>",
    desc: "Premium visual storytelling and 24/7 visibility systems designed to position your brand as a global market authority.",
    cta: "View Cases",
    link: "/portfolio",
    icon: Palette
  },
  {
    id: 5,
    accent: "text-rose-400",
    bg: "bg-rose-600/10",
    pill: "Social Media Management",
    title: "<h2 class='text-5xl md:text-8xl lg:text-[110px] font-display font-bold text-white leading-[0.9] tracking-tighter max-w-6xl animate-in slide-in-from-bottom duration-1000 delay-100'>Social Media <span class='text-rose-400'>Management</span> for Business Growth</h2>",
    desc: "Strategic narrative systems and full account management to maintain 24/7 brand relevance and global audience growth.",
    cta: "Grow Visibility",
    link: "/services/social-media",
    icon: Zap
  }
];

const Home: React.FC = () => {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, countries: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        projects: Math.min(1200, prev.projects + 12),
        clients: Math.min(800, prev.clients + 8),
        countries: Math.min(20, prev.countries + 1)
      }));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const bentoServices = [
    {
      id: 1,
      title: "Website, App Development & AI Business Automation",
      subtitle: "Programming & Intelligence",
      description: "High-end websites, apps, and predictive AI systems designed to automate your business operations and reduce manual overhead.",
      icon: Code,
      link: "/services/programming-ai",
      span: "md:col-span-2",
      bg: "bg-indigo-500/10",
      accent: "text-indigo-400"
    },
    {
      id: 2,
      title: "Digital Sales & Marketing Systems That Convert",
      subtitle: "High-Intent Lead Engines",
      description: "Predictable digital growth via conversion-optimized funnel systems that turn clicks into clients.",
      icon: TrendingUp,
      link: "/services/digital-sales",
      span: "md:col-span-1",
      bg: "bg-emerald-500/10",
      accent: "text-emerald-400"
    },
    {
      id: 3,
      title: "Author & Storytelling Narrative Systems",
      subtitle: "Emotional Influence",
      description: "Architecting emotional legends and high-authority brand stories that command audience loyalty.",
      icon: Feather,
      link: "/services/storytelling",
      span: "md:col-span-1",
      bg: "bg-rose-500/10",
      accent: "text-rose-400"
    },
    {
      id: 4,
      title: "Professional Branding & Graphic Design Solutions",
      subtitle: "Visual Identity Systems",
      description: "Premium visual storytelling for global credibility and instant market authority across all platforms.",
      icon: Palette,
      link: "/services/branding",
      span: "md:col-span-1",
      bg: "bg-amber-500/10",
      accent: "text-amber-400"
    },
    {
      id: 5,
      title: "Social Media Management for Business Growth",
      subtitle: "24/7 Authority Systems",
      description: "Content planning and visibility systems to maintain your global brand relevance and authority.",
      icon: Zap,
      link: "/services/social-media",
      span: "md:col-span-1",
      bg: "bg-cyan-500/10",
      accent: "text-cyan-400"
    }
  ];

  const testimonials = [
    { name: "Sarah Jenkins", country: "UK", feedback: "The AI automation system Webhouse built for our logistics has saved us 40 hours of manual work every week." },
    { name: "Olawale Bakare", country: "Nigeria", feedback: "Webhouse doesn't just design websites; they build digital sales engines. Our ROI tripled in six months." },
    { name: "David Miller", country: "USA", feedback: "The branding system created for our startup gave us instant credibility in a crowded New York market." },
    { name: "Elena Schmidt", country: "Germany", feedback: "Their social media systems are flawless. We finally have a consistent global voice across all channels." },
    { name: "Ahmed Al-Farsi", country: "UAE", feedback: "High-tech, professional, and very strategic. The custom dashboard they built is now central to our operations." },
    { name: "James Thompson", country: "Australia", feedback: "Incredible attention to detail. Their funnel architecture is the best we've seen in the industry." },
  ];

  return (
    <div className="flex flex-col bg-brand-dark overflow-x-hidden">
      
      {/* --- HERO SLIDER SECTION --- */}
      <section 
        className="relative h-screen min-h-[800px] flex items-center px-6 lg:px-12 grid-pattern overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] transition-all duration-[2000ms] pointer-events-none opacity-40 ${slides[currentSlide].bg}`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[130px] transition-all duration-[2000ms] pointer-events-none opacity-30 ${slides[currentSlide].bg}`}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`transition-all duration-1000 absolute inset-0 flex items-center ${
                index === currentSlide ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-12 pointer-events-none'
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-12 w-full">
                <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md animate-in slide-in-from-bottom duration-700`}>
                  <slide.icon className={`w-4 h-4 ${slide.accent} animate-pulse`} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">{slide.pill}</span>
                </div>
                
                <div dangerouslySetInnerHTML={{ __html: slide.title }} />
                
                <p className="text-lg md:text-2xl text-slate-400 max-w-4xl leading-relaxed font-light animate-in slide-in-from-bottom duration-1000 delay-200">
                  {slide.desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 pt-8 animate-in slide-in-from-bottom duration-1000 delay-300">
                  <Link 
                    to={slide.link} 
                    className="group px-12 py-6 bg-white text-brand-dark font-black text-sm rounded-full hover:bg-slate-200 transition-all flex items-center justify-center gap-4 uppercase tracking-widest shadow-2xl shadow-white/5"
                  >
                    {slide.cta}
                    <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                  <a 
                    href={WHATSAPP_URL}
                    target="_blank"
                    className="px-12 py-6 border border-[#25D366]/30 text-[#25D366] font-black text-sm rounded-full hover:bg-[#25D366]/5 transition-all flex items-center justify-center gap-4 uppercase tracking-widest backdrop-blur-sm group"
                  >
                    <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-12">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-all group"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <div className="flex items-center gap-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="group relative h-1.5 w-12 bg-white/10 rounded-full overflow-hidden transition-all hover:bg-white/20"
              >
                <div 
                  className={`absolute top-0 left-0 h-full bg-white transition-all duration-[6000ms] ease-linear ${
                    i === currentSlide ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className="w-14 h-14 rounded-full border border-white/5 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-brand-dark transition-all group"
          >
            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </section>

      {/* --- SEO INTRO SECTION --- */}
      <section className="py-32 bg-brand-surface border-y border-white/5 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
           <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">Digital Systems Built for Global Scale</h2>
           <p className="text-xl md:text-2xl text-slate-400 max-w-5xl leading-relaxed font-light italic">
              Webhouse Media & Marketing Studio is a global digital solutions company specializing in website and app development, AI business automation, digital sales and marketing systems, branding, and social media management. We help startups, SMEs, and established businesses build scalable digital systems that attract customers, automate operations, and drive consistent growth worldwide.
           </p>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-24 bg-brand-dark relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start space-y-3">
              <span className="text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter">
                {counts.projects.toLocaleString()}<span className="text-indigo-500">+</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-500">Global Implementations</span>
            </div>
            <div className="flex flex-col items-center md:items-start space-y-3">
              <span className="text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter">
                {counts.clients}<span className="text-indigo-500">+</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-500">Ambitious Partners</span>
            </div>
            <div className="flex flex-col items-center md:items-start space-y-3">
              <span className="text-6xl lg:text-8xl font-display font-bold text-white tracking-tighter">
                {counts.countries}<span className="text-indigo-500">+</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-slate-500">Active Jurisdictions</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES BENTO GRID --- */}
      <section className="py-40 bg-brand-dark px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-500">Service Ecosystems</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight">Growth Engines Built on Precision.</h2>
            </div>
            <Link to="/services" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
              Explore All Architecture <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bentoServices.map((svc) => (
              <Link 
                key={svc.id} 
                to={svc.link} 
                className={`group bento-card rounded-[40px] p-12 flex flex-col justify-between overflow-hidden relative ${svc.span} border-white/5 hover:border-indigo-500/20`}
              >
                <div className="relative z-10 space-y-8">
                  <div className={`w-16 h-16 ${svc.bg} rounded-2xl flex items-center justify-center border border-white/5 transition-all group-hover:scale-110 duration-500 group-hover:bg-indigo-500/20`}>
                    <svc.icon className={svc.accent} size={32} />
                  </div>
                  <div className="space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-indigo-400 transition-colors">{svc.subtitle}</span>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-none">{svc.title}</h3>
                  </div>
                  <p className="text-slate-500 text-lg leading-relaxed max-w-sm group-hover:text-slate-400 transition-colors font-light">
                    {svc.description}
                  </p>
                </div>
                
                <div className="mt-12 relative z-10 flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                  <div className="flex items-center gap-3">
                    System Blueprint <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                  <a 
                    href={WHATSAPP_URL} 
                    target="_blank" 
                    onClick={(e) => e.stopPropagation()} 
                    className="p-3 bg-[#25D366]/10 rounded-full text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
                    title="Direct WhatsApp Query"
                  >
                    <MessageCircle size={18} />
                  </a>
                </div>

                <div className={`absolute -top-12 -right-12 p-12 opacity-0 group-hover:opacity-5 transition-all duration-1000 rotate-12 scale-150`}>
                   <svc.icon size={250} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS MARQUEE --- */}
      <section className="py-40 bg-brand-surface border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-24 flex flex-col items-center text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 mb-6">Global Validation</span>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter">Architected for Real Impact.</h2>
        </div>
        
        <div className="flex gap-8 animate-marquee whitespace-nowrap px-6">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="inline-block min-w-[400px] md:min-w-[550px] p-12 bento-card rounded-[48px] whitespace-normal space-y-10 border-white/5">
              <Quote className="text-indigo-500 opacity-20" size={56} />
              <p className="text-slate-300 text-xl md:text-2xl leading-relaxed font-light italic">"{t.feedback}"</p>
              <div className="flex items-center justify-between pt-8 border-t border-white/5">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-bold tracking-tight text-xl">{t.name}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Verified Client</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-5 py-2 bg-white/5 rounded-full border border-white/5">
                  {t.country}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-48 relative px-6 lg:px-12 text-center bg-brand-dark">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-20">
          <div className="flex justify-center gap-10">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 animate-float shadow-2xl"><Monitor size={32} className="text-indigo-400" /></div>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 animate-float [animation-delay:1s] shadow-2xl"><Bot size={32} className="text-cyan-400" /></div>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 animate-float [animation-delay:2s] shadow-2xl"><Layers size={32} className="text-amber-400" /></div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter leading-[0.85]">
              Engineer Your <br />
              <span className="text-gradient italic">Growth.</span>
            </h2>
            <p className="text-xl md:text-3xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
              We partner with global founders who value technical precision, narrative soul, and predictable scaling systems.
            </p>
          </div>
          
          <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-6 px-16 py-8 bg-white text-brand-dark font-black rounded-full hover:scale-105 transition-all uppercase tracking-widest text-sm shadow-2xl shadow-indigo-500/10"
            >
              Consult with Architects
              <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <a 
              href={WHATSAPP_URL} 
              target="_blank"
              className="group inline-flex items-center gap-6 px-16 py-8 border border-[#25D366] text-[#25D366] font-black rounded-full hover:bg-[#25D366]/5 transition-all uppercase tracking-widest text-sm"
            >
              Direct WhatsApp
              <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;