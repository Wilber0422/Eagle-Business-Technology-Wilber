
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send data to an API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2029&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto relative z-10 text-center">
          <h1 className="text-white font-display text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tight">Contact Us</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Are you looking for quality, proven retail business technology solutions for your company? We are here to help with any questions you may have.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white">Office Inquiries</h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                For inquiries regarding pricing, demos, or press requests, please contact our office, or fill out the form.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Call Us</h4>
                  <p className="text-slate-500 text-sm hover:text-primary transition-colors">
                    <a href="tel:+19544001777">+1 954-400-1777</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email Us</h4>
                  <p className="text-slate-500 text-sm hover:text-primary transition-colors">
                    <a href="mailto:sales@eaglebst.com">sales@eaglebst.com</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">Visit Us</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    3190 South State Road 7 Suite 5<br />
                    Miramar FL 33023
                  </p>
                </div>
              </div>
            </div>

            {/* Support Callout */}
            <div className="p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <span className="material-symbols-outlined text-3xl">support_agent</span>
                <h3 className="text-lg font-bold">Existing Client?</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                If you are an existing Eagle Business Technology client looking for support, please request support here.
              </p>
              <a 
                href="https://www.zoho.com/es-xl/assist/join/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all"
              >
                Request Support <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white dark:bg-slate-900 rounded-[32px] p-8 md:p-12 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="size-20 rounded-full bg-green-500 text-white flex items-center justify-center mb-6 shadow-xl shadow-green-500/20">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-500">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary transition-all dark:text-white"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary transition-all dark:text-white"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Inquiry about POS Systems"
                    className="w-full h-14 px-6 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary transition-all dark:text-white"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    required
                    placeholder="Tell us how we can help your business..."
                    className="w-full h-40 p-6 bg-slate-50 dark:bg-slate-800 border-none rounded-xl focus:ring-2 focus:ring-primary transition-all resize-none dark:text-white"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full h-14 bg-primary text-white font-bold rounded-xl shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all flex items-center justify-center gap-3"
                >
                  <span className="material-symbols-outlined">send</span>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-slate-100 dark:bg-slate-900 relative">
        <div className="absolute inset-0 grayscale opacity-40 dark:opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl flex flex-col items-center text-center gap-2 border border-slate-100 dark:border-slate-700">
            <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white mb-2">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <h5 className="font-bold text-slate-900 dark:text-white">Our Headquarters</h5>
            <p className="text-xs text-slate-500">Miramar, Florida, USA</p>
            <a 
              href="https://maps.google.com/?q=3190+South+State+Road+7+Suite+5+Miramar+FL+33023" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 text-[10px] font-black uppercase tracking-widest text-primary hover:underline"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;