import React, { useState, useEffect } from 'react';
import { useWebsite } from '../context/WebsiteContext';
import { ArrowRight, ChevronLeft, ChevronRight, Bot, TrendingUp, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    subtitle: "AI-POWERED DIGITAL TRANSFORMATION",
    title: "Elevating Brands with",
    highlight: "Intelligent Strategy",
    description: "We build automated sales ecosystems, high-performance websites, and brand architectures that dominate global markets.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
    primaryCta: { text: "Start Transformation", link: "/contact" },
    secondaryCta: { text: "Explore Solutions", link: "/services" }
  },
  {
    id: 2,
    subtitle: "NEXT-GEN AUTOMATION",
    title: "Scale Faster with",
    highlight: "AI-Powered Tools",
    description: "Streamline workflows, reduce manual tasks, and optimize customer acquisition with our cutting-edge business automation systems.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1965",
    primaryCta: { text: "Automate Now", link: "/services" },
    secondaryCta: { text: "See How It Works", link: "/about" }
  },
  {
    id: 3,
    subtitle: "GLOBAL MARKET REACH",
    title: "Digital Growth for",
    highlight: "Ambitious SMEs",
    description: "International-standard design and data-driven marketing campaigns that position your business as a leader in the global marketplace.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
    primaryCta: { text: "Go Global", link: "/special" },
    secondaryCta: { text: "View Packages", link: "/services" }
  }
];

const Home: React.FC = () => {
  const { services } = useWebsite();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    let interval: any;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Slider Section */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-slate-950">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
               <img 
                 src={slide.image} 
                 alt={slide.title} 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40"></div>
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="max-w-3xl pt-20">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-md mb-8 animate-fade-in-up">
                     <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                     <span className="text-slate-300 text-sm font-medium tracking-wide uppercase">{slide.subtitle}</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
                    {slide.title} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-300">
                       {slide.highlight}
                    </span>
                  </h1>
                  
                  <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-light">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                     <Link to={slide.primaryCta.link} className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-lg text-white font-bold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2 group">
                        {slide.primaryCta.text}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                     </Link>
                     <Link to={slide.secondaryCta.link} className="px-8 py-4 bg-slate-800/80 border border-slate-700 backdrop-blur-sm rounded-lg text-white font-semibold hover:bg-slate-700 transition-colors flex items-center justify-center">
                        {slide.secondaryCta.text}
                     </Link>
                  </div>
               </div>
            </div>
          </div>
        ))}

        {/* Navigation Controls */}
        <div className="absolute bottom-10 left-0 right-0 z-20 px-4">
           <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Pagination Dots */}
              <div className="flex space-x-3">
                 {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                         idx === currentSlide ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-600 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                 ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                 <button 
                   onClick={prevSlide}
                   className="p-2 rounded-full bg-slate-800/50 border border-slate-700 text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all backdrop-blur-md"
                 >
                    <ChevronLeft size={24} />
                 </button>
                 <button 
                   onClick={nextSlide}
                   className="p-2 rounded-full bg-slate-800/50 border border-slate-700 text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all backdrop-blur-md"
                 >
                    <ChevronRight size={24} />
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Features / Why Us */}
      <section className="py-24 bg-slate-950">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
               <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors group">
                  <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Bot className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AI Automation</h3>
                  <p className="text-slate-400 leading-relaxed">We integrate cutting-edge AI tools to automate your workflows, customer service, and lead generation.</p>
               </div>
               <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-colors group">
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <TrendingUp className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Growth Architecture</h3>
                  <p className="text-slate-400 leading-relaxed">Data-backed sales funnels and ad strategies designed to scale your revenue predictably.</p>
               </div>
               <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-500/50 transition-colors group">
                  <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Globe className="w-8 h-8 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Global Branding</h3>
                  <p className="text-slate-400 leading-relaxed">International-standard design and messaging that positions you as a leader in your industry.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Our Expertise</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive digital solutions tailored for ambitious SMEs.</p>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.slice(0, 4).map((service, index) => (
                 <div key={service.id} className="group relative bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition-all hover:-translate-y-2 duration-300">
                    <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl font-display font-bold text-white">
                       0{index + 1}
                    </div>
                    <div className="mb-4 text-cyan-400">
                       <Cpu size={32} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{service.description}</p>
                    <Link to="/services" className="text-indigo-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                       Learn more <ArrowRight size={14} />
                    </Link>
                 </div>
              ))}
           </div>
           
           <div className="mt-12 text-center">
              <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 rounded-lg text-white hover:bg-slate-800 transition-colors">
                 View All Services
              </Link>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900"></div>
         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Scale Your Business?</h2>
            <p className="text-lg text-indigo-200 mb-10">
               Join hundreds of SMEs transforming their digital presence with Webhouse Media.
            </p>
            <Link to="/special" className="inline-block px-10 py-5 bg-white text-indigo-900 font-bold rounded-lg hover:bg-indigo-50 transition-colors shadow-2xl">
               View Special Packages
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;