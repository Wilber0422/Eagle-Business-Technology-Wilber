
import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';

const TermsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const [showPrivacy, setShowPrivacy] = useState(false);
  
  const sections = [
    { id: 'intro', label: 'Introduction' },
    { id: 'copyrights', label: 'Copyrights' },
    { id: 'indemnification', label: 'Indemnification' },
    { id: 'disclaimer', label: 'Disclaimer & Liability' },
    { id: 'ownership', label: 'Ownership & IP' },
    { id: 'data', label: 'Data Privacy' },
    { id: 'third-party', label: 'Third-Party Links' }
  ];

  const privacySections = [
    { id: 'collection', label: 'Data Collection' },
    { id: 'usage', label: 'How We Use Data' },
    { id: 'sharing', label: 'Data Sharing' },
    { id: 'cookies', label: 'Cookies & Tracking' }
  ];

  // Handle intersection observer for active sidebar state
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in the top-ish part of the view
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe all sections
    const contentSections = document.querySelectorAll('section[id]');
    contentSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [showPrivacy]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#f8fafc] dark:bg-slate-950 min-h-screen text-slate-700 dark:text-slate-400 font-sans pb-20">
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        
        {/* Legal Toggle */}
        <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-xl w-fit mb-12">
          <button 
            onClick={() => setShowPrivacy(false)}
            className={`px-6 py-2 text-sm font-bold rounded-lg transition-all ${!showPrivacy ? 'bg-white dark:bg-slate-800 shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Terms of Use
          </button>
          <button 
            onClick={() => setShowPrivacy(true)}
            className={`px-6 py-2 text-sm font-bold rounded-lg transition-all ${showPrivacy ? 'bg-white dark:bg-slate-800 shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Privacy Policy
          </button>
        </div>

        {/* Header Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
            {showPrivacy ? 'Privacy Policy' : 'Terms of Use'}
          </h1>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            <span>Last Updated: December 02, 2023</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-10">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-6">Table of Contents</h3>
                <nav className="flex flex-col gap-1">
                  {(showPrivacy ? privacySections : sections).map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all border-l-4 ${
                        activeSection === item.id 
                        ? 'bg-blue-50 dark:bg-primary/10 text-primary dark:text-blue-400 border-primary' 
                        : 'text-slate-500 dark:text-slate-500 border-transparent hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-900'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Help Box */}
              <div className="bg-blue-50/50 dark:bg-primary/5 rounded-2xl p-6 border border-blue-100/50 dark:border-primary/10">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Need Legal Help?</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  If you have any questions about these legal terms, please reach out to our legal department.
                </p>
                <a href="mailto:legal@eaglebst.com" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:gap-3 transition-all">
                  Contact Legal <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="space-y-16">
            {!showPrivacy ? (
              <>
                <section id="intro">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    Welcome to Eagle Business Technology. Please read these Terms of Use carefully before using our website. By accessing or using this site, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree to these terms, please do not use our website.
                  </p>
                </section>

                <section id="copyrights" className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">copyright</span>
                    </div>
                    <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Copyrights</h2>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 leading-relaxed">
                    <p>
                      We hold exclusive property rights over all site content, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software. Unauthorized reproduction, distribution, display, or transmission of the content of this site is strictly prohibited unless authorized by Eagle Business Technology.
                    </p>
                  </div>
                </section>

                <section id="indemnification" className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-blue-400 text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">shield</span>
                    </div>
                    <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Indemnification</h2>
                  </div>
                  <p className="leading-relaxed">
                    You agree to indemnify, defend, and hold harmless Eagle Business Technology, its officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these terms and conditions or any activity related to your account (including negligent or wrongful conduct) by you or any other person accessing the site using your Internet account.
                  </p>
                </section>

                <section id="disclaimer" className="space-y-6">
                  <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white uppercase tracking-wide">Disclaimer of Warranties and Limitations of Liability</h2>
                  <div className="bg-blue-50/30 dark:bg-slate-900 rounded-2xl p-8 border-l-4 border-accent space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">Services are provided 'as is'.</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        We disclaim specific promises and limit liability for lost profits, revenues, data, or indirect damages to the fullest extent permitted by law.
                      </p>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed italic">
                      Eagle Business Technology makes no representations or warranties of any kind, express or implied, as to the operation of this site or the information, content, materials, or products included on this site.
                    </p>
                  </div>
                </section>

                <section id="ownership" className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                    </div>
                    <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Ownership, Trademark, and Copyright</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="leading-relaxed">
                      Eagle Business Technology owns the site and all related materials. All trademarks, logos, and service marks displayed on the site are registered and unregistered trademarks of Eagle Business Technology.
                    </p>
                  </div>
                </section>

                <section id="data" className="space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">security</span>
                    </div>
                    <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">How We Treat Your Information</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-4">
                      <div className="size-10 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center">
                        <span className="material-symbols-outlined">sell</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">No Sale of Personal Data</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Personal information is not sold to third parties. We value your trust and privacy above all else.
                        </p>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-4">
                      <div className="size-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
                        <span className="material-symbols-outlined">groups</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Aggregate Disclosure</h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          Aggregate information may be disclosed for analysis. Personal info disclosed only if legally required.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            ) : (
              <>
                <section id="collection" className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">database</span>
                    </div>
                    <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Data Collection</h2>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact our support team. This may include your name, email address, and company details.
                  </p>
                </section>

                <section id="usage" className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">analytics</span>
                    </div>
                    <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">How We Use Data</h2>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 space-y-4">
                    <p className="text-sm">We use the information we collect to:</p>
                    <ul className="space-y-2 list-none">
                      {[
                        'Provide, maintain, and improve our services',
                        'Send technical notices and support messages',
                        'Respond to your comments and questions',
                        'Communicate with you about products and services'
                      ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm">
                          <span className="text-primary">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section id="sharing" className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">share</span>
                    </div>
                    <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Data Sharing</h2>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    We do not share your personal data with third parties except as necessary to provide our services, comply with the law, or protect our rights. When we use third-party service providers, they are required to protect your data in accordance with our standards.
                  </p>
                </section>

                <section id="cookies" className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">cookie</span>
                    </div>
                    <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Cookies & Tracking</h2>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    We use cookies and similar tracking technologies to analyze trends, administer the website, and track users’ movements around the website. You can control the use of cookies at the individual browser level.
                  </p>
                </section>
              </>
            )}
          </article>
        </div>
      </div>

      {/* Simplified Bottom Nav */}
      <div className="mt-20 pt-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="size-6 bg-primary rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[14px]">owl</span>
            </div>
            <span className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-widest">Eagle Business Tech</span>
          </div>
          
          <div className="flex gap-8 text-xs font-medium text-slate-400">
            <button onClick={() => setShowPrivacy(true)} className="hover:text-primary transition-colors">Privacy Policy</button>
            <button onClick={() => window.location.hash = Page.Contact} className="hover:text-primary transition-colors">Contact Us</button>
            <button onClick={() => window.location.hash = Page.Home} className="hover:text-primary transition-colors">Home</button>
          </div>

          <p className="text-[10px] text-slate-300 dark:text-slate-700">© 2023 Eagle Business Technology. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
