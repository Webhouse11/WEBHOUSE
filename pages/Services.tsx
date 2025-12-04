
import React from 'react';
import { 
  TrendingUp, FileText, Globe, PenTool, Smartphone, Video, Palette, 
  Target, Database, Monitor, Image, MessageSquare, Mail, Briefcase, 
  Lightbulb, ArrowRight, CheckCircle 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const allServices = [
  {
    id: 1,
    title: "Digital Sales & Growth Solutions",
    description: "We help SMEs and brands increase revenue by designing smart digital sales systems that attract quality leads, convert them into paying customers, and keep them returning. Our approach combines strategy, automation, and analytics to turn your business into a predictable revenue machine.",
    icon: TrendingUp
  },
  {
    id: 2,
    title: "Marketing Plan & Detailed Structuring",
    description: "We create clear, step-by-step marketing plans customized to your business goals. This includes audience research, content strategy, sales funnels, advertising structure, and growth roadmap. You get a complete guide that tells you what to do, how to do it, when to do it, and what tools to use for maximum results.",
    icon: FileText
  },
  {
    id: 3,
    title: "Online Presence & Establishment",
    description: "We position your brand solidly across the digital space — from website to social media to search engines. You get brand consistency, clear identity, and strong visibility that helps customers trust and recognize your business anywhere online.",
    icon: Globe
  },
  {
    id: 4,
    title: "Content Publishing & Management",
    description: "We plan, create, schedule, and manage your content across platforms. This includes posts, videos, graphics, blogs, captions, and storytelling that keep your audience engaged, informed, and loyal to your brand.",
    icon: PenTool
  },
  {
    id: 5,
    title: "Social Media Management Combo",
    description: "We fully manage your social media pages with professionalism — content design, posting, community engagement, ad setup, analytics, and growth systems. This ensures your brand stays active, relevant, and profitable across all platforms.",
    icon: Smartphone
  },
  {
    id: 6,
    title: "Visual Motion & Manipulation Studio",
    description: "We produce high-quality motion graphics, video ads, animated explainers, brand intros, transitions, and engaging visual effects. These visuals help your business capture attention, communicate faster, and convert better.",
    icon: Video
  },
  {
    id: 7,
    title: "Graphic Branding Combo",
    description: "We build complete brand identity systems — logo design, color palette, typography, brand guide, and corporate design assets. Your business gains a premium, consistent visual presence that builds trust and recognition.",
    icon: Palette
  },
  {
    id: 8,
    title: "Ads Management & Campaign Optimization",
    description: "We run targeted advertising campaigns on Facebook, Instagram, Google, LinkedIn, and YouTube. Our service includes planning, setup, audience targeting, optimization, retargeting, and ROI tracking to ensure every dollar produces results.",
    icon: Target
  },
  {
    id: 9,
    title: "SaaS Development Solutions",
    description: "We design and develop practical mini-software and tools tailored for small businesses — CRM systems, booking systems, invoicing tools, automation dashboards, school portals, NGO management tools, and more.",
    icon: Database
  },
  {
    id: 10,
    title: "Website Development & Landing Page Systems",
    description: "We build modern, responsive websites and conversion-focused landing pages that help businesses acquire customers, showcase their brand, and run digital operations efficiently.",
    icon: Monitor
  },
  {
    id: 11,
    title: "Visual Design & Branding Assets",
    description: "We create premium visual assets such as flyers, posters, banners, social templates, product designs, mockups, UI assets, and digital promotional materials that elevate your brand image.",
    icon: Image
  },
  {
    id: 12,
    title: "Content Strategy & Brand Storytelling",
    description: "We help brands develop their voice, message, and content direction. Our storytelling approach builds emotional connection, loyalty, and engagement — making your brand memorable and respected.",
    icon: MessageSquare
  },
  {
    id: 13,
    title: "Email Marketing & Automation Setup",
    description: "We set up automated email systems that nurture leads, onboard customers, maintain communication, and drive sales. This includes newsletters, segmentation, drip sequences, and CRM integration.",
    icon: Mail
  },
  {
    id: 14,
    title: "Business Growth Consulting",
    description: "We work with business owners one-on-one to diagnose challenges, structure operations, improve marketing, and build sustainable growth systems. You get clarity, strategy, and direction for scaling.",
    icon: Briefcase
  },
  {
    id: 15,
    title: "SaaS Advisory & Digital Product Strategy",
    description: "We help entrepreneurs conceptualize, design, validate, and scale profitable SaaS and digital products. From idea to launch to growth, we guide you through every step of building a successful digital solution.",
    icon: Lightbulb
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero Header */}
      <div className="relative py-20 bg-slate-900 overflow-hidden border-b border-slate-800">
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
             <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[100px]"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
               Comprehensive digital solutions designed to position your brand at the top of your industry. From strategy to execution, we cover it all.
            </p>
         </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {allServices.map((service, index) => {
             const Icon = service.icon;
             return (
               <div key={service.id} className="group relative bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                  
                  {/* Number Badge */}
                  <div className="absolute top-6 right-6 text-5xl font-display font-bold text-slate-800/50 group-hover:text-slate-800 transition-colors select-none">
                     {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-indigo-500/50 transition-all shadow-lg">
                     <Icon className="w-7 h-7 text-cyan-400 group-hover:text-indigo-400 transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 pr-8 leading-tight group-hover:text-cyan-400 transition-colors">
                     {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                     {service.description}
                  </p>

                  {/* CTA */}
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-indigo-400 text-sm font-semibold group-hover:gap-3 transition-all mt-auto"
                  >
                    Get Started <ArrowRight size={16} />
                  </Link>
               </div>
             );
           })}
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
               Not sure which service is right for you? We offer tailored consulting to define exactly what your business needs to grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/contact" className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-lg font-bold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all">
                  Book a Consultation
               </Link>
               <a href="tel:+1234567890" className="px-8 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg font-medium hover:bg-slate-700 transition-colors">
                  Talk to Sales
               </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Services;
    