
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'Life', id: 'life' },
    { label: 'Benefits', id: 'benefits' },
    { label: 'Work', id: 'work' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="relative w-full z-[100] mb-8 md:mb-12">
      {/* 
        Main Header Row: 
        Uses flexbox to keep all 3 components on the same line on desktop.
      */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-2 py-4 gap-6 md:gap-0">
        
        {/* Left Side: Name */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:flex-1 text-left"
        >
          <span 
            className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 cursor-pointer whitespace-nowrap"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Rizky Daffy
          </span>
        </motion.div>

        {/* 
          Middle: Sticky Navigation 
          This container is 'sticky', so when the page scrolls, it detaches 
          from the header row and sticks to the top.
        */}
        <div className="sticky top-6 z-[110] md:flex-none flex justify-center pointer-events-none w-full md:w-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="pointer-events-auto flex items-center gap-5 md:gap-10 px-8 py-3.5 md:px-10 md:py-4 bg-white/70 backdrop-blur-2xl border border-white/40 shadow-xl shadow-black/[0.05] rounded-full ring-1 ring-black/[0.02]"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="text-[10px] md:text-xs font-black text-zinc-900 hover:text-blue-600 transition-colors whitespace-nowrap tracking-widest uppercase"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Learn More Button */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:flex-1 text-right flex justify-end"
        >
          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white px-6 py-2.5 md:px-8 md:py-3.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 shadow-lg shadow-blue-500/20 active:scale-95 group whitespace-nowrap"
          >
            Learn More
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
