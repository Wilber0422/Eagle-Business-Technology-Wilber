
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
import AW5600 from './components/AW5600';
import HandWrapper from './components/HandWrapper';
import AWAiPop from './components/AWAiPop';
import Linea470 from './components/Linea470';
import Scales from './components/Scales';
import Pos from './components/Pos';
import Sg2 from './components/Sg2';
import Ishidawm from './components/Ishidawm';

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
      case Page.AW5600: return <AW5600 />;
      case Page.HandWrapper: return <HandWrapper />;
      case Page.AWAiPop: return <AWAiPop />;
      case Page.Scales: return <Scales />;
      case Page.Linea470: return <Linea470 />;
      case Page.Sg2: return <Sg2 />;
      case Page.Ishidawm: return <Ishidawm />;
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