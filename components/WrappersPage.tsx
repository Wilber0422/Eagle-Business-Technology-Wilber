
import React, { useState } from 'react';
import { Page } from '../types';

const WrappersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'automatic' | 'manual'>('automatic');

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-900/20">
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 w-fit">
                <span className="text-primary-light font-bold text-[10px] uppercase tracking-wider">New Generation Wrappers</span>
              </div>
              <h1 className="text-slate-900 dark:text-white font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Efficiency,<br /><span className="text-primary-light">Wrapped.</span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
                Integrated Weighing, Labeling & Packaging. Streamline your food processing operations with Eagle’s advanced wrapper solutions designed for speed and precision.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary-light text-white text-base font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5">
                  Explore Models
                </button>
                <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
                  View Specs
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-[1.2/1] rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800 flex items-center justify-center p-12">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUMb5PCl_strj3MzJcq1U3Dbhxhqen4uexuUN60k0PS9rvZesDDROjwsiqiwh968HxWM-NTEtOht2K9wxqGTg2CDLgvcUK0GtqvL5qYHMm8kik0KyoXIwnZW9jh5OWTRGJlh0Uocich3LmwmWT8ynRjVWmV-12h95ShNOwnJwbw1zmWinLuYwsJnhxzmCk-0j_X0r6SaLfeH9kpYliLReCa4FIAyxw45drmhpYuxzAPhU6sS91rZkV7ObVWu99ly-TXtfsLl7aHGrW"
                  className="w-full h-full object-contain"
                  alt="Wrapper AW-5600ATII"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 shadow-lg">
                  <span className="material-symbols-outlined text-green-500">verified</span>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Financing</p>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">$799</p>
                  </div>
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
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-4">Our Wrapper Models</h2>
              <p className="text-slate-500 dark:text-slate-400">Choose the right automation level for your business needs.</p>
            </div>
            <div className="flex p-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
              <button
                onClick={() => setActiveTab('automatic')}
                className={`px-6 py-2 text-xs font-bold rounded-md transition-all ${activeTab === 'automatic' ? 'bg-primary-light text-white shadow-md' : 'text-slate-500'}`}
              >
                Automatic Systems
              </button>
              <button
                onClick={() => setActiveTab('manual')}
                className={`px-6 py-2 text-xs font-bold rounded-md transition-all ${activeTab === 'manual' ? 'bg-primary-light text-white shadow-md' : 'text-slate-500'}`}
              >
                Manual Wrappers
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {activeTab === 'automatic' ? (
              [
                {
                  tag: 'Best Seller',
                  id: Page.Aw5600,
                  title: 'AW 5600 AT POP',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUMb5PCl_strj3MzJcq1U3Dbhxhqen4uexuUN60k0PS9rvZesDDROjwsiqiwh968HxWM-NTEtOht2K9wxqGTg2CDLgvcUK0GtqvL5qYHMm8kik0KyoXIwnZW9jh5OWTRGJlh0Uocich3LmwmWT8ynRjVWmV-12h95ShNOwnJwbw1zmWinLuYwsJnhxzmCk-0j_X0r6SaLfeH9kpYliLReCa4FIAyxw45drmhpYuxzAPhU6sS91rZkV7ObVWu99ly-TXtfsLl7aHGrW',
                  desc: 'High-speed automatic weigh-wrap-labeler designed for maximum throughput in busy supermarkets.',
                  features: ['35 packs per minute', 'Auto-tray sizing', 'Integrated POP labeling']
                },
                {
                  id: Page.Aw5600Fx,
                  title: 'AW 5600 FX',
                  img: '../img/aw5600fx_WP02_01.png',
                  desc: 'Flexible automatic wrapper optimized for handling varying tray sizes and fragile items.',
                  features: ['Compact footprint', 'Fragile item mode', 'Multi-film loader']
                },
                {
                  tag: 'AI Powered',
                  id: Page.AwAiPop,
                  title: 'AW-Ai-Pop',
                  img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2071&auto=format&fit=crop',
                  desc: 'The smartest basic model of the 5600 series with 30 packs/minute and rotational labeler arm.',
                  features: ['30 packs per minute', 'Linerless label support', 'Compact footprint']
                }
              ].map((model, idx) => (
                <div
                  key={idx}
                  onClick={() => model.id ? window.location.hash = model.id : null}
                  className={`bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col group ${model.id ? 'cursor-pointer hover:shadow-md' : ''}`}
                >
                  <div className="aspect-[4/3] bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
                    <img src={model.img} alt={model.title} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700" />
                    {model.tag && (
                      <div className="absolute top-4 right-4 bg-primary-light text-white text-[10px] font-bold px-2 py-1 rounded">
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
                          <span className="material-symbols-outlined text-[16px] text-primary-light">check_circle</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-auto flex items-center gap-2 text-primary-light font-bold text-sm hover:gap-3 transition-all">
                      View Full Specs <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              [
                {
                  id: Page.HandWrapper,
                  title: 'Hand Wrapper',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnrG9L6-L9e-h6U-e-l-j-o-m-r-n-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z', // Placeholder for Hand Wrapper
                  desc: 'A Hand Wrapper tabletop weigh-seal-label system that improves productivity and operational efficiency of sales counters.',
                  features: ['Tabletop Design', 'Integrated Labeling', 'Efficient Workflow']
                }
              ].map((model, idx) => (
                <div
                  key={idx}
                  onClick={() => model.id ? window.location.hash = model.id : null}
                  className={`bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col group ${model.id ? 'cursor-pointer hover:shadow-md' : ''}`}
                >
                  <div className="aspect-[4/3] bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
                    <img src={model.img} alt={model.title} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display">{model.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">{model.desc}</p>
                    <ul className="space-y-3 mb-8">
                      {model.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                          <span className="material-symbols-outlined text-[16px] text-primary-light">check_circle</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-auto flex items-center gap-2 text-primary-light font-bold text-sm hover:gap-3 transition-all">
                      View Full Specs <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400">
                <span className="material-symbols-outlined">front_hand</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Looking for custom packaging?</h4>
                <p className="text-sm text-slate-500">We offer tailored solutions for specialty stores and unique product shapes.</p>
              </div>
            </div>
            <button onClick={() => window.location.hash = Page.Contact} className="px-6 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-bold text-slate-600 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Contact an Expert
            </button>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto text-center">
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-4">Industry Applications</h2>
          <p className="text-slate-500 dark:text-slate-400">Specialized settings for every department ensure your product is preserved perfectly.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Fresh Meats', icon: 'restaurant', img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc822?q=80&w=2070&auto=format&fit=crop' },
            { title: 'Fruits & Veg', icon: 'nutrition', img: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop' },
            { title: 'Fish & Seafood', icon: 'set_meal', img: 'https://images.unsplash.com/photo-1534604973900-c41ab4c3c3c0?q=80&w=2024&auto=format&fit=crop' },
            { title: 'Cheeses', icon: 'lunch_dining', img: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=2072&auto=format&fit=crop' }
          ].map((app, idx) => (
            <div key={idx} className="relative h-[400px] rounded-2xl overflow-hidden group shadow-lg cursor-pointer">
              <img src={app.img} alt={app.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-left text-white">
                <span className="material-symbols-outlined mb-2 text-primary-light">{app.icon}</span>
                <h3 className="text-xl font-bold font-display">{app.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineered for Precision */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <div>
                <span className="text-primary-light font-bold text-xs uppercase tracking-widest block mb-2">Technical Excellence</span>
                <h2 className="text-slate-900 dark:text-white text-3xl md:text-5xl font-display font-bold leading-tight">Engineered for Precision</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg">Our machines are packed with proprietary sensors and mechanics designed to save you money and headaches.</p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: 'straighten', title: 'Load Height Sensors', desc: 'Automatically detects the height of the product tray, adjusting the wrapping arm in real-time. This prevents crushing of delicate items.' },
                  { icon: 'layers', title: 'Film Pre-Stretch Technology', desc: 'Our patented roller system stretches the film by up to 50% before application, drastically reducing film consumption.' },
                  { icon: 'layers', title: 'Linerless Labeling', desc: 'Eliminate label backing waste. Our systems support variable length linerless labels for more information on the pack.' }
                ].map((tech, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-10 h-10 shrink-0 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-primary-light">
                      <span className="material-symbols-outlined text-xl">{tech.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2 font-display">{tech.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-primary-light/10 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img src="../IMG/aw5600-2_WP02_01.png" className="w-full h-full object-cover" alt="Technical detail" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 p-6 bg-slate-900/80 backdrop-blur-lg rounded-2xl border border-white/20 text-white shadow-2xl">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold tracking-widest text-slate-400">SYSTEM STATUS</span>
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Film Tension</span>
                      <span className="font-bold text-primary-light">Optimal</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Sensor Calib</span>
                      <span className="font-bold">100%</span>
                    </div>
                    <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-light w-[88%]"></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Efficiency Rate</span>
                      <span className="font-bold text-green-400">98.5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-light">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Optimize Your Line?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">Get a free consultation with our packaging engineers. We'll calculate your potential savings and recommend the perfect model for your volume.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-primary-light hover:bg-slate-50 px-10 py-4 rounded-lg font-bold transition-all shadow-xl shadow-black/10">
              Request a Quote
            </button>
            <button className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-10 py-4 rounded-lg font-bold transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <div className="py-6 text-center text-xs text-slate-400 dark:bg-slate-950 border-t border-slate-50 dark:border-slate-900">
        © 2023 Eagle Business Technology. All rights reserved.
      </div>
    </div>
  );
};

export default WrappersPage;