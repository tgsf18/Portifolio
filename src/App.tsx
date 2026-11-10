import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { SpaceBackground } from './components/SpaceBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TechsPage } from './pages/TechsPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top helper on navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Background galaxy & stardust layer */}
      <SpaceBackground />

      {/* Main app layout */}
      <div className="relative min-h-screen flex flex-col justify-between selection:bg-zinc-200 selection:text-black">
        {/* Fixed Futuristic Chrome Navbar */}
        <Navbar />

        {/* Dynamic Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projetos" element={<ProjectsPage />} />
            <Route path="/techs" element={<TechsPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Minimalist Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
