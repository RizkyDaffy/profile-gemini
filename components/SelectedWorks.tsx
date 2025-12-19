
import React from 'react';
import { motion } from 'framer-motion';
import { WORKS } from '../constants';

const SelectedWorks: React.FC = () => {
  return (
    <section className="py-20 md:py-32 border-t border-zinc-100/50">
      {/* Section Header - Left Aligned for Editorial Feel */}
      <div className="max-w-4xl mb-20">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-xs font-black tracking-[0.3em] text-blue-600 uppercase mb-4 block"
        >
          Portfolio
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-extrabold text-zinc-900 mb-8 tracking-tighter leading-[1.1]"
        >
          Selected <br /> <span className="text-zinc-300">Creations.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl"
        >
          A curated collection of digital products where code meets cinematic precision. 
          Focusing on robust architecture and flawless user experiences.
        </motion.p>
      </div>

      {/* Grid Layout - Enhanced Visual Rhythm */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
        {WORKS.map((work, idx) => {
          // Create an alternating layout for a "premium" feel
          const isFullWidth = idx === 0;
          const colSpan = isFullWidth ? "lg:col-span-12" : "lg:col-span-6";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`${colSpan} group relative flex flex-col`}
            >
              {/* Image Card */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-100 aspect-video md:aspect-[21/9] lg:aspect-auto lg:h-[500px] border border-zinc-200/50 shadow-sm transition-all duration-700 hover:shadow-2xl">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Floating Meta Tag */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-zinc-900 border border-white/50 shadow-sm">
                    {idx === 0 ? "Featured Project" : `0${idx + 1}`}
                  </span>
                </div>

                {/* Glass Hover Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-lg px-8 py-4 rounded-full shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                    <span className="text-sm font-bold text-zinc-900">Explore Narrative</span>
                  </div>
                </div>
              </div>

              {/* Text Info - Offset/Overlapping slightly on larger projects */}
              <div className={`mt-10 ${isFullWidth ? 'lg:pl-12 lg:-mt-16 lg:z-30' : ''}`}>
                <div className={`${isFullWidth ? 'lg:bg-white lg:p-12 lg:rounded-[2rem] lg:shadow-xl lg:border lg:border-zinc-100 lg:max-w-xl' : ''}`}>
                  <h3 className="text-3xl md:text-4xl font-black text-zinc-900 mb-3 tracking-tighter">
                    {work.title}
                  </h3>
                  <p className="text-blue-600 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-6">
                    {work.subtitle}
                  </p>
                  <p className="text-zinc-500 font-medium leading-relaxed mb-8 line-clamp-2">
                    {work.description}
                  </p>
                  
                  <motion.button 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-zinc-900 text-sm font-black uppercase tracking-widest group/btn"
                  >
                    <span className="border-b-2 border-zinc-900 pb-1 group-hover/btn:border-blue-600 group-hover/btn:text-blue-600 transition-all">
                      {work.cta}
                    </span>
                    <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SelectedWorks;
