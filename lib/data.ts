export interface Article {
  id: string;
  title: string;
  category: string;
  author: string;
  timestamp: string;
  readTime: string;
  imageUrl: string;
}

export interface Standing {
  pos: number;
  team: string;
  mp: number;
  w: number;
  d: number;
  l: number;
  pts: number;
}

export interface MatchScore {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  status: 'LIVE' | 'HT' | 'FT' | 'UPCOMING';
  minute?: string;
  league: string;
}

export const HERO_ARTICLE: Article = {
  id: 'hero-1',
  title: 'Asante Kotoko Unveils New Tactical Setup Ahead of Super Clash against Hearts of Oak',
  category: 'GHANA PREMIER LEAGUE',
  author: 'Kwame Mensah',
  timestamp: '20 mins ago',
  readTime: '4 min read',
  imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200'
};

export const SECONDARY_HERO: Article[] = [
  {
    id: 'sec-1',
    title: 'Mohammed Kudus Scores Stunning Solo Goal in Premier League Clash',
    category: 'PLAYERS ABROAD',
    author: 'Yaa Asantewaa',
    timestamp: '1 hour ago',
    readTime: '3 min read',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'sec-2',
    title: 'Black Stars Coach Confirms 26-Man Squad for Upcoming AFCON Qualifiers',
    category: 'BLACK STARS',
    author: 'Emmanuel Osei',
    timestamp: '3 hours ago',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'sec-3',
    title: 'Ampem Darkoa Ladies Secure Historic Qualification Slot',
    category: 'WOMENS PREMIER LEAGUE',
    author: 'Abena Kyei',
    timestamp: '5 hours ago',
    readTime: '2 min read',
    imageUrl: 'https://images.unsplash.com/photo-1560272564-6695203842a3?auto=format&fit=crop&q=80&w=600'
  }
];

export const GPL_STANDINGS: Standing[] = [
  { pos: 1, team: 'Asante Kotoko', mp: 12, w: 8, d: 3, l: 1, pts: 27 },
  { pos: 2, team: 'Medeama SC', mp: 12, w: 7, d: 4, l: 1, pts: 25 },
  { pos: 3, team: 'Hearts of Oak', mp: 12, w: 6, d: 4, l: 2, pts: 22 },
  { pos: 4, team: 'Nsoatreman FC', mp: 12, w: 6, d: 3, l: 3, pts: 21 },
  { pos: 5, team: 'Dreams FC', mp: 12, w: 5, d: 4, l: 3, pts: 19 },
  { pos: 6, team: 'Aduana Stars', mp: 12, w: 5, d: 3, l: 4, pts: 18 }
];

export const LIVE_MATCHES: MatchScore[] = [
  { id: 'm1', homeTeam: 'Asante Kotoko', awayTeam: 'Hearts of Oak', homeScore: 2, awayScore: 1, status: 'LIVE', minute: "68'", league: 'GPL' },
  { id: 'm2', homeTeam: 'Medeama SC', awayTeam: 'Dreams FC', homeScore: 0, awayScore: 0, status: 'HT', league: 'GPL' },
  { id: 'm3', homeTeam: 'Arsenal', awayTeam: 'West Ham', homeScore: 3, awayScore: 1, status: 'FT', league: 'EPL' },
  { id: 'm4', homeTeam: 'Real Madrid', awayTeam: 'Barcelona', homeScore: 1, awayScore: 2, status: 'LIVE', minute: "82'", league: 'La Liga' }
];