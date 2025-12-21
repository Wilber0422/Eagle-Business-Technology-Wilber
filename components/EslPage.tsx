
import React from 'react';

const EslPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950">
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 w-fit">
                <span className="text-primary-light font-bold text-[10px] uppercase tracking-wider">Digital Transformation</span>
              </div>
              <h1 className="text-slate-900 dark:text-white font-display text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Revolutionize Your<br />Shelf Edge with<br /><span className="text-primary-light">Digital Precision</span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-xl">
                Replace static paper with dynamic control. Update thousands of prices in seconds with Eagle ESL solutions, reducing errors and saving countless hours of labor.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary-light text-white text-base font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5">
                  Request Demo
                </button>
                <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 bg-slate-900">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAoPes31RlN3MxwTvDsheTfe-fw4d53xhlGFvjhIENsAANz8dSWhOkxGq5H67jI3HMWX7kAkAXQlvxHBMl6YovcIoM8o4fRE4SOWNjt6tp2a-DX2gz9TV52Qfk6xQcMobougEiFyaLp1UHh3XJs9Wk0tvBLEQj718FBSof911uK1YuIBgp8RluJvTrZ7RlCVuTvOmWZF9Gyf2qPkNC3s6GperfBB0m8IjJVsCViyB-_4-7gVBOvtlnRr18XX24kJFX61PNtD05Yuec" 
                  className="w-full h-full object-cover opacity-90" 
                  alt="ESL Close up" 
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-3 rounded-xl border border-white/20 flex items-center justify-center gap-4 shadow-xl">
                   <div className="flex items-center gap-2">
                     <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                     <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Status: Connected</span>
                   </div>
                   <div className="w-px h-4 bg-slate-200 dark:bg-slate-700"></div>
                   <div className="flex items-center gap-2">
                     <span className="material-symbols-outlined text-sm text-primary-light">signal_cellular_alt</span>
                     <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Signal: Strong</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Impact Section */}
      <section className="py-12 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-10 md:p-16 border border-slate-100 dark:border-slate-800">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">Operational Impact</h2>
              <p className="text-slate-500 dark:text-slate-400">Real-world results from switching to Eagle ESL.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col border-l-4 border-primary-light pl-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Labor Cost Reduction</span>
                <span className="text-4xl font-display font-bold text-slate-900 dark:text-white">80%</span>
              </div>
              <div className="flex flex-col border-l-4 border-primary-light pl-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Pricing Accuracy</span>
                <span className="text-4xl font-display font-bold text-slate-900 dark:text-white">100%</span>
              </div>
              <div className="flex flex-col border-l-4 border-primary-light pl-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Update Speed</span>
                <span className="text-4xl font-display font-bold text-slate-900 dark:text-white">Instant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="mb-16">
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-4">Key Features</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">Discover the power of centrally managed digital displays designed for the modern enterprise.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: 'dashboard_customize', title: 'Total Centralized Control', desc: 'Manage pricing and promotions for one store or a thousand from a single cloud dashboard.' },
            { icon: 'battery_charging_full', title: '5-Year Battery Life', desc: 'Ultra-low energy e-paper technology ensures longevity without frequent maintenance.' },
            { icon: 'integration_instructions', title: 'Seamless Integration', desc: 'Works flawlessly with your existing ERP and POS systems via robust APIs.' },
            { icon: 'wifi_tethering', title: 'High-Speed Comms', desc: 'Bidirectional sub-1GHz communication for instant updates and signal acknowledgment.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 text-primary-light">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 font-display">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How Eagle ESL Works */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center">
          <div className="mb-20">
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-4">How Eagle ESL Works</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">A robust ecosystem designed for reliability and speed.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto relative">
            {/* Steps line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 dark:border-slate-700 -translate-y-1/2 z-0"></div>
            
            {[
              { step: 1, icon: 'dns', title: 'Central Server', desc: 'Price changes are initiated from your HQ or store ERP system.' },
              { step: 2, icon: 'router', title: 'Wireless Gateway', desc: 'Data is broadcast securely via sub-1GHz frequency to the store floor.' },
              { step: 3, icon: 'sell', title: 'Smart Label', desc: 'Labels wake up, update display instantly, and confirm receipt.' }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center gap-6 group">
                <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-xl border-4 border-slate-50 dark:border-slate-700 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-primary-light">{item.icon}</span>
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

      {/* Comparison Section */}
      <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 md:p-16 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Why upgrade from paper?</h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                Static paper labels are prone to errors, labor-intensive, and slow to react to market changes. Digital labels provide agility and precision.
              </p>
              <button className="flex items-center gap-2 text-primary-light font-bold hover:gap-4 transition-all">
                Calculate your ROI <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white">
                  <tr>
                    <th className="px-6 py-4 font-bold">Feature</th>
                    <th className="px-6 py-4 font-bold opacity-50">Traditional Paper</th>
                    <th className="px-6 py-4 font-bold text-primary-light">Eagle ESL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {[
                    { f: 'High manual labor costs', old: 'Yes', new: 'Automated & Instant' },
                    { f: 'Pricing errors common', old: 'Yes', new: '100% Accuracy' },
                    { f: 'Single use waste', old: 'Yes', new: 'Reusable for 5+ Years' },
                    { f: 'Static information', old: 'Limited', new: 'Multi-page content' }
                  ].map((row, i) => (
                    <tr key={i} className="dark:text-slate-300">
                      <td className="px-6 py-4 font-medium text-slate-600 dark:text-slate-400">{row.f}</td>
                      <td className="px-6 py-4">{row.old}</td>
                      <td className="px-6 py-4 font-bold text-primary-light">{row.new}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Diverse Applications */}
      <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-slate-900 dark:text-white text-3xl font-display font-bold mb-2">Diverse Applications</h2>
            <p className="text-slate-500 dark:text-slate-400">Beyond supermarkets: ESL technology transforming every sector.</p>
          </div>
          <button className="text-primary-light font-bold text-sm hover:underline">View All Industries</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Grocery & Retail', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop', icon: 'storefront' },
            { title: 'Pharmacy', img: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1000&auto=format&fit=crop', icon: 'medication' },
            { title: 'Warehousing', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop', icon: 'inventory' },
            { title: 'Electronics', img: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1000&auto=format&fit=crop', icon: 'devices' }
          ].map((app, idx) => (
            <div key={idx} className="relative h-[360px] rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
              <img src={app.img} alt={app.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="material-symbols-outlined text-primary-light mb-2">{app.icon}</span>
                <h3 className="text-xl font-bold font-display">{app.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-grid-pattern bg-[size:3rem_3rem]"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to modernize your store?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">Join thousands of retailers who have switched to Eagle ESL for better efficiency and customer experience.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary-light text-white hover:bg-blue-700 px-10 py-4 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/20">
              Request Quote
            </button>
            <button className="bg-transparent text-white border border-white/20 hover:bg-white/10 px-10 py-4 rounded-lg font-bold transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      <div className="py-8 text-center text-xs text-slate-500 dark:bg-slate-950 border-t border-slate-50 dark:border-slate-900">
        © 2023 Eagle Business Technology. All rights reserved.
      </div>
    </div>
  );
};

export default EslPage;
