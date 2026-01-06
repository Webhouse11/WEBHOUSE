import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Layout, Target, TrendingUp, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: "Architecting Digital Clarity",
    subtitle: "Strategic Foundations",
    description: "Before we click a button, we define your success. We align your business ambition with intelligent digital blueprints.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
    cta: "The Growth Strategy",
    link: "/solutions/growth"
  },
  {
    title: "High-Performance Ecosystems",
    subtitle: "Digital Presence",
    description: "Your website should be your best salesperson. We build conversion-first architectures that turn strangers into loyal clients.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    cta: "Digital Presence",
    link: "/solutions/presence"
  },
  {
    title: "Predictable Revenue Systems",
    subtitle: "Marketing Intelligence",
    description: "Replacing guesswork with visibility systems. We manage your authority and nurture your leads with precision.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
    cta: "Marketing Systems",
    link: "/solutions/marketing"
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Premium Hero Slider */}
      <section className="relative h-[95vh] w-full bg-brand-dark overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image with Pan effect */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover animate-slow-pan opacity-40 brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center">
              <div className="max-w-3xl space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                    {slide.subtitle}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-8xl font-display font-light text-white leading-[1.05] tracking-tight">
                  {slide.title.split(' ').map((word, i) => 
                    word === 'Digital' || word === 'Revenue' || word === 'Clarity' 
                      ? <span key={i} className="italic font-normal text-gradient"> {word} </span> 
                      : <span key={i}> {word} </span>
                  )}
                </h1>
                
                <p className="text-lg md:text-2xl text-slate-400 leading-relaxed font-light">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <Link 
                    to="/contact" 
                    className="px-10 py-5 bg-white text-brand-dark font-bold text-sm rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-3 uppercase tracking-widest shadow-2xl shadow-white/5"
                  >
                    Start With Clarity
                    <ArrowRight size={18} />
                  </Link>
                  <Link 
                    to={slide.link} 
                    className="px-10 py-5 border border-white/10 text-white font-medium text-sm rounded-xl hover:bg-white/5 transition-all flex items-center justify-center uppercase tracking-widest backdrop-blur-sm"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-12 left-6 lg:left-12 z-20 flex items-center gap-6">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1 transition-all duration-500 rounded-full ${
                  i === currentSlide ? 'w-12 bg-white' : 'w-4 bg-white/20'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
              className="p-3 border border-white/10 rounded-full text-white hover:bg-white/5 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
              className="p-3 border border-white/10 rounded-full text-white hover:bg-white/5 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Strategic Value Proposition */}
      <section className="py-32 bg-brand-dark px-6 lg:px-12 border-b border-slate-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-indigo-400">The Philosophy</h2>
            <h3 className="text-4xl md:text-6xl font-display text-white leading-tight font-light">
              Most digital efforts fail due to <span className="text-slate-600">poor architecture.</span>
            </h3>
            <p className="text-xl text-slate-400 leading-relaxed font-light">
              We replace "guessing" with "engineering." Webhouse Media exists to bridge the gap between high ambition and predictable business outcomes.
            </p>
            <div className="pt-4">
              <Link to="/about" className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs border-b border-indigo-500 pb-2 hover:gap-4 transition-all">
                Learn our perspective <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-10 border border-slate-800 rounded-[32px] bg-slate-900/20 backdrop-blur-sm group hover:border-indigo-500/50 transition-all duration-500">
              <Target className="text-indigo-400 mb-8 transition-transform group-hover:scale-110" size={32} />
              <h4 className="text-xl text-white font-display mb-4">Strategic Clarity</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Defining the "Who," "Why," and "How" before we write a single line of code or copy.</p>
            </div>
            <div className="p-10 border border-slate-800 rounded-[32px] bg-slate-900/20 backdrop-blur-sm group hover:border-slate-500/50 transition-all duration-500">
              <TrendingUp className="text-slate-400 mb-8 transition-transform group-hover:scale-110" size={32} />
              <h4 className="text-xl text-white font-display mb-4">Outcome Scaling</h4>
              <p className="text-sm text-slate-500 leading-relaxed">Systems built not just to look good, but to drive architected, predictable income.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Ecosystem */}
      <section className="py-32 bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-slate-500">The Pillars</h2>
            <h3 className="text-4xl md:text-7xl font-display text-white font-light">Three Pillars of Growth</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Link to="/solutions/growth" className="group relative p-12 border border-slate-900 hover:border-indigo-500/30 rounded-[40px] transition-all duration-700 bg-brand-dark/50 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-transform group-hover:scale-150 duration-700">
                <Target size={120} />
              </div>
              <h4 className="text-3xl font-display text-white mb-6">Growth & Strategy</h4>
              <p className="text-slate-400 leading-relaxed mb-10 text-lg">Aligning business objectives with high-level digital consulting.</p>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-indigo-400 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                View Strategy <ArrowRight size={14} />
              </div>
            </Link>

            <Link to="/solutions/presence" className="group relative p-12 border border-slate-900 hover:border-indigo-500/30 rounded-[40px] transition-all duration-700 bg-brand-dark/50 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-transform group-hover:scale-150 duration-700">
                <Layout size={120} />
              </div>
              <h4 className="text-3xl font-display text-white mb-6">Digital Presence</h4>
              <p className="text-slate-400 leading-relaxed mb-10 text-lg">Building credible, conversion-focused sales assets and ecosystems.</p>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-indigo-400 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                View Ecosystems <ArrowRight size={14} />
              </div>
            </Link>

            <Link to="/solutions/marketing" className="group relative p-12 border border-slate-900 hover:border-indigo-500/30 rounded-[40px] transition-all duration-700 bg-brand-dark/50 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-transform group-hover:scale-150 duration-700">
                <Zap size={120} />
              </div>
              <h4 className="text-3xl font-display text-white mb-6">Visibility Systems</h4>
              <p className="text-slate-400 leading-relaxed mb-10 text-lg">Consistent, authority-led marketing that feeds your sales engine.</p>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-indigo-400 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                View Systems <ArrowRight size={14} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Partnership */}
      <section className="py-40 px-6 text-center bg-brand-dark">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="flex justify-center gap-3">
            {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>)}
          </div>
          <h2 className="text-4xl md:text-7xl font-display text-white leading-[1.1] font-light">
            We are a strategic partner, <br />
            <span className="italic text-slate-600">not a service vendor.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            We work exclusively with business owners who value clarity, precision, and architectural integrity.
          </p>
          <div className="pt-10">
            <Link 
              to="/contact" 
              className="group px-14 py-7 bg-white text-brand-dark font-bold rounded-2xl hover:scale-[1.02] transition-all uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 mx-auto w-fit shadow-2xl shadow-white/10"
            >
              Request a Consultation
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;