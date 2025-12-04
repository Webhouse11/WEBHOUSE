import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWebsite } from '../context/WebsiteContext';
import { Menu, X, Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { settings, isAdminMode, toggleAdminMode } = useWebsite();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Special Package', path: '/special' },
    { label: 'Blog', path: 'https://webhousemedia.blogspot.com/' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-900 text-slate-100 overflow-x-hidden">
      {/* Sticky Admin Toggle */}
      <div className="fixed top-28 right-4 z-50">
         <button 
           onClick={toggleAdminMode}
           className="bg-red-600/80 hover:bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-lg backdrop-blur-sm transition-colors"
         >
            {isAdminMode ? 'Exit Admin' : 'Admin Login'}
         </button>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-slate-900/90 border-b border-slate-800 shadow-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20"> 
            {/* Logo Section - Text Only */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2 group">
                 <span className="font-display font-bold text-2xl md:text-3xl tracking-wider text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all duration-300 uppercase">
                   WEBHOUSE MEDIA
                 </span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => {
                  const isExternal = link.path.startsWith('http');
                  return isExternal ? (
                    <a
                      key={link.path}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 text-slate-300 hover:text-white hover:bg-slate-800/50"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                        location.pathname === link.path
                          ? 'text-cyan-400 bg-slate-800 shadow-md shadow-cyan-900/20'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none transition-colors"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-slide-down">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                const isExternal = link.path.startsWith('http');
                return isExternal ? (
                  <a
                    key={link.path}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* WhatsApp Widget */}
      <a
        href="https://wa.link/ci28mh"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-white/10"
        aria-label="Chat on WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand Info */}
                <div className="space-y-6">
                    <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                      WEBHOUSE MEDIA
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                        Architecture for Digital Growth. We combine AI strategy with human creativity to scale SMEs globally.
                    </p>
                    <div className="flex space-x-4 pt-2">
                        {settings.facebookUrl && <a href={settings.facebookUrl} className="text-slate-400 hover:text-blue-500 transition-colors"><Facebook size={24} /></a>}
                        {settings.instagramUrl && <a href={settings.instagramUrl} className="text-slate-400 hover:text-pink-500 transition-colors"><Instagram size={24} /></a>}
                        {settings.linkedinUrl && <a href={settings.linkedinUrl} className="text-slate-400 hover:text-blue-700 transition-colors"><Linkedin size={24} /></a>}
                        {settings.youtubeUrl && <a href={settings.youtubeUrl} className="text-slate-400 hover:text-red-500 transition-colors"><Youtube size={24} /></a>}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="pt-4">
                    <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b border-cyan-900/50 pb-2 inline-block">Company</h4>
                    <ul className="space-y-3">
                        <li><Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full"></span> About Us</Link></li>
                        <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full"></span> Services</Link></li>
                        <li>
                            <a href="https://webhousemedia.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2">
                                <span className="w-1 h-1 bg-cyan-500 rounded-full"></span> Insights
                            </a>
                        </li>
                        <li><Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2"><span className="w-1 h-1 bg-cyan-500 rounded-full"></span> Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="pt-4">
                    <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b border-cyan-900/50 pb-2 inline-block">Contact</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-slate-400 text-sm">
                            <MapPin className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                            <span className="leading-relaxed font-medium text-slate-300">{settings.address}</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-400 text-sm">
                            <Mail className="w-5 h-5 text-cyan-500 shrink-0" />
                            <a href={`mailto:${settings.contactEmail}`} className="hover:text-white transition-colors">{settings.contactEmail}</a>
                        </li>
                        <li className="flex items-center gap-3 text-slate-400 text-sm">
                            <Phone className="w-5 h-5 text-cyan-500 shrink-0" />
                            <a 
                                href="https://wa.link/ci28mh" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="hover:text-white transition-colors"
                            >
                                {settings.contactPhone}
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="pt-4">
                    <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm border-b border-cyan-900/50 pb-2 inline-block">Newsletter</h4>
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">Subscribe to get the latest AI marketing trends directly to your inbox.</p>
                    <form className="flex flex-col gap-3">
                        <input type="email" placeholder="Email Address" className="bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-sm" />
                        <button type="button" className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-lg shadow-indigo-500/20">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            
            <div className="border-t border-slate-900 mt-16 pt-8 text-center text-slate-600 text-sm">
                &copy; {new Date().getFullYear()} {settings.brandName}. All rights reserved.
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;