
import React from 'react';
import { motion } from 'framer-motion';
import { TOOLS } from '../constants';

const LanguagesAndTools: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-zinc-900 mb-4 tracking-tight"
        >
          Languages and Tools
        </motion.h2>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 px-4">
        {TOOLS.map((tool, idx) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.03, duration: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group flex items-center justify-center p-4 md:p-6 bg-white rounded-xl shadow-sm border border-zinc-100 transition-all duration-300 hover:shadow-md aspect-square"
          >
            <img
              src={tool.icon}
              alt={tool.name}
              className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
              title={tool.name}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LanguagesAndTools;
