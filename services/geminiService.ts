
import { GoogleGenAI, Type } from "@google/genai";
import { WishRequest } from "../types";

export const generateHeartfeltWish = async (data: WishRequest): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    Write an ultra-personal, poetic, and modern birthday letter for someone named ${data.name}.
    They are my ${data.relationship}.
    Key traits about them: ${data.threeTraits}.
    The overall vibe of the message should be: ${data.favoriteVibe}.
    
    Make it emotional, sincere, and avoid clichés. 
    Write it as if it's the year 2025 and we've shared many digital and physical memories.
    Focus on why their existence makes the world brighter.
    Maximum length: 250 words.
    Format with beautiful line breaks.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.8,
        topP: 0.95,
      },
    });

    return response.text || "Your presence is the greatest gift of all. Wishing you a year of magic and growth.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The stars are a bit quiet today, but my heart isn't. Happy Birthday!";
  }
};
