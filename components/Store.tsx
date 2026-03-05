
import React from 'react';

const VoicePage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:px-10 md:py-24 max-w-[1440px] mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <h1 className="text-slate-900 dark:text-white text-5xl md:text-6xl font-display font-bold leading-tight tracking-tight">
              The right solution <br /> for your business
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-xl">
              Eagle Business Technology arises from the need of a pro-vider of complex solutions presented in a sensible way and a reasonable price, with the intention of providing cor-rect solution to this need in 2016 a group of professionals meet in different areas with
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary-light text-white text-base font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5">
                Get a Consultation
              </button>
              <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-blue-50 dark:bg-slate-900 text-primary-light dark:text-blue-400 text-base font-bold hover:bg-blue-100 dark:hover:bg-slate-800 transition-colors">
                View Hardware
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full aspect-[16/10] rounded-3xl shadow-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
                alt="Boardroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
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

      {/* Hosted PBX Platform */}
      <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-primary-light">
              <span className="material-symbols-outlined">settings_input_component</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">Eagle Digital Signage</h2>
            <p className="text-slate-600 dark:text-slate-400 font-bold text-sm">Digital signage is a creative and versatile way to
              increase messaging and engage customers and guests within your business.</p>
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
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 p-2">
              <img src="/digital-signage.jpeg" className="rounded-xl" alt="Dashboard" />
            </div>
          </div>
        </div>
      </section>

      {/* CloudPhone Mobility */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/voice.png" className="w-full h-full object-cover" alt="CloudPhone" />
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

      {/* Hotel Phone Systems */}
      <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-primary-light">
              <span className="material-symbols-outlined">hotel</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">WiFi Marketing</h2>
            <p className="text-slate-600 dark:text-slate-400 font-bold text-sm">How WiFi Marketing Works</p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Offering free wifi for your diners, guests, and customers can not only increase the amount of time they spend within your establishment but can help grow your marketing contacts list. Collect customer contact information in exchange for providing them free wifi access within your business.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                {
                  icon: 'alarm', text: 'Delight your guests with a perfect WiFi experience'
                },
                { icon: 'cleaning_services', text: 'Tap into your most powerful source of marketing data' },
                { icon: 'receipt_long', text: 'Get more repeat visits with personalised messaging' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-primary-light text-xl">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/wifi-m.png" className="w-full" alt="Hotel Reception" />
            </div>
          </div>
        </div>
      </section>

      {/* Management & Monitoring Tools */}
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

      {/* Eaglebst UC Series */}
      {/* <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">Eaglebst UC Series</h2>
            <p className="text-slate-500">Premium HD IP Phones designed for modern business.</p>
          </div>
          <button className="text-primary-light font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
            View all models <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Eagle UC-900', desc: 'Entry-level Gigabit IP Phone with color screen. Perfect for general office use.', tags: ['HD Voice', '2 Lines'], img: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop' },
            { title: 'Eagle UC-2000', desc: 'Executive phone with large touch screen and built-in Bluetooth/Wi-Fi.', tags: ['Touch Screen', '16 Lines'], img: 'https://images.unsplash.com/photo-1520923179270-e0344d2d48c8?q=80&w=2071&auto=format&fit=crop' },
            { title: 'Eagle Conference', desc: 'Premium conference phone with 360-degree pickup for meeting rooms.', tags: ['360° Audio', 'Android OS'], img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="aspect-[4/3] bg-slate-50 dark:bg-slate-800 p-6 flex items-center justify-center">
                <img src={item.img} alt={item.title} className="max-h-full object-contain mix-blend-multiply dark:mix-blend-normal rounded-lg shadow-sm" />
              </div>
              <div className="p-8 text-center">
                <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">{item.desc}</p>
                <div className="flex justify-center gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-full text-[10px] font-bold text-slate-400">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-24 bg-slate-950 text-center relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to upgrade your communication infrastructure?</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">Scalable from 2 to 2,000 agents. Get a custom quote tailored to your business needs today.</p>
          <div className="flex flex-col items-center gap-6">
            <button className="bg-primary-light text-white hover:bg-blue-700 px-12 py-4 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/20">
              Request Quote
            </button>
            <p className="text-slate-500 text-xs">No credit card required for consultation.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoicePage;
