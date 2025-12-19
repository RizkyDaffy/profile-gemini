
import React from 'react';
import { motion } from 'framer-motion';
import { BENEFITS } from '../constants';

const BenefitSection: React.FC = () => {
  return (
    <section className="py-24">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tighter"
        >
          Why Me?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-md text-zinc-500 text-lg md:text-xl font-medium leading-relaxed"
        >
          Combining aesthetic sensibility with technical rigor to deliver results that stand out in the digital landscape.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 bg-zinc-100 rounded-[3rem] overflow-hidden border border-zinc-200/50">
        {BENEFITS.map((benefit, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-[#fcfcfc] p-10 md:p-16 flex flex-col gap-8 hover:bg-zinc-50 transition-colors duration-500"
          >
            <div className="flex items-center justify-between">
              <div className="p-4 bg-zinc-100 rounded-2xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-500">
                <benefit.icon className="w-8 h-8" />
              </div>
              <span className="text-zinc-200 text-6xl font-black italic opacity-20 group-hover:opacity-40 transition-opacity">0{idx + 1}</span>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed text-base md:text-lg">
                {benefit.description}
              </p>
            </div>

            {/* Subtle highlight line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BenefitSection;
