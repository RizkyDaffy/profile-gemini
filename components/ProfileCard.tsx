
import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE, Icons } from '../constants';

const ProfileCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-zinc-900"
    >
      {/* Container aspect ratios tailored for cinematic framing */}
      <div className="aspect-[3/4] md:aspect-[21/9] lg:aspect-[2.4/1] relative overflow-hidden">
        {/* Background Image with improved positioning to show face */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={PROFILE.imageUrl}
            alt={PROFILE.name}
            className="w-full h-full object-cover object-[center_10%] md:object-[center_15%] cinematic-blur grayscale scale-110 md:scale-100 transition-all duration-700"
          />
        </motion.div>

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white uppercase leading-none mb-3 md:mb-4">
              {PROFILE.name}
            </h1>

            {/* Username with Verified Badge */}
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <span className="text-sm md:text-base font-medium text-zinc-300/80">@{PROFILE.username}</span>
              <Icons.Verified className="w-4 h-4 md:w-5 md:h-5 text-sky-500 fill-current" />
            </div>

            {/* Role / Company */}
            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-zinc-300 uppercase">
              {PROFILE.role} at <span className="text-sky-400">{PROFILE.company}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
