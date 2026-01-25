import React from 'react';
import { 
  Code, TrendingUp, Palette, Zap, Feather,
  ArrowUpRight, CheckCircle, Monitor, Smartphone, Globe, Bot, ChevronRight, MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_MESSAGE = `👋 Hello! I'm interested in working with Webhouse Media. I'd like to discuss a project.`;
const WHATSAPP_URL = `https://wa.me/2348152469749?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const servicePillars = [
  {
    id: 1,
    title: "Programming & AI Automation",
    subtitle: "Pillar 01",
    description: "Secure, high-end digital architecture and predictive AI systems designed for organizational scale.",
    icon: Code,
    link: "/services/programming-ai",
    features: [
      "Corporate & SaaS Applications",
      "AI Workflow Automation",
      "Smart Support Agents (LLMs)",
      "Custom Admin Ecosystems"
    ],
    accent: "text-indigo-400"
  },
  {
    id: 2,
    title: "Digital Sales Systems",
    subtitle: "Pillar 02",
    description: "Replacing random marketing efforts with architected lead generation and conversion funnels.",
    icon: TrendingUp,
    link: "/services/digital-sales",
    features: [
      "Strategic Funnel Architecture",
      "High-Intent Acquisition",
      "Journey Automation Mapping",
      "Growth Systems Analytics"
    ],
    accent: "text-emerald-400"
  },
  {
    id: 3,
    title: "Graphic & Branding Systems",
    subtitle: "Pillar 03",
    description: "Premium visual identity systems that build instant global credibility and emotional resonance.",
    icon: Palette,
    link: "/services/branding",
    features: [
      "Executive Identity Systems",
      "Pitch Deck & Profile Strategy",
      "Multi-Channel Creative Assets",
      "Brand Style Architecture"
    ],
    accent: "text-amber-400"
  },
  {
    id: 4,
    title: "Social Visibility Systems",
    subtitle: "Pillar 04",
    description: "Authority-driven management to maintain 24/7 brand relevance and global audience growth.",
    icon: Zap,
    link: "/services/social-media",
    features: [
      "Global Content Strategy",
      "Full Account Architecture",
      "Performance Intelligence",
      "Automated Presence Mgmt"
    ],
    accent: "text-cyan-400"
  },
  {
    id: 5,
    title: "Author & Storytelling",
    subtitle: "Pillar 05",
    description: "Architecting brand legends and high-authority narratives that drive emotional buying decisions.",
    icon: Feather,
    link: "/services/storytelling",
    features: [
      "Executive Author Ghostwriting",
      "Narrative Funnel Strategy",
      "Viral Script Architecture",
      "Brand Voice Engineering"
    ],
    accent: "text-rose-400"
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Page Header */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5 grid-pattern">
         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-10">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-500">Service Ecosystems</span>
            <h1 className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter leading-[0.9]">
              Architected <span className="text-gradient italic">Solutions.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
               Comprehensive digital growth engines designed to position your brand as a global authority.
            </p>
         </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-40">
        <div className="grid lg:grid-cols-2 gap-8">
           {servicePillars.map((pillar) => {
             const Icon = pillar.icon;
             return (
               <Link key={pillar.id} to={pillar.link} className="group bento-card rounded-[48px] p-12 md:p-16 flex flex-col hover:border-white/10">
                  <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-8">
                      <div className={`w-16 h-16 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                         <Icon className={`w-8 h-8 ${pillar.accent}`} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">{pillar.subtitle}</span>
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight">{pillar.title}</h3>
                      </div>
                    </div>
                    <a 
                      href={WHATSAPP_URL} 
                      target="_blank" 
                      onClick={(e) => e.stopPropagation()} 
                      className="p-4 bg-[#25D366]/10 rounded-2xl text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all shadow-lg hidden sm:flex"
                      title="Direct WhatsApp Query"
                    >
                      <MessageCircle size={20} />
                    </a>
                  </div>

                  <p className="text-slate-500 text-lg leading-relaxed mb-12 font-light">
                    {pillar.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6 flex-grow mb-16">
                    {pillar.features.map(feat => (
                      <div key={feat} className="flex items-start gap-4">
                        <CheckCircle size={18} className="text-indigo-500 mt-1 shrink-0" />
                        <span className="text-sm text-slate-400 font-medium leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all pb-2 border-b border-transparent group-hover:border-indigo-500 w-fit">
                      Full System Architecture <ChevronRight size={14} />
                    </div>
                    <div className="sm:hidden">
                       <a 
                        href={WHATSAPP_URL} 
                        target="_blank" 
                        onClick={(e) => e.stopPropagation()} 
                        className="flex items-center gap-2 text-[#25D366] text-[10px] font-black uppercase tracking-widest"
                      >
                        <MessageCircle size={14} /> Chat Now
                      </a>
                    </div>
                  </div>
               </Link>
             );
           })}
        </div>
      </section>

      {/* Bottom Callout */}
      <section className="py-40 bg-brand-surface border-t border-white/5 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-12">
           <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight">Need a custom system?</h2>
           <p className="text-lg text-slate-500 font-light">
             We specialize in engineering unique solutions for businesses with complex operational requirements.
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="group inline-flex items-center gap-4 px-12 py-6 bg-white text-brand-dark font-black rounded-full hover:scale-105 transition-all uppercase tracking-widest text-sm shadow-2xl">
                 Consult with Architects <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <a 
                href={WHATSAPP_URL} 
                target="_blank"
                className="group inline-flex items-center gap-4 px-12 py-6 border border-[#25D366] text-[#25D366] font-black rounded-full hover:bg-[#25D366]/5 transition-all uppercase tracking-widest text-sm"
              >
                WhatsApp Strategy <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              </a>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Services;