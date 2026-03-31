import React, { useRef } from 'react';

const SlicersPage: React.FC = () => {
  // Referencia para la sección Eagle slicers solutions
  const eagleSolutionsRef = useRef<HTMLDivElement>(null);

  // Función para manejar el scroll suave
  const scrollToSolutions = () => {
    eagleSolutionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950">
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/20 w-fit">
                <span className="text-primary-light font-bold text-[10px] uppercase tracking-wider">High-quality cutters</span>
              </div>
              <h1 className="text-slate-900 dark:text-white font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                The performance of these cutters <span className="text-primary-light">is exceptional.</span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-xl">
                Line Kolossal is the top of the range among commercial meat slicers produced by Manconi and it perfectly expresses the dualism tradition-innovation, which is necessary to be always contemporary: the strength coming from a long experience and the ability to look forward.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {/* Botón con función de scroll añadida */}
                {/* <button
                  onClick={scrollToSolutions}
                  className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary-light text-white text-base font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5"
                >
                  Explore Models <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </button> */}
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-8">
                <img
                  src="/slicer.webp"
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">How to choose your meat slicer</h2>
          <p className="text-slate-500 dark:text-slate-400">The slicers of the range include machines with different features to meet the needs of different activities. You can choose among different size of the blade: from 250 to 330 mm, according to the dimension of the product you have to slice.
          </p>
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

      {/* Featured Models - AÑADIDA LA REF AQUÍ */}
      <section id="modelos-section" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          {/* Cabecera del Diseño */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-4">
                Eagle slicers solutions
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Descripcion
              </p>
            </div>
          </div>

          {/* Grid de Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Bizerba GSP H',
                img: '/bizerba-gsp.jpeg',
                desc: 'Manual gravity slicer with Ceraclean® coating for smooth gliding and maximum hygiene.',
                features: ['Dirt-repellent surface, easy deep cleaning.', 'Automatic stop when guard opens.', 'Precise adjustment for perfect slices.']
              },
              {
                title: 'Bizerba Manual gravity slicer GSP H',
                img: '/bizerba-gsp-h.jpeg',
                desc: 'Premium range manual gravity slicer that sets global standards in ergonomics, hygiene and safety for cutting various products.',
                features: ['Inclined carriage facilitates effortless slicing.', 'Drainage system enables quick cleaning.', 'Motor and safety status indicator.']
              },
              {
                title: 'Bizerba Professional meat tenderizer',
                img: '/bizerba-professional.png',
                desc: 'Professional high-performance equipment designed to transform difficult cuts into tender, high-value commercial products with total precision.',
                features: ['Switchable attachments for uniform strips.', 'Durable, easy-clean stainless steel construction.', 'Enhanced texture, faster marinating, cooking.']
              },
              {
                title: 'Bizerba VSP Manual',
                img: '/bizerba-vsp-us.jpeg',
                desc: 'Premium vertical slicer designed for retail and food service environments that demand high performance, rigorous hygiene and superior precision.',
                features: ['Intelligent drive saves energy, noise.', 'Tool-free disassembly, dishwasher-safe design.', 'Intelligent assistance ensures operator safety.']
              },
              {
                title: 'Icone 700',
                img: '/icone-700.png',
                desc: 'High-performance chop slicers designed for intensive use, capable of processing bone-in meats, sausages, and fish with total precision.',
                features: ['Reliable power in cold, humid.', 'Adjustable thickness, versatile feeding options.', '304 stainless, high-pressure, automatic return.']
              },
              {
                title: 'Idrochef 316 touch',
                img: '/Idrochef-316-touch.jpeg',
                desc: 'Professional immersion circulator for sous vide cooking that guarantees absolute thermal precision and high-quality culinary results.',
                features: ['3.5-inch touchscreen, precise temperature control.', 'High-volume cooking, 70-liter capacity.', 'Wi-Fi control, cloud data traceability.']
              },
              {
                title: 'PHX 60',
                img: '/phx-60.png',
                desc: 'High-performance vertical hydraulic sausage stuffers, manufactured entirely in stainless steel to guarantee durability and maximum hygiene.',
                features: ['Flexible speed, automatic mass decompression.', '100% stainless, IP65, closed hydraulic.', 'Mobile with quick piston return.']
              },
              {
                title: 'SX 350',
                img: '/sx-350.png',
                desc: 'Professional band saws made entirely of stainless steel, designed to offer precise cuts and maximum hygiene in demanding environments.',
                features: ['Thick 18/10 stainless, stable, durable.', 'Automatic tensioners, mobile cart, deep cleaning.', 'IP65 protection, water-resistant electricals.']
              },
              {
                title: 'SX-400',
                img: '/sx-400.png',
                desc: 'High-end industrial band saw, designed to offer maximum safety and superior performance in cutting meats and frozen products.',
                features: ['304 stainless, sliding table, precise handling.', 'Tilting table, automatic tensioners, quick cleaning.', 'Fully sealed, water-resistant electrical components.']
              }

            ].map((model, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col group transition-all"
              >
                {/* Contenedor de Imagen */}
                <div className="aspect-[4/3] bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
                  <img
                    src={model.img}
                    alt={model.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Cuerpo de la Tarjeta */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display">
                    {model.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                    {model.desc}
                  </p>

                  {/* Lista de Características */}
                  <ul className="space-y-3 mb-8">
                    {model.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                        <span className="text-blue-600 font-bold">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Pie de Sección / Contacto */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400">
                <span>ⓘ</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Titulo footer de Tarjetas</h4>
                <p className="text-sm text-slate-500">Decripcion footer de Tarjetas.</p>
              </div>
            </div>
            <button className="px-6 py-2 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-bold text-slate-600 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              titulo boton
            </button>
          </div>
        </div>
      </section>

      {/* Ready to Upgrade Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-grid-pattern bg-[size:3rem_3rem]"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to upgrade your slicing capabilities?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">Contact our specialists today to find the perfect Kolossal model for your business needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://eagle-business-technology-wilber.vercel.app/#contact"
              className="inline-flex items-center justify-center bg-primary-light text-white hover:bg-blue-700 px-10 py-4 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-0.5"
            >
              Contact Sale
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SlicersPage;