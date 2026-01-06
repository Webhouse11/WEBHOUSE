import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, BarChart, ArrowRight, MessageSquare } from 'lucide-react';

const MarketingSystems: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <section className="relative py-32 overflow-hidden border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/40 text-[10px] font-bold uppercase tracking-widest text-indigo-400">Visibility & Authority</div>
            <h1 className="text-5xl md:text-8xl font-display font-light text-white tracking-tight">
               Marketing <span className="italic font-normal text-gradient">Systems.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
               We don't just "post." We build visibility systems that maintain authority and nurture relationships.
            </p>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Systemic Visibility</h2>
            <h3 className="text-4xl md:text-5xl font-display text-white">Authority by Design.</h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              Social media and content marketing shouldn't be a chore. We build structured systems that ensure your brand stays relevant and profitable without trend-chasing.
            </p>
            <div className="space-y-6">
              {[
                { title: "Strategic Content Management", desc: "Storytelling that connects emotionally and builds trust." },
                { title: "Paid Visibility Systems", desc: "Targeted ads on Meta, Google, and LinkedIn focused on ROI." },
                { title: "Lead Nurture Automation", desc: "Email and messaging systems that follow up so you don't have to." },
                { title: "Performance Analytics", desc: "Turning data into strategic growth decisions." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center shrink-0 group-hover:border-indigo-400 transition-colors">
                    <span className="text-white font-bold">{i+1}</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="glass border border-slate-800 rounded-3xl p-12 sticky top-32">
               <MessageSquare className="text-indigo-400 mb-8" size={32} />
               <h4 className="text-2xl font-display text-white mb-6">Built for Serious Professionals.</h4>
               <p className="text-slate-400 leading-relaxed mb-8">
                 We handle the complexity of content production, distribution, and ad optimization so you can focus on running your business.
               </p>
               <Link to="/contact" className="px-8 py-4 bg-white text-brand-dark rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
                 Request Visibility Audit <ArrowRight size={14} />
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingSystems;