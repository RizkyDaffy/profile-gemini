
import React from 'react';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import SocialIcons from './components/SocialIcons';
import LifeSection from './components/LifeSection';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#fcfcfc] text-zinc-900 selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        {/* Unified Navigation Header */}
        <Navbar />

        {/* Content Sections */}
        <div className="flex flex-col gap-16 md:gap-24 mt-8">
          {/* Benefits Section */}
          <section id="about" className="flex flex-col scroll-mt-32">
            <ProfileCard />
            <SocialIcons />
          </section>

          {/* Life Gallery Section */}
          <section id="life" className="scroll-mt-32">
            <LifeSection />
          </section>

          {/* Benefit Section */}
          <section id="benefits" className="scroll-mt-32">
            <BenefitSection />
          </section>
        </div>

        {/* Contact Section / Footer */}
        <footer id="contact" className="mt-40 pb-20 pt-16 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] md:text-xs font-medium text-zinc-400 uppercase tracking-[0.2em] scroll-mt-32">
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="text-zinc-900 font-bold text-lg mb-1 tracking-tight normal-case">Let's build something together.</span>
            <span>© 2024 KlyroByte Indonesia, All Rights Reserved.</span>
          </div>
          <div className="hidden md:block text-zinc-200">|</div>
          <div className="text-zinc-900 font-bold hover:text-blue-600 cursor-pointer transition-colors normal-case text-lg tracking-tight">
            dappy@klyrobyte.fun
          </div>
        </footer>
      </div>
    </main>
  );
};

export default App;
