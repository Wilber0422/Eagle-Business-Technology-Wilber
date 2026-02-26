
import React from 'react';

const SlicersPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950">
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/20 w-fit">
                <span className="text-primary-light font-bold text-[10px] uppercase tracking-wider">Top of the Range</span>
              </div>
              <h1 className="text-slate-900 dark:text-white font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Precision Slicing Redefined: <span className="text-primary-light">The Kolossal Line</span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-xl">
                Experience the gold standard in slicing machinery with the Manconi Kolossal range. Gear-driven precision, superior hygiene, and a perfectly balanced design for the modern professional.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary-light text-white text-base font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5">
                  Request a Demo <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </button>
                <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-8">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAQCzoU0M1XgX_uzRSz6JM90efQ4RwiP52JvNVex4FZOJzJkSuIaedCKKRBnz8T3yw0ksIe6G6gZD2fJIzdjh7y_WnyCTLgN05RxwbupoFxIkQ5GC1j2O8_9euB-RQHnZeIwhn4KKdmUNwo9m5AdG8yLARrYh6NSENYcUo4C3AgryuPixB9EU9tc2xDtVTsZ3NTCBi_QDrROJvpwrcO418TzQPcKQivRRajwJWyN8zZsY-3wI5ckDPnc4VPlIA6_gGNSYEbGFutC5s"
                  className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
                  alt="Kolossal Slicer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineered for Excellence */}
      <section className="py-24 bg-white dark:bg-slate-950 text-center px-6">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Engineered for Excellence</h2>
          <p className="text-slate-500 dark:text-slate-400">The Kolossal line stands apart with its robust construction and obsessive attention to detail, ensuring reliable performance in the most demanding environments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1440px] mx-auto">
          {[
            { icon: 'settings', title: 'Gear-Driven Mechanism', desc: 'Guarantees constant blade speed for precise cuts every time, eliminating slippage common in belt-driven models.' },
            { icon: 'shield', title: 'Premium Materials', desc: 'Constructed from high-quality anodized aluminum and stainless steel components for maximum hygiene and durability.' },
            { icon: 'balance', title: 'Balanced Design', desc: 'Ergonomically designed to reduce operator fatigue, ensure stability during operation, and simplify cleaning procedures.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-10 rounded-2xl text-left border border-slate-100 dark:border-slate-800 transition-all hover:shadow-xl hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-primary-light shadow-sm group-hover:bg-primary-light group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Choosing the Right Slicer */}
      <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Choosing the Right Slicer</h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Not all slicers are created equal. Select the right tool for your produce to minimize waste and maximize presentation.</p>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-4 text-primary-light">
                  <span className="material-symbols-outlined font-bold">straighten</span>
                  <h4 className="font-bold font-display uppercase tracking-widest text-xs">Blade Size Guide</h4>
                </div>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex gap-2"><strong>250mm:</strong> Ideal for smaller delis and cafés.</li>
                  <li className="flex gap-2"><strong>300mm:</strong> The standard for most supermarkets.</li>
                  <li className="flex gap-2"><strong>330mm+:</strong> Heavy-duty volume for large cuts.</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border-l-4 border-green-500 shadow-sm">
                <div className="flex items-center gap-3 mb-4 text-green-600">
                  <span className="material-symbols-outlined font-bold">verified</span>
                  <h4 className="font-bold font-display uppercase tracking-widest text-xs">Special Applications</h4>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Dealing with sticky cheeses or soft cured meats? Ask about our specialized Teflon-coated blades and specific carriage configurations.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-6 group hover:shadow-lg transition-all">
              <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden shrink-0">
                <img src="https://www.bizerba.com/.imaging/focalpoint/1200x1200/dam/jcr:a26f03c3-6bfb-4d3a-927d-f00706cefe3d/slicing-meat-hotpot-worker_20231215154154_1200_px.webp" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Vertical Slicing" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900 dark:text-white font-display">Vertical Slicers</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-red-50 text-red-600 rounded">Fresh Meat</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">Vertical slicing allows for better control with fresh, softer meats that might deform under gravity. Ideal for butchers.</p>
                <div className="flex gap-4 text-[10px] font-bold text-slate-400">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-green-500">check</span> Minimized waste</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-green-500">check</span> Perfect for raw cuts</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-6 group hover:shadow-lg transition-all">
              <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1544077960-604201fe74bc?q=80&w=2071&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gravity Slicing" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900 dark:text-white font-display">Gravity Slicers</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-50 text-blue-600 rounded">Cold Cuts</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">Uses the product's own weight to feed into the blade. The ergonomic choice for deli counters serving ham, salami, and cheese.</p>
                <div className="flex gap-4 text-[10px] font-bold text-slate-400">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-green-500">check</span> Faster operation</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px] text-green-500">check</span> Consistent thickness</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Models */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Featured Models</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Meat Saw',
                subtitle: 'Versatile Professional Slicer',
                img: '',
                specs: { 'Blade Diameter': '350 mm', 'Operation': 'Vertical or Gravity', 'Best For': 'Mixed Deli Use' }
              },
              {
                tag: 'Chop cutter',
                title: 'MAJOR SLICE 350',
                subtitle: 'Heavy Duty Gravity Slicer',
                img: '',
                specs: { 'Blade Diameter': '350 mm', 'Drive': 'Gear Box', 'Material': 'Stainless Steel' }
              },
              {
                title: 'Dicer',
                subtitle: 'Compact Efficiency',
                img: '',
                specs: { 'Blade Diameter': '300 mm', 'Footprint': 'Compact Design', 'Ideal For': 'Small Kitchens' }
              },
              {
                title: 'Vacuum machine',
                subtitle: 'Versatile Professional Slicer',
                img: ' ',
                specs: { 'Blade Diameter': '350 mm', 'Operation': 'Vertical or Gravity', 'Best For': 'Mixed Deli Use' }
              },
              {
                title: 'Patty formers',
                subtitle: 'Versatile Professional Slicer',
                img: ' ',
                specs: { 'Blade Diameter': '350 mm', 'Operation': 'Vertical or Gravity', 'Best For': 'Mixed Deli Use' }
              },
              {
                title: 'Stuffer',
                subtitle: 'Versatile Professional Slicer',
                img: ' ',
                specs: { 'Blade Diameter': '350 mm', 'Operation': 'Vertical or Gravity', 'Best For': 'Mixed Deli Use' }
              },
              {
                title: 'Meat Slicer',
                subtitle: 'Versatile Professional Slicer',
                img: ' ',
                specs: { 'Blade Diameter': '350 mm', 'Operation': 'Vertical or Gravity', 'Best For': 'Mixed Deli Use' }
              },
              {
                title: 'Slicer',
                subtitle: 'Versatile Professional Slicer',
                img: ' ',
                specs: { 'Blade Diameter': '350 mm', 'Operation': 'Vertical or Gravity', 'Best For': 'Mixed Deli Use' }
              },
              {
                title: 'Tenderizer and strip cutter ICP',
                subtitle: 'Versatile Professional Slicer',
                img: ' ',
                specs: { 'Blade Diameter': '350 mm', 'Operation': 'Vertical or Gravity', 'Best For': 'Mixed Deli Use' }
              },
              {
                title: 'LEONARDO',
                subtitle: 'Versatile Professional Slicer',
                img: ' ',
                specs: { 'Blade Diameter': '350 mm', 'Operation': 'Vertical or Gravity', 'Best For': 'Mixed Deli Use' }
              },
              {
                title: 'Food Display',
                subtitle: 'Versatile Professional Slicer',
                img: ' ',
                specs: { 'Blade Diameter': '350 mm', 'Operation': 'Vertical or Gravity', 'Best For': 'Mixed Deli Use' }
              },
              {
                title: 'Chicken master',
                subtitle: 'Versatile Professional Slicer',
                img: ' ',
                specs: { 'Blade Diameter': '350 mm', 'Operation': 'Vertical or Gravity', 'Best For': 'Mixed Deli Use' }
              }

            ].map((model, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col group">
                <div className="aspect-square bg-slate-50 dark:bg-slate-800 p-8 flex items-center justify-center relative">
                  {model.tag && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded">
                      {model.tag}
                    </div>
                  )}
                  <img src={model.img} alt={model.title} className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 font-display">{model.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{model.subtitle}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {Object.entries(model.specs).map(([label, val]) => (
                      <div key={label} className="flex justify-between items-center text-xs border-b border-slate-50 dark:border-slate-800 pb-2">
                        <span className="text-slate-400">{label}</span>
                        <span className="font-bold text-slate-700 dark:text-slate-300">{val}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-3 bg-white dark:bg-slate-800 border border-primary-light text-primary-light text-sm font-bold rounded-lg hover:bg-primary-light hover:text-white transition-all">
                    View Specs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Customization */}
      <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="bg-slate-900 rounded-[40px] overflow-hidden p-10 md:p-20 relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 to-transparent"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-10">
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest border border-white/10 mb-6">Make it Yours</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">Customized to Match Your Brand</h2>
                <p className="text-slate-400 text-lg leading-relaxed mt-6">
                  Don't settle for standard silver. We offer extensive customization options including specific colors for knobs, plastic parts, and even full machine body painting.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {[
                  { name: 'Ferrari Red', color: '#ff0000' },
                  { name: 'Matte Black', color: '#1a1a1a' },
                  { name: 'Eagle Blue', color: '#0f4c81' }
                ].map(item => (
                  <div key={item.name} className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="size-4 rounded-full border border-white/20" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xs font-bold text-white">{item.name}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full cursor-pointer hover:bg-white/10 transition-colors">
                  <span className="material-symbols-outlined text-white text-sm">palette</span>
                  <span className="text-xs font-bold text-white">Custom RAL</span>
                </div>
              </div>

              <button className="h-12 px-8 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors shadow-xl">
                Inquire About Customization
              </button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-8 flex items-center justify-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAQCzoU0M1XgX_uzRSz6JM90efQ4RwiP52JvNVex4FZOJzJkSuIaedCKKRBnz8T3yw0ksIe6G6gZD2fJIzdjh7y_WnyCTLgN05RxwbupoFxIkQ5GC1j2O8_9euB-RQHnZeIwhn4KKdmUNwo9m5AdG8yLARrYh6NSENYcUo4C3AgryuPixB9EU9tc2xDtVTsZ3NTCBi_QDrROJvpwrcO418TzQPcKQivRRajwJWyN8zZsY-3wI5ckDPnc4VPlIA6_gGNSYEbGFutC5s"
                  className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] brightness-75 sepia-[0.3] hue-rotate-[320deg] saturate-[3]"
                  alt="Custom Slicer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Upgrade Section */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Ready to upgrade your slicing capabilities?</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">Contact our specialists today to find the perfect Kolossal model for your business needs.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="h-14 px-10 bg-primary-light text-white font-bold rounded-xl shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">call</span> Contact Sales
          </button>
          <button className="h-14 px-10 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">download</span> Download Full Catalog
          </button>
        </div>
      </section>

      <div className="py-12 px-6 border-t border-slate-50 dark:border-slate-900 dark:bg-slate-950">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded flex items-center justify-center"><span className="material-symbols-outlined text-white text-lg">owl</span></div>
            <span className="font-bold text-slate-900 dark:text-white font-display">Eagle Business Technology</span>
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>© 2023 Eagle Business Technology. All rights reserved.</span>
            <div className="flex gap-4">
              <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">mail</span>
              <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">language</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlicersPage;
