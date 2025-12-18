
import React from 'react';
import { motion } from 'framer-motion';
import { LIFE_IMAGES } from '../constants';

const LifeSection: React.FC = () => {
  return (
    <div className="py-12">
      <motion.h2 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-12 tracking-tight"
      >
        Life
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {LIFE_IMAGES.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 bg-zinc-100"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </div>
            {/* Elegant vignette overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LifeSection;
