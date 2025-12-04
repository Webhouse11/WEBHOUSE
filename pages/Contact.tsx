
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, Youtube, Linkedin, ExternalLink } from 'lucide-react';
import { useWebsite } from '../context/WebsiteContext';

const Contact: React.FC = () => {
  const { settings } = useWebsite();

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: settings.facebookUrl, 
      color: 'bg-[#1877F2]', 
      hover: 'hover:bg-[#166fe5]',
      desc: 'Follow our updates'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: settings.instagramUrl, 
      color: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]', 
      hover: 'hover:opacity-90',
      desc: 'See our creative portfolio'
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      url: settings.youtubeUrl, 
      color: 'bg-[#FF0000]', 
      hover: 'hover:bg-[#e60000]',
      desc: 'Watch our tutorials'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: settings.linkedinUrl, 
      color: 'bg-[#0077b5]', 
      hover: 'hover:bg-[#006da5]',
      desc: 'Connect professionally'
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=2071')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Touch</span>
           </h1>
           <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your digital presence? We are here to help you scale.
           </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Contact Info Card */}
          <div className="bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-800 shadow-xl mb-12">
            <h2 className="text-2xl font-bold text-white mb-10 text-center border-b border-slate-800 pb-6">Contact Details</h2>
            <div className="grid md:grid-cols-2 gap-10">
                <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                        <MapPin className="text-indigo-400 w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">Our Location</h3>
                        <p className="text-slate-400 leading-relaxed uppercase">{settings.address}</p>
                    </div>
                </div>

                <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                        <Mail className="text-cyan-400 w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">Email Us</h3>
                        <a href={`mailto:${settings.contactEmail}`} className="text-slate-400 hover:text-cyan-400 transition-colors block break-all">
                        {settings.contactEmail}
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0">
                        <Phone className="text-teal-400 w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                        <a 
                            href="https://wa.link/ci28mh" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-cyan-400 transition-colors block"
                        >
                        {settings.contactPhone}
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-slate-800/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                        <MessageCircle className="text-green-400 w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">WhatsApp Chat</h3>
                        <a 
                        href="https://wa.link/ci28mh" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-green-400 transition-colors block"
                        >
                        Click to Chat
                        </a>
                    </div>
                </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="bg-slate-900 p-8 md:p-12 rounded-2xl border border-slate-800 shadow-xl mb-12">
            <h2 className="text-2xl font-bold text-white mb-10 text-center border-b border-slate-800 pb-6">Connect on Social Media</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {socialLinks.map((social) => {
                 const Icon = social.icon;
                 return (
                   <a 
                     key={social.name}
                     href={social.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className={`group relative p-6 rounded-xl border border-slate-700 hover:border-transparent transition-all duration-300 flex flex-col items-center text-center overflow-hidden`}
                   >
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 ${social.color} transition-opacity duration-300`}></div>
                      <div className={`w-14 h-14 rounded-full ${social.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                         <Icon size={24} />
                      </div>
                      <h3 className="text-white font-bold mb-1">{social.name}</h3>
                      <p className="text-slate-400 text-xs mb-3">{social.desc}</p>
                      <span className="text-indigo-400 text-xs flex items-center gap-1 group-hover:text-white transition-colors">
                        Visit Page <ExternalLink size={10} />
                      </span>
                   </a>
                 );
               })}
            </div>
          </div>

          {/* Map */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 h-96 overflow-hidden relative group shadow-2xl">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6469446215865!2d3.4566318742337777!3d6.439366724137357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf50b91275997%3A0x6339945037d25e0e!2sLekki%20Phase%201%2C%20Lekki%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1709503485603!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
            ></iframe>
          </div>

      </section>
    </div>
  );
};

export default Contact;
