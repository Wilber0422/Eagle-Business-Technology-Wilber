
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import PosPage from './components/PosPage';
import WrappersPage from './components/WrappersPage';
import EslPage from './components/EslPage';
import VoicePage from './components/VoicePage';
import SignagePage from './components/SignagePage';
import WifiPage from './components/WifiPage';
import SlicersPage from './components/SlicersPage';
import AiStudio from './components/AiStudio';
import TermsPage from './components/TermsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import AW5600Page from './components/AW5600Page';
import AW5600FXPage from './components/AW5600FXPage';
import AWAiPopPage from './components/AWAiPopPage';
import HandWrapperPage from './components/HandWrapperPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  // Handle routing based on hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (Object.values(Page).includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage(Page.Home);
      }
      window.scrollTo(0, 0);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home: return <LandingPage onNavigate={setCurrentPage} />;
      case Page.Pos: return <PosPage />;
      case Page.Wrappers: return <WrappersPage />;
      case Page.Esl: return <EslPage />;
      case Page.Voice: return <VoicePage />;
      case Page.Signage: return <SignagePage />;
      case Page.Wifi: return <WifiPage />;
      case Page.Slicers: return <SlicersPage />;
      case Page.AiStudio: return <AiStudio />;
      case Page.Terms: return <TermsPage />;
      case Page.About: return <AboutPage />;
      case Page.Contact: return <ContactPage />;
      case Page.Aw5600: return <AW5600Page />;
      case Page.Aw5600Fx: return <AW5600FXPage />;
      case Page.AwAiPop: return <AWAiPopPage />;
      case Page.HandWrapper: return <HandWrapperPage />;
      default: return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;