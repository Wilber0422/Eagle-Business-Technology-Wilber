'use client';

import { useState, useEffect } from 'react';
import React from 'react';

// Definición de la interfaz para los productos
interface Product {
  id: number;
  name: string;
  mainCat: 'Counter' | 'Hanging' | 'Printer';
  type: string;
  img: string;
  desc: string;
  icon: string;
}

const ScalesPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('Counter');

  // --- LÓGICA DEL CARRUSEL DE LA VALLA ---
  const [billboardIndex, setBillboardIndex] = useState(0);
  const billboardSlides = [
    "https://eaglebst.com/wp-content/uploads/2023/03/digital-scales-b-11.jpg",
    "https://eaglebst.com/wp-content/uploads/2022/12/SM5300-X-B.png",
    "https://eaglebst.com/wp-content/uploads/2022/12/SM5300-X-H.png",
    "https://www.dibal.com/media/uploads/productos/D-900_P_ETIQ_10-7_.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBillboardIndex((prev) => (prev === billboardSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [billboardSlides.length]);

  const productTypes = ['Counter', 'Hanging ', 'Printer'];

  const allScales: Product[] = [
    {
      id: 1,
      name: "Digi SM 5300X B CON",
      mainCat: "Printer",
      type: "Production Printer",
      icon: "shopping_bag",
      img: "https://eaglebst.com/wp-content/uploads/2022/12/SM5300-X-B.png",
      desc: "PC-based weighing system with 10.1-inch high-resolution capacitive touchscreen."
    },
    {
      id: 2, name: "Digi SM 5300X H", mainCat: "Hanging", type: "Hanging Scales",
      icon: "restaurant", img: "https://eaglebst.com/wp-content/uploads/2022/12/SM5300-X-H.png",
      desc: "Intuitive, feature-oriented user interface with video playback capability."
    },
    {
      id: 3, name: "Ishia Uni-3", mainCat: "Counter", type: "Bench Scales",
      icon: "wine_bar", img: "https://eaglebst.com/wp-content/uploads/2022/12/Ishida-Uni-3-Series.png",
      desc: "Price computing scale with premium labeling features and high-speed printing."
    },
    {
      id: 4, name: "Dibal 955 B", mainCat: "Counter", type: "Bench Scales",
      icon: "local_shipping", img: "https://www.reycotel.com/637-thickbox_default/balanza-dibal-d-955-autoservicio.jpg",
      desc: "Weighing and labeling scale with dual 12.1-inch touch screens."
    },
    {
      id: 5, name: "Dibal 955 H", mainCat: "Hanging", type: "Hanging Scales",
      icon: "shopping_cart", img: "https://www.dibal.com/media/uploads/productos/D-900_P_ETIQ_10-7_.png",
      desc: "High-performance PC scale with ultra-stylish design and capacitive touch."
    },
    {
      id: 6, name: "Dibal 545 B", mainCat: "Counter", type: "Bench Scales",
      icon: "inventory_2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-3DW_rL0wuFFRT7jGV1_m9nI-EpDEemIuQ&s",
      desc: "State-of-the-art electronic scale with PC architecture for efficient management."
    },
    {
      id: 7, name: "Dibal LP500", mainCat: "Printer", type: "Production Printer",
      icon: "layers", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3X2iZf2UeqSaGONRLVmMu-oyXhWBYh9k5A&s",
      desc: "Versatile labeling scale designed to offer high speed and accuracy."
    },
    {
      id: 8, name: "Ishida Uni 10 Series", mainCat: "Counter", type: "Bench Scales",
      icon: "conveyor_belt", img: "/ishida-uni-10.jpeg",
      desc: "Price computing scale with intuitive touch screen and compact design."
    }
  ];

  const filteredProducts = allScales.filter(item => item.mainCat === filter);

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Estilos para la Valla Publicitaria */}
      <style jsx global>{`
        .billboard-container {
          position: relative;
          width: 100%;
          max-width: 650px;
          filter: drop-shadow(0 50px 30px rgb(0 0 0 / 0.2));
        }
        .billboard-mockup {
          width: 100%;
          height: auto;
          display: block;
          position: relative;
          z-index: 9;
          pointer-events: none;
        }
        .billboard-content-area {
          position: absolute;
          top: 23.5%;
          left: 12.5%;
          width: 75.2%;
          height: 42.2%;
          z-index: 10;
          overflow: hidden;
          transform: skewY(-4.2deg) rotateX(2deg);
          background: #000;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative w-full pt-8 pb-6 lg:pt-2 lg:pb-3 overflow-hidden bg-slate-50 dark:bg-slate-950">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] bg-[size:2rem_2rem] opacity-40 dark:opacity-10"></div>
        <div className="px-6 md:px-10 lg:px-20 max-w-[1440px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4 text-left">
              <h1 className="text-slate-900 dark:text-white font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Industrial Weighing <br />
                <span className="text-primary-light bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Scales and Systems Integration.
                </span>
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
                Integrate your scales directly with your PC-based POS system! With the advanced PC capabilities of BRAND scales, you can elevate and optimize your business productivity and revenue. The scales below offer fast and accurate label printing and precise weight measurements.
              </p>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute w-[120%] h-[120%] bg-gradient-to-br from-primary/10 to-secondary/10 blur-[100px] rounded-full -z-10"></div>
              <div className="billboard-container translate-y-4">
                <img src="/cartel-luminoso-realista.png" alt="Billboard Mockup" className="billboard-mockup" />
                <div className="billboard-content-area">
                  {billboardSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === billboardIndex ? "opacity-100" : "opacity-0"}`}
                    >
                      <img src={slide} alt="Content" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-4">High-Precision Industrial and Commercial Weighing Solutions</h2>
            <p className="text-slate-500 dark:text-slate-400">We offer robust, integrated weighing systems that optimize accuracy, operational efficiency, and data control in your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'trending_up', title: 'Certified Accuracy', desc: 'Equipment calibrated and ready to comply with commercial and safety regulations.' },
              { icon: 'inventory_2', title: 'Industrial Resistance', desc: 'Designed with high-quality materials to withstand intensive cleaning environments.' },
              { icon: 'mood', title: 'Technical Support', desc: 'After-sales service, calibration and preventive maintenance to ensure your investment performs.' },
              { icon: 'payments', title: 'Advanced Technology', desc: 'Smart indicators with touch screens, USB/Bluetooth connectivity and database management.' }
            ].map((feat, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 text-primary-light">
                  <span className="material-symbols-outlined text-2xl">{feat.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 font-display">{feat.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-6 md:px-10 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="text-slate-900 dark:text-white text-2xl font-bold font-display mb-8">Product Categories</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {productTypes.map(type => (
              <div key={type} className="px-4 py-2 rounded-full text-sm font-bold text-slate-400 border border-slate-100 dark:border-slate-800">
                {type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions (Grid Actualizado con estilo Wrapper) */}
      <section id="product-grid-section" className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-primary-light font-bold text-xs uppercase tracking-widest">Scales Solutions</span>
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold">Systems Integration</h2>
          </div>
          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg w-fit">
            {['Counter', 'Hanging', 'Printer'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${filter === cat ? 'bg-white dark:bg-slate-700 text-primary-light shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col group animate-in fade-in zoom-in duration-300 hover:shadow-md transition-all cursor-pointer"
            >
              {/* Contenedor Imagen */}
              <div className="aspect-[4/3] bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-primary-light text-white text-[10px] font-bold px-2 py-1 rounded">
                  {product.type}
                </div>
              </div>

              {/* Contenido de Tarjeta (Estilo Wrapper) */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-3">
                  {product.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  {product.desc}
                </p>

                {/* Lista de Especificaciones (estilo Wrapper) */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-[16px] text-primary-light">check_circle</span>
                    High-Precision Sensors
                  </li>
                  <li className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-[16px] text-primary-light">check_circle</span>
                    Seamless POS Integration
                  </li>
                </ul>

                {/* Botón de especificaciones (estilo Wrapper) */}
                {/* <button className="mt-auto flex items-center gap-2 text-primary-light font-bold text-sm hover:gap-3 transition-all">
                  View Full Specs
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Ready to Upgrade Your Business?</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-12">Contact our sales team for a free consultation to find the best fit for your business model.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://eagle-business-technology-wilber.vercel.app/#contact" className="inline-flex items-center justify-center bg-primary-light text-white hover:bg-blue-700 px-10 py-4 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-0.5">
              Get Free Consultation
            </a>
            <a href="tel:9544001777" className="inline-flex items-center justify-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-10 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all shadow-sm gap-2">
              <span className="material-symbols-outlined text-sm">call</span> Call (954)-400-1777
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScalesPage;