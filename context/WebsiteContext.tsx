import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ServiceItem, SiteSettings } from '../types';

interface WebsiteContextType {
  settings: SiteSettings;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  services: ServiceItem[];
  isAdminMode: boolean;
  toggleAdminMode: () => void;
}

const defaultSettings: SiteSettings = {
  brandName: "WEBHOUSE MEDIA",
  logoText: "WEBHOUSE STUDIO",
  logoUrl: "", 
  primaryColor: "#6366f1",
  accentColor: "#06b6d4",
  contactEmail: "webhouselab1@gmail.com",
  contactPhone: "+234-8152469749",
  address: "LEKKI PHASE 1, LAGOS, NIGERIA",
  facebookUrl: "https://web.facebook.com/webhouselab",
  instagramUrl: "https://www.instagram.com/clementconnectmedia",
  linkedinUrl: "https://www.linkedin.com/in/oluranti-clement-7116b078/",
  youtubeUrl: "https://www.youtube.com/@webhousemedia1",
  whatsappNumber: "2348152469749",
  seoTitle: "Webhouse Media & Marketing Studio | Website, App Development & Digital Growth Agency",
  seoDescription: "Webhouse Media & Marketing Studio is a global digital agency offering website & app development, AI business automation, digital sales systems, branding, and social media management to help businesses grow and scale."
};

const defaultServices: ServiceItem[] = [
  { id: '1', title: 'Programming & App Systems', description: 'Business websites, e-commerce, web/mobile applications, and custom automation tools.', icon: 'Code', priceStart: '$2,500' },
  { id: '2', title: 'Digital Sales & Funnels', description: 'High-conversion lead generation systems and automated sales architecture.', icon: 'TrendingUp', priceStart: '$1,800' },
  { id: '3', title: 'Global Branding Systems', description: 'Premium identity design, corporate profiles, and pitch deck strategy.', icon: 'Palette', priceStart: '$3,000' },
  { id: '4', title: 'Social Visibility Systems', description: '24/7 brand management, content planning, and analytics tracking.', icon: 'Zap', priceStart: '$1,000/mo' },
];

const WebsiteContext = createContext<WebsiteContextType | undefined>(undefined);

export const WebsiteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [services, setServices] = useState<ServiceItem[]>(defaultServices);
  const [isAdminMode, setIsAdminMode] = useState(false);

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const toggleAdminMode = () => setIsAdminMode(!isAdminMode);

  return (
    <WebsiteContext.Provider value={{
      settings,
      updateSettings,
      services,
      isAdminMode,
      toggleAdminMode
    }}>
      {children}
    </WebsiteContext.Provider>
  );
};

export const useWebsite = () => {
  const context = useContext(WebsiteContext);
  if (!context) throw new Error("useWebsite must be used within a WebsiteProvider");
  return context;
};