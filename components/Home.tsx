'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Page } from '../types';

interface LandingPageProps {
  onNavigate: (page: Page) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // --- LÓGICA DEL CARRUSEL DE LA VALLA ---
  const [billboardIndex, setBillboardIndex] = useState(0);
  const billboardSlides = [
    "https://eaglebst.com/wp-content/uploads/2023/03/Wrapper-34.jpg",
    "https://eaglebst.com/wp-content/uploads/2023/03/Wrapper-34.jpg",
    "/bg-pos.jpg",
    "/digital-signage.jpeg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBillboardIndex((prev) => (prev === billboardSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [billboardSlides.length]);

  const originalCustomers = [
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/1.jpg", alt: "Sarah's Tent" },
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/2.jpg", alt: "Super Economico" },
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/3.jpg", alt: "Luciano Books" },
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/4.jpg", alt: "El machetazo" },
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/5.jpg", alt: "B" },
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/6.jpg", alt: "Latin Fresh" },
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/7.jpg", alt: "Costco" },
    { src: "https://eaglebst.com/wp-content/uploads/2023/01/8.jpg", alt: "Cale" },
    { src: "/logo-bravo.png", alt: "Bravo" },
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
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <style jsx global>{`
        .billboard-container {
          position: relative;
          width: 100%;
          max-width: 1400px;
          z-index: 20;
          display: flex;
          align-items: flex-end;
          transform: translateY(2px); 
        }
        .billboard-mockup {
          width: 100%;
          height: auto;
          display: block;
          z-index: 0;
          pointer-events: none;
        }
        .billboard-content-area {
          position: absolute;
          top: 15.5%;
          left: 14.4%;
          width: 69%;
          height: 51.5%;
          z-index: 4;
          overflow: hidden;
          background: #000;
        }
        .background-watermark {
          position: absolute;
          left: -10%;
          top: 60%;
          transform: translateY(-50%);
          width: 50%;
          max-width: 500px;
          opacity: 1;
          z-index: 0;
          pointer-events: none;
        }
        .blue-stripe-footer {
          width: 100%;
          height: 30px;
          background-color: #5cb7e5;
          z-index: 30;
          position: relative;
        }
        
        @media (max-width: 1024px) {
          .billboard-container {
            max-width: 90%;
            margin: 0 auto;
          }
          .background-watermark {
             display: none;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative w-full flex flex-col overflow-hidden bg-white dark:bg-slate-950">

        {/* Imagen de fondo decorativa */}
        <img
          src="/icono.bg.png"
          className="background-watermark"
          alt="Background Logo"
        />

        <div className="px-6 md:px-10 lg:px-25 max-w-[1440px] mx-auto relative z-10 w-full flex-grow flex items-center pt-16 lg:pt-10">
          <div className="grid lg:grid-cols-2 gap-2 items-center w-full">

            {/* Texto Izquierda */}
            <div className="flex flex-col gap-6 text-left pb-12 lg:pb-20">
              <h1 className="text-slate-900 dark:text-white font-display text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                Leading Provider of <br /> <span className="text-[#5cb7e5]"> Business Technologies </span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
                Eagle Business Technology provides a flexible platform to promote your products and get them in front of your customers for purchase.
              </p>
            </div>

            {/* Contenedor de la Valla - Ahora alineado al final del contenedor padre */}
            <div className="relative flex items-end justify-center h-full">
              <div className="billboard-container">
                <img
                  src="/Vallas.png"
                  alt="Billboard Frame"
                  className="billboard-mockup"
                />

                <div className="billboard-content-area">
                  {billboardSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === billboardIndex ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <img
                        src={slide}
                        alt="Content"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Franja Azul - Separada del contenido principal para asegurar contacto */}
        <div className="blue-stripe-footer"></div>
      </section>

      {/* Secciones de Misión y Visión */}
      <section className="w-full bg-white dark:bg-slate-900 py-24 border-y border-slate-100 dark:border-slate-800">
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 relative overflow-hidden group hover:border-primary/20 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[120px] text-[#5cb7e5]">rocket_launch</span>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6">
                  <img src="/mision.png" alt="Mission" className="w-6 h-6" />
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
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <img src="/vision.png" alt="Vision" className="w-6 h-6" />
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

      {/* Soluciones */}
      <section className="w-full bg-slate-50 dark:bg-slate-950 py-24 relative" id="solutions">
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#5cb7e5] font-bold tracking-widest text-xs uppercase mb-3 block">One-Stop-Shop</span>
            <h2 className="text-slate-900 dark:text-white font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">Comprehensive Retail Solutions</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">From Point of Sale to AI-driven analytics, we cover every aspect of modern retail technology with precision and care.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: Page.Wrappers, title: 'Wrappers', icon: '/icono-wrappers.png', desc: 'Automated wrapping machinery to preserve freshness and improve presentation.' },
              { id: Page.Scales, title: 'Scales', icon: '/icono-scale.png', desc: 'Advanced AI solutions for loss prevention and customer flow analysis.' },
              { id: Page.Pos, title: 'POS', icon: '/icono-pos.png', desc: 'Fast, reliable, and intuitive Point of Sale systems designed for efficiency.' },
              { id: Page.Business, title: 'Business software', icon: '/icono-business.png', desc: 'Dynamic communication screens to engage customers and modernize layout.' },
              { id: Page.Kitchen, title: 'Kitchen Equipment', icon: '/icono-food.png', desc: 'Turn guest Wi-Fi into a powerful marketing tool to drive loyalty.' },
              { id: Page.Food, title: 'Food Equipment', icon: '/icono-slicers.png', desc: 'High-performance commercial slicers that offer safety and precision.' },
              { id: Page.Store, title: 'Store Solutions', icon: '/icono-store.png', desc: 'Enterprise-grade PBX and communication tools for seamless operations.' }
            ].map((sol) => (
              <div
                key={sol.id}
                onClick={() => onNavigate(sol.id)}
                className="group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#5cb7e5] transition-colors duration-300">
                  <img src={sol.icon} alt={sol.title} className="w-7 h-7 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 font-display">{sol.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrusel de Clientes */}
      <section className="w-full py-20 relative overflow-hidden bg-gradient-to-r from-[#5cb7e5] to-[#71c8f1] dark:from-[#214b63] dark:to-[#2b6a8a]">
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto text-center relative z-10">
          <h2 className="text-white font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-12 drop-shadow-sm">Our Customers</h2>
          <div className="relative group max-w-6xl mx-auto">
            <div ref={scrollRef} className="flex overflow-x-hidden whitespace-nowrap py-4">
              {customersToRender.map((customer, index) => (
                <div key={index} className="flex-shrink-0 mx-4 p-6 w-[200px] h-32 flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300">
                  <img src={customer.src} alt={customer.alt} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full bg-slate-900 py-24 relative overflow-hidden">
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">Ready to modernize your retail business?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light">Join the future of retail with Eagle Business Technology. Contact us today for a free consultation.</p>
          <button onClick={() => onNavigate(Page.Contact)} className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all backdrop-blur-sm">
            Remote Technical Support
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;