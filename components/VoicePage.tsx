
import React from 'react';

const VoicePage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:px-10 md:py-24 max-w-[1440px] mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <h1 className="text-slate-900 dark:text-white text-5xl md:text-6xl font-display font-bold leading-tight tracking-tight">
              Enterprise-Grade<br />Communication
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-xl">
              Powering your business with next-gen Hosted PBX, VoIP solutions, and seamless connectivity anywhere. Experience crystal clear HD voice and 99.9% uptime.
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">Hosted PBX Platform</h2>
            <p className="text-slate-600 dark:text-slate-400 font-bold text-sm">Centralized Management with MT Manager</p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Our Multi-Tenant IP PBX platform offers a robust, scalable foundation for your business communication needs. With the MT Manager, you gain complete control over your telephony infrastructure from a single pane of glass.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                'Multi-Tenant Architecture for branch isolation',
                'Granular permission controls',
                'Real-time system health monitoring'
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
              <img src="https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2070&auto=format&fit=crop" className="rounded-xl" alt="Dashboard" />
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
                <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="CloudPhone" />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-primary-light">
                <span className="material-symbols-outlined">smartphone</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">CloudPhone Mobility</h2>
              <p className="text-slate-600 dark:text-slate-400 font-bold text-sm">Your Office Extension, Anywhere</p>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Empower your workforce with CloudPhone applications for iOS, Android, and Desktop. Employees can use their office extension on personal devices, ensuring they never miss a business call.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: 'swap_horiz', title: 'Seamless Transfers', desc: 'Move calls between devices instantly.' },
                  { icon: 'contacts', title: 'Unified Contacts', desc: 'Company directory in your pocket.' },
                  { icon: 'mic', title: 'Call Recording', desc: 'Record and review calls on the go.' }
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">Hotel Phone Systems</h2>
            <p className="text-slate-600 dark:text-slate-400 font-bold text-sm">Complete Concierge Integration</p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Elevate your guest experience with our specialized hospitality solutions. Our systems integrate seamlessly with major Property Management Systems (PMS) to automate workflows and improve service delivery.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                { icon: 'alarm', text: 'Automated Wake-up Calls' },
                { icon: 'cleaning_services', text: 'Room Status Updates (Clean/Dirty)' },
                { icon: 'receipt_long', text: 'Simplified Billing & Voicemail Management' }
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
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" className="w-full" alt="Hotel Reception" />
            </div>
          </div>
        </div>
      </section>

      {/* Management & Monitoring Tools */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Management & Monitoring Tools</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-16">Gain deep insights and real-time control over your call center operations with our suite of management tools.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'grid_view', title: 'Switchboard', desc: 'Visualize active calls in real-time. Drag and drop to transfer, park, or intercept calls instantly.' },
              { icon: 'dashboard', title: 'Wallboards', desc: 'Display critical performance metrics like SLA, agents online, and calls in queue on large screens.' },
              { icon: 'query_stats', title: 'StatExplorer', desc: 'Drill down into historical data with in-depth call analysis. Generate reports on volume and duration.' }
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
      <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
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
      </section>

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
      
      <div className="py-8 text-center border-t border-slate-50 dark:border-slate-900 dark:bg-slate-950">
        <div className="flex items-center justify-center gap-2 mb-4">
           <div className="size-6 bg-primary rounded flex items-center justify-center"><span className="material-symbols-outlined text-white text-xs">owl</span></div>
           <span className="font-bold text-slate-900 dark:text-white">Eagle Business Technology</span>
        </div>
        <p className="text-[10px] text-slate-400">© 2023 Eagle Business Technology. All rights reserved.</p>
      </div>
    </div>
  );
};

export default VoicePage;
