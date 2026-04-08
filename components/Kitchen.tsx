'use client';

import React, { useRef, useState, useEffect } from 'react';

const WifiPage: React.FC = () => {
  // Referencia para la sección de Featured Models
  const modelsSectionRef = useRef<HTMLDivElement>(null);

  // --- LÓGICA DEL CARRUSEL (Mantenida para las otras secciones si se requiere) ---
  const [billboardIndex, setBillboardIndex] = useState(0);
  const billboardSlides = [
    "https://nmgprod.s3.amazonaws.com/media/files/d1/b1/d1b1268a9f21f16238c819c2574946e8/cover_image_1692816609.jpeg.960x540_q85_crop_upscale.jpg",
    "/chicken-master.jpeg",
    "/formula-grill.png",
    "/kebabve2.jpeg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBillboardIndex((prev) => (prev === billboardSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [billboardSlides.length]);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">

      {/* HERO SECTION MODIFICADO (ESTILO IMAGEN ADJUNTA) */}
      <section className="relative w-full pt-12 pb-12 lg:pt-20 lg:pb-20 overflow-hidden bg-slate-50 dark:bg-slate-950">
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Texto Izquierda */}
            <div className="flex flex-col gap-6 text-left">
              <h1 className="text-slate-900 dark:text-white font-display text-3xl md:text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Culinary Excellence Redefined: <span className="text-blue-500">Premium Food Equipment.</span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
                Discover the gold standard in professional machinery with our curated selection. From gear-driven precision to superior hygiene, we provide perfectly balanced solutions for the modern food industry.
              </p>
            </div>

            {/* Imagen Derecha (Contenedor Redondeado) */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Resplandor de fondo suave */}
              <div className="absolute w-[80%] h-[80%] bg-blue-500/5 blur-[100px] rounded-full -z-10"></div>

              <div className="bg-white dark:bg-slate-900 rounded-[40px] md:rounded-[80px] p-8 md:p-16 shadow-2xl shadow-slate-200 dark:shadow-none border border-slate-100 dark:border-slate-800 w-full max-w-[550px] aspect-square flex items-center justify-center">
                <img
                  src="/chicken-master.jpeg"
                  alt="Chicken Master"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- EL RESTO DEL CÓDIGO PERMANECE IGUAL --- */}

      {/* How It Works */}
      <section className="py-24 bg-white dark:bg-slate-900/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-4">Smart Kitchen Solutions: High-Performance Food Equipment <br /> Food Equipment</h2>
            <p className="text-slate-500 dark:text-slate-400">We boost the efficiency of your business with state-of-the-art industrial <br /> machinery and integrated technological solutions for the food sector. </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', icon: 'settings_slow_motion', title: 'Gear-Driven Mechanism', desc: 'Guarantees constant blade speed for precise cuts every time, eliminating slippage common in belt-driven models.' },
              { num: '02', icon: 'verified', title: 'Premium Materials', desc: 'Constructed from high-quality anodized aluminum and stainless steel components for maximum hygiene and durability.' },
              { num: '03', icon: 'balance', title: 'Balanced Design', desc: 'Ergonomically designed to reduce operator fatigue, ensure stability during operation, and simplify cleaning procedures.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800 p-10 rounded-2xl relative border border-slate-100 dark:border-slate-700 group hover:bg-white dark:hover:bg-slate-700 transition-all hover:shadow-xl hover:-translate-y-1">
                <span className="absolute top-6 right-8 text-6xl font-black text-slate-200 dark:text-slate-700 group-hover:text-primary-light/10 transition-colors font-display">{step.num}</span>
                <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center mb-8 text-primary-light shadow-sm">
                  <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display">{step.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section (Featured Models) */}
      <section id="modelos-section" ref={modelsSectionRef} className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-4">
                Featured Models
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Equipment designed for the most demanding environments. From poultry processing to vertical cooking systems, we guarantee precision and durability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: 'Chicken Master',
                img: '/chicken-master.jpeg',
                desc: 'Industrial-grade poultry processing solution for high-volume environments.',
                features: ['High Efficiency', 'Easy Clean Design']
              },
              {
                title: 'Chicken Master 20',
                img: '/chicken-master-20.jpeg',
                desc: 'Compact yet powerful version optimized for medium-scale operations.',
                features: ['Precision Cutting', 'Safety Sensors']
              },
              {
                title: 'Formula Grill',
                img: '/formula-grill.png',
                desc: 'High-performance grilling equipment for consistent culinary results.',
                features: ['Uniform Heating', 'Heavy Duty']
              },
              {
                title: 'Kebab VE2',
                img: '/kebabve2.jpeg',
                desc: 'Specialized vertical roasting system for professional kebab preparation.',
                features: ['Adjustable Heat', 'Ergonomic Use']
              }
            ].map((model, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col group transition-all hover:shadow-md cursor-pointer"
              >
                <div className="aspect-[4/3] bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
                  <img
                    src={model.img}
                    alt={model.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display">
                    {model.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                    {model.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {model.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                        <span className="material-symbols-outlined text-[16px] text-primary-light">check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400">
                <span className="material-symbols-outlined">info</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Professional Guidance</h4>
                <p className="text-sm text-slate-500">Need help choosing the right equipment for your kitchen layout?</p>
              </div>
            </div>
            <button className="px-6 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-bold text-slate-600 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-white dark:bg-slate-900 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Ready to transform your guest experience?</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-12">Join thousands of businesses using Eagle Business Technology to grow smarter.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://outlook.office365.com/book/EagleBusiness@eaglebst.com/?ismsaljsauthenabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-light text-white px-10 py-4 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/20 hover:bg-blue-700 flex items-center justify-center"
            >
              Get a Quote
            </a>
            <a
              href="https://eagle-business-technology-wilber.vercel.app/#contact"
              className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-10 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WifiPage;