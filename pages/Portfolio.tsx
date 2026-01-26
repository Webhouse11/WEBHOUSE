import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Target, Zap, Globe, Shield, Bot, Code, Palette, ChevronRight } from 'lucide-react';

const cases = [
  {
    id: 1,
    title: "Global Logistics AI Ecosystem",
    category: "AI & Programming",
    client: "Nexus Freight Solutions",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
    outcome: "40% Operational Efficiency Gain",
    description: "Architected a custom enterprise dashboard with predictive AI to automate route optimization and fleet tracking.",
    tags: ["Custom SaaS", "AI Automation", "React Native"],
    alt: "Webhouse Media & Marketing Studio digital marketing and web development services - AI Logistics Project"
  },
  {
    id: 2,
    title: "High-Ticket Sales Architecture",
    category: "Digital Sales Systems",
    client: "Elite Realty Group",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600",
    outcome: "+350k Revenue in Quarter 1",
    description: "Replaced a static brochure site with a high-intent narrative funnel and automated lead nurturing system.",
    tags: ["Sales Funnel", "CRM Integration", "Lead Gen"],
    alt: "Webhouse Media & Marketing Studio sales funnel experts - Real Estate Sales Architecture"
  },
  {
    id: 3,
    title: "FinTech Narrative Rebrand",
    category: "Branding & Storytelling",
    client: "NeoCapital Finance",
    image: "https://images.unsplash.com/photo-1559136555-930d72f1d302?auto=format&fit=crop&q=80&w=1600",
    outcome: "Global Authority Status",
    description: "Complete visual identity and brand legend architecture to position a startup as a global industry leader.",
    tags: ["Executive Branding", "Narrative Strategy", "Identity"],
    alt: "Webhouse Media branding agency - FinTech Rebrand"
  },
  {
    id: 4,
    title: "HealthTech Automation Bot",
    category: "AI Business Automation",
    client: "VitaHealth Clinics",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600",
    outcome: "98% Patient Query Resolution",
    description: "Deployed an intelligent LLM-powered assistant to handle appointment booking and triage across 12 locations.",
    tags: ["LLM Integration", "Customer Support", "Automation"],
    alt: "Webhouse Media AI business automation services - HealthTech Bot"
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Header Section */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5 grid-pattern">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none animate-pulse-soft"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-500">Case Studies</span>
            <h1 className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter leading-[0.9]">
              Selected <span className="text-gradient italic">Architectures.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
              A curated showcase of technical precision and strategic results. We don't just build; we solve complex global business challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Cases Gallery */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12">
          {cases.map((project) => (
            <div key={project.id} className="group bento-card rounded-[48px] overflow-hidden flex flex-col">
              {/* Image Box */}
              <div className="relative h-[400px] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.alt} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-8 left-8 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Box */}
              <div className="p-12 space-y-8 flex-grow">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
                      {project.category} — {project.client}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-lg font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Outcome Highlight */}
                <div className="p-8 bg-indigo-500/5 border border-indigo-500/10 rounded-3xl group-hover:border-indigo-500/30 transition-colors">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                    <Target size={14} className="text-indigo-400" /> Core Result
                  </p>
                  <p className="text-2xl text-white font-display font-bold italic tracking-tight">
                    {project.outcome}
                  </p>
                </div>

                <Link to="/contact" className="inline-flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all pb-1 border-b border-transparent group-hover:border-indigo-500 w-fit">
                  Analyze Success Blueprint <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Callout */}
      <section className="py-40 bg-brand-surface border-y border-white/5 px-6 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <Zap size={300} className="text-indigo-500" />
        </div>
        <div className="max-w-4xl mx-auto space-y-12 relative z-10">
          <h2 className="text-4xl md:text-7xl font-display font-bold text-white tracking-tighter leading-tight">
            Ready to be our next <br />
            <span className="text-gradient italic">Global Success?</span>
          </h2>
          <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
            We operate with a high-intensity focus, working with a limited number of ambitious partners per quarter to ensure architectural excellence.
          </p>
          <div className="pt-8">
            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-4 px-12 py-6 bg-white text-brand-dark font-black rounded-full hover:scale-105 transition-all uppercase tracking-widest text-sm shadow-2xl"
            >
              Start Project Inquiry
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;