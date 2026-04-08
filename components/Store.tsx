import React, { useRef } from 'react';

const VoicePage: React.FC = () => {
  // Referencias para el scroll
  const digitalSignageRef = useRef<HTMLDivElement>(null);
  const eagleVoiceRef = useRef<HTMLDivElement>(null);
  const wifiMarketingRef = useRef<HTMLDivElement>(null);

  // Función de scroll suave
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">

      {/* ========================================================= */}
      {/* HERO SECTION MODIFICADO SEGÚN IMAGEN ADJUNTA */}
      {/* ========================================================= */}
      <section className="relative w-full bg-[#004797] dark:bg-slate-950 overflow-hidden">
        {/* Imagen de fondo con superposición azul */}
        <div className="absolute inset-0 z-0">
          <img
            src="/bg-store.jpg"
            alt="Background Team"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-[#004797]/90 dark:bg-slate-950/95"></div>
        </div>

        <div className="relative px-6 py-20 md:px-10 md:py-32 max-w-[1440px] mx-auto z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Columna de Texto (Izquierda) */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <h1 className="text-white text-5xl md:text-6xl font-display font-bold leading-tight tracking-tight">
                The right solution <br /> for your business
              </h1>
              <p className="text-blue-100/90 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-2xl">
                Eagle Business Technology arises from the need of a provider of complex solutions presented in a sensible way and a reasonable price, with the intention of providing correct solution to this need in 2016 a group of professionals meet in different areas with
              </p>

              {/* Botones de Acción */}
              <div className="flex flex-wrap gap-4 pt-6">
                {/* Botón 1: Digital Signage (Estilo Sólido Azul Claro) */}
                <button
                  onClick={() => scrollToSection(digitalSignageRef)}
                  className="flex items-center justify-center rounded-lg h-12 px-8 bg-[#6ca0dc] text-white text-base font-bold hover:bg-blue-400 transition-all shadow-lg shadow-black/10 hover:-translate-y-0.5"
                >
                  Digital Signage
                </button>

                {/* Botón 2: Eagle Voice (Estilo Sólido Blanco) */}
                <button
                  onClick={() => scrollToSection(eagleVoiceRef)}
                  className="flex items-center justify-center rounded-lg h-12 px-8 bg-white text-[#004797] text-base font-bold hover:bg-blue-50 transition-colors shadow-lg shadow-black/10"
                >
                  Eagle voice
                </button>

                {/* Botón 3: WiFi Marketing (Estilo Sólido Blanco) */}
                <button
                  onClick={() => scrollToSection(wifiMarketingRef)}
                  className="flex items-center justify-center rounded-lg h-12 px-8 bg-white text-[#004797] text-base font-bold hover:bg-blue-50 transition-colors shadow-lg shadow-black/10"
                >
                  WiFi Marketing
                </button>
              </div>
            </div>

            {/* Columna de Imagen Flotante (Derecha) */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-[14/10] rounded-[30px] shadow-2xl overflow-hidden border-4 border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
                  alt="Boardroom Meeting"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Superposición sutil en la imagen flotante */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ========================================================= */}
      {/* FIN DEL HERO SECTION MODIFICADO */}
      {/* ========================================================= */}


      {/* Stats Strip - EL RESTO PERMANECE IGUAL */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-slate-900 dark:text-white">99.9%</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Uptime Guarantee</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-slate-900 dark:text-white">2k+</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Agent Scalability</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-slate-900 dark:text-white">HD</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Crystal Clear Voice</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-slate-900 dark:text-white">24/7</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Signage Section */}
      <section ref={digitalSignageRef} className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-primary-light">
              <span className="material-symbols-outlined">settings_input_component</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">Eagle Digital Signage</h2>
            <p className="text-slate-600 dark:text-slate-400 font-bold text-sm">Digital signage is a creative and versatile way to increase messaging and engage customers and guests within your business.</p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Digital signage is a creative and versatile way to increase messaging and engage customers and guests within your business. Digital signage, sometimes called electronic signage, refers to display technologies like LED walls (or video walls), projection and LCD monitors to vividly display webpages, social media stream and news, videos, directions, restaurant menus, retail special sales, marketing messages or digital images.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                'Digital signage software for retail',
                'Fully customizable',
                'Better communicate with your customers'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-primary-light text-xl">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-slate-900 ">
              <img src="/digital-signage.jpeg" className="rounded-xl" alt="Dashboard" />
            </div>
          </div>
        </div>
      </section>

      {/* Eagle Voice Section */}
      <section ref={eagleVoiceRef} className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Contenedor de la Imagen - Modificado para  imagen completa */}
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[5/5] rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800 flex items-center justify-center p-4">
                <img
                  src="/voice.png"
                  className="w-full h-full object-contain" // Cambiado de object-cover a object-contain
                  alt="CloudPhone"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-primary-light">
                <span className="material-symbols-outlined">smartphone</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">Eagle voice</h2>
              <p className="text-slate-600 dark:text-slate-400 font-bold text-sm">Eagle IP PBX Business Phone Systems</p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                VoIP and hybrid PBX, single location and multi-branch phone systems, on-premise and in data-centers virtual phone systems, and multi-tenant PBX.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: 'swap_horiz', title: 'Hosted PBX Platform', desc: 'Move calls between devices instantly.' },
                  { icon: 'contacts', title: 'Swift – think BIG. Innovative IP-PBX System', desc: 'Company directory in your pocket.' },
                  { icon: 'mic', title: 'CloudPhone – Softphone Mobile App', desc: 'Record and review calls on the go.' }
                ].map((f, i) => (
                  <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <span className="material-symbols-outlined text-primary-light text-xl mb-2">{f.icon}</span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{f.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WiFi Marketing Section */}
      <section ref={wifiMarketingRef} className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="w-10 h-10 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg flex items-center justify-center text-cyan-600">
              <span className="material-symbols-outlined">hotel</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">WiFi Marketing</h2>
            <p className="text-slate-600 dark:text-slate-400 font-bold text-sm">How WiFi Marketing Works</p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Offering free wifi for your diners, guests, and customers can not only increase the amount of time they spend within your establishment but can help grow your marketing contacts list. Collect customer contact information in exchange for providing them free wifi access within your business.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                { icon: 'alarm', text: 'Delight your guests with a perfect WiFi experience' },
                { icon: 'cleaning_services', text: 'Tap into your most powerful source of marketing data' },
                { icon: 'receipt_long', text: 'Get more repeat visits with personalised messaging' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-cyan-600 text-xl">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/bg.wifi.jpg" className="w-full" alt="WiFi Marketing" />
            </div>
          </div>
        </div>
      </section>

      {/* ESL Section - Reutilizando referencia o creando nueva si es necesario */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Contenedor de Imagen Ajustado */}
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800 flex items-center justify-center p-4">
                <img
                  src="/esl.png"
                  className="w-full h-full object-contain" // Cambiado de object-cover a object-contain
                  alt="ESL Solution"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-primary-light">
                <span className="material-symbols-outlined">smartphone</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">ESL</h2>
              <p className="text-slate-600 dark:text-slate-400 font-bold text-sm">Update shelf edge prices instantly in all aisles and departments, eliminating the manual exchange of paper labels.</p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Our ESLs are used in industries such as food retail, mobile shops, point-of-sale, home appliances, pharmacy, warehouse, industry, and room signage.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: 'swap_horiz', title: 'Eagle ESL Solution Highlights', desc: 'Full centralized control and accuracy.'
                  },
                  { icon: 'contacts', title: 'How ESL Work? ', desc: ' The display modules use electronic paper or liquid crystal paper to display information on a screen.' },
                  { icon: 'mic', title: 'Taking the pain out of pricing with digital labels', desc: 'Eagle Electronic Shelf Labels (ESLs) can have an immediate impact on store operations and profitability.' }
                ].map((f, i) => (
                  <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <span className="material-symbols-outlined text-primary-light text-xl mb-2">{f.icon}</span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{f.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-1">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">A great business comes from the great idea</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-16">Because we know that no two businesses are the same.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'grid_view', title: 'Digital Signage', desc: 'A modern, elegant and colorful way to communicate your specials.'
              },
              { icon: 'dashboard', title: 'Eagle Voice', desc: 'Secure and reliable Voice over IP (VoIP) services.' },
              { icon: 'query_stats', title: 'WiFi Marketing', desc: 'To accomplish a good SEO positioning on Google.' }
            ].map((tool, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-10 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm text-center group hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 mx-auto text-primary-light group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">{tool.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 font-display">{tool.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-950 text-center relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to upgrade your communication infrastructure?
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Scalable from 2 to 2,000 agents. Get a custom quote tailored to your business needs today.
          </p>
          <div className="flex flex-col items-center gap-6">
            <a
              href="https://outlook.office365.com/book/EagleBusiness@eaglebst.com/?ismsaljsauthenabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary-light text-white hover:bg-blue-700 px-12 py-4 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-0.5"
            >
              Request Quote
            </a>
            <p className="text-slate-500 text-xs">No credit card required for consultation.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoicePage;