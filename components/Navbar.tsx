
import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const consultationUrl = "https://outlook.office365.com/book/EagleBusiness@eaglebst.com/?ismsaljsauthenabled=true";

  const navigate = (page: Page) => {
    window.location.hash = page;
    setIsMenuOpen(false);
  };

  const solutions = [
    { id: Page.Wrappers, title: 'Wrappers', icon: 'inventory_2', color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-900/20', desc: 'Automated food packaging & labeling.' },
    { id: Page.Scales, title: 'Scales', icon: 'inventory', color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-900/20', desc: 'The standard of accuracy.' },
    { id: Page.Pos, title: 'POS Systems', icon: 'point_of_sale', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20', desc: 'Unified transaction & inventory management.' },
    { id: Page.Esl, title: 'Shelf Labels', icon: 'sell', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20', desc: 'Dynamic digital pricing at the shelf edge.' },
    { id: Page.Signage, title: 'Digital Signage', icon: 'smart_display', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20', desc: 'Engaging dynamic screens for retail.' },
    { id: Page.Voice, title: 'Voice Solutions', icon: 'call', color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20', desc: 'Enterprise VoIP & Hospitality PBX.' },
    { id: Page.Slicers, title: 'Slicers', icon: 'content_cut', color: 'text-slate-600', bg: 'bg-slate-100 dark:bg-slate-800', desc: 'Precision Kolossal slicing machinery.' },
    { id: Page.Wifi, title: 'Wi-Fi Marketing', icon: 'wifi', color: 'text-sky-500', bg: 'bg-sky-50 dark:bg-sky-900/20', desc: 'Turn guest Wi-Fi into customer data.' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-effect border-b border-slate-100 dark:border-slate-800 transition-all duration-300">
      <div className="flex items-center justify-between px-6 lg:px-10 py-4 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate(Page.Home)}>
          <div className="relative flex items-center justify-center size-10 bg-primary rounded-lg shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
            <span className="material-symbols-outlined text-white text-2xl">owl</span>
          </div>
          <div>
            <h2 className="text-xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-none">Eagle</h2>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Business Tech</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <button onClick={() => navigate(Page.Home)} className={`text-sm font-medium transition-colors ${currentPage === Page.Home ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary'}`}>Home</button>

          {/* Solutions Dropdown with Hover Bridge */}
          <div className="relative group h-full">
            <button className="flex items-center gap-1 py-4 text-sm font-medium text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">
              Solutions <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">expand_more</span>
            </button>

            {/* Mega Menu Dropdown Container with Hover Trigger Padding */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
              <div className="w-[640px] bg-white dark:bg-slate-900 shadow-2xl shadow-slate-200/50 dark:shadow-black/80 rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                  <div className="col-span-2 mb-4 flex items-center justify-between">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Retail & Hospitality Solutions</span>
                    <button onClick={() => navigate(Page.AiStudio)} className="text-[10px] font-bold text-primary-light flex items-center gap-1 hover:underline">
                      <span className="material-symbols-outlined text-[14px]">auto_awesome</span> AI Power Tools
                    </button>
                  </div>

                  {solutions.map((sol) => (
                    <button
                      key={sol.id}
                      onClick={() => navigate(sol.id)}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-left group/item"
                    >
                      <div className={`size-10 rounded-lg ${sol.bg} flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform`}>
                        <span className={`material-symbols-outlined text-[20px] ${sol.color}`}>{sol.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-0.5 group-hover/item:text-primary-light transition-colors">{sol.title}</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">{sol.desc}</p>
                      </div>
                    </button>
                  ))}

                  <div className="col-span-2 mt-4 pt-4 border-t border-slate-50 dark:border-slate-800/50">
                    <div className="bg-slate-50 dark:bg-slate-800/30 rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary-light">help_outline</span>
                        <p className="text-xs font-medium text-slate-600 dark:text-slate-300">Not sure which system fits your volume?</p>
                      </div>
                      <a href={consultationUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-primary-light hover:underline">Expert Advice →</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button onClick={() => navigate(Page.About)} className={`text-sm font-medium transition-colors ${currentPage === Page.About ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary'}`}>About Us</button>

          <button onClick={() => navigate(Page.Contact)} className={`text-sm font-medium transition-colors ${currentPage === Page.Contact ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary'}`}>Contact</button>

          {/* Legal Dropdown with Hover Transition */}
          <div className="relative group h-full">
            <button className={`flex items-center gap-1 py-4 text-sm font-medium transition-colors ${currentPage === Page.Terms ? 'text-primary' : 'text-slate-600 dark:text-slate-300 group-hover:text-primary'}`}>
              Legal <span className="material-symbols-outlined text-sm transition-transform group-hover:rotate-180">expand_more</span>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
              <div className="w-48 bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-black/50 rounded-xl py-2 border border-slate-100 dark:border-slate-800">
                <button onClick={() => navigate(Page.Terms)} className="block w-full text-left px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors">Terms of Use</button>
                <button onClick={() => navigate(Page.Terms)} className="block w-full text-left px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors">Privacy Policy</button>
              </div>
            </div>
          </div>

          <a
            href={consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold hover:scale-105 transition-all shadow-lg"
          >
            Free Consultation
          </a>

          <button onClick={() => navigate(Page.AiStudio)} className={`flex items-center gap-2 text-sm font-bold transition-colors ${currentPage === Page.AiStudio ? 'text-blue-500' : 'text-slate-600 dark:text-slate-300 hover:text-blue-500'}`}>
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span> AI Studio
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <button className="lg:hidden p-2 text-slate-600 dark:text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="material-symbols-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 p-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          <button onClick={() => navigate(Page.Home)} className="text-left font-bold py-2 border-b border-slate-50 dark:border-slate-800">Home</button>

          <div className="flex flex-col gap-3 py-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Solutions</span>
            <div className="grid grid-cols-1 gap-2">
              {solutions.map((sol) => (
                <button
                  key={sol.id}
                  onClick={() => navigate(sol.id)}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span className={`material-symbols-outlined text-sm ${sol.color}`}>{sol.icon}</span>
                  <span className="text-sm font-medium">{sol.title}</span>
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => navigate(Page.About)} className="text-left font-medium py-2">About Us</button>
          <button onClick={() => navigate(Page.Contact)} className="text-left font-medium py-2">Contact</button>
          <button onClick={() => navigate(Page.AiStudio)} className="text-left font-bold py-2 text-blue-500 flex items-center gap-2">
            <span className="material-symbols-outlined">auto_awesome</span> AI Studio
          </button>

          <a href={consultationUrl} target="_blank" rel="noopener noreferrer" className="mt-4 w-full py-4 bg-primary text-white text-center font-bold rounded-xl shadow-lg">
            Free Consultation
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
