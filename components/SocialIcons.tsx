
import React from 'react';
import { motion } from 'framer-motion';
import { Icons, PROFILE } from '../constants';

const SocialIcons: React.FC = () => {
  const iconClasses = "w-6 h-6 md:w-7 md:h-7 text-zinc-800 hover:text-black transition-colors duration-300";

  const socialLinks = [
    { name: 'Email', icon: Icons.Email, href: `mailto:${PROFILE.socials.email}` },
    { name: 'Instagram', icon: Icons.Instagram, href: PROFILE.socials.instagram },
    { name: 'X', icon: Icons.X, href: PROFILE.socials.twitter },
    { name: 'LinkedIn', icon: Icons.LinkedIn, href: PROFILE.socials.linkedin },
    { name: 'Discord', icon: Icons.Discord, href: PROFILE.socials.discord },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center md:items-start w-full mt-10"
    >
      <div className="flex items-center gap-8 md:gap-10">
        {socialLinks.map((social) => (
          <motion.a
            key={social.name}
            variants={item}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="block"
          >
            <social.icon className={iconClasses} />
          </motion.a>
        ))}
      </div>

      {/* Quote/Tagline - Mobile-focused/Centric but visible always */}
      <motion.p
        variants={item}
        className="mt-12 text-sm md:text-base font-medium text-zinc-400 italic tracking-wide text-center md:text-left"
      >
        {PROFILE.tagline}
      </motion.p>
    </motion.div>
  );
};

export default SocialIcons;
