
import React, { useState } from 'react';

interface FinaleProps {
  recipientName: string;
}

const Finale: React.FC<FinaleProps> = ({ recipientName }) => {
  const [isBlown, setIsBlown] = useState(false);

  return (
    <section className="h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
         {[...Array(20)].map((_, i) => (
           <div 
             key={i}
             className="absolute w-1 h-1 bg-white rounded-full animate-float"
             style={{
               top: `${Math.random() * 100}%`,
               left: `${Math.random() * 100}%`,
               animationDelay: `${Math.random() * 5}s`,
               opacity: Math.random()
             }}
           />
         ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-serif italic mb-12">Make a wish, {recipientName}</h2>
        
        {/* Interactive Cake/Candle Visual */}
        <div 
          onClick={() => setIsBlown(true)}
          className={`cursor-pointer group relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-16 transition-all duration-1000 ${isBlown ? 'scale-90 opacity-50' : 'hover:scale-105'}`}
        >
          {/* Candle Flame */}
          {!isBlown && (
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-12">
               <div className="w-4 h-8 bg-gradient-to-t from-orange-500 via-yellow-300 to-white rounded-full blur-[2px] animate-pulse mx-auto"></div>
               <div className="w-12 h-12 bg-orange-500/20 rounded-full blur-xl absolute -top-4 -left-2 animate-pulse"></div>
            </div>
          )}
          
          {/* Cake Base (Abstract) */}
          <div className="w-full h-full glass rounded-full flex items-center justify-center border-2 border-white/5 relative">
            <div className="w-[80%] h-[80%] rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 blur-md"></div>
            </div>
            {/* Click Text */}
            {!isBlown && (
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-40 transition-all">
                Blow out the flame
              </span>
            )}
          </div>
        </div>

        {isBlown && (
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 space-y-8">
            <h3 className="text-4xl md:text-5xl font-serif italic text-white/90">Forever is only the beginning.</h3>
            <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed">
              May this year be as radiant as your smile, as profound as your thoughts, and as beautiful as the soul I've come to know.
            </p>
            <div className="pt-8">
               <button 
                 onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                 className="px-12 py-4 border border-white/10 rounded-full text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-700"
               >
                 Relive the Journey
               </button>
            </div>
          </div>
        )}
      </div>

      {/* Confetti (Simulated) */}
      {isBlown && [...Array(50)].map((_, i) => (
        <div 
          key={`c-${i}`}
          className="absolute z-0 w-2 h-2 rounded-full animate-bounce"
          style={{
            top: `-20px`,
            left: `${Math.random() * 100}%`,
            backgroundColor: ['#A855F7', '#6366F1', '#D4AF37', '#FFF'][Math.floor(Math.random() * 4)],
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`,
            transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`,
            transition: 'transform 5s ease-in'
          }}
        />
      ))}
    </section>
  );
};

export default Finale;
