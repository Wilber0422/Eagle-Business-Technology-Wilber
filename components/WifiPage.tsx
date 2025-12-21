
import React from 'react';

const WifiPage: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white dark:bg-slate-900/10">
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 w-fit">
                <span className="material-symbols-outlined text-primary-light text-sm">campaign</span>
                <span className="text-primary-light font-bold text-[10px] uppercase tracking-wider">Wi-Fi Marketing Solutions</span>
              </div>
              <h1 className="text-slate-900 dark:text-white font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Turn Free Wi-Fi into<br /><span className="text-primary-light">Revenue</span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-xl">
                Build customer loyalty and capture valuable data with our Wi-Fi Marketing solutions. Targeted digital ads, automated emails, and SMS campaigns start here.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary-light text-white text-base font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5">
                  Request Consultation <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                </button>
                <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
                  View Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-[1.1/1] rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Person using smartphone with WiFi" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent"></div>
                
                {/* Visual Overlays matching the mockup */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/90">
                  <span className="material-symbols-outlined text-8xl md:text-9xl opacity-80">wifi</span>
                </div>
                
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
                    <span className="material-symbols-outlined">check</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Guest Connected</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Profile captured: returning customer, loves espresso.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 px-6 md:px-10 max-w-4xl mx-auto text-center">
        <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-6">What is Wi-Fi Marketing?</h2>
        <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
          It's a powerful strategy to identify your customers and keep them coming back. Offer free guest Wi-Fi in exchange for contact details, then use that data to drive growth. We simplify the connection process using platforms like <span className="text-primary-light font-bold">Beambox</span> to ensure a seamless experience.
        </p>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white dark:bg-slate-900/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-4">How It Works</h2>
            <p className="text-slate-500 dark:text-slate-400">Seamless connection for your guests, powerful insights for you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', icon: 'wifi', title: 'Connect', desc: 'Guests access free Wi-Fi via a simplified captive portal tailored to your brand.' },
              { num: '02', icon: 'person_add', title: 'Capture', desc: 'Users provide contact info or social login to get online instantly, growing your database.' },
              { num: '03', icon: 'send', title: 'Engage', desc: 'Trigger automated SMS & emails with personalized offers to foster recurring visits.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800 p-10 rounded-2xl relative border border-slate-100 dark:border-slate-700 group hover:bg-white dark:hover:bg-slate-700 transition-all hover:shadow-xl hover:-translate-y-1">
                <span className="absolute top-6 right-8 text-6xl font-black text-slate-200 dark:text-slate-700 group-hover:text-primary-light/10 transition-colors font-display">{step.num}</span>
                <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center mb-8 text-primary-light shadow-sm">
                  <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display">{step.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Solution */}
      <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">Why Choose Our Solution?</h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">In today's digital landscape, connectivity is a commodity. We help you turn that commodity into your most valuable marketing asset.</p>
            </div>
            <div className="space-y-8">
              {[
                { icon: 'schedule', title: 'Increase Dwell Time', desc: 'Customers stay longer and spend more when high-quality, free Wi-Fi is readily available.' },
                { icon: 'database', title: 'Grow Your Database', desc: 'Build a robust CRM of real customer profiles without lifting a finger or manual entry.' },
                { icon: 'sync', title: 'Automated Retention', desc: 'Automatically message customers who haven\'t visited in 30 days with a "We miss you" offer.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-12 h-12 shrink-0 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-primary-light">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 font-display">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl relative">
            <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="Marketing team" />
            <div className="absolute inset-0 bg-primary-light/10 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center">
          <span className="text-primary-light font-bold text-xs uppercase tracking-widest block mb-4">Powerful Connections</span>
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-6">Integrates with tools you love</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-16 max-w-xl mx-auto">Sync data seamlessly with your existing marketing stack.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'Mailchimp', icon: 'mail' },
              { name: 'Constant Contact', icon: 'contact_mail' },
              { name: 'Zapier', icon: 'bolt' },
              { name: 'Twilio', icon: 'chat' },
              { name: 'ActiveCampaign', icon: 'campaign' }
            ].map((brand, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center gap-4 group hover:border-primary-light/50 transition-colors">
                <span className="material-symbols-outlined text-3xl text-slate-300 group-hover:text-primary-light transition-colors">{brand.icon}</span>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-tight">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Section - Better Together */}
      <section className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="bg-slate-900 rounded-[40px] overflow-hidden p-10 md:p-20 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <div className="inline-flex px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest border border-white/10">
                Complete Digital Ecosystem
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">Better Together.</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Wi-Fi Marketing is just the beginning. Combine your customer data with our <span className="text-white font-bold">Digital Signage</span> and <span className="text-white font-bold">Electronic Shelf Labels (ESL)</span> for a fully synchronized retail experience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary-light">check_circle</span>
                  Push in-store offers to Digital Signage based on real-time crowd data.
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary-light">check_circle</span>
                  Update ESL pricing dynamically to match app-exclusive promotions.
                </li>
              </ul>
              <button className="h-12 px-8 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors">
                Explore the Ecosystem
              </button>
            </div>
            
            <div className="relative">
              <div className="aspect-square md:aspect-video rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-900 p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
                
                {/* Visual Diagram matching mockup */}
                <div className="flex items-center justify-between w-full max-w-sm relative">
                   <div className="flex flex-col items-center gap-3 z-10">
                     <div className="size-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                       <span className="material-symbols-outlined text-white text-3xl">wifi</span>
                     </div>
                     <span className="text-[10px] font-bold text-white/60 tracking-widest uppercase">WI-FI</span>
                   </div>
                   
                   <div className="h-px bg-white/20 flex-grow mx-4 relative">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-white animate-pulse"></div>
                   </div>

                   <div className="flex flex-col items-center gap-3 z-10">
                     <div className="size-20 rounded-full bg-primary-light flex items-center justify-center border-4 border-white/20 shadow-2xl">
                       <span className="material-symbols-outlined text-white text-4xl">hub</span>
                     </div>
                     <span className="text-[10px] font-bold text-white tracking-widest uppercase">EAGLE CORE</span>
                   </div>

                   <div className="h-px bg-white/20 flex-grow mx-4 relative">
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-white animate-pulse delay-150"></div>
                   </div>

                   <div className="flex flex-col gap-4 z-10">
                     <div className="size-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                       <span className="material-symbols-outlined text-white text-xl">smart_display</span>
                     </div>
                     <div className="size-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                       <span className="material-symbols-outlined text-white text-xl">sell</span>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-white dark:bg-slate-900 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Ready to transform your guest experience?</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-12">Join thousands of businesses using Eagle Business Technology to grow smarter.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="h-14 px-10 bg-primary-light text-white font-bold rounded-xl shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all">
              Get a Quote
            </button>
            <button className="h-14 px-10 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all">
              Contact Support
            </button>
          </div>
        </div>
      </section>
      
      <div className="py-8 text-center text-[10px] text-slate-400 uppercase tracking-widest border-t border-slate-100 dark:border-slate-800 dark:bg-slate-950">
        © 2023 Eagle Business Technology. All rights reserved.
      </div>
    </div>
  );
};

export default WifiPage;
