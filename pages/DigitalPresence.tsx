import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Monitor, Smartphone, Globe, ArrowRight } from 'lucide-react';

const DigitalPresence: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <section className="relative py-32 overflow-hidden border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/40 text-[10px] font-bold uppercase tracking-widest text-slate-400">Digital Credibility</div>
            <h1 className="text-5xl md:text-8xl font-display font-light text-white tracking-tight">
               Digital <span className="italic font-normal text-gradient">Presence.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
               Your website is not a brochure. It is a 24/7 sales ecosystem designed to build trust and convert strangers into clients.
            </p>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="p-10 border border-slate-900 bg-slate-900/10 rounded-3xl space-y-6 hover:border-slate-800 transition-all">
            <Monitor className="text-indigo-400" size={32} />
            <h4 className="text-xl text-white font-bold">Conversion-Focused Web</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Websites built around a specific user journey, removing friction and guiding visitors to the next step.</p>
          </div>
          <div className="p-10 border border-slate-900 bg-slate-900/10 rounded-3xl space-y-6 hover:border-slate-800 transition-all">
            <Globe className="text-slate-400" size={32} />
            <h4 className="text-xl text-white font-bold">Search Visibility</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Architecture that search engines understand, ensuring you are found by the right audience at the right time.</p>
          </div>
          <div className="p-10 border border-slate-900 bg-slate-900/10 rounded-3xl space-y-6 hover:border-slate-800 transition-all">
            <Smartphone className="text-slate-500" size={32} />
            <h4 className="text-xl text-white font-bold">Mobile Excellence</h4>
            <p className="text-slate-500 text-sm leading-relaxed">Flawless performance across all devices, prioritizing the speed and ease that modern consumers demand.</p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">From Static to Strategic</h2>
          <h3 className="text-4xl md:text-5xl font-display text-white max-w-3xl mx-auto">Selected Project Architecture</h3>
          <div className="pt-12">
            <Link 
              to="/portfolio" 
              className="px-10 py-5 bg-white text-brand-dark font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-slate-200 transition-all"
            >
              View Selected Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalPresence;