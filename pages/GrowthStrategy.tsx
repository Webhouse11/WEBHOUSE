import React from 'react';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, Lightbulb, ArrowRight, ShieldCheck, Search, Zap } from 'lucide-react';

const GrowthStrategy: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Header */}
      <section className="relative py-40 overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-indigo-600/5 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center space-y-8 relative z-10">
            <div className="inline-block px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/40 text-[10px] font-bold uppercase tracking-widest text-indigo-400">Pillar One</div>
            <h1 className="text-5xl md:text-8xl font-display font-light text-white tracking-tight">
               Digital <span className="italic font-normal text-gradient">Architecture.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
               We align your business objectives with the digital landscape. Strategy is the precursor to sustainable scaling.
            </p>
        </div>
      </section>

      {/* The Process */}
      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
         <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
               <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-500">The Structural Phase</h2>
               <h3 className="text-4xl md:text-6xl font-display text-white leading-tight font-light">Clarity leads to <span className="italic">Certainty.</span></h3>
               <p className="text-lg text-slate-400 leading-relaxed font-light">
                  Execution without strategy is just expensive noise. We dive into the core of your business model to find the missing digital links.
               </p>
               
               <div className="space-y-8">
                  {[
                    { icon: Search, title: "Gap Analysis", desc: "Identifying exactly where your revenue is leaking online." },
                    { icon: Target, title: "Market Alignment", desc: "Positioning your brand where your high-intent audience actually is." },
                    { icon: Zap, title: "Growth Blueprints", desc: "Custom-engineered roadmaps for customer acquisition." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-indigo-500 transition-colors">
                        <item.icon className="text-indigo-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="relative group">
               <div className="absolute inset-0 bg-indigo-500/5 rounded-[40px] blur-3xl group-hover:bg-indigo-500/10 transition-all duration-700"></div>
               <div className="relative glass border border-slate-800 rounded-[40px] p-16 space-y-10 shadow-2xl">
                  <div className="p-4 bg-indigo-500/10 w-fit rounded-2xl">
                    <Lightbulb className="text-indigo-400" size={40} />
                  </div>
                  <h4 className="text-3xl font-display text-white">Is this for you?</h4>
                  <p className="text-slate-400 text-lg font-light leading-relaxed">
                    This pillar is designed for established business owners who feel they've reached a plateau and need a structural rethink to unlock the next level of revenue.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs border-b border-indigo-500 pb-2 hover:gap-6 transition-all">
                    Apply for a Consultation <ArrowRight size={14} />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-32 bg-slate-950 px-6 border-y border-slate-900">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.5em]">The Metric</p>
          <h3 className="text-3xl md:text-5xl font-display text-white font-light italic">
            "We don't measure success in clicks or impressions. We measure it in architected income and business sustainability."
          </h3>
        </div>
      </section>
    </div>
  );
};

export default GrowthStrategy;