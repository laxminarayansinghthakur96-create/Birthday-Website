
export interface Memory {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

export interface WishRequest {
  name: string;
  relationship: string;
  threeTraits: string;
  favoriteVibe: string;
}

export enum Section {
  HERO = 'hero',
  JOURNEY = 'journey',
  ORACLE = 'oracle',
  CELEBRATION = 'celebration'
}
