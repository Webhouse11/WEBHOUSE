import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { WebsiteProvider, useWebsite } from './context/WebsiteContext';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import ProgrammingAI from './pages/ProgrammingAI';
import DigitalSales from './pages/DigitalSales';
import BrandingSystems from './pages/BrandingSystems';
import SocialMediaSystems from './pages/SocialMediaSystems';
import AuthorStorytelling from './pages/AuthorStorytelling';
import Services from './pages/Services';

// Admin Pages
import { AdminDashboardHome, AdminSettings } from './pages/AdminDashboard';

const AppRoutes: React.FC = () => {
  const { isAdminMode } = useWebsite();

  if (isAdminMode) {
    return (
      <AdminLayout>
        <Routes>
          <Route path="/admin" element={<AdminDashboardHome />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </AdminLayout>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/programming-ai" element={<ProgrammingAI />} />
        <Route path="/services/digital-sales" element={<DigitalSales />} />
        <Route path="/services/branding" element={<BrandingSystems />} />
        <Route path="/services/social-media" element={<SocialMediaSystems />} />
        <Route path="/services/storytelling" element={<AuthorStorytelling />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/*" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <WebsiteProvider>
      <Router>
        <AppRoutes />
      </Router>
    </WebsiteProvider>
  );
};

export default App;