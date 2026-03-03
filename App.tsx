
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import PosPage from './components/Pos';
import Wrappers from './components/Wrappers';
import PosSIM from './components/PosSIM';
import Store from './components/Store';
import Business from './components/Business';
import Food from './components/Food';
import Slicers from './components/Slicers';
// import AiStudio from './components/AiStudio';
import Terms from './components/Terms';
import About from './components/About';
import Contact from './components/Contact';
import AW5600Page from './components/AW5600Page';
import AW5600FXPage from './components/AW5600FXPage';
import AWAiPopPage from './components/AWAiPopPage';
import HandWrapperPage from './components/HandWrapperPage';
import Scales from './components/Scales';
import Pos from './components/Pos';

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
      case Page.Home: return <Home onNavigate={setCurrentPage} />;
      case Page.Pos: return <Pos />;
      case Page.Wrappers: return <Wrappers />;
      case Page.PosSIM: return <PosSIM />;
      case Page.Store: return <Store />;
      case Page.Business: return <Business />;
      case Page.Food: return <Food />;
      case Page.Slicers: return <Slicers />;
      // case Page.AiStudio: return <AiStudio />;
      case Page.Terms: return <Terms />;
      case Page.About: return <About />;
      case Page.Contact: return <Contact />;
      case Page.Aw5600: return <AW5600Page />;
      case Page.Aw5600Fx: return <AW5600FXPage />;
      case Page.AwAiPop: return <AWAiPopPage />;
      case Page.Scales: return <Scales />;
      case Page.HandWrapper: return <HandWrapperPage />;
      default: return <Home onNavigate={setCurrentPage} />;
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