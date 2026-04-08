'use client';

import React from 'react';

const EslPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">

      {/* SECCIÓN MODIFICADA: SIM POS for Grocery (Estilo Imagen Adjunta) */}
      <section className="relative w-full overflow-hidden bg-[#004a99]">
        {/* Capa de imagen de fondo con efecto azul industrial */}
        <div className="absolute inset-0 z-0">
          <img
            src="/bg-sim.jpg"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            alt="Fondo industrial"
          />
          {/* Overlay gradiente para asegurar legibilidad a la izquierda */}
          <div className="absolute inset-0 bg-[#004a99]/40 "></div>
        </div>

        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto relative z-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Columna de Texto */}
            <div className="flex flex-col gap-6 text-left text-white">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.3em] opacity-80">SIM POS</span>
                <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                  SIM POS for <span className="text-white">Grocery</span>
                </h1>
              </div>

              <p className="text-blue-50 text-lg font-normal leading-relaxed max-w-xl opacity-90">
                A modern POS system that connects payment, inventory, pricing, and store operations, designed specifically for independent supermarkets, butcher shops, and specialty stores.
              </p>

              <ul className="mt-4 space-y-4">
                {[
                  'Fast Checkout at Multiple Registers',
                  'Scale Integration',
                  'Real-Time Inventory Management',
                  'Promotions Control'
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold">
                    <span className="material-symbols-outlined text-white/80 text-lg">check_circle</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna de Imagen - Sin borde blanco, estilo flotante */}
            <div className="relative flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-lg lg:max-w-none">
                <img
                  src="/esl-simpos.png" // Asegúrate de que esta imagen sea un PNG transparente (la de la etiqueta ESL)
                  className=" h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-3xl"
                  alt="Electronic Shelf Label"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Available Packages Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center">
          <div className="mb-20">
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-4">Available Packages</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 dark:border-slate-700 -translate-y-1/2 z-0"></div>

            {[
              { step: 1, icon: 'dns', title: 'Starter', desc: 'For small shops with 1 or 2 cash registers.' },
              { step: 2, icon: 'router', title: 'Growth', desc: 'For stores with a greater need for control (3 to 6 registers).' },
              { step: 3, icon: 'sell', title: 'Enterprise', desc: 'For multi-store groups with centralized management.' }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center gap-6 group">
                <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-xl border-4 border-slate-50 dark:border-slate-700 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-blue-500">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 font-display">{item.step}. {item.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[240px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liquor Store Section */}
      <section className="relative w-full py-24 bg-white dark:bg-slate-950">
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1000&auto=format&fit=crop"
                  className="w-full h-full object-cover opacity-90"
                  alt="Liquor Store POS"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6 text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 w-fit">
                <span className="text-blue-600 font-bold text-[10px] uppercase tracking-wider">SIM POS</span>
              </div>
              <h2 className="text-slate-900 dark:text-white font-display text-5xl font-bold leading-tight">
                SIM POS for <span className="text-blue-500">Liquor Store</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                Helping liquor stores operate faster at the counter, control bottle and case inventories, and manage prices consistently.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: 'check_circle', text: 'Scan by Bottle or Box' },
                  { icon: 'check_circle', text: 'Cashier Responsibility' },
                  { icon: 'check_circle', text: 'Smart Shopping' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-green-500">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Impact */}
      <section className="py-12 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-10 md:p-16 border border-slate-100 dark:border-slate-800">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white">Operational Advantages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                "Reduction of manual inventory errors and stock discrepancies.",
                "Detailed reports by category, cashier, and shift.",
                "Counter-ready commercial-grade hardware."
              ].map((text, idx) => (
                <div key={idx} className="flex flex-col border-l-4 border-blue-500 pl-6">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to modernize your store?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">Join thousands of retailers who have switched to Eagle technology for better efficiency.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#" className="inline-flex items-center justify-center bg-blue-500 text-white px-10 py-4 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-0.5">
              Request Quote
            </a>
            <a href="#" className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all shadow-sm gap-2">
              <span className="material-symbols-outlined text-sm">call</span> Contact Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default EslPage;