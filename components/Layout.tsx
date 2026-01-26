import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWebsite } from '../context/WebsiteContext';
import { Menu, X, Facebook, Instagram, Linkedin, Youtube, Phone, ChevronDown, Zap, Globe, ArrowUpRight } from 'lucide-react';

const WHATSAPP_MESSAGE = `👋 Hello! Welcome to Webhouse Media & Marketing Studio.
Thank you for reaching out. We’re excited to help you build, automate, and grow your business digitally.
To help us serve you faster, please tell us:
1️⃣ Are you interested in Website & App Development?
2️⃣ Digital Sales & Marketing Systems?
3️⃣ Graphic & Business Branding?
4️⃣ Social Media Management?
5️⃣ Or Other Inquiries?
📌 One of our team members will get back to you within a few minutes.
While you wait, you can also check our services here: 🚀 https://webhousemedia.vercel.app/
Thank you for choosing Webhouse Media & Marketing Studio – where ideas become systems, and systems become results!`;

const WHATSAPP_URL = `https://wa.me/2348152469749?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { settings } = useWebsite();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Systems', path: '/services' },
    { label: 'Business Software', path: '/services/saas-packages' },
    { label: 'Philosophy', path: '/about' },
    { label: 'Cases', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-dark">
      {/* Navigation */}
      <nav className={`fixed top-0 z-[60] w-full transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className={`flex items-center justify-between p-4 rounded-full transition-all duration-500 border border-white/5 ${
            isScrolled ? 'glass shadow-2xl shadow-black/40' : 'bg-transparent border-transparent'
          }`}>
            <Link to="/" className="flex items-center group ml-2">
               <span className="font-display font-bold text-xl tracking-tighter text-white">
                 WEBHOUSE <span className="font-light text-slate-500 uppercase text-[8px] tracking-[0.4em] ml-2">Studio</span>
               </span>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-[10px] uppercase font-black tracking-[0.2em] transition-colors ${
                    location.pathname === link.path ? 'text-indigo-400' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="px-6 py-2.5 bg-white text-brand-dark text-[10px] font-bold rounded-full hover:bg-slate-200 transition-all uppercase tracking-widest flex items-center gap-2"
              >
                Project Inquiry <ArrowUpRight size={14} />
              </Link>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white mr-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[70] bg-brand-dark/95 backdrop-blur-xl animate-in fade-in duration-300">
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-between items-center mb-16">
                 <span className="font-display font-bold text-xl text-white">WEBHOUSE</span>
                 <button onClick={() => setIsMenuOpen(false)} className="text-white"><X size={32} /></button>
              </div>
              <div className="flex flex-col space-y-8">
                {navLinks.map(link => (
                  <Link 
                    key={link.label} 
                    to={link.path} 
                    onClick={() => setIsMenuOpen(false)} 
                    className="text-4xl font-display font-bold text-white hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-auto py-12 border-t border-white/5 space-y-6">
                 <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">New Business</p>
                 <a href={`mailto:${settings.contactEmail}`} className="text-xl text-white font-medium">{settings.contactEmail}</a>
                 <div className="flex gap-6 pt-4">
                    <a href={settings.instagramUrl} className="text-slate-500 hover:text-white"><Instagram size={20} /></a>
                    <a href={settings.linkedinUrl} className="text-slate-500 hover:text-white"><Linkedin size={20} /></a>
                    <a href={WHATSAPP_URL} className="text-slate-500 hover:text-white"><Zap size={20} /></a>
                 </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-white/5 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
                <div className="md:col-span-5 space-y-10">
                    <Link to="/" className="inline-block">
                        <h3 className="font-display font-bold text-3xl text-white tracking-tighter">
                          WEBHOUSE <span className="text-slate-600 uppercase text-[12px] tracking-[0.5em] ml-3">Studio</span>
                        </h3>
                    </Link>
                    <p className="text-slate-500 text-xl leading-relaxed font-light">
                        Engineering ambitious digital systems and global growth architectures for high-performance brands.
                    </p>
                    <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mb-2">Global Presence</p>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          Webhouse Media & Marketing Studio serves clients globally, including Nigeria, United States, United Kingdom, Canada, Germany, United Arab Emirates, South Africa, and Australia.
                        </p>
                    </div>
                    <div className="flex space-x-8">
                        {settings.facebookUrl && <a href={settings.facebookUrl} target="_blank" className="text-slate-700 hover:text-white transition-colors"><Facebook size={20} /></a>}
                        {settings.instagramUrl && <a href={settings.instagramUrl} target="_blank" className="text-slate-700 hover:text-white transition-colors"><Instagram size={20} /></a>}
                        {settings.linkedinUrl && <a href={settings.linkedinUrl} target="_blank" className="text-slate-700 hover:text-white transition-colors"><Linkedin size={20} /></a>}
                        {settings.youtubeUrl && <a href={settings.youtubeUrl} target="_blank" className="text-slate-700 hover:text-white transition-colors"><Youtube size={20} /></a>}
                    </div>
                </div>

                <div className="md:col-span-3 space-y-10">
                    <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Growth Pillars</h4>
                    <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                        <li><Link to="/services/saas-packages" className="hover:text-brand-accent transition-colors">Business Software</Link></li>
                        <li><Link to="/services/programming-ai" className="hover:text-indigo-400 transition-colors">Programming & AI</Link></li>
                        <li><Link to="/services/digital-sales" className="hover:text-indigo-400 transition-colors">Sales Funnels</Link></li>
                        <li><Link to="/services/storytelling" className="hover:text-rose-400 transition-colors">Storytelling</Link></li>
                        <li><Link to="/services/branding" className="hover:text-indigo-400 transition-colors">Branding Design</Link></li>
                        <li><Link to="/services/social-media" className="hover:text-indigo-400 transition-colors">Social Influence</Link></li>
                    </ul>
                </div>

                <div className="md:col-span-4 space-y-10">
                    <h4 className="text-white text-[10px] font-black uppercase tracking-[0.4em]">Inquiries</h4>
                    <div className="space-y-6">
                      <div className="space-y-1">
                        <p className="text-[9px] uppercase tracking-widest text-slate-600 font-black">Global HQ</p>
                        <p className="text-sm text-slate-500 leading-relaxed uppercase">{settings.address}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[9px] uppercase tracking-widest text-slate-600 font-black">Direct Access</p>
                        <a href={`mailto:${settings.contactEmail}`} className="text-sm text-white hover:text-indigo-400 transition-colors">{settings.contactEmail}</a>
                      </div>
                      <div className="pt-4">
                        <a href={WHATSAPP_URL} target="_blank" className="group inline-flex items-center gap-3 px-6 py-3 border border-white/5 rounded-full hover:bg-white/5 transition-all text-[10px] font-black uppercase tracking-widest text-white">
                           WhatsApp Strategy <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-white/5 mt-32 pt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] text-slate-700 tracking-[0.4em] uppercase font-black">
                <div>&copy; {new Date().getFullYear()} {settings.brandName} STUDIO — ENGINEERED FOR GROWTH</div>
                <div className="flex gap-10">
                  <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Architecture</span>
                  <span className="hover:text-slate-400 cursor-pointer transition-colors">Legal Terms</span>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;