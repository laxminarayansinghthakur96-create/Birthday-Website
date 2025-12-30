
import React from 'react';
import { Section } from '../types';

interface NavigationProps {
  activeSection: Section;
  onNavClick: (section: Section) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavClick }) => {
  const sections = [
    { id: Section.HERO, label: 'Start' },
    { id: Section.JOURNEY, label: 'Memories' },
    { id: Section.ORACLE, label: 'Oracle' },
    { id: Section.CELEBRATION, label: 'Wishes' },
  ];

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => onNavClick(s.id)}
          className="group relative flex items-center"
        >
          <span className={`
            w-2 h-2 rounded-full transition-all duration-500
            ${activeSection === s.id ? 'bg-white h-8 w-1 scale-x-125' : 'bg-white/20 hover:bg-white/50'}
          `} />
          <span className={`
            absolute left-6 text-[10px] tracking-widest uppercase opacity-0 transition-all duration-300
            group-hover:opacity-100 group-hover:translate-x-2 whitespace-nowrap
            ${activeSection === s.id ? 'opacity-100 translate-x-2 font-bold text-white' : 'text-white/40'}
          `}>
            {s.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
