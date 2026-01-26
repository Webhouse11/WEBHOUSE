import React from 'react';
import { 
  Shield, 
  Cpu, 
  Layers, 
  Zap, 
  Database, 
  Smartphone, 
  BarChart3, 
  MessageCircle, 
  ArrowUpRight, 
  CheckCircle2, 
  Globe, 
  Lock, 
  TrendingUp, 
  Mail,
  Users,
  CreditCard,
  CalendarCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP_MESSAGE = `👋 Hello Webhouse Team! I'm a CEO/Founder interested in your Executive SaaS & Application development packages. I'd like to discuss a custom project.`;
const WHATSAPP_URL = `https://wa.me/2348152469749?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const EMAIL_LINK = "mailto:webhouselab1@gmail.com?subject=Executive SaaS Inquiry - CEO Strategic Interest";

const SaaSPackages: React.FC = () => {
  const appTypes = [
    { title: "SaaS Platforms (B2B & B2C)", icon: Layers, desc: "Scalable multi-tenant architectures built for global subscription models and high user retention." },
    { title: "Internal Business Systems", icon: Cpu, desc: "Custom software ecosystems designed to streamline complex internal operations and logistics." },
    { title: "CRM & ERP Solutions", icon: Database, desc: "Centralized data engines built for enterprise-level resource management and relationship tracking." },
    { title: "Fintech & Subscription Apps", icon: CreditCard, desc: "Secure financial transaction systems with automated billing and multi-currency support." },
    { title: "Booking & Marketplace Platforms", icon: Globe, desc: "High-traffic multi-vendor environments with real-time synchronization and secure escrow." },
    { title: "AI-Powered Business Tools", icon: Zap, desc: "Integrating Large Language Models (LLMs) and predictive analytics into your core product." },
    { title: "Admin Dashboards & Analytics", icon: BarChart3, desc: "Sophisticated data visualization systems designed for informed executive decision making." }
  ];

  const packages = [
    {
      id: "startup-mvp",
      tier: "Package 1",
      title: "Startup SaaS MVP",
      price: "$1,250 – $2,000",
      features: [
        "Core SaaS application architecture",
        "User authentication & authorization",
        "Executive Admin Dashboard",
        "Scalable Cloud Backend",
        "30 Days Post-launch Support",
        "Third-party API Integration"
      ],
      color: "border-indigo-500/30",
      bg: "bg-indigo-500/5",
      icon: Zap
    },
    {
      id: "business-system",
      tier: "Package 2",
      title: "Business SaaS System",
      price: "$3,000 – $5,000",
      features: [
        "Full SaaS multi-tenant architecture",
        "Subscription & Payment System",
        "Advanced Admin Panel (Multi-Level)",
        "Deep API Integrations",
        "Security & Performance Optimization",
        "Database Scaling & Load Balancing"
      ],
      color: "border-cyan-500/30",
      bg: "bg-cyan-500/5",
      popular: true,
      icon: TrendingUp
    },
    {
      id: "enterprise-ceo",
      tier: "Package 3",
      title: "Enterprise & CEO Solution",
      price: "$7,500+",
      features: [
        "Custom Enterprise-grade Application",
        "Proprietary AI Workflows & Automation",
        "Multi-role Hierarchical Dashboards",
        "Real-time Advanced Data Analytics",
        "Dedicated Project Consultation",
        "Priority 24/7 Strategic Support"
      ],
      color: "border-brand-accent/30",
      bg: "bg-brand-accent/5",
      icon: Shield
    }
  ];

  const portfolioSamples = [
    {
      title: "LMS Enterprise Architecture",
      desc: "Designed for a global corporate training firm, featuring automated certification and user-behavior analytics.",
      tags: ["Education", "Scale", "Automation"],
      metric: "50k+ Active Users"
    },
    {
      title: "Secure FinTech Settlement Core",
      desc: "A custom cross-border payment portal with real-time fraud detection and automated treasury management.",
      tags: ["FinTech", "Security", "Real-time"],
      metric: "99.9% Up-time"
    },
    {
      title: "Predictive Logistics Hub",
      desc: "Custom SaaS for fleet management with AI-driven route optimization and automated dispatch systems.",
      tags: ["AI", "Logistics", "SaaS"],
      metric: "20% Efficiency Gain"
    }
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-slate-300">
      {/* 1. Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5 grid-pattern">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[160px] pointer-events-none animate-pulse-soft"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-10">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-brand-accent/20 bg-brand-accent/5 backdrop-blur-md">
              <Shield className="w-4 h-4 text-brand-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">The Technology Partner for Modern CEOs</span>
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-display font-bold text-white leading-[0.9] tracking-tighter max-w-6xl">
              Architecting <span className="text-gradient">Scalable SaaS</span> & Enterprise Systems.
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 max-w-4xl mx-auto leading-relaxed font-light">
              We engineer custom applications that replace manual overhead with automated precision. Built for founders who value structural integrity and business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <a href={WHATSAPP_URL} target="_blank" className="group px-12 py-6 bg-white text-brand-dark font-black text-sm rounded-full hover:bg-slate-200 transition-all flex items-center justify-center gap-4 uppercase tracking-widest shadow-2xl">
                Discuss Your SaaS Idea
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#packages" className="px-12 py-6 border border-white/10 text-white font-black text-sm rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-4 uppercase tracking-widest backdrop-blur-sm">
                View Application Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Types of Applications We Build */}
      <section className="py-40 bg-brand-dark px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-accent">Custom Software Capabilities</span>
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white tracking-tight">Enterprise Infrastructure <br/><span className="italic text-slate-500">Built for Growth.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appTypes.map((app, i) => (
              <div key={i} className="bento-card rounded-[40px] p-12 border-white/5 hover:border-brand-accent/20 group transition-all">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-accent/10 transition-colors">
                  <app.icon className="text-brand-accent" size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4">{app.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Special SaaS Packages */}
      <section id="packages" className="py-40 bg-brand-surface border-y border-white/5 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">Transparent Scaling Tiers</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter">SaaS & Application Packages.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`relative flex flex-col p-12 rounded-[48px] border ${pkg.color} ${pkg.bg} backdrop-blur-sm transition-transform hover:scale-[1.02] duration-500`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-brand-accent text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    Recommended Strategy
                  </div>
                )}
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{pkg.tier}</span>
                    <pkg.icon className="text-brand-accent/40" size={24} />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-6 tracking-tight">{pkg.title}</h3>
                  <div className="text-4xl font-display font-bold text-white mb-2">{pkg.price}</div>
                  <p className="text-slate-500 text-xs font-light italic">Comprehensive architectural project fee</p>
                </div>
                <ul className="space-y-6 flex-grow mb-12">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm text-slate-400 font-light leading-snug">
                      <CheckCircle2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="space-y-4">
                  <a href={WHATSAPP_URL} target="_blank" className="w-full flex items-center justify-center gap-3 py-5 bg-white text-brand-dark font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-slate-200 transition-all">
                    Inquire via WhatsApp <MessageCircle size={16} />
                  </a>
                  <a href={EMAIL_LINK} className="w-full flex items-center justify-center gap-3 py-5 border border-white/10 text-white font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-white/5 transition-all">
                    Request Proposal Email <Mail size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Portfolio Showcase */}
      <section className="py-40 bg-brand-dark px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">Business Impact</span>
              <h2 className="text-4xl md:text-7xl font-display font-bold text-white tracking-tight">Recent Deployments.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioSamples.map((sample, i) => (
              <div key={i} className="bento-card rounded-[40px] p-10 space-y-8 flex flex-col border-white/5 group">
                <div className="flex justify-between items-start">
                   <div className="flex gap-2">
                      {sample.tags.map(tag => (
                        <span key={tag} className="text-[8px] font-bold text-slate-500 uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/5 rounded-full">{tag}</span>
                      ))}
                   </div>
                   <div className="text-brand-accent font-display font-bold text-sm tracking-tighter">
                      {sample.metric}
                   </div>
                </div>
                <h4 className="text-2xl font-display font-bold text-white">{sample.title}</h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed flex-grow">{sample.desc}</p>
                <div className="pt-6 border-t border-white/5">
                   <Link to="/portfolio" className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                     View Architecture Blueprint <ArrowUpRight size={14} className="text-brand-accent" />
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why CEOs Choose Webhouse */}
      <section className="py-40 bg-brand-surface px-6 lg:px-12 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-12">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-500">The Partnership Advantage</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter">Why CEOs Choose <span className="text-gradient italic">Webhouse Media.</span></h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { title: "Business-First Dev", icon: TrendingUp, text: "We align code with revenue goals. We build products that sell, not just apps that exist." },
                { title: "Strict Confidentiality", icon: Lock, text: "Your IP is secure. We operate with high-level professional discretion and robust NDAs." },
                { title: "Scalable Architecture", icon: Layers, text: "Systems designed to handle 100k+ concurrent users from day one. No legacy debt." },
                { title: "Global Delivery", icon: Globe, text: "A technology partner with an international perspective, serving clients across 20+ countries." }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center gap-3 text-brand-accent font-bold text-xs uppercase tracking-widest">
                    <item.icon size={16} /> {item.title}
                  </div>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="absolute inset-0 bg-brand-accent/5 rounded-[64px] blur-3xl"></div>
             <div className="relative p-16 bg-slate-900/40 border border-slate-800 rounded-[64px] space-y-12 shadow-2xl">
                <blockquote className="text-2xl md:text-3xl text-white font-display font-light italic leading-relaxed">
                  "Webhouse Media bridges the gap between high-level business strategy and technical execution. They don't just write code; they build growth infrastructure."
                </blockquote>
                <div className="flex items-center gap-5">
                   <div className="w-16 h-16 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center">
                      <Users className="text-brand-accent" size={32} />
                   </div>
                   <div>
                      <div className="text-white font-bold text-lg">Clement Oluranti</div>
                      <div className="text-brand-accent text-[10px] font-black uppercase tracking-widest">Principal Architect</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Section */}
      <section className="py-48 relative px-6 lg:px-12 text-center bg-brand-dark">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-20">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter leading-[0.85]">
              Let's Engineer Your <br />
              <span className="text-gradient italic">Growth Engine.</span>
            </h2>
            <p className="text-xl md:text-3xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
              We focus on building a partnership, not just a software product. Your success is our primary architectural metric.
            </p>
          </div>
          
          <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-10">
            <a href={WHATSAPP_URL} target="_blank" className="group inline-flex items-center gap-6 px-16 py-8 bg-[#25D366] text-white font-black rounded-full hover:scale-105 transition-all uppercase tracking-widest text-sm shadow-2xl">
              Partner on WhatsApp
              <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <div className="flex flex-col items-center sm:items-start text-left">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Executive Strategy Access</span>
              <a href={EMAIL_LINK} className="text-xl md:text-2xl text-white font-bold hover:text-brand-accent transition-colors flex items-center gap-3">
                webhouselab1@gmail.com <ArrowUpRight size={20} className="text-brand-accent" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaaSPackages;