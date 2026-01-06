import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWebsite } from '../context/WebsiteContext';
import { Menu, X, Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { settings } = useWebsite();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { 
      label: 'Solutions', 
      isDropdown: true,
      subLinks: [
        { label: 'Growth & Strategy', path: '/solutions/growth' },
        { label: 'Digital Presence', path: '/solutions/presence' },
        { label: 'Marketing Systems', path: '/solutions/marketing' }
      ]
    },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-dark text-slate-400">
      {/* Navigation */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-500 border-b ${
        isScrolled ? 'glass border-slate-800/50 py-4' : 'bg-transparent border-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between"> 
            <Link to="/" className="flex items-center group">
               <span className="font-display font-medium text-xl tracking-tight text-white transition-opacity group-hover:opacity-80">
                 WEBHOUSE <span className="font-light text-slate-500">MEDIA</span>
               </span>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group/nav">
                  {link.isDropdown ? (
                    <>
                      <button className="flex items-center gap-1.5 text-sm font-medium hover:text-white transition-colors">
                        {link.label} <ChevronDown size={14} className="opacity-50" />
                      </button>
                      <div className="absolute top-full left-0 mt-4 w-56 opacity-0 translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-300">
                        <div className="glass border border-slate-800 rounded-xl p-2 shadow-2xl">
                          {link.subLinks?.map(sub => (
                            <Link 
                              key={sub.path} 
                              to={sub.path}
                              className="block px-4 py-2.5 rounded-lg text-sm hover:bg-slate-800 hover:text-white transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={link.path || '/'}
                      className={`text-sm font-medium transition-colors ${
                        location.pathname === link.path ? 'text-white' : 'hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link 
                to="/contact" 
                className="px-6 py-2.5 bg-white text-brand-dark text-xs font-bold rounded-full hover:bg-slate-200 transition-all uppercase tracking-widest"
              >
                Start With Clarity
              </Link>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full glass border-b border-slate-800 p-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map(link => (
              <div key={link.label}>
                {link.isDropdown ? (
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-2">{link.label}</p>
                    {link.subLinks?.map(sub => (
                      <Link key={sub.path} to={sub.path} onClick={() => setIsMenuOpen(false)} className="block py-2 text-lg text-white">{sub.label}</Link>
                    ))}
                  </div>
                ) : (
                  <Link to={link.path || '/'} onClick={() => setIsMenuOpen(false)} className="block py-2 text-lg text-white">{link.label}</Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* WhatsApp Floating Button - PRESERVED */}
      <a
        href="https://wa.link/ci28mh"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:scale-110 transition-transform p-4 rounded-full shadow-2xl"
        aria-label="Chat on WhatsApp"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>

      <footer className="bg-brand-dark border-t border-slate-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
                <div className="col-span-1 md:col-span-2 space-y-8">
                    <h3 className="font-display font-medium text-2xl text-white uppercase tracking-tight">
                      WEBHOUSE <span className="text-slate-500">MEDIA</span>
                    </h3>
                    <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                        Turning ambitious ideas into architected digital income. Strategic, thoughtful, and conversion-focused.
                    </p>
                    <div className="flex space-x-6">
                        {settings.facebookUrl && <a href={settings.facebookUrl} className="hover:text-white transition-colors"><Facebook size={20} /></a>}
                        {settings.instagramUrl && <a href={settings.instagramUrl} className="hover:text-white transition-colors"><Instagram size={20} /></a>}
                        {settings.linkedinUrl && <a href={settings.linkedinUrl} className="hover:text-white transition-colors"><Linkedin size={20} /></a>}
                    </div>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white text-xs font-bold uppercase tracking-widest">Navigation</h4>
                    <ul className="space-y-4 text-sm">
                        <li><Link to="/about" className="hover:text-white transition-colors">Philosophy</Link></li>
                        <li><Link to="/solutions/growth" className="hover:text-white transition-colors">Growth & Strategy</Link></li>
                        <li><Link to="/portfolio" className="hover:text-white transition-colors">Selected Projects</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h4 className="text-white text-xs font-bold uppercase tracking-widest">Office</h4>
                    <p className="text-sm leading-relaxed">{settings.address}</p>
                    <a href={`mailto:${settings.contactEmail}`} className="block text-sm hover:text-white transition-colors">{settings.contactEmail}</a>
                </div>
            </div>
            
            <div className="border-t border-slate-900 mt-24 pt-8 text-center text-xs text-slate-700 tracking-widest uppercase font-medium">
                &copy; {new Date().getFullYear()} {settings.brandName}. Professional integrity by design.
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;