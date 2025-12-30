
import React from 'react';
import { Memory } from '../types';

interface MemoryJourneyProps {
  recipientName: string;
}

const MEMORIES: Memory[] = [
  {
    id: '1',
    title: 'The Spark',
    description: 'The first time our worlds collided. Everything changed in that single heartbeat.',
    image: 'https://picsum.photos/seed/moment1/800/600',
    date: 'Spring 2024'
  },
  {
    id: '2',
    title: 'Late Night Echoes',
    description: 'When the world slept, we spoke in whispers and dreams. The nights were our kingdom.',
    image: 'https://picsum.photos/seed/moment2/800/600',
    date: 'Summer 2024'
  },
  {
    id: '3',
    title: 'Digital Hearts',
    description: 'Across every screen and signal, our connection only grew stronger.',
    image: 'https://picsum.photos/seed/moment3/800/600',
    date: 'Autumn 2024'
  }
];

const MemoryJourney: React.FC<MemoryJourneyProps> = ({ recipientName }) => {
  return (
    <section className="py-24 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 italic">A journey with you, <span className="text-purple-300">{recipientName}</span></h2>
          <p className="text-white/40 max-w-xl text-lg leading-relaxed">
            Every second we've shared is a pixel in the masterpiece of our story. Here are the moments that define us.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {MEMORIES.map((memory, index) => (
            <div 
              key={memory.id} 
              className={`group relative transition-all duration-700 hover:-translate-y-4 ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-24'}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl glass glow-gold/5">
                <img 
                  src={memory.image} 
                  alt={memory.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] tracking-widest text-white/40 uppercase mb-2 block">{memory.date}</span>
                  <h3 className="text-2xl font-serif mb-2">{memory.title}</h3>
                </div>
              </div>
              <p className="mt-6 text-white/50 text-sm leading-loose opacity-0 group-hover:opacity-100 transition-all duration-500">
                {memory.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoryJourney;
