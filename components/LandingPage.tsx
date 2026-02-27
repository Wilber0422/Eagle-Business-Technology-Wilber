'use client';

import React, { useEffect, useRef } from 'react';
import { Page } from '../types';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const originalCustomers = [
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/1.jpg", alt: "Sarah's Tent" },
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/2.jpg", alt: "Super Economico" },
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/3.jpg", alt: "Luciano Books" },
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/4.jpg", alt: "El machetazo" },
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/5.jpg", alt: "B" },
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/6.jpg", alt: "Latin Fresh" },
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/7.jpg", alt: "Costco", pin: true },
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/8.jpg", alt: "Cale" },
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/9.jpg", alt: "Bravo" },
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/10.jpg", alt: "La placita" },
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/11.jpg", alt: "El Fuerte" }
  ];

  const customersToRender = [...originalCustomers, ...originalCustomers];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!scrollContainer) return;

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    let animationFrameId: number;
    const animate = () => {
      scroll();
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (

    <div>
      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] bg-[size:2rem_2rem] opacity-40 dark:opacity-10"></div>
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm w-fit">
                <span className="flex h-2 w-2 rounded-full bg-secondary"></span>
                <span className="text-slate-600 dark:text-slate-400 font-bold text-xs uppercase tracking-wide">Eagle Business Technology</span>
              </div>
              <h1 className="text-slate-900 dark:text-white font-display text-4xl md:text-4xl lg:text-5xl font-bold leading-[1.05] tracking-tight">
                Leading Provider of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Business Technologies</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
                Eagle Business Technology specializes in modern, efficient, and profitable technological solutions. We are your one-stop-shop for retail innovation.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button onClick={() => onNavigate(Page.About)} className="flex items-center justify-center gap-2 rounded-full h-12 px-8 bg-primary text-white text-base font-semibold hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 hover:-translate-y-1">
                  Explore More Solutions
                </button>
              </div>
            </div>
            <div className="relative lg:h-full flex items-center justify-center">
              <div className="absolute w-[110%] h-[110%] bg-gradient-to-br from-primary/10 to-secondary/10 blur-[80px] rounded-full -z-10"></div>
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: "url('https://eaglebst.com/wp-content/uploads/2023/01/lamp-post-new.jpeg')" }}></div>
                <div className="absolute bottom-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center gap-4">
                  <div className="h-12 w-12 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined text-2xl">trending_up</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Performance</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">+35% Efficiency</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section className="w-full bg-white dark:bg-slate-900 py-24 border-y border-slate-100 dark:border-slate-800">
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 relative overflow-hidden group hover:border-primary/20 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-primary">rocket_launch</span>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <img src="/mision.png" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  To optimize productivity and profits for our clients through integrated, state-of-the-art technology. We strive to empower businesses with tools that streamline operations and enhance the bottom line.
                </p>
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 relative overflow-hidden group hover:border-secondary/20 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-secondary">visibility</span>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary">
                  <img src="/vision.png" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  To be the leading technology partner for supermarkets, pharmacies, fashion retailers, and electronics stores, setting the standard for innovation in the retail sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="w-full bg-slate-50 dark:bg-slate-950 py-24 relative" id="solutions">
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">One-Stop-Shop</span>
            <h2 className="text-slate-900 dark:text-white font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">Comprehensive Retail Solutions</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">From Point of Sale to AI-driven analytics, we cover every aspect of modern retail technology with precision and care.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: Page.Wrappers, title: 'Wrappers', icon: '/icono-wrappers.png', color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-900/20', desc: 'Automated wrapping machinery to preserve freshness and improve presentation.' },
              { id: Page.Scales, title: 'Scales', icon: '/icono-shelf.png', color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-900/20', desc: 'Advanced AI solutions for loss prevention and customer flow analysis.' },
              { id: Page.Pos, title: 'POS', icon: '/icono-pos.png', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20', desc: 'Fast, reliable, and intuitive Point of Sale systems designed for efficiency.' },
              { id: Page.Esl, title: 'SIM POS', icon: '/icono-digital.png', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20', desc: 'Automated price updates and inventory management directly at the shelf.' },
              { id: Page.Signage, title: 'Business software solutions', icon: '/icono-slicers.png', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20', desc: 'Dynamic communication screens to engage customers and modernize layout.' },
              { id: Page.Wifi, title: 'Meat Prosesing Equipment ', icon: '/icono-marketing.png', color: 'text-sky-500', bg: 'bg-sky-50 dark:bg-sky-900/20', desc: 'Turn guest Wi-Fi into a powerful marketing tool to drive loyalty.' },
              { id: Page.Slicers, title: 'Food Equipment', icon: '/icono-store.png', color: 'text-slate-600', bg: 'bg-slate-100 dark:bg-slate-800', desc: 'High-performance commercial slicers that offer safety and precisio.' },
              { id: Page.Voice, title: 'Store Solutions', icon: '/icono-voice.png', color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20', desc: 'Enterprise-grade PBX and communication tools for seamless operations.' }
            ].map((sol) => (
              <div
                key={sol.id}
                onClick={() => onNavigate(sol.id)}
                className="group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Contenedor del Icono/Imagen */}
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <img
                    src={sol.icon}
                    alt={sol.title}
                    className="w-7 h-7 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 font-display">{sol.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Improved Our Customers Section (Reference Match) */}
      <section className="w-full py-20 relative overflow-hidden bg-gradient-to-r from-[#5cb7e5] to-[#71c8f1] dark:from-[#214b63] dark:to-[#2b6a8a]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="absolute bottom-0 w-full h-auto" viewBox="0 0 1440 320" fill="white">
            <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto text-center relative z-10">
          <h2 className="text-white font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-12 drop-shadow-sm">Our Customers</h2>

          <div className="relative group max-w-6xl mx-auto">
            <button className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center p-2 rounded-full text-white/80 hover:text-white transition-all">
              <span className="material-symbols-outlined text-4xl md:text-5xl font-light"></span>
            </button>
            <button className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center p-2 rounded-full text-white/80 hover:text-white transition-all">
              <span className="material-symbols-outlined text-4xl md:text-5xl font-light"></span>
            </button>


            {/* Carrusel */}
            <div >
              <div
                ref={scrollRef}
                className="flex overflow-x-hidden whitespace-nowrap py-4"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {customersToRender.map((customer, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-4 p-6 w-64 h-32 flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300"
                    style={{ width: '200px' }} // Ajusta el ancho según necesites
                  >
                    <img
                      src={customer.src}
                      alt={customer.alt}
                      // className="grayscale hover:grayscale-0 transition-all duration-300 max-h-16 object-contain"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="flex justify-center gap-2 mt-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === 1 ? 'bg-white w-6' : 'bg-white/30 w-1.5'}`}></div>
            ))}
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">Ready to modernize your retail business?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light">Join the future of retail with Eagle Business Technology. Contact us today for a free consultation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate(Page.Contact)} className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all backdrop-blur-sm">
              Soporte Técnico Remoto
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
