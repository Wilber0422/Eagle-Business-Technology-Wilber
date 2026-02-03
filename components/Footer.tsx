
import React from 'react';
import { Page } from '../types';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-primary-light to-primary text-white pt-16 pb-10">
      <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

          {/* About Us */}
          <div className="lg:col-span-1.5 flex flex-col gap-6">
            <h4 className="text-xl font-display font-bold uppercase tracking-tight">About us</h4>
            <p className="text-white/80 leading-relaxed text-sm">
              Eagle Business Technology specializes in providing modern, efficient, and profitable technological solutions for business retailers worldwide. We have the solutions to support your retail operation from technology hardware and software, and supplies for your retail store: Scales, Slicers, Wrappers, Point of Sale, Self-Checkout, Business Solutions, Wi-Fi Marketing, Electronic Self-Signage and supplies.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xl font-display font-bold uppercase tracking-tight mb-6">Solutions</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><a className="hover:text-white/70 transition-colors" href={`#${Page.Pos}`}>Point of Sales (POS)</a></li>
              <li><a className="hover:text-white/70 transition-colors" href={`#${Page.Signage}`}>Digital Signage</a></li>
              <li><a className="hover:text-white/70 transition-colors" href={`#${Page.Wifi}`}>Wi-Fi Marketing</a></li>
              <li><a className="hover:text-white/70 transition-colors" href={`#${Page.Esl}`}>Scale Solutions</a></li>
              <li><a className="hover:text-white/70 transition-colors" href={`#${Page.Slicers}`}>Slicer Solutions</a></li>
              <li><a className="hover:text-white/70 transition-colors" href={`#${Page.Wrappers}`}>Wrapper Solutions</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display font-bold uppercase tracking-tight mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li><a className="hover:text-white/70 transition-colors" href={`#${Page.Home}`}>About Us</a></li>
              <li><a className="hover:text-white/70 transition-colors" href="#solutions">Services</a></li>
              <li><a className="hover:text-white/70 transition-colors" href="https://outlook.office365.com/book/EagleBusiness@eaglebst.com/?ismsaljsauthenabled=true" target="_blank" rel="noopener noreferrer">Free Consultation</a></li>
              <li><a className="hover:text-white/70 transition-colors" href={`#${Page.Terms}`}>Terms of Use</a></li>
              <li><a className="hover:text-white/70 transition-colors" href={`#${Page.Contact}`}>Contact Us</a></li>
            </ul>
          </div>

          {/* Follow Us & Support */}
          <div>
            <h4 className="text-xl font-display font-bold uppercase tracking-tight mb-6">Follow Us!</h4>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent">book</span>
                <a
                  className="hover:text-white/70 transition-colors"
                  href="https://www.facebook.com/Eaglebusinesst"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent">photo_camera</span>
                <a
                  className="hover:text-white/70 transition-colors"
                  href="https://www.instagram.com/eaglebusinesstechnology/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent">support_agent</span>
                <a className="hover:text-white/70 transition-colors" href="https://www.zoho.com/es-xl/assist/join/" target="_blank" rel="noopener noreferrer">Request Support</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-accent">bar_chart</span>
                <a
                  className="hover:text-white/70 transition-colors"
                  href="https://www.zoho.com/books/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Financial Center
                </a>
              </li>
            </ul>

            <div className="mt-10">
              <h4 className="text-xl font-display font-bold uppercase tracking-tight mb-4">Support</h4>
              <a
                href="https://www.zoho.com/es-xl/assist/join/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-slate-900 px-5 py-2.5 rounded shadow-lg hover:bg-slate-100 transition-all font-bold text-xs uppercase"
              >
                <span className="material-symbols-outlined text-slate-900 text-sm">settings_remote</span>
                Remote Connections
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <h4 className="text-xl font-display font-bold uppercase tracking-tight">Contact Us</h4>
            <div className="flex flex-col gap-5 text-sm">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-accent text-2xl">call</span>
                <a className="hover:text-white/70 transition-colors" href="tel:+19544001777">+1 954-400-1777</a>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-accent text-2xl">mail</span>
                <a className="hover:text-white/70 transition-colors" href="mailto:sales@eaglebst.com">sales@eaglebst.com</a>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-accent text-2xl">location_on</span>
                <span className="leading-relaxed">
                  3190 South State Road 7 Suite 5 Miramar FL 33023
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>© 2026 Eagle Business Technology. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={`#${Page.Terms}`} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href={`#${Page.Terms}`} className="hover:text-white transition-colors">Terms of Use</a>
            <div className="flex gap-2 ml-4">
              <span className="material-symbols-outlined">mail</span>
              <span className="material-symbols-outlined">language</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;