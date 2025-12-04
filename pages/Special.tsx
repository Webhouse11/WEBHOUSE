
import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Smartphone, Globe, Check, Gift, ArrowRight, Zap, Trophy, Star, Medal } from 'lucide-react';

const Special: React.FC = () => {
  const packages = [
    {
      id: 1,
      tier: "🥇 SPECIAL PACKAGE 1",
      title: "DIGITAL SALES & GROWTH ENGINE",
      subtitle: "For businesses that want FAST, predictable customer growth.",
      price: "$2,500",
      note: "(Depending on business size & required automation)",
      icon: Rocket,
      color: "from-yellow-400 to-yellow-600",
      accent: "text-yellow-400",
      border: "border-yellow-500/30",
      bgHover: "hover:shadow-yellow-500/10",
      features: [
        "Complete Digital Sales Strategy",
        "Automated Lead Generation System",
        "Sales Funnel Setup",
        "Customer Follow-Up Automation",
        "CRM Setup",
        "30 Days Performance Analytics & Optimization"
      ],
      perfectFor: "SMEs, Personal Brands, Shops, Coaches, Restaurants, Real Estate, Schools."
    },
    {
      id: 2,
      tier: "🥈 SPECIAL PACKAGE 2",
      title: "PREMIUM SOCIAL MEDIA COMBO",
      subtitle: "Become visible. Build trust. Increase engagement. Grow monthly sales.",
      price: "$1,500",
      period: "Monthly",
      note: "(Price varies by number of platforms & volume of content)",
      icon: Smartphone,
      color: "from-slate-300 to-slate-500",
      accent: "text-slate-300",
      border: "border-slate-400/30",
      bgHover: "hover:shadow-slate-400/10",
      features: [
        "Monthly Content Calendar",
        "16–25 Branded Posts Monthly",
        "4–6 Motion/Video Graphics",
        "Page Optimization",
        "Community Engagement",
        "Monthly Analytics & Insights",
        "Ad Setup Support (optional)"
      ],
      perfectFor: "SMEs, Boutiques, Schools, NGOs, Restaurants, Beauty, Tech, Creators."
    },
    {
      id: 3,
      tier: "🥉 SPECIAL PACKAGE 3",
      title: "WEBSITE + LANDING PAGE SYSTEM",
      subtitle: "A complete online presence designed to convert visitors into customers.",
      price: "$3,500",
      note: "(Based on number of pages, features & customization)",
      icon: Globe,
      color: "from-amber-600 to-amber-800",
      accent: "text-amber-500",
      border: "border-amber-600/30",
      bgHover: "hover:shadow-amber-600/10",
      features: [
        "Modern, Responsive Website",
        "High-Converting Landing Page",
        "SEO Optimization",
        "Contact Forms + WhatsApp Integration",
        "Fast Hosting Setup",
        "Brand-Aligned Visual Design",
        "1 Month Support"
      ],
      perfectFor: "Startups, SMEs, Churches, NGOs, Real Estate, E-commerce, Personal Brands."
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      
      {/* Hero Header */}
      <div className="relative py-24 bg-slate-900 overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340')] bg-cover bg-center opacity-10"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950"></div>
         
         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-500/20">
               <Zap size={14} /> High Impact Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wider">
               Special <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Packages</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
               Curated growth bundles designed to accelerate your business success with speed and precision.
            </p>
         </div>
      </div>

      {/* Packages Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg) => {
               const Icon = pkg.icon;
               return (
                 <div key={pkg.id} className={`relative bg-slate-900 rounded-2xl border ${pkg.border} p-8 flex flex-col hover:scale-105 transition-transform duration-300 shadow-xl ${pkg.bgHover}`}>
                    {/* Header */}
                    <div className="text-center mb-8">
                       <div className={`inline-block mb-4 p-4 rounded-full bg-gradient-to-br ${pkg.color} bg-opacity-10 shadow-lg`}>
                          <Icon size={32} className="text-white" />
                       </div>
                       <h3 className={`text-sm font-bold tracking-widest uppercase mb-2 ${pkg.accent}`}>{pkg.tier}</h3>
                       <h2 className="text-2xl font-bold text-white mb-4 leading-tight min-h-[64px] flex items-center justify-center">{pkg.title}</h2>
                       <p className="text-slate-400 text-sm leading-relaxed">{pkg.subtitle}</p>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-8 pb-8 border-b border-slate-800">
                       <div className="text-4xl font-bold text-white mb-1">
                          {pkg.price} <span className="text-lg text-slate-500 font-normal">{pkg.period}</span>
                       </div>
                       <p className="text-xs text-slate-500 italic px-4">{pkg.note}</p>
                    </div>

                    {/* Features */}
                    <div className="flex-grow mb-8">
                       <h4 className="text-white font-bold text-sm uppercase mb-4 flex items-center gap-2">
                          <Check size={16} className="text-cyan-500" /> What's Included:
                       </h4>
                       <ul className="space-y-3">
                          {pkg.features.map((feature, i) => (
                             <li key={i} className="text-slate-300 text-sm flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0"></span>
                                {feature}
                             </li>
                          ))}
                       </ul>
                    </div>

                    {/* Perfect For */}
                    <div className="mb-8 p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                       <h4 className="text-slate-400 text-xs uppercase font-bold mb-2">Perfect For:</h4>
                       <p className="text-slate-300 text-sm leading-relaxed">{pkg.perfectFor}</p>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                       <Link 
                         to="/contact" 
                         className={`w-full block text-center py-4 rounded-lg font-bold text-white bg-gradient-to-r ${pkg.color} hover:opacity-90 transition-opacity shadow-lg`}
                       >
                         Choose Package
                       </Link>
                    </div>
                 </div>
               );
            })}
         </div>
      </section>

      {/* Bonus Offer */}
      <section className="py-16 px-4">
         <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-900 to-slate-900 rounded-3xl p-8 md:p-12 border border-indigo-500/30 shadow-2xl relative overflow-hidden text-center">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
            
            <div className="relative z-10">
               <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-1.5 rounded-full font-bold text-sm mb-6 border border-yellow-500/30 animate-pulse">
                  <Gift size={16} /> BONUS OFFER
               </div>
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  For Early Clients Only
               </h2>
               <div className="text-xl md:text-2xl text-indigo-200 mb-8 max-w-3xl mx-auto">
                  Get a <span className="text-white font-bold border-b-2 border-cyan-400">FREE Business Audit</span> + Digital Growth Recommendation Report
               </div>
               
               <div className="inline-block bg-slate-950/50 backdrop-blur border border-indigo-500/30 rounded-xl px-8 py-4 mb-10">
                  <p className="text-slate-400 text-sm uppercase tracking-wide">Value</p>
                  <p className="text-3xl font-bold text-white line-through decoration-red-500 decoration-2 opacity-70">$5,000</p>
                  <p className="text-4xl font-bold text-green-400 mt-1">FREE <span className="text-sm font-normal text-slate-300">at no cost</span></p>
               </div>

               <div>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white text-indigo-900 font-bold rounded-full hover:bg-indigo-50 transition-colors shadow-xl text-lg group">
                     Claim Your Free Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </div>
         </div>
      </section>

      {/* Bottom Text */}
      <div className="text-center pb-20 px-4">
         <p className="text-slate-500 text-sm max-w-2xl mx-auto">
            * All packages include our commitment to excellence and measurable results. Prices may vary based on specific custom requirements.
         </p>
      </div>
    </div>
  );
};

export default Special;
