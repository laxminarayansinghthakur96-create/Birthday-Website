
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onNameChange: (name: string) => void;
  onNext: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNameChange, onNext }) => {
  const [nameInput, setNameInput] = useState("");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowInput(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      onNameChange(nameInput);
      onNext();
    }
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 space-y-8 max-w-2xl">
        <p className="text-sm tracking-[0.4em] uppercase text-white/40 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          The Universe Aligned For This
        </p>
        
        <h1 className="text-6xl md:text-8xl font-serif font-bold italic tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          Happy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-200">Birthday</span>
        </h1>

        <div className={`transition-all duration-1000 ${showInput ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6">
            <div className="relative group">
              <input
                type="text"
                placeholder="Enter her name..."
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className="bg-transparent border-b border-white/20 py-4 px-2 w-64 md:w-80 text-center text-xl outline-none focus:border-white transition-all duration-500 font-light placeholder:text-white/10"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-focus-within:w-full transition-all duration-700"></div>
            </div>

            <button
              type="submit"
              className="mt-4 px-8 py-3 rounded-full border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-500 text-xs tracking-widest uppercase font-bold"
            >
              Enter The Experience
            </button>
          </form>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll to begin</span>
      </div>
    </section>
  );
};

export default Hero;
