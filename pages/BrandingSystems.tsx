import React from 'react';
import { Palette, PenTool, Layout, Globe, ArrowRight, CheckCircle, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandingSystems: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <section className="relative py-40 overflow-hidden border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center space-y-8 relative z-10">
            <div className="inline-block px-5 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">Pillar 03</div>
            <h1 className="text-5xl md:text-9xl font-display font-light text-white tracking-tighter">
               Brand <span className="italic font-normal text-gradient">Identity.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
               Visual storytelling and premium branding architectures built for instant global trust.
            </p>
        </div>
      </section>

      <section className="py-40 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
           <div className="space-y-12">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-500">The Visual Architecture</h2>
              <h3 className="text-4xl md:text-6xl font-display text-white leading-tight">Identity that Scales.</h3>
              <p className="text-xl text-slate-400 font-light leading-relaxed">
                 We don't just "design logos." We build visual ecosystems that communicate professionalism, clarity, and competence.
              </p>
              <div className="grid gap-6">
                {[
                  "Premium Logo & Identity Systems",
                  "High-End Corporate Profiles",
                  "Investment Pitch Deck Strategy",
                  "Packaging & Visual Product Strategy",
                  "Marketing Creative Guidelines"
                ].map(item => (
                  <div key={item} className="flex items-center gap-4 text-lg text-white font-medium">
                    <CheckCircle className="text-indigo-500" size={20} /> {item}
                  </div>
                ))}
              </div>
           </div>
           <div className="relative group">
              <div className="absolute inset-0 bg-indigo-500/5 blur-[120px] rounded-full"></div>
              <div className="relative bg-slate-900/40 border border-slate-800 rounded-[64px] p-16 space-y-10">
                 <div className="w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center border border-slate-700">
                    <Palette className="text-indigo-400" size={40} />
                 </div>
                 <h4 className="text-3xl font-display text-white">Visual Integrity</h4>
                 <p className="text-slate-500 leading-relaxed font-light">
                   Our branding process involves deep strategy, market positioning, and psychological profiling of your ideal customer to ensure every pixel serves a business purpose.
                 </p>
                 <Link to="/contact" className="inline-flex items-center gap-3 text-white font-black uppercase tracking-[0.2em] text-[10px] border-b border-indigo-500 pb-2 hover:gap-6 transition-all">
                    Start Your Identity Project <ArrowRight size={14} />
                 </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default BrandingSystems;