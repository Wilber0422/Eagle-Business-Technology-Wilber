'use client';

import { useState, useRef, useEffect } from 'react';
import React from 'react';

// Interfaces para tipado de TypeScript
interface PosProduct {
  id: number;
  name: string;
  mainCat: 'Retail' | 'Hospitality';
  type: 'Retail' | 'Hospitality';
  img: string;
  desc: string;
  icon: string;
  features: string[];
}

interface PosPageProps {
  onNavigate: (page: any) => void;
  Page: any;
}

const PosPage: React.FC<PosPageProps> = ({ onNavigate, Page }) => {
  // Estados para el doble filtrado
  const [filter, setFilter] = useState<string>('Retail');
  const [typeFilter, setTypeFilter] = useState<string>('All');
  const productTypes = ['Retail', 'Hospitality',];

  // --- LÓGICA DEL CARRUSEL DE LA VALLA (BILLBOARD) ---
  const [billboardIndex, setBillboardIndex] = useState(0);
  const billboardSlides = [
    "/bg-pos.jpg",
    "https://eaglebst.com/wp-content/uploads/2024/06/Arte-foto-Restaurant-06.png",
    "https://eaglebst.com/wp-content/uploads/2024/06/Fotos-Food-Truck-16.png",
    "https://eaglebst.com/wp-content/uploads/2023/03/digital-scales-b-11.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBillboardIndex((prev) => (prev === billboardSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [billboardSlides.length]);

  // Referencia para el scroll
  const solutionsRef = useRef<HTMLDivElement>(null);

  const scrollToSolutions = () => {
    solutionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Base de datos de soluciones POS
  const allPos: PosProduct[] = [
    {
      id: 1, name: "Retail", mainCat: "Retail", type: "Retail",
      icon: "shopping_bag", img: "/quantic-retail.png",
      desc: "Robust point-of-sale platform designed to optimize business operations and provide total control of retail stores.",
      features: ["Inventory Management", "Customer Loyalty"]
    },
    {
      id: 2, name: "Grocery", mainCat: "Retail", type: "Retail",
      icon: "shopping_bag", img: "/quantic-grocery.png",
      desc: "Robust point-of-sale platform designed to optimize business operations and provide total control of retail stores.",
      features: ["Inventory Management", "Customer Loyalty"]
    },
    {
      id: 3, name: " Liquor Store", mainCat: "Retail", type: "Retail",
      icon: "shopping_bag", img: "/quantic-liquor.png",
      desc: "Robust point-of-sale platform designed to optimize business operations and provide total control of retail stores.",
      features: ["Inventory Management", "Customer Loyalty"]
    },
    {
      id: 4, name: "SIM ", mainCat: "Retail", type: "Retail",
      icon: "shopping_bag", img: "/quantic-sim.png",
      desc: "Robust point-of-sale platform designed to optimize business operations and provide total control of retail stores.",
      features: ["Inventory Management", "Customer Loyalty"]
    },
    {
      id: 5, name: "Quanty", mainCat: "Retail", type: "Retail",
      icon: "shopping_bag", img: "/quantic-quantic-retaeil.png",
      desc: "Robust point-of-sale platform designed to optimize business operations and provide total control of retail stores.",
      features: ["Inventory Management", "Customer Loyalty"]
    },
    {
      id: 6, name: "Quantic Restaurant", mainCat: "Hospitality", type: "Hospitality",
      icon: "restaurant", img: "https://eaglebst.com/wp-content/uploads/2024/06/Arte-foto-Restaurant-06.png",
      desc: "Comprehensive management software designed to optimize operational efficiency and improve the customer experience.",
      features: ["Dynamic Table Management", "Analysis and Reports"]
    },
    {
      id: 7, name: "Quantic Food Truck", mainCat: "Hospitality", type: "Hospitality",
      icon: "local_shipping", img: "https://eaglebst.com/wp-content/uploads/2024/06/Fotos-Food-Truck-16.png",
      desc: "Comprehensive point-of-sale solution designed to streamline service in fast food and mobile environments.",
      features: ["Order Management", "Inventory"]
    },
    {
      id: 8, name: "Quantic Order Kiosk", mainCat: "Hospitality", type: "Hospitality",
      icon: "local_shipping", img: "/quantic-kiosk.png",
      desc: "Comprehensive point-of-sale solution designed to streamline service in fast food and mobile environments.",
      features: ["Order Management", "Inventory"]
    }
  ];

  // Lógica de filtrado combinada
  const filteredPos = allPos.filter(item => {
    const matchMain = item.mainCat === filter;
    const matchType = typeFilter === 'All' || item.type === typeFilter;
    return matchMain && matchType;
  });

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Estilos para la Valla Publicitaria */}
      <style jsx global>{`
        .billboard-container {
          position: relative;
          width: 100%;
          max-width: 650px;
          filter: drop-shadow(0 50px 30px rgb(0 0 0 / 0.2));
        }
        .billboard-mockup {
          width: 100%;
          height: auto;
          display: block;
          position: relative;
          z-index: 9;
          pointer-events: none;
        }
        .billboard-content-area {
          position: absolute;
          top: 23.5%;
          left: 12.5%;
          width: 75.2%;
          height: 42.2%;
          z-index: 10;
          overflow: hidden;
          transform: skewY(-4.2deg) rotateX(2deg);
          background: #000;
        }
      `}</style>

      {/* Hero Section con Billboard */}
      <section className="relative w-full pt-8 pb-6 lg:pt-2 lg:pb-3 overflow-hidden bg-slate-50 dark:bg-slate-950">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] bg-[size:2rem_2rem] opacity-40 dark:opacity-10"></div>
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* Texto Izquierda */}
            <div className="flex flex-col gap-6 text-left">
              <h1 className="text-slate-900 dark:text-white text-5xl md:text-6xl font-display font-bold leading-[1.1] tracking-tight">
                More Than Just a Register. <span className="text-primary-light bg-clip-text bg-gradient-to-r from-primary to-secondary"> The Heart of Your Business. </span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
                Utilize one of Eagle Business Technology’s Point-of-Sale solutions to streamline operations at your business. We offer a range of POS solutions to address any number of your business needs.
              </p>
            </div>

            {/* Billboard Derecha */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-[120%] h-[120%] bg-gradient-to-br from-primary/10 to-secondary/10 blur-[100px] rounded-full -z-10"></div>

              <div className="billboard-container translate-y-4">
                <img
                  src="/cartel-luminoso-realista.png"
                  alt="Billboard Mockup"
                  className="billboard-mockup"
                />

                <div className="billboard-content-area">
                  {billboardSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === billboardIndex ? "opacity-100" : "opacity-0"}`}
                    >
                      <img
                        src={slide}
                        alt="POS Content"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Características Secundarias */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-4">Transforming Business Operations</h2>
            <p className="text-slate-500 dark:text-slate-400">Our POS solutions go beyond processing payments to become the central nervous system of your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'trending_up', title: 'Optimize Operations', desc: 'Streamline daily tasks, automate reporting, and reduce manual entry errors significantly.' },
              { icon: 'inventory_2', title: 'Inventory Control', desc: 'Real-time tracking, low-stock alerts, and automated reordering to keep shelves stocked.' },
              { icon: 'mood', title: 'Enhance CX', desc: 'Build loyalty with integrated CRM, personalized offers, and lightning-fast checkouts.' },
              { icon: 'payments', title: 'Unified Payments', desc: 'Accept all payment types—chip, swipe, tap, and mobile wallets—securely and quickly.' }
            ].map((feat, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 text-primary-light">
                  <span className="material-symbols-outlined text-2xl">{feat.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 font-display">{feat.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Categories Spacer */}
      {/* <section className="py-20 px-6 md:px-10 border-b border-slate-100 dark:border-slate-800">
          <div className="max-w-[1440px] mx-auto text-center">
            <div className="text-center mb-12">
              <h2 className="text-slate-900 dark:text-white text-2xl font-bold font-display mb-8">Hardware Categories</h2>
              <p className="text-slate-400 text-sm mt-2">Our scales do not operate in isolation. We offer complete integration with ERP systems and management software using industrial protocols.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {productTypes.map(type => (
                <div
                  key={type}
                  className="px-4 py-2 rounded-full text-sm font-bold text-slate-400 border border-slate-100 dark:border-slate-800"
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
        </section> */}

      {/* Industry Solutions */}
      <section ref={solutionsRef} className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-primary-light font-bold text-xs uppercase tracking-widest">Tailored Solutions</span>
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold">Built for Your Industry</h2>
          </div>
          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg w-fit">
            {['Retail', 'Hospitality'].map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setTypeFilter('All'); scrollToSolutions(); }}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${filter === cat ? 'bg-white dark:bg-slate-700 text-primary-light shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {filteredPos.length > 0 ? (
            filteredPos.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col group animate-in fade-in zoom-in duration-300 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="aspect-[4/3] bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-primary-light text-white text-[10px] font-bold px-2 py-1 rounded">
                    {item.type}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="material-symbols-outlined text-primary-light text-xl">
                      {item.icon}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                    {item.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {item.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined text-[16px] text-primary-light">
                          check_circle
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-auto flex items-center gap-2 text-primary-light font-bold text-sm hover:gap-3 transition-all">
                    View Full Specs
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
              <span className="material-symbols-outlined text-6xl mb-4">point_of_sale</span>
              <p className="text-xl font-display">No POS solutions found for "{typeFilter}" in {filter}.</p>
              <button onClick={() => setTypeFilter('All')} className="mt-4 text-primary-light font-bold hover:underline">Reset Category Filter</button>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Ready to Upgrade Your Business?</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-12">Every business is unique. Contact our sales team for a free consultation or demonstration to find the best fit for your business model.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://eagle-business-technology-wilber.vercel.app/#contact"
              className="inline-flex items-center justify-center bg-primary-light text-white hover:bg-blue-700 px-10 py-4 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-0.5"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:9544001777"
              className="inline-flex items-center justify-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-10 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all shadow-sm gap-2"
            >
              <span className="material-symbols-outlined text-sm">call</span> Call (954)-400-1777
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PosPage;