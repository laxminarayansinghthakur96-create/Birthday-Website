
import React, { useState } from 'react';
import { generateHeartfeltWish } from '../services/geminiService';
import { WishRequest } from '../types';

interface WishOracleProps {
  recipientName: string;
}

const WishOracle: React.FC<WishOracleProps> = ({ recipientName }) => {
  const [loading, setLoading] = useState(false);
  const [wish, setWish] = useState<string | null>(null);
  const [form, setForm] = useState<WishRequest>({
    name: recipientName,
    relationship: 'Soulmate',
    threeTraits: 'Kind, Radiant, Brilliant',
    favoriteVibe: 'Poetic & Romantic'
  });

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateHeartfeltWish({ ...form, name: recipientName });
    setWish(result);
    setLoading(false);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto glass rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side: Controls */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.02]">
            <h2 className="text-3xl font-serif mb-8 italic">The Heart Oracle</h2>
            <p className="text-sm text-white/40 mb-8 leading-relaxed">
              Let our digital consciousness craft a wish as unique as your soul. Describe the feeling, and let the magic happen.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-white/40 mb-2">Relationship</label>
                <select 
                  value={form.relationship}
                  onChange={(e) => setForm({...form, relationship: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm focus:border-purple-400 outline-none transition-all"
                >
                  <option value="Soulmate">Soulmate</option>
                  <option value="Best Friend">Best Friend</option>
                  <option value="The One">The One</option>
                  <option value="Secret Crush">Secret Crush</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] tracking-widest uppercase text-white/40 mb-2">3 Defining Traits</label>
                <input 
                  type="text"
                  value={form.threeTraits}
                  onChange={(e) => setForm({...form, threeTraits: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm focus:border-purple-400 outline-none"
                  placeholder="e.g. Joyful, Mysterious, Kind"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-widest uppercase text-white/40 mb-2">Wishes Vibe</label>
                <select 
                  value={form.favoriteVibe}
                  onChange={(e) => setForm({...form, favoriteVibe: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm focus:border-purple-400 outline-none"
                >
                  <option value="Poetic & Romantic">Poetic & Romantic</option>
                  <option value="Futuristic & Deep">Futuristic & Deep</option>
                  <option value="Sweet & Simple">Sweet & Simple</option>
                  <option value="Playful & Fun">Playful & Fun</option>
                </select>
              </div>

              <button 
                onClick={handleGenerate}
                disabled={loading}
                className="w-full py-4 bg-white text-black text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-purple-200 transition-all disabled:opacity-50"
              >
                {loading ? 'Consulting the Stars...' : 'Generate Birthday Wish'}
              </button>
            </div>
          </div>

          {/* Right Side: Result */}
          <div className="p-8 md:p-12 flex flex-col items-center justify-center relative min-h-[400px]">
            {loading ? (
              <div className="flex flex-col items-center gap-6">
                <div className="w-12 h-12 border-2 border-white/10 border-t-white rounded-full animate-spin"></div>
                <p className="text-xs tracking-widest uppercase text-white/40">Gathering digital stardust...</p>
              </div>
            ) : wish ? (
              <div className="animate-in fade-in zoom-in duration-1000">
                <div className="text-4xl text-purple-300/20 absolute top-4 left-4 font-serif italic">“</div>
                <div className="relative z-10 text-lg leading-relaxed font-serif text-white/80 whitespace-pre-wrap">
                  {wish}
                </div>
                <div className="text-4xl text-purple-300/20 absolute bottom-4 right-4 font-serif italic">”</div>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border border-white/5 rounded-full mx-auto flex items-center justify-center">
                   <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
                <p className="text-sm text-white/20 italic">The Oracle awaits your input...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WishOracle;
