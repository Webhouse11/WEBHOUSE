
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Lightbulb, Users, CheckCircle, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2301')] bg-cover bg-center opacity-10"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/80 to-slate-950"></div>
         
         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-wider">
               About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Webhouse Media</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
               A world-class digital marketing and business growth company committed to helping brands sell smarter, scale faster, and lead confidently.
            </p>
         </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest">
                  Who We Are
               </div>
               <h2 className="text-3xl md:text-4xl font-bold text-white">
                  We Build Digital Ecosystems That <span className="text-cyan-400">Attract, Convert, & Grow.</span>
               </h2>
               <p className="text-slate-400 leading-relaxed text-lg">
                  WEBHOUSE MEDIA AND MARKETING LTD is an innovation-driven agency built on expertise, integrity, and a deep understanding of how technology shapes today’s marketplace.
               </p>
               <p className="text-slate-400 leading-relaxed text-lg">
                  Our team consists of sales strategists, digital experts, AI specialists, automation engineers, and brand storytellers who work together to create growth systems that produce real results. We specialize in Sales Strategy, AI-Powered Digital Solutions, and SME Growth Architecture.
               </p>
               <div className="pt-4">
                  <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-slate-700 hover:border-cyan-500 text-white rounded-lg transition-colors bg-slate-900/50">
                     Start Your Transformation
                  </Link>
               </div>
            </div>
            <div className="relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl opacity-20 blur-xl"></div>
               <img 
                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
                 alt="Team working on strategy" 
                 className="relative rounded-2xl shadow-2xl border border-slate-800"
               />
            </div>
         </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 bg-slate-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
               {/* Mission */}
               <div className="p-10 rounded-3xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-colors group">
                  <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Target className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-slate-400 leading-relaxed">
                     To deliver intelligent digital solutions that empower businesses to grow sustainably, increase revenue, and operate with efficiency through the power of technology.
                  </p>
               </div>

               {/* Vision */}
               <div className="p-10 rounded-3xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-colors group">
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                     <Eye className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-slate-400 leading-relaxed">
                     To become Africa’s leading global digital growth agency—building brands, transforming businesses, and setting a new standard for marketing innovation and sales excellence.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-indigo-900/10"></div>
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold text-white mb-6">Our Philosophy</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
               We believe that the future belongs to brands that embrace technology. That is why we use AI, automation, and data-driven systems to replace manual work, reduce marketing stress, and create growth that is measurable and sustainable.
            </p>
            <blockquote className="text-3xl md:text-5xl font-bold text-white font-display border-l-4 border-cyan-500 pl-6 py-2 bg-slate-900/50 inline-block text-left mx-auto rounded-r-lg">
               "Growth should not be accidental. <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">It should be engineered.</span>"
            </blockquote>
         </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-slate-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Services</h2>
               <p className="text-slate-400">Forward-thinking solutions to maximize your revenue potential.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                  "Sales Strategy & Revenue Growth Systems",
                  "AI-Powered Digital Strategy & Automation",
                  "Digital Transformation Consulting",
                  "Email Marketing & Sales Funnel Automation",
                  "SME Growth Architecture & Brand Positioning",
                  "Full-Stack Digital Marketing",
                  "Ads Campaign Management (FB, IG, Google, TikTok)",
                  "Content Strategy & Storytelling",
                  "Lead Generation & Customer Retention Systems"
               ].map((service, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-950 rounded-lg border border-slate-800 hover:border-indigo-500 transition-colors">
                     <CheckCircle className="w-6 h-6 text-indigo-500 shrink-0" />
                     <span className="text-slate-300 font-medium">{service}</span>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Who We Serve & Why Us */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Who We Serve */}
            <div>
               <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Users className="text-cyan-400" /> Who We Serve
               </h2>
               <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
                  <p className="text-slate-400 mb-6">WEBHOUSE MEDIA AND MARKETING LTD proudly partners with:</p>
                  <ul className="space-y-4">
                     {[
                        "Small & Medium Enterprises",
                        "Schools & Educational Institutions",
                        "NGOs & Non-Profit Organizations",
                        "Churches & Faith-Based Organizations",
                        "Personal Brands, Coaches & Speakers",
                        "Corporate Teams & Professional Institutions",
                        "Startups & Entrepreneurs"
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-200">
                           <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                           {item}
                        </li>
                     ))}
                  </ul>
                  <p className="mt-8 text-indigo-300 italic">
                     Whether you need clients, visibility, automation, or digital transformation, we provide the tools and strategies to make it happen.
                  </p>
               </div>
            </div>

            {/* Why Choose Us */}
            <div>
               <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <ShieldCheck className="text-indigo-400" /> Why Choose Us
               </h2>
               <div className="space-y-6">
                  {[
                     { title: "Profit-Focused Systems", desc: "We build systems, not trial-and-error marketing." },
                     { title: "AI & Automation", desc: "We use analytics to drive predictable results." },
                     { title: "Premium Quality", desc: "Fast delivery with international standards." },
                     { title: "Full Transparency", desc: "Full support and measurable results." },
                     { title: "Market Domination", desc: "We help you stand out and scale globally." },
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
                           <span className="font-bold text-indigo-400">{i + 1}</span>
                        </div>
                        <div>
                           <h4 className="text-white font-bold text-lg">{item.title}</h4>
                           <p className="text-slate-400">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
               
               <div className="mt-10 p-6 bg-gradient-to-r from-indigo-900/50 to-slate-900 rounded-xl border border-indigo-500/30">
                  <h4 className="text-white font-bold mb-2">We are not just an agency.</h4>
                  <p className="text-cyan-300 font-display text-xl uppercase tracking-wide">
                     We are your digital growth partner.
                  </p>
               </div>
            </div>

         </div>
      </section>

      {/* Our Commitment */}
      <section className="bg-slate-900 py-20 border-t border-slate-800">
         <div className="max-w-4xl mx-auto px-4 text-center">
             <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-cyan-500/30">
                <Zap className="text-white w-8 h-8" />
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Our Commitment</h2>
             <p className="text-xl text-slate-300 mb-10 leading-relaxed">
               At WEBHOUSE MEDIA AND MARKETING LTD, we commit to delivering excellence, providing clarity, prioritizing innovation, and building long-lasting partnerships.
             </p>
             <div className="flex flex-col md:flex-row justify-center gap-8 text-lg font-bold">
                <span className="text-white">Your growth is our mission.</span>
                <span className="text-cyan-400">Your brand is our priority.</span>
                <span className="text-indigo-400">Your success is our focus.</span>
             </div>
         </div>
      </section>

    </div>
  );
};

export default About;
