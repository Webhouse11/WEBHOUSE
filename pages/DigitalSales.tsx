import React from 'react';
import { TrendingUp, Target, Filter, Users, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalSales: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <section className="relative py-40 overflow-hidden border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center space-y-8 relative z-10">
            <div className="inline-block px-5 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">Pillar 02</div>
            <h1 className="text-5xl md:text-9xl font-display font-bold text-white tracking-tighter">
               Digital Sales & <span className="text-gradient">Marketing Systems</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 max-w-4xl mx-auto leading-relaxed font-light">
               Our digital sales and marketing systems help businesses generate leads, build trust, and convert prospects through funnels, email automation, CRM integration, landing pages, and data-driven growth strategies.
            </p>
        </div>
      </section>

      <section className="py-40 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
           {[
             { title: "Funnel Architecture", desc: "Mapping the customer journey from first touch to final sale.", icon: Filter },
             { title: "Lead Generation", desc: "Automated systems that identify and qualify high-intent prospects.", icon: Users },
             { title: "Growth Analytics", desc: "Data-driven decisions to optimize every stage of the funnel.", icon: TrendingUp }
           ].map((s, idx) => (
             <div key={idx} className="p-12 bg-slate-900/20 border border-slate-800 rounded-[48px] space-y-8 hover:border-indigo-500/30 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                   <s.icon className="text-indigo-400 group-hover:text-white" size={32} />
                </div>
                <h3 className="text-3xl font-display text-white tracking-tight">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light">{s.desc}</p>
             </div>
           ))}
        </div>
      </section>

      <section className="py-40 bg-slate-950 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="flex justify-center gap-2">
            {[1,2,3,4,5].map(i => <Zap key={i} size={20} className="text-indigo-400" />)}
          </div>
          <h2 className="text-3xl md:text-6xl font-display text-white text-center leading-tight">
             Predictable Revenue is an <br />
             <span className="italic font-normal">Architectural Decision.</span>
          </h2>
          <div className="pt-12 flex justify-center">
            <Link to="/contact" className="px-16 py-7 bg-white text-brand-dark font-black rounded-2xl hover:scale-105 transition-all uppercase tracking-[0.3em] text-xs inline-flex items-center gap-4">
               Build Your Sales Engine <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalSales;