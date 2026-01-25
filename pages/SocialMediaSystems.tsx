import React from 'react';
import { Zap, MessageSquare, BarChart, Calendar, ArrowRight, CheckCircle, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const SocialMediaSystems: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <section className="relative py-40 overflow-hidden border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center space-y-8 relative z-10">
            <div className="inline-block px-5 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">Pillar 04</div>
            <h1 className="text-5xl md:text-9xl font-display font-bold text-white tracking-tighter">
               Social Media <span className="text-gradient">Management</span> Services
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 max-w-4xl mx-auto leading-relaxed font-light">
               We manage and grow business social media accounts through content planning, daily engagement, analytics tracking, and brand consistency to ensure visibility, trust, and long-term audience growth.
            </p>
        </div>
      </section>

      <section className="py-40 px-6 lg:px-12 max-w-7xl mx-auto">
         <div className="grid lg:grid-cols-2 gap-12">
            {[
              { icon: Calendar, title: "Content Planning", desc: "Strategic planning and high-volume scheduling that keeps your brand top-of-mind daily." },
              { icon: MessageSquare, title: "Engagement Mgmt", desc: "Daily account activity and community management that builds a loyal audience base." },
              { icon: BarChart, title: "Analytics Tracking", desc: "Deep analytics tracking to ensure your visibility translates into business growth." },
              { icon: Eye, title: "Brand Consistency", desc: "Managing your brand voice across multiple timezones for global market impact." }
            ].map((s, idx) => (
              <div key={idx} className="p-16 bg-slate-900/20 border border-slate-800 rounded-[56px] space-y-8 hover:border-indigo-500/30 transition-all">
                 <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
                    <s.icon className="text-indigo-400" size={32} />
                 </div>
                 <h3 className="text-3xl font-display text-white tracking-tight">{s.title}</h3>
                 <p className="text-slate-500 text-lg leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
         </div>
      </section>

      <section className="py-40 text-center px-6 bg-slate-950 border-t border-slate-900">
         <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-display text-white font-light">Stop posting, start scaling.</h2>
            <Link to="/contact" className="px-16 py-7 bg-white text-brand-dark font-black rounded-2xl hover:scale-105 transition-all uppercase tracking-[0.3em] text-xs inline-flex items-center gap-4">
               Claim Your Visibility Audit <ArrowRight size={20} />
            </Link>
         </div>
      </section>
    </div>
  );
};

export default SocialMediaSystems;