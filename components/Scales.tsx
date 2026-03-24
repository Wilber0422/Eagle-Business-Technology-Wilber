import { useState } from 'react';
import React from 'react';

// Definición de la interfaz para los productos
interface Product {
  id: number;
  name: string;
  mainCat: 'Retail' | 'Dining' | 'Service';
  type: 'Platform and Floor' | 'Table and Counter' | 'Lift' | 'Tanks and Silos' | 'Weighing Belts';
  img: string;
  desc: string;
  icon: string;
}

const ScalesPage: React.FC = () => {
  // Estados para los filtros
  const [filter, setFilter] = useState<string>('Retail');
  const [typeFilter, setTypeFilter] = useState<string>('All');

  // Función para el scroll suave hacia la sección de productos
  const scrollToProducts = () => {
    const section = document.getElementById('product-grid-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Base de datos de productos
  const allScales: Product[] = [
    {
      id: 1, name: "Digi SM 5300X B CON", mainCat: "Retail", type: "Table and Counter",
      icon: "shopping_bag", img: "https://eaglebst.com/wp-content/uploads/2022/12/SM5300-X-B.png",
      desc: "PC-based weighing system with 10.1-inch high-resolution capacitive touchscreen."
    },
    {
      id: 2, name: "Digi SM 5300X H", mainCat: "Retail", type: "Table and Counter",
      icon: "restaurant", img: "https://eaglebst.com/wp-content/uploads/2022/12/SM5300-X-H.png",
      desc: "Intuitive, feature-oriented user interface with video playback capability."
    },
    {
      id: 3, name: "Ishia Uni-3", mainCat: "Retail", type: "Table and Counter",
      icon: "wine_bar", img: "https://eaglebst.com/wp-content/uploads/2022/12/Ishida-Uni-3-Series.png",
      desc: "Price computing scale with premium labeling features and high-speed printing."
    },
    {
      id: 4, name: "Dibal 955 B", mainCat: "Dining", type: "Platform and Floor",
      icon: "local_shipping", img: "https://www.reycotel.com/637-thickbox_default/balanza-dibal-d-955-autoservicio.jpg",
      desc: "Weighing and labeling scale with dual 12.1-inch touch screens."
    },
    {
      id: 5, name: "Dibal 955 H", mainCat: "Dining", type: "Table and Counter",
      icon: "shopping_cart", img: "https://www.dibal.com/media/uploads/productos/D-900_P_ETIQ_10-7_.png",
      desc: "High-performance PC scale with ultra-stylish design and capacitive touch."
    },
    {
      id: 6, name: "Dibal 545 B", mainCat: "Service", type: "Tanks and Silos",
      icon: "inventory_2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-3DW_rL0wuFFRT7jGV1_m9nI-EpDEemIuQ&s",
      desc: "State-of-the-art electronic scale with PC architecture for efficient management."
    },
    {
      id: 7, name: "Dibal LP500", mainCat: "Service", type: "Lift",
      icon: "layers", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3X2iZf2UeqSaGONRLVmMu-oyXhWBYh9k5A&s",
      desc: "Versatile labeling scale designed to offer high speed and accuracy."
    },
    {
      id: 8, name: "Ishida Uni 10 Series", mainCat: "Service", type: "Weighing Belts",
      icon: "conveyor_belt", img: "/ishida-uni-10.jpeg",
      desc: "Price computing scale with intuitive touch screen and compact design."
    }
  ];

  // Lógica de filtrado combinada
  const filteredProducts = allScales.filter(item => {
    const matchMain = item.mainCat === filter;
    const matchType = typeFilter === 'All' || item.type === typeFilter;
    return matchMain && matchType;
  });

  const productTypes = ['All', 'Platform and Floor', 'Table and Counter', 'Lift', 'Tanks and Silos', 'Weighing Belts'];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:px-10 md:py-24 max-w-[1440px] mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <h1 className="text-slate-900 dark:text-white text-5xl md:text-6xl font-display font-bold leading-tight tracking-tight">
              Industrial Weighing <span className="text-primary-light"> Scales and Systems Integration.</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-xl">
              Integrate your scales directly with your PC-based POS system! With the advanced PC capabilities of BRAND scales, you can elevate and optimize your business productivity and revenue. The scales below offer fast and accurate label printing and precise weight measurements.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToProducts}
                className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary-light text-white text-base font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 hover:-translate-y-0.5"
              >
                Explore Models
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full aspect-[16/10] rounded-3xl shadow-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img src="https://eaglebst.com/wp-content/uploads/2023/03/digital-scales-b-11.jpg" alt="POS Terminal" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold mb-4">High-Precision Industrial and Commercial Weighing Solutions</h2>
            <p className="text-slate-500 dark:text-slate-400">We offer robust, integrated weighing systems that optimize accuracy, operational efficiency, and data control in your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'trending_up', title: 'Certified Accuracy', desc: 'Equipment calibrated and ready to comply with commercial and safety regulations.' },
              { icon: 'inventory_2', title: 'Industrial Resistance', desc: 'Designed with high-quality materials (SS304/316) to withstand corrosive or intensive cleaning environments.' },
              { icon: 'mood', title: 'Technical Support', desc: 'After-sales service, calibration and preventive maintenance to ensure your investment performs at its best.' },
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

      {/* Categories Filter (Partners Section) */}
      <section className="py-20 px-6 md:px-10 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-[1440px] mx-auto text-center">
          <div className="text-center mb-12">
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold font-display mb-8">Product Categories</h2>
            <p className="text-slate-400 text-sm mt-2">Our scales do not operate in isolation. We offer complete integration with ERP systems and management software using industrial protocols.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {productTypes.map(type => (
              <button
                key={type}
                onClick={() => setTypeFilter(type)}
                className={`transition-all px-4 py-2 rounded-full text-sm font-bold ${typeFilter === type
                  ? 'bg-primary-light text-white shadow-md scale-105'
                  : 'text-slate-400 hover:text-slate-900 dark:hover:text-white grayscale hover:grayscale-0'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Your Industry (Main Filter) - Added ID for Scroll */}
      <section id="product-grid-section" className="py-24 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-primary-light font-bold text-xs uppercase tracking-widest">Scales Solutions</span>
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-display font-bold">Systems Integration</h2>
          </div>
          <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg w-fit">
            {['Retail', 'Dining', 'Service'].map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setTypeFilter('All'); }}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${filter === cat ? 'bg-white dark:bg-slate-700 text-primary-light shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="relative h-[400px] rounded-2xl overflow-hidden group shadow-lg animate-in fade-in zoom-in duration-300">
                <img src={product.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={product.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                  <span className="material-symbols-outlined mb-4 p-2 bg-white/20 backdrop-blur-md rounded-lg">{product.icon}</span>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-primary-light mb-1">{product.type}</div>
                  <h3 className="text-2xl font-display font-bold mb-3">{product.name}</h3>
                  <p className="text-slate-200 text-sm mb-4 leading-relaxed line-clamp-2">{product.desc}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-400 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl">
              <span className="material-symbols-outlined text-6xl mb-4">inventory_2</span>
              <p className="text-xl font-display">No models found for "{typeFilter}" in {filter}.</p>
              <button onClick={() => setTypeFilter('All')} className="mt-4 text-primary-light font-bold hover:underline">Reset Category Filter</button>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">Ready to Upgrade Your Business?</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-12">Every business is unique. Contact our sales team for a free consultation or demonstration to find the best fit for your business model.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="https://eagle-business-technology-wilber.vercel.app/#contact"
              className="inline-flex items-center justify-center bg-primary-light text-white hover:bg-blue-700 px-10 py-4 rounded-lg font-bold transition-all shadow-xl shadow-blue-500/20 hover:-translate-y-0.5"
            >
              Get Free Consultation
            </a>

            <a
              href="tel:9544001777"
              className="inline-flex items-center justify-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-10 py-4 rounded-lg font-bold hover:bg-slate-50 transition-all shadow-sm gap-2"
            >
              <span className="material-symbols-outlined text-sm">call</span> Call (954)-400-1777
            </a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ScalesPage;