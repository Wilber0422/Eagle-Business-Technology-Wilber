
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto relative z-10 text-center">
          <h1 className="text-white font-display text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            Pioneering the Future<br /><span className="text-primary-light">of Retail Technology</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Delivering integrated, seamless, and profitable digital solutions for retailers worldwide.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-light/10 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Team Collaborating" 
                className="relative rounded-3xl shadow-2xl border-8 border-white dark:border-slate-900"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 w-fit">
              <span className="text-primary-light font-bold text-[10px] uppercase tracking-widest">Our Identity</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
              Who We Are
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Eagle Business Technologies specializes in providing integrated and seamless digital and technological solutions for business ​​retailers. Utilizing our extensive experience in various technologies, we bridge the gap between traditional operations and the digital frontier.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="shrink-0 size-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary-light">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Expert Team</h4>
                  <p className="text-xs text-slate-500">Decades of combined retail tech experience.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 size-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary-light">
                  <span className="material-symbols-outlined">public</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Global Reach</h4>
                  <p className="text-xs text-slate-500">Solutions deployed across multiple continents.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white dark:bg-slate-900 p-12 rounded-[40px] shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
              <div className="size-16 bg-primary-light rounded-2xl flex items-center justify-center mb-10 text-white shadow-lg shadow-primary-light/20 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">rocket_launch</span>
              </div>
              <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Our mission is to provide modern, efficient, and profitable technological solutions for our clients to help optimize their productivity and profits and elevate their business practices. We empower businesses to grow through smart automation and data-driven insights.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-slate-900 p-12 rounded-[40px] shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group">
              <div className="size-16 bg-secondary rounded-2xl flex items-center justify-center mb-10 text-white shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">visibility</span>
              </div>
              <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Elevate our position as a top provider of comprehensive business retail solutions and technology products that generate added value and continued business success for our customers. We envision a world where retail operations are seamless, intelligent, and human-centric.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto text-center">
        <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-grid-pattern bg-[size:3rem_3rem]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to evolve your business?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
              Let's build the future of your retail operation together. Contact our expert team for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => window.location.hash = 'contact'}
                className="bg-primary-light hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-xl shadow-xl shadow-primary-light/20 transition-all"
              >
                Get Started Today
              </button>
              <button 
                onClick={() => window.location.hash = 'solutions'}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-4 px-10 rounded-xl backdrop-blur-sm transition-all"
              >
                View Our Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;