import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { WebsiteProvider, useWebsite } from './context/WebsiteContext';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';

// Public Pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import GrowthStrategy from './pages/GrowthStrategy';
import DigitalPresence from './pages/DigitalPresence';
import MarketingSystems from './pages/MarketingSystems';

// Admin Pages
import { AdminDashboardHome, AdminBlogManager, AdminSettings } from './pages/AdminDashboard';

const AppRoutes: React.FC = () => {
  const { isAdminMode } = useWebsite();

  if (isAdminMode) {
    return (
      <AdminLayout>
        <Routes>
          <Route path="/admin" element={<AdminDashboardHome />} />
          <Route path="/admin/blog" element={<AdminBlogManager />} />
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
        <Route path="/solutions/growth" element={<GrowthStrategy />} />
        <Route path="/solutions/presence" element={<DigitalPresence />} />
        <Route path="/solutions/marketing" element={<MarketingSystems />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
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