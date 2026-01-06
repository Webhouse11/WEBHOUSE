import React from 'react';
import { Target, Eye, Lightbulb, ShieldCheck, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <section className="relative py-32 border-b border-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
            <h1 className="text-5xl md:text-8xl font-display font-light text-white mb-8 tracking-tight">
               Built on <span className="italic font-normal text-gradient">Philosophy.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
               Webhouse Media is an innovation-driven agency built on the belief that growth should not be accidental. It should be engineered.
            </p>
         </div>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12">
         <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-10">
               <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Our Approach</h2>
               <h3 className="text-4xl md:text-5xl font-display text-white leading-tight">
                  We don't just "market" brands. <br />
                  <span className="text-slate-600">We architect them.</span>
               </h3>
               <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                  <p>
                    WEBHOUSE MEDIA AND MARKETING LTD was founded on a simple realization: Most businesses have great products but weak digital bridges.
                  </p>
                  <p>
                    Our team consists of sales strategists, brand architects, and digital experts who prioritize business clarity before clicking a single button. We use AI, data, and structured psychology to build systems that work while you sleep.
                  </p>
               </div>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-12 space-y-12 shadow-2xl">
               <div className="flex gap-8">
                  <Target className="text-indigo-400 shrink-0" size={32} />
                  <div>
                    <h4 className="text-xl text-white font-bold mb-2">The Mission</h4>
                    <p className="text-slate-500 leading-relaxed">To deliver intelligent digital solutions that empower businesses to grow sustainably and operate with peak efficiency.</p>
                  </div>
               </div>
               <div className="flex gap-8">
                  <Eye className="text-slate-400 shrink-0" size={32} />
                  <div>
                    <h4 className="text-xl text-white font-bold mb-2">The Vision</h4>
                    <p className="text-slate-500 leading-relaxed">To set a new global standard for marketing innovation where technology and human strategy meet seamlessly.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-32 bg-slate-950 border-y border-slate-900 px-6">
         <div className="max-w-4xl mx-auto text-center space-y-10">
            <Lightbulb className="w-12 h-12 text-indigo-400 mx-auto opacity-50" />
            <h2 className="text-3xl md:text-5xl font-display text-white">Our Belief</h2>
            <p className="text-2xl text-slate-400 leading-relaxed font-light italic">
              "The future belongs to the brands that embrace technology without losing their humanity. We use AI to replace manual stress, not human creativity."
            </p>
         </div>
      </section>

      <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
         <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-4">
               <ShieldCheck size={28} className="text-slate-500" />
               <h4 className="text-white font-bold uppercase tracking-widest text-xs">Clarity First</h4>
               <p className="text-slate-500 text-sm leading-relaxed">We never start a project without defining exactly what 'Success' looks like for your bank account.</p>
            </div>
            <div className="space-y-4">
               <Zap size={28} className="text-indigo-400" />
               <h4 className="text-white font-bold uppercase tracking-widest text-xs">Structural Integrity</h4>
               <p className="text-slate-500 text-sm leading-relaxed">We build systems that scale. From CRM integrations to funnel automation, we build for the future.</p>
            </div>
            <div className="space-y-4">
               <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[10px] text-brand-dark font-black">AI</span>
               </div>
               <h4 className="text-white font-bold uppercase tracking-widest text-xs">Intelligence Led</h4>
               <p className="text-slate-500 text-sm leading-relaxed">Data tells the story. We use advanced analytics to pivot and optimize your campaigns in real-time.</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;