
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, TrendingUp, Cpu, Layout, Globe, Target, CheckCircle, Zap } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Revenue Scale-Up",
    category: "Paid Advertising",
    clientType: "Fashion Retailer",
    challenge: "High ad spend with low return on ad spend (ROAS) and cart abandonment.",
    solution: "Implemented AI-driven audience targeting on Meta Ads and set up dynamic retargeting funnels.",
    tools: ["Meta Ads", "Google Analytics", "Klaviyo"],
    results: ["350% Increase in ROAS", "40% Drop in Abandoned Carts"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=2070",
    icon: TrendingUp
  },
  {
    id: 2,
    title: "High-Ticket Real Estate Funnel",
    category: "Web & Funnels",
    clientType: "Real Estate Agency",
    challenge: "Generating unqualified leads that wasted sales team's time.",
    solution: "Designed a pre-qualifying landing page funnel with automated email nurturing sequences.",
    tools: ["WordPress", "Zapier", "Mailchimp"],
    results: ["50+ Qualified Leads/Mo", "$2M+ In Pipeline Value"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2073",
    icon: Layout
  },
  {
    id: 3,
    title: "Tech Startup Brand Launch",
    category: "Brand Strategy",
    clientType: "FinTech Startup",
    challenge: "Generic brand identity that failed to stand out in a crowded market.",
    solution: "Developed a comprehensive brand strategy, visual identity, and voice guidelines.",
    tools: ["Figma", "Adobe CC", "StoryBrand"],
    results: ["10k+ Waitlist Signups", "Featured in TechCrunch"],
    image: "https://images.unsplash.com/photo-1559136555-930d72f1d302?auto=format&fit=crop&q=80&w=2076",
    icon: Target
  },
  {
    id: 4,
    title: "SME Workflow Automation",
    category: "AI Automation",
    clientType: "Logistics Company",
    challenge: "Manual order processing leading to delays and errors.",
    solution: "Built a custom AI automation workflow to handle order entry and customer notifications.",
    tools: ["Python", "OpenAI API", "Twilio"],
    results: ["20 Hours Saved Weekly", "99.9% Order Accuracy"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070",
    icon: Cpu
  },
  {
    id: 5,
    title: "Restaurant Chain Digital Presence",
    category: "Web & Funnels",
    clientType: "Hospitality Group",
    challenge: "Outdated website with no online reservation capability.",
    solution: "Launched a mobile-responsive website with integrated booking and menu management.",
    tools: ["React", "Firebase", "Stripe"],
    results: ["200% Increase in Online Bookings", "15k Monthly Visitors"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070",
    icon: Globe
  },
  {
    id: 6,
    title: "Influencer Growth Campaign",
    category: "Brand Strategy",
    clientType: "Personal Brand / Coach",
    challenge: "Stagnant social media growth and low engagement.",
    solution: "Executed a content strategy focused on short-form video and community building.",
    tools: ["TikTok", "Instagram Reels", "CapCut"],
    results: ["50k New Followers in 3 Months", "5x Engagement Rate"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1974",
    icon: BarChart
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Paid Advertising", "Web & Funnels", "Brand Strategy", "AI Automation"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-slate-950 min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden border-b border-slate-800">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2148')] bg-cover bg-center opacity-10"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950"></div>
         
         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-500/20">
               <Zap size={14} /> Proven Success
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wider">
               Real Results. <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Real Growth.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
               We help brands, startups, and SMEs turn visibility into measurable growth using data-driven and AI-powered marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-lg text-white font-bold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2 group">
                  Request Strategy Session
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </Link>
               <a href="#portfolio-grid" className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white font-semibold hover:bg-slate-700 transition-colors flex items-center justify-center">
                  View Our Work
               </a>
            </div>
         </div>
      </section>

      {/* Overview & Confidentiality Note */}
      <section className="py-12 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <p className="text-slate-400 italic">
             <span className="font-bold text-indigo-400">* Note:</span> To protect client confidentiality, some project details shown below are representative case studies that demonstrate our strategic approach and capabilities.
           </p>
        </div>
      </section>

      {/* Portfolio Filter & Grid */}
      <section id="portfolio-grid" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
         {/* Filters */}
         <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map(cat => (
               <button
                 key={cat}
                 onClick={() => setFilter(cat)}
                 className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                   filter === cat 
                   ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20' 
                   : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-600 hover:text-white'
                 }`}
               >
                 {cat}
               </button>
            ))}
         </div>

         {/* Projects Grid */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
               const Icon = project.icon;
               return (
                  <div key={project.id} className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col h-full">
                     {/* Image */}
                     <div className="h-48 overflow-hidden relative">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide border border-slate-700 flex items-center gap-2">
                           <Icon size={12} className="text-cyan-400" /> {project.category}
                        </div>
                     </div>

                     {/* Content */}
                     <div className="p-6 flex-1 flex flex-col">
                        <div className="mb-4">
                           <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                           <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">{project.clientType}</span>
                        </div>

                        <div className="space-y-4 mb-6 flex-grow">
                           <div>
                              <p className="text-xs text-slate-500 uppercase font-bold mb-1">Challenge</p>
                              <p className="text-slate-400 text-sm">{project.challenge}</p>
                           </div>
                           <div>
                              <p className="text-xs text-slate-500 uppercase font-bold mb-1">Solution</p>
                              <p className="text-slate-300 text-sm font-medium">{project.solution}</p>
                           </div>
                        </div>

                        {/* Tools Used */}
                        <div className="flex flex-wrap gap-2 mb-6">
                           {project.tools.map(tool => (
                              <span key={tool} className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded border border-slate-700">
                                 {tool}
                              </span>
                           ))}
                        </div>

                        {/* Results */}
                        <div className="bg-indigo-900/20 rounded-xl p-4 border border-indigo-500/20 mb-6">
                           <p className="text-xs text-indigo-300 uppercase font-bold mb-2">Key Results</p>
                           <ul className="space-y-1">
                              {project.results.map((res, i) => (
                                 <li key={i} className="flex items-center gap-2 text-white font-bold text-sm">
                                    <CheckCircle size={14} className="text-green-400" /> {res}
                                 </li>
                              ))}
                           </ul>
                        </div>

                        <Link 
                           to="/contact" 
                           className="w-full py-3 rounded-lg border border-slate-700 text-center text-sm font-semibold text-white hover:bg-slate-800 transition-colors mt-auto"
                        >
                           Get Similar Results
                        </Link>
                     </div>
                  </div>
               );
            })}
         </div>

         {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-slate-500">
               No projects found in this category.
            </div>
         )}
      </section>

      {/* Trust Builders & Stats */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
               {[
                  { label: "Revenue Generated for Clients", value: "$5M+" },
                  { label: "Campaigns Managed", value: "500+" },
                  { label: "Global Markets Reached", value: "12+" },
                  { label: "Client Retention Rate", value: "95%" }
               ].map((stat, i) => (
                  <div key={i} className="text-center p-6 bg-slate-950 rounded-2xl border border-slate-800">
                     <p className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{stat.value}</p>
                     <p className="text-slate-400 text-sm uppercase tracking-wide">{stat.label}</p>
                  </div>
               ))}
            </div>

            <div className="bg-gradient-to-r from-indigo-900/40 to-cyan-900/40 rounded-3xl p-8 md:p-12 border border-indigo-500/20 text-center relative overflow-hidden">
               <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-indigo-500 text-white px-4 py-1.5 rounded-full font-bold text-sm mb-6 shadow-lg shadow-indigo-500/30">
                     <Cpu size={16} /> AI-Powered Advantage
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Our Clients Win</h2>
                  <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                     We don't just guess. We use advanced AI analytics and automation tools to predict market trends, optimize ad spend in real-time, and personalize customer journeys. This gives our clients an unfair advantage over competitors relying on outdated methods.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-indigo-300 font-mono">
                     <span>#PredictiveAnalytics</span> • <span>#AutomatedFunnels</span> • <span>#DataDrivenGrowth</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-indigo-900/20"></div>
         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Write Your Success Story?</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
               Join the ranks of successful businesses that have scaled with Webhouse Media. Your growth journey starts with a single conversation.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-indigo-900 font-bold rounded-full hover:bg-indigo-50 transition-colors shadow-2xl text-lg group">
               Start Your Growth Journey <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
         </div>
      </section>

    </div>
  );
};

export default Portfolio;
