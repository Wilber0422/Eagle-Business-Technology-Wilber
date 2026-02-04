
import React, { useState } from 'react';
import { Page } from '../types';

const AW5600Page: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Breadcrumbs */}
      <nav className="px-6 md:px-10 lg:px-20 py-8 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-2 text-[10px] md:text-xs font-medium text-slate-400 uppercase tracking-widest">
          <button onClick={() => window.location.hash = Page.Home} className="hover:text-primary-light transition-colors">Home</button>
          <span className="text-slate-300">/</span>
          <button onClick={() => window.location.hash = Page.Wrappers} className="hover:text-primary-light transition-colors">Wrappers</button>
          <span className="text-slate-300">/</span>
          <span className="text-slate-600 dark:text-slate-300">AW-5600ATII</span>
        </div>
      </nav>

      <section className="px-6 md:px-10 lg:px-20 pb-24 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Product Image Section */}
          <div className="relative group">
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 p-8 flex items-center justify-center">
              <img
                src="https://www.digisystem.com/es/products/PRD00348/product_file/file/aw5600-2_WP02_01.png"
                alt="AW 5600 AT POP"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <button className="absolute top-6 right-6 p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 text-slate-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-xl">search</span>
              </button>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="space-y-8 pt-4">
            <div>
              <span className="text-rose-500 font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Fully integrated weigh-wrap-label system </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">AW-5600ATII </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light">
                Multi-Labeling System Integrated with optional POP and Bottom Labeler, performs all the labeling in one process. The cost of new equipment goes beyond the sticker price and may also include shipping, taxes and loan closing expenses. 100% financing means no up fronts & the rate is credit driven. <br />
                - Equipment cost includes 5% broker fee and escrow fee. <br /> - Application and Invoice per transaction <br /> - Last three months Bank Statements per transaction. <br /> -Credit 680 and above, nothing under 620. Rates determined by credit worthiness.
              </p>
            </div>

            <div className="flex flex-col gap-6 pt-6">
              <div className="flex items-center gap-4">
                <div className="flex border border-slate-200 dark:border-slate-800 rounded-lg h-14 overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-full flex items-center justify-center text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-16 h-full text-center bg-transparent border-none text-slate-900 dark:text-white font-bold focus:ring-0"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-full flex items-center justify-center text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>

                <button
                  className="flex-grow h-14 bg-[#0069B5] text-white font-bold rounded-full shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all uppercase tracking-widest text-xs"
                >
                  Add to Quote
                </button>
              </div>

              <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs text-slate-400 font-medium">
                  Category: <button onClick={() => window.location.hash = Page.Wrappers} className="text-rose-500 hover:underline uppercase tracking-widest">Wrappers</button>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-10">
              <div className="space-y-3">
                <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Efficiency</h4>
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined">eco</span>
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Energy Efficient</span>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Output</h4>
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-primary-light">
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">High Volume</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Features / Specs */}
      <section className="bg-slate-50 dark:bg-slate-900/30 py-24">
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-12">Technical Specifications</h2>
            <div className="space-y-4">
              {[
                { label: 'Weight Range', value: 'Up to 15 kg / 30 lbs' },
                { label: 'Slicing Speed', value: '35 packs per minute' },
                { label: 'Label Application', value: 'Automatic Top & Bottom' },
                { label: 'Connectivity', value: 'Ethernet, Cloud Sync' },
                { label: 'Film Type', value: 'Stretch Film (PVC or PO)' }
              ].map((spec, i) => (
                <div key={i} className="flex justify-between py-4 border-b border-slate-200 dark:border-slate-800 text-sm">
                  <span className="text-slate-400 font-medium">{spec.label}</span>
                  <span className="text-slate-900 dark:text-white font-bold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related CTA */}
      <section className="py-24 px-6 text-center">
        <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-6">Interested in this system?</h3>
        <p className="text-slate-500 mb-10">Speak with our product experts for a personalized configuration and price estimate.</p>
        <button
          onClick={() => window.location.hash = Page.Contact}
          className="bg-primary text-white px-12 py-4 rounded-xl font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all"
        >
          Contact Expert
        </button>
      </section>
    </div>
  );
};

export default AW5600Page;