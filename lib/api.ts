export interface ApiMatch {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | string;
  awayScore: number | string;
  status: string;
  minute: string;
  league: string;
}

export async function fetchLiveScores(): Promise<ApiMatch[]> {
  const apiKey = process.env.NEXT_PUBLIC_RAPIDAPI_KEY;

  if (!apiKey) {
    console.warn("RapidAPI key missing in environment variables.");
    return [];
  }

  try {
    const response = await fetch(
      'https://free-livescore-api.p.rapidapi.com/livescore/all',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key': apiKey,
          'x-rapidapi-host': 'free-livescore-api.p.rapidapi.com',
        },
        next: { revalidate: 60 }, // Auto refresh every 60 seconds
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    if (data && Array.isArray(data.results)) {
      return data.results.slice(0, 6).map((match: any, index: number) => ({
        id: match.id || `live-${index}`,
        homeTeam: match.home_team?.name || match.homeTeam || 'Home Team',
        awayTeam: match.away_team?.name || match.awayTeam || 'Away Team',
        homeScore: match.home_score ?? match.scores?.home ?? '0',
        awayScore: match.away_score ?? match.scores?.away ?? '0',
        status: match.status === 'inplay' ? 'LIVE' : match.status || 'FT',
        minute: match.minute ? `${match.minute}'` : 'FT',
        league: match.league?.name || 'Football',
      }));
    }

    return [];
  } catch (error) {
    console.error("Failed to fetch live scores from RapidAPI:", error);
    return [];
  }
}