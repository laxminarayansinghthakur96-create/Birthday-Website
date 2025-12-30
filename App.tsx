
import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import MemoryJourney from './components/MemoryJourney';
import WishOracle from './components/WishOracle';
import Finale from './components/Finale';
import Navigation from './components/Navigation';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);
  const [recipientName, setRecipientName] = useState<string>("Someone Special");
  
  // Ref for intersection observer
  const sectionRefs = {
    [Section.HERO]: useRef<HTMLDivElement>(null),
    [Section.JOURNEY]: useRef<HTMLDivElement>(null),
    [Section.ORACLE]: useRef<HTMLDivElement>(null),
    [Section.CELEBRATION]: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as Section);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (section: Section) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-purple-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 blur-[120px] rounded-full"></div>
      </div>

      <Navigation activeSection={activeSection} onNavClick={scrollTo} />

      <main className="relative z-10">
        <div id={Section.HERO} ref={sectionRefs[Section.HERO]} className="min-h-screen">
          <Hero onNameChange={setRecipientName} onNext={() => scrollTo(Section.JOURNEY)} />
        </div>

        <div id={Section.JOURNEY} ref={sectionRefs[Section.JOURNEY]} className="min-h-screen border-t border-white/5">
          <MemoryJourney recipientName={recipientName} />
        </div>

        <div id={Section.ORACLE} ref={sectionRefs[Section.ORACLE]} className="min-h-screen border-t border-white/5">
          <WishOracle recipientName={recipientName} />
        </div>

        <div id={Section.CELEBRATION} ref={sectionRefs[Section.CELEBRATION]} className="min-h-screen border-t border-white/5">
          <Finale recipientName={recipientName} />
        </div>
      </main>

      <footer className="py-12 px-6 text-center text-white/30 text-xs tracking-widest uppercase border-t border-white/5">
        Designed for a moment that lasts forever • 2025
      </footer>
    </div>
  );
};

export default App;
