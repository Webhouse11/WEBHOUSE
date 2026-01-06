import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout, Target, Zap } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Growth Engine",
    category: "Strategic Strategy",
    client: "Global Retail House",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1600",
    outcome: "350% Increase in Predictable Revenue",
    description: "Re-engineering a failing funnel into a high-intent customer acquisition system using AI-led targeting."
  },
  {
    id: 2,
    title: "Luxury Real Estate Ecosystem",
    category: "Digital Presence",
    client: "Metropolis Realty Group",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1600",
    outcome: "50+ High-Net-Worth Leads Monthly",
    description: "A conversion-first digital bridge designed to build deep credibility before the first contact."
  },
  {
    id: 3,
    title: "FinTech Authority Launch",
    category: "Marketing Systems",
    client: "NeoBank International",
    image: "https://images.unsplash.com/photo-1559136555-930d72f1d302?auto=format&fit=crop&q=80&w=1600",
    outcome: "10k+ Pre-Launch Applications",
    description: "Visibility systems architected to establish instant trust in a highly competitive market."
  }
];

const Portfolio: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Header */}
      <section className="relative py-40 overflow-hidden border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center space-y-8">
            <h1 className="text-5xl md:text-8xl font-display font-light text-white tracking-tight">
               Selected <span className="italic font-normal text-gradient">Architectures.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
               A showcase of strategic depth and execution excellence. We focus on results that move the needle.
            </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12 space-y-32">
        {projects.map((project, index) => (
          <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 items-center`}>
            <div className="w-full lg:w-3/5 group relative overflow-hidden rounded-[40px] border border-slate-800 shadow-2xl">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full aspect-[16/9] object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/0 transition-colors duration-500"></div>
            </div>
            
            <div className="w-full lg:w-2/5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-[0.4em]">{project.category}</span>
                <h3 className="text-4xl font-display text-white leading-tight font-light">{project.title}</h3>
                <p className="text-slate-500 text-lg leading-relaxed">{project.description}</p>
              </div>

              <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl">
                <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-3">Core Outcome</p>
                <p className="text-2xl text-white font-display italic">{project.outcome}</p>
              </div>

              <Link to="/contact" className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs border-b border-indigo-500 pb-2 hover:gap-6 transition-all">
                Project Consultation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-40 bg-slate-950 px-6 border-y border-slate-900">
         <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-display text-white font-light">Architect your next chapter.</h2>
            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
               We work with a limited number of clients per quarter to ensure focused strategic attention.
            </p>
            <div className="pt-6">
              <Link 
                to="/contact" 
                className="px-14 py-7 bg-white text-brand-dark font-bold rounded-2xl hover:scale-105 transition-all uppercase tracking-widest text-sm inline-flex items-center gap-4 shadow-2xl"
              >
                Start Your Strategy Session
                <ArrowRight size={18} />
              </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Portfolio;