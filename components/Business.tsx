
import React from 'react';

const SignagePage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Digital Signage Hero"
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight mb-6">
            SIM Business Suite: <br /><span className="text-primary-light">High-Level Business <br /> Management</span>
          </h1>
          <p className="text-slate-200 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            A centralized solution that allows companies to manage purchasing, inventory, logistics, and sales analytics from a unified system, creating a solid foundation for growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary-light text-white text-base font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5">
              Start Your Project
            </button>
            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white/10 backdrop-blur-md border border-white/20 text-white text-base font-bold hover:bg-white/20 transition-colors">
              View Hardware
            </button>
          </div>
        </div>
      </section>

      {/* Versatile Hardware Technologies */}
      <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-4">Versatile Hardware Technologies</h2>
          <p className="text-slate-500 dark:text-slate-400">From massive video walls to intimate projection mapping, we have the hardware to match your vision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Operational Visibility',
              desc: 'Get clear data on whats happening in real time with your inventories and purchases.',
              icon: 'grid_view',
              img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop'
            },
            {
              title: 'Inventory Control',
              desc: 'Track product movement, improve stock accuracy, and reduce shortages.',
              icon: 'monitor',
              img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1957&auto=format&fit=crop'
            },
            {
              title: 'Scalability',
              desc: 'Build a technological base ready to expand to multiple locations.',
              icon: 'videocam',
              img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 text-left flex flex-col shadow-sm group hover:shadow-md transition-all">
              <div className="p-8">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mb-6 text-primary-light">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>
              <div className="mt-auto h-48 overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content Management Made Simple */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4 text-primary-light">
                  <span className="material-symbols-outlined text-sm">developer_board</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">CMS Software</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">Modules and Operational Areas</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-6 text-lg leading-relaxed">
                  Experience PowerPoint-like ease of use. Our intuitive CMS features drag-and-drop functionality, allowing you to customize templates and schedule content effortlessly without technical expertise.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  { icon: 'check_circle', text: 'SIMerp' },
                  { icon: 'check_circle', text: 'Sales and Distribution' },
                  { icon: 'check_circle', text: 'SIMecommerce' },
                  { icon: 'check_circle', text: 'SIMapp' },
                  { icon: 'check_circle', text: 'Advanced Reporting' }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-green-500">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary-light text-white text-base font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                Explore Software
              </button>
            </div>

            <div className="relative">
              <div className="rounded-[40px] bg-white dark:bg-slate-800 p-4 shadow-2xl border border-slate-100 dark:border-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                  className="rounded-[32px] w-full"
                  alt="CMS Interface Mockup"
                />
                <div className="absolute bottom-10 -right-4 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 hidden md:flex items-center gap-3">
                  <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Now Playing: Summer Promo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lift & Learn Interactive Experience */}
      <section className="py-24 bg-slate-900 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative group">
                <img src="" className="w-full h-full object-cover" alt="Retail Interaction" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>

                <div className="absolute bottom-8 left-8 flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl text-white">
                  <div className="size-12 bg-primary-light rounded-full flex items-center justify-center animate-bounce">
                    <span className="material-symbols-outlined">touch_app</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Interactive Trigger</h4>
                    <p className="text-[10px] text-white/70">Lift product to play content</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-white space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4 text-primary-light">
                  <span className="material-symbols-outlined text-sm">hub</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">IoT Innovation</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">Application Sectors</h2>
                <p className="text-slate-400 mt-6 text-lg leading-relaxed">
                  Create memorable in-store experiences with our IoT Digital Signage. When a customer lifts a product, sensors trigger the display to instantly show specific commercials, detailed specs, or comparison data.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: 'sensors', title: 'Retail', desc: 'Supermarkets, grocery stores and liquor stores.' },
                  { icon: 'leaderboard', title: 'Distribution', desc: 'Operations focused on wholesale sales.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                    <span className="material-symbols-outlined text-primary-light mb-2">{item.icon}</span>
                    <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Strategy */}
      <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-4">The Eagle Approach</h2>
          <p className="text-slate-500 dark:text-slate-400">Maximizing the impact of digital signage requires more than just hardware. It requires strategy.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: 'visibility', title: 'Operational Review', desc: 'We analyze your current workflow.' },
            { icon: 'loop', title: 'Gap Identification', desc: 'We detected flaws in inventory, purchasing, and reporting.' },
            { icon: 'ads_click', title: 'Definition of Scope', desc: 'We select SIM modules that align with your sales model.' },
            { icon: 'update', title: 'Planning and Data', desc: 'We structure the migration of data, users, and integrations.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 text-left hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mb-6 text-primary-light">
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 font-display">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ready to Digitalize CTA */}
      <section className="py-24 bg-primary-light relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 scale-150 rotate-12"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Ready to Digitalize Your Business?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">Get in touch with our expert team to design a custom digital signage solution that fits your space and budget.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-primary-light hover:bg-slate-50 px-10 py-4 rounded-lg font-bold transition-all shadow-xl shadow-black/10">
              Schedule Consultation
            </button>
            <button className="bg-transparent text-white border-2 border-white hover:bg-white/10 px-10 py-4 rounded-lg font-bold transition-all">
              Contact Sales
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

export default SignagePage;
