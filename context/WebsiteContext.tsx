import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BlogPost, ServiceItem, SiteSettings } from '../types';

interface WebsiteContextType {
  settings: SiteSettings;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  blogPosts: BlogPost[];
  addBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (id: string) => void;
  services: ServiceItem[];
  isAdminMode: boolean;
  toggleAdminMode: () => void;
}

const defaultSettings: SiteSettings = {
  brandName: "WEBHOUSE MEDIA",
  logoText: "WEBHOUSE MEDIA",
  logoUrl: "", 
  primaryColor: "#6366f1", // Indigo 500
  accentColor: "#06b6d4", // Cyan 500
  contactEmail: "webhouselab1@gmail.com",
  contactPhone: "+234-8152469749",
  address: "LEKKI PHASE 1, LAGOS, NIGERIA",
  facebookUrl: "https://web.facebook.com/webhouselab",
  instagramUrl: "https://www.instagram.com/clementconnectmedia?igsh=enAwY2NuYXJhOWQ2&fbclid=IwY2xjawOeNvBleHRuA2FlbQIxMABicmlkETE5ZTg4RWd2dkgzUGZQUFh4c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHhP1yF6SeSCYG44Z0Z574U8y4hkWlIfF7kFeOGJ10n0jzLeddLcOBJwBeyjY_aem_nfK9ihNRofc0uRvmGJUtoQ",
  linkedinUrl: "https://www.linkedin.com/in/oluranti-clement-7116b078/?originalSubdomain=ng",
  youtubeUrl: "https://www.youtube.com/@webhousemedia1",
  whatsappNumber: "2348152469749",
  seoTitle: "WEBHOUSE | Global AI Digital Marketing Agency",
  seoDescription: "Leading AI-powered digital strategy, automation, and sales growth architecture for SMEs worldwide."
};

const defaultServices: ServiceItem[] = [
  { id: '1', title: 'AI-Powered Strategy', description: 'Data-driven blueprints for scalable growth.', icon: 'Cpu', priceStart: '$2,500' },
  { id: '2', title: 'Business Automation', description: 'Streamline workflows with intelligent bots and CRM integrations.', icon: 'Bot', priceStart: '$1,800' },
  { id: '3', title: 'Sales Funnel Dev', description: 'High-conversion landing pages and automated email sequences.', icon: 'Filter', priceStart: '$3,000' },
  { id: '4', title: 'Digital Ads Management', description: 'ROI-focused campaigns on FB, IG, and Google.', icon: 'BarChart', priceStart: '$1,000/mo' },
];

const defaultPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of SME Marketing is AI',
    excerpt: 'How artificial intelligence is leveling the playing field for small businesses.',
    content: '<p>Artificial intelligence is no longer just for enterprise giants. SMEs can now leverage predictive analytics...</p>',
    author: 'Webhouse Team',
    date: '2023-10-15',
    category: 'Strategy',
    imageUrl: 'https://picsum.photos/seed/ai/800/400',
    tags: ['AI', 'Marketing', 'Growth']
  },
  {
    id: '2',
    title: '5 Automation Tools You Need',
    excerpt: 'Stop wasting time on manual tasks. Here are the top tools to automate your workflow.',
    content: '<p>From Zapier to custom Python scripts, automation is the key to scaling your agency...</p>',
    author: 'Webhouse Team',
    date: '2023-10-20',
    category: 'Tech',
    imageUrl: 'https://picsum.photos/seed/tech/800/400',
    tags: ['Automation', 'Tools']
  }
];

const WebsiteContext = createContext<WebsiteContextType | undefined>(undefined);

export const WebsiteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(defaultPosts);
  const [services, setServices] = useState<ServiceItem[]>(defaultServices);
  const [isAdminMode, setIsAdminMode] = useState(false);

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const addBlogPost = (post: BlogPost) => {
    setBlogPosts(prev => [post, ...prev]);
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(p => p.id !== id));
  };

  const toggleAdminMode = () => setIsAdminMode(!isAdminMode);

  return (
    <WebsiteContext.Provider value={{
      settings,
      updateSettings,
      blogPosts,
      addBlogPost,
      deleteBlogPost,
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