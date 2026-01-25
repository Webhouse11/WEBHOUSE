import React from 'react';
import { Code, Bot, Zap, Database, Smartphone, Globe, ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProgrammingAI: React.FC = () => {
  const sections = [
    {
      title: "Core Programming",
      features: [
        "Corporate & Business Portals",
        "E-commerce Growth Engines",
        "Full-Stack Web Applications",
        "Custom CRM & Dashboards",
        "Web Extensions & Plugins"
      ]
    },
    {
      title: "AI Business Automation",
      features: [
        "AI Workflow Optimization",
        "Smart Sales & Support Bots",
        "Predictive Analytics Models",
        "Automated Data Processing",
        "AI-Integrated Marketing Tools"
      ]
    }
  ];

  return (
    <div className="bg-brand-dark min-h-screen">
      <section className="relative py-40 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 z-0 opacity-20">
           <Code className="absolute top-20 right-20 text-indigo-500 rotate-12" size={300} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center space-y-8 relative z-10">
            <div className="inline-block px-5 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">Pillar 01</div>
            <h1 className="text-5xl md:text-9xl font-display font-light text-white tracking-tighter">
               Programming <span className="italic font-normal text-gradient">& AI.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
               We build the secure, scalable, and intelligent architectures that power global business operations.
            </p>
        </div>
      </section>

      <section className="py-40 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
           {sections.map((s, idx) => (
             <div key={idx} className="p-16 bg-slate-900/20 border border-slate-800 rounded-[64px] space-y-12">
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                      {idx === 0 ? <Code className="text-indigo-400" size={32} /> : <Bot className="text-indigo-400" size={32} />}
                   </div>
                   <h3 className="text-4xl font-display text-white tracking-tight">{s.title}</h3>
                </div>
                <div className="space-y-6">
                   {s.features.map(f => (
                     <div key={f} className="flex items-center gap-5 text-lg text-slate-400 font-light">
                        <CheckCircle size={20} className="text-indigo-500 shrink-0" /> {f}
                     </div>
                   ))}
                </div>
             </div>
           ))}
        </div>
      </section>

      <section className="py-40 bg-slate-950 border-y border-slate-900">
         <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-16 text-center">
            <div className="space-y-4">
               <Shield className="mx-auto text-indigo-500" size={48} />
               <h4 className="text-white font-bold uppercase tracking-widest text-xs">Secure by Design</h4>
               <p className="text-sm text-slate-500">Enterprise-grade security standards for every deployment.</p>
            </div>
            <div className="space-y-4">
               <Database className="mx-auto text-indigo-400" size={48} />
               <h4 className="text-white font-bold uppercase tracking-widest text-xs">Scalable Data</h4>
               <p className="text-sm text-slate-500">Architectures built to handle high volume without friction.</p>
            </div>
            <div className="space-y-4">
               <Globe className="mx-auto text-indigo-600" size={48} />
               <h4 className="text-white font-bold uppercase tracking-widest text-xs">Global Standard</h4>
               <p className="text-sm text-slate-500">Fast, local, and globally accessible web ecosystems.</p>
            </div>
         </div>
      </section>

      <section className="py-40 text-center px-6">
         <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-display text-white font-light">Ready to automate?</h2>
            <Link to="/contact" className="px-16 py-7 bg-white text-brand-dark font-black rounded-2xl hover:scale-105 transition-all uppercase tracking-[0.3em] text-xs inline-flex items-center gap-4">
               Discuss Your Automation Strategy <ArrowRight size={20} />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default ProgrammingAI;