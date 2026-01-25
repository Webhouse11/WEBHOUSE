import React from 'react';
import { BookOpen, Feather, Heart, Sparkles, ArrowRight, CheckCircle, Quote, MessageCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthorStorytelling: React.FC = () => {
  const features = [
    {
      title: "Executive Author Positioning",
      desc: "Ghostwriting and authority-building for founders. We turn your expertise into a compelling legend.",
      icon: Feather
    },
    {
      title: "Narrative Sales Funnels",
      desc: "Moving beyond bullet points to create an emotional journey that makes the sale inevitable.",
      icon: Sparkles
    },
    {
      title: "Brand Origin Strategy",
      desc: "Architecting the 'Why' behind your business to build deep customer loyalty and trust.",
      icon: Heart
    }
  ];

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Header */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5 grid-pattern">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-10">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-rose-400">Pillar 05: Narrative Architecture</span>
          <h1 className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter leading-[0.9]">
            Words that <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400 italic">Command</span> Attention.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
            We don't just write copy. We architect emotional legends. Logic makes people think, but storytelling makes people act.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-rose-500/20 to-transparent blur-2xl opacity-50"></div>
             <div className="relative bento-card rounded-[48px] p-12 md:p-16 space-y-8">
                <Quote size={48} className="text-rose-400 opacity-20" />
                <h2 className="text-4xl font-display font-bold text-white leading-tight">
                  "Features tell. <br />
                  <span className="italic text-rose-400">Stories sell."</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed font-light">
                  The most successful brands in the world aren't the ones with the best features. They are the ones with the best stories. Our Author & Storytelling systems turn your business from a utility into a movement.
                </p>
                <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-slate-500">
                  <div className="w-10 h-px bg-slate-800"></div>
                  The Webhouse Narrative Methodology
                </div>
             </div>
          </div>

          <div className="space-y-12">
            {features.map((f, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="w-16 h-16 bg-rose-500/5 border border-rose-500/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                   <f.icon className="text-rose-400" size={32} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-display font-bold text-white tracking-tight">{f.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-light">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Pillars */}
      <section className="py-40 bg-brand-surface border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">The Author Ecosystem</span>
             <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight">Driving Emotion to Drive Sales.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "The Authority Book", desc: "Positioning you as the definitive leader in your industry through strategic ghostwriting." },
              { title: "Viral Scripts", desc: "Short and long-form video scripts engineered to trigger psychological hooks and shares." },
              { title: "Brand Voice DNA", desc: "A comprehensive guide to your brand's unique linguistic fingerprint." }
            ].map((p, i) => (
              <div key={i} className="bento-card rounded-[32px] p-10 space-y-6">
                <Star size={24} className="text-rose-400" />
                <h4 className="text-xl font-bold text-white">{p.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter leading-tight">
            Tell the story <br />
            they <span className="text-gradient italic">can't ignore.</span>
          </h2>
          <p className="text-lg text-slate-500 font-light max-w-xl mx-auto">
            Our storytelling architects are ready to define your brand's emotional frequency and scale your influence.
          </p>
          <div className="pt-8">
            <Link to="/contact" className="group inline-flex items-center gap-4 px-12 py-6 bg-white text-brand-dark font-black rounded-full hover:scale-105 transition-all uppercase tracking-widest text-sm shadow-2xl">
              Start Your Story Session <ArrowRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthorStorytelling;