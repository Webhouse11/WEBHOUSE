export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceStart?: string;
}

export interface SiteSettings {
  brandName: string;
  logoText: string;
  logoUrl: string;
  primaryColor: string;
  accentColor: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  youtubeUrl: string;
  whatsappNumber: string;
  seoTitle: string;
  seoDescription: string;
}

export interface NavigationItem {
  label: string;
  path: string;
}

export enum PageType {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SERVICES = 'SERVICES',
  SPECIAL = 'SPECIAL',
  BLOG = 'BLOG',
  CONTACT = 'CONTACT',
  ADMIN = 'ADMIN'
}