
import React from 'react';

const PosPage: React.FC = () => {
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
              Optimize operations, control inventory, and enhance customer experience with our unified POS ecosystems tailored for your growth. Experience the future of transaction management.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary-light text-white text-base font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5">
                Request a Demo
              </button>
              <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
                View Hardware
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full aspect-[16/10] rounded-3xl shadow-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_PwX44F4Suuon7slQMCoO-bqkfzkLzz0vJvtvu2AfpC1s9Hqlbpl0gt_TziJOhCOswYQfK-NWi_SgN7EuD9xT-R9RgfaXMqvzEqEE2nhu3TOaclfnnY4Qz8pirqheaAqBxVLNK1q_HtPm4wZxQt7Ucl_upT_3hh8Sp9orYBxDRU_PMhY3jIw2WCftNXz6_4gc5DZUuq-KyA-1Oizddb9I5fgOJTEgGn0CcxNadzXjYSJEnIR0hN8oG-keDijwBAvN5PyBzToT0bOo"
                alt="POS Terminal"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid: Transforming Business Operations */}
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

      {/* Partners Section */}
      <section className="py-20 px-6 md:px-10 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold font-display">Trusted Platforms & Partners</h2>
            <p className="text-slate-400 text-sm mt-2">We partner with industry leaders to bring you the best technology.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
            {['Clover', 'OVVI', 'HioPOS', 'Quantic', 'Harbortouch'].map(brand => (
              <div key={brand} className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all cursor-pointer">
                <span className="text-2xl font-black font-display tracking-tight text-slate-800 dark:text-slate-200">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Your Industry */}
      <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-primary-light font-bold text-xs uppercase tracking-widest">Tailored Solutions</span>
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold">Built for Your Industry</h2>
          </div>
          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg w-fit">
            <button className="px-4 py-1.5 text-xs font-bold rounded-md bg-white dark:bg-slate-700 text-primary-light shadow-sm">Retail</button>
            <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-700">Dining</button>
            <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-700">Service</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Retail */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden group shadow-lg">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Retail" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
              <span className="material-symbols-outlined mb-4 p-2 bg-white/20 backdrop-blur-md rounded-lg">shopping_bag</span>
              <h3 className="text-2xl font-display font-bold mb-3">Retail Stores</h3>
              <p className="text-slate-200 text-sm mb-4 leading-relaxed">Advanced inventory matrix, barcode generation, and customer loyalty profiles.</p>
              <ul className="text-xs space-y-2 opacity-80">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-green-400">check_circle</span> Multi-location sync</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-green-400">check_circle</span> E-commerce integration</li>
              </ul>
            </div>
          </div>

          {/* Restaurants */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden group shadow-lg">
            <img src="https://eaglebst.com/wp-content/uploads/2024/06/Arte-foto-Restaurant-06.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Restaurants" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
              <span className="material-symbols-outlined mb-4 p-2 bg-white/20 backdrop-blur-md rounded-lg">restaurant</span>
              <h3 className="text-2xl font-display font-bold mb-3">Quantic Restaurant</h3>
              <p className="text-slate-200 text-sm mb-4 leading-relaxed">Table mapping, tableside ordering, and Kitchen Display Systems (KDS).</p>
              <ul className="text-xs space-y-2 opacity-80">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-green-400">check_circle</span> Split check functionality</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-green-400">check_circle</span> Ingredient tracking</li>
              </ul>
            </div>
          </div>

          {/* Liquor Stores */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden group shadow-lg">
            <img src="https://images.unsplash.com/photo-1562601579-579bc89ff71c?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Liquor" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
              <span className="material-symbols-outlined mb-4 p-2 bg-white/20 backdrop-blur-md rounded-lg">wine_bar</span>
              <h3 className="text-2xl font-display font-bold mb-3">Liquor Stores</h3>
              <p className="text-slate-200 text-sm mb-4 leading-relaxed">Built-in age verification, heavy inventory management, and case breaking.</p>
              <ul className="text-xs space-y-2 opacity-80">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-green-400">check_circle</span> ID Scanning</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-green-400">check_circle</span> Mix & Match pricing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Food Trucks */}
          <div className="relative h-[300px] rounded-2xl overflow-hidden group shadow-lg">
            <img src="https://eaglebst.com/wp-content/uploads/2024/06/Fotos-Food-Truck-16.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Food Trucks" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
              <span className="material-symbols-outlined mb-4 p-2 bg-white/20 backdrop-blur-md rounded-lg">local_shipping</span>
              <h3 className="text-2xl font-display font-bold mb-2">Quantic Food Truck</h3>
              <p className="text-slate-200 text-sm mb-4">Compact hardware and robust offline mode.</p>
              <ul className="text-xs space-y-2 opacity-80 flex gap-6">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-green-400">check_circle</span> Quick Modifier Select</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-green-400">check_circle</span> Digital Receipts</li>
              </ul>
            </div>
          </div>

          {/* Supermarkets */}
          <div className="relative h-[300px] rounded-2xl overflow-hidden group shadow-lg">
            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2074&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Supermarkets" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
              <span className="material-symbols-outlined mb-4 p-2 bg-white/20 backdrop-blur-md rounded-lg">shopping_cart</span>
              <h3 className="text-2xl font-display font-bold mb-2">Supermarkets</h3>
              <p className="text-slate-200 text-sm mb-4">Scale integration and high-volume scanning support.</p>
              <ul className="text-xs space-y-2 opacity-80 flex gap-6 flex-wrap">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-green-400">check_circle</span> Scale Integration</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-green-400">check_circle</span> EBT/WIC Support</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-green-400">check_circle</span> Shelf Label Printing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Your Setup */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-4">Complete Your Setup</h2>
            <p className="text-slate-500 dark:text-slate-400">Essential hardware accessories designed to work seamlessly with your POS system.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Card Processors', desc: 'EMV & NFC Enabled', img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop' },
              { title: 'Barcode Scanners', desc: 'Wireless & USB', img: 'https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=2070&auto=format&fit=crop' },
              { title: 'Quantic Food Truck', desc: 'Thermal & Impact', icon: 'print' },
              { title: 'Quantic Restaurant', desc: 'Heavy Duty Steel', icon: 'point_of_sale' }
            ].map((hw, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:-translate-y-1">
                <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                  {hw.img ? (
                    <img src={hw.img} alt={hw.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700">{hw.icon}</span>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1 font-display">{hw.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{hw.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Ready to Upgrade Your Business?</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-12">Every business is unique. Contact our sales team for a free consultation or demonstration to find the best fit for your business model.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary-light text-white hover:bg-blue-700 px-10 py-4 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/20">
              Get Free Consultation
            </button>
            <button className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-10 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-sm">call</span> Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      <div className="py-6 text-center text-xs text-slate-400 border-t border-slate-50 dark:border-slate-900">
        © 2023 Eagle Business Technology. All rights reserved.
      </div>
    </div>
  );
};

export default PosPage;
