import { useState } from 'react';
import React from 'react';

// Interfaces para tipado de TypeScript
interface PosProduct {
  id: number;
  name: string;
  mainCat: 'Retail' | 'Dining' | 'Service';
  type: 'Quantic' | 'Mobile POS' | 'Self-Service' | 'Kiosk' | 'Accessories';
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

  // Base de datos de soluciones POS
  const allPos: PosProduct[] = [
    {
      id: 1, name: "Quantic Retail", mainCat: "Retail", type: "Quantic",
      icon: "shopping_bag", img: "/quantic-retail.png",
      desc: "Robust point-of-sale platform designed to optimize business operations and provide total control of retail stores.",
      features: ["Inventory Management", "Customer Loyalty"]
    },
    {
      id: 2, name: "Quantic Restaurant", mainCat: "Dining", type: "Quantic",
      icon: "restaurant", img: "https://eaglebst.com/wp-content/uploads/2024/06/Arte-foto-Restaurant-06.png",
      desc: "Comprehensive management software designed to optimize operational efficiency and improve the customer experience.",
      features: ["Dynamic Table Management", "Analysis and Reports"]
    },
    {
      id: 3, name: "Quantic Food Truck", mainCat: "Dining", type: "Mobile POS",
      icon: "local_shipping", img: "https://eaglebst.com/wp-content/uploads/2024/06/Fotos-Food-Truck-16.png",
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

  const hardwareTypes = ['Quantic',];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:px-10 md:py-24 max-w-[1440px] mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <h1 className="text-slate-900 dark:text-white text-5xl md:text-6xl font-display font-bold leading-tight tracking-tight">
              More Than Just a Register. <span className="text-primary-light">The Heart of Your Business.</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-xl">
              Utilize one of Eagle Business Technology’s Point-of-Sale solutions to streamline operations at your business. We offer a range of POS solutions to address any number of your business needs.


            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => onNavigate(Page.Contact)}
                className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary-light text-white text-base font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-0.5"
              >
                Request a Demo
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full aspect-[16/10] rounded-3xl shadow-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img src="https://eaglebst.com/wp-content/uploads/2023/03/pos-system-hero.jpg" alt="POS Terminal" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

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

      {/* Hardware Categories (Secondary Filter) */}
      <section className="py-20 px-6 md:px-10 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-slate-900 dark:text-white text-2xl font-bold font-display mb-8">Hardware Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {hardwareTypes.map(type => (
              <button
                key={type}
                onClick={() => setTypeFilter(type)}
                className={`transition-all px-6 py-2 rounded-full text-sm font-bold ${typeFilter === type
                  ? 'bg-primary-light text-white shadow-md scale-105'
                  : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions (Main Filter) */}
      <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-primary-light font-bold text-xs uppercase tracking-widest">Tailored Solutions</span>
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold">Built for Your Industry</h2>
          </div>
          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg w-fit">
            {['Retail', 'Dining', 'Service'].map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setTypeFilter('All'); }}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${filter === cat ? 'bg-white dark:bg-slate-700 text-primary-light shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          {filteredPos.length > 0 ? (
            filteredPos.map((item) => (
              <div key={item.id} className="relative h-[450px] rounded-2xl overflow-hidden group shadow-lg animate-in fade-in zoom-in duration-300">
                <img src={item.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                  <span className="material-symbols-outlined mb-4 p-2 bg-white/20 backdrop-blur-md rounded-lg">{item.icon}</span>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-primary-light mb-1">{item.type}</div>
                  <h3 className="text-2xl font-display font-bold mb-3">{item.name}</h3>
                  <p className="text-slate-200 text-sm mb-4 leading-relaxed line-clamp-2">{item.desc}</p>
                  <ul className="text-xs space-y-2 opacity-80">
                    {item.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[14px] text-green-400">check_circle</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
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
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-12">Contact our sales team for a free consultation or demonstration to find the best fit for your business model.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate(Page.Contact)}
              className="bg-primary-light text-white hover:bg-blue-700 px-10 py-4 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/20"
            >
              Get Free Consultation
            </button>
            <a
              href="tel:+19544001777"
              className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-10 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">call</span> Call (954) 400-1777
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PosPage;