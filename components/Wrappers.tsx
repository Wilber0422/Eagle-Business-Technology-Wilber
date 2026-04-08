'use client';

import React, { useState, useEffect } from 'react';
import { Page } from '../types';

const WrappersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'automatic' | 'manual'>('automatic');

  // --- LÓGICA DEL CARRUSEL DE LA VALLA ---
  const [billboardIndex, setBillboardIndex] = useState(0);
  const billboardSlides = [
    "https://eaglebst.com/wp-content/uploads/2023/03/Wrapper-34.jpg",
    "https://eaglebst.com/wp-content/uploads/2022/12/AW-Ai-Pop.png",
    "https://www.digisystem.com/es/products/PRD00348/product_file/file/aw5600-2_WP02_01.png",
    "https://eaglebst.com/wp-content/uploads/2022/12/Hand-Wrapper.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBillboardIndex((prev) => (prev === billboardSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [billboardSlides.length]);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Estilos para el Hero Tipo Imagen Adjunta */}
      <style jsx global>{`
        .hero-custom-bg {
          position: relative;
          background-image: url('/bg.wrapper.jpg');
          background-size: cover;
          background-position: center;
          min-height: 550px;
        }
        .hero-custom-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0, 89, 160, 0.8), rgba(0, 89, 160, 0.8));
          z-index: 1;
        }
        .machine-card {
          position: relative;
          z-index: 10;
          background: white;
          padding: 12px;
          border-radius: 30px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          width: 100%;
          max-width: 580px;
        }
        .machine-inner-frame {
          border: 6px solid #f1f5f9;
          border-radius: 22px;
          overflow: hidden;
          background: white;
          aspect-ratio: 16/10;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
      `}</style>

      {/* Hero Section Rediseñado */}
      <section className="hero-custom-bg flex items-center overflow-hidden">
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto relative z-10 w-full py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Texto Izquierda */}
            <div className="flex flex-col gap-6 text-left text-white">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Efficiency,<br />
                Wrapped.
              </h1>
              <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
                Integrated Weighing, Labeling & Packaging. Streamline your food processing operations with Eagle’s advanced wrapper solutions designed for speed and precision.
              </p>
            </div>

            {/* Imagen Derecha (Carrusel en marco blanco) */}
            <div className="relative flex items-center justify-center">
              <div className="machine-card">
                <div className="machine-inner-frame">
                  {billboardSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center p-8 ${index === billboardIndex ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <img
                        src={slide}
                        alt="Machine Model"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Eagle Wrappers */}
      <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="mb-16">
          <span className="text-primary-light font-bold text-xs uppercase tracking-widest block mb-2">Value Proposition</span>
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold">Why Choose Eagle Wrappers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: 'bolt', title: 'Maximum Efficiency', desc: 'High-speed processing up to 35ppm reduces operational bottlenecks and increases throughput.' },
            { icon: 'savings', title: 'Cost Savings', desc: 'Advanced film pre-stretch technology lowers material costs by up to 30% per package.' },
            { icon: 'stars', title: 'Professional Look', desc: 'Consistent, tight, and glossy wraps ensure premium shelf appeal for your products.' },
            { icon: 'eco', title: 'Sustainability', desc: 'Eco-friendly materials compatibility and reduced plastic waste generation.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary-light/30 transition-all">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mb-6 text-primary-light">
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 font-display">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Wrapper Models */}
      <section id="modelos-section" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-4">Our Wrapper Models</h2>
              <p className="text-slate-500 dark:text-slate-400">Choose the right automation level for your business needs.</p>
            </div>
            <div className="flex p-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
              <button
                onClick={() => setActiveTab('automatic')}
                className={`px-6 py-2 text-xs font-bold rounded-md transition-all ${activeTab === 'automatic' ? 'bg-[#0059a0] text-white shadow-md' : 'text-slate-500'}`}
              >
                Automatic Systems
              </button>
              <button
                onClick={() => setActiveTab('manual')}
                className={`px-6 py-2 text-xs font-bold rounded-md transition-all ${activeTab === 'manual' ? 'bg-[#0059a0] text-white shadow-md' : 'text-slate-500'}`}
              >
                Manual Wrappers
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {(activeTab === 'automatic' ? [
              { id: Page.AWAiPop, title: 'AW-Ai-Pop Ishida', img: 'https://eaglebst.com/wp-content/uploads/2022/12/AW-Ai-Pop.png', desc: 'Revolutionizes workflow by integrating an intelligent printer for promotional labels.', features: ['Automatic double labeling', 'Robotic Applicator'], tag: 'AI Powered' },
              { id: Page.AW5600, title: 'AW-5600 AT POP', img: 'https://www.digisystem.com/es/products/PRD00348/product_file/file/aw5600-2_WP02_01.png', desc: 'Designed to maximize efficiency in confined spaces with a small footprint.', features: ['Multi-Labeling System', 'Intelligent Control'], tag: 'Best Seller' },
              { id: Page.Ishidawm, title: 'Ishida WM Micro', img: '/wm-micro.png', desc: 'Extremely compact all-in-one solution for weighing, packing, and labeling.', features: ['Ultra Compact Design', 'Intuitive Interface'] },
              { id: Page.Linea470, title: 'Linea 470 H50', img: '/linea-470-h50.jpg', desc: 'Precision profile designed for linear transport and industrial guidance.', features: ['High Precision Geometry', 'Versatile Design'] },
              { id: Page.Sg2, title: 'SG2', img: '/sg2.jpeg', desc: 'Technical sliding guide optimized for low-friction support in conveyors.', features: ['Optimized Sliding Profile', 'Heavy Duty'] }
            ] : [
              { id: Page.HandWrapper, title: 'Hand Wrapper', img: 'https://eaglebst.com/wp-content/uploads/2022/12/Hand-Wrapper.png', desc: 'Tabletop weigh-seal-label system that improves sales counter productivity.', features: ['Tabletop Design', 'Integrated Labeling', 'Efficient Workflow'] }
            ]).map((model, idx) => (
              <div
                key={idx}
                onClick={() => model.id ? window.location.hash = model.id : null}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col group cursor-pointer hover:shadow-md transition-all"
              >
                <div className="aspect-[4/3] bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
                  <img src={model.img} alt={model.title} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700" />
                  {model.tag && (
                    <div className="absolute top-4 right-4 bg-[#0059a0] text-white text-[10px] font-bold px-2 py-1 rounded">
                      {model.tag}
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display">{model.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">{model.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {model.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined text-[16px] text-[#0059a0]">check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-auto flex items-center gap-2 text-[#0059a0] font-bold text-sm hover:gap-3 transition-all">
                    View Full Specs <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-4">Industry Applications</h2>
          <p className="text-slate-500 dark:text-slate-400">Specialized settings for every department ensure your product is preserved perfectly.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Fresh Meats', icon: 'restaurant', img: 'https://media.istockphoto.com/id/1212824120/photo/assortment-of-meat-and-seafood.jpg?s=612x612&w=0&k=20&c=U_wNgPDs2CeWuOPEj0Hts1btABGM3gL4ftjficNvJZM=' },
            { title: 'Fruits & Veg', icon: 'nutrition', img: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop' },
            { title: 'Fish & Seafood', icon: 'set_meal', img: 'https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_368767489.jpeg' }
          ].map((app, idx) => (
            <div key={idx} className="relative h-[400px] rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
              <img src={app.img} alt={app.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-left text-white">
                <span className="material-symbols-outlined mb-2 text-white">{app.icon}</span>
                <h3 className="text-xl font-bold font-display">{app.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0059a0]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Optimize Your Line?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Get a free consultation with our packaging engineers. We'll calculate your potential savings and recommend the perfect model for your volume.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="bg-white text-[#0059a0] hover:bg-slate-50 px-10 py-4 rounded-lg font-bold transition-all shadow-xl flex items-center justify-center">
              Request a Quote
            </a>
            <a href="#" className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-10 py-4 rounded-lg font-bold transition-all flex items-center justify-center">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      <div className="py-6 text-center text-xs text-slate-400 dark:bg-slate-950 border-t border-slate-50 dark:border-slate-900">
        © 2026 Eagle Business Technology. All rights reserved.
      </div>
    </div>
  );
};

export default WrappersPage;