import { durationFormatter } from "human-readable";

//
// More getting-started/data-experiments
//

// 
// Intro to timestamps and date math...
//
const timestamp = new Date().toISOString();

const start = "2026-02-14T18:43:50.629Z";
const end = "2026-02-14T18:59:59.123Z";

const gameDurationInMilliseconds = Date.parse(end) - Date.parse(start);

const lastPlayedAgoInMilliseconds = Date.now() - Date.parse(end);

//
// Type definitions...
//

export type GameResult = {
    winner: string;
    players: string[];

    start: string;
    end: string;
};

export type LeaderboardEntry = {
    wins: number;
    losses: number;
    avg: string;
    name: string;
};

export type GeneralFacts = {
    lastPlayed: string;
    totalGames: number;
    shortestGame: string;
    longestGame: string;
};

//
// Exported functions...
//


export const getGeneralFacts = (games: GameResult[]): GeneralFacts => {

    const now = Date.now();

    const gamesLastPlayedAgoInMilliseconds = games.map(
        x => now - Date.parse(x.end)
    );

    const mostRecentlyPlayedInMilliseconds = Math.min(
        ...gamesLastPlayedAgoInMilliseconds
    );

    const gameDurationsInMilliseconds = games.map(
        x => Date.parse(x.end) - Date.parse(x.start)
    );

    return {
        lastPlayed: `${formatLastPlayed(
            mostRecentlyPlayedInMilliseconds
        )} ago`,
        totalGames: games.length,
        shortestGame: formatGameDuration(
            Math.min(...gameDurationsInMilliseconds)),
        longestGame: formatGameDuration(
            Math.max(...gameDurationsInMilliseconds)),
    };
};

export const getLeaderboardEntry = (
    games: GameResult[],
    player: string,
): LeaderboardEntry => {

    const countOfWins = games.filter(
        x => x.winner == player
    ).length;

    const totalGames = games.filter(
        x => x.players.some(
            y => y == player
        )
    ).length;

    const avg = totalGames > 0
        ? countOfWins / totalGames
        : 0
    ;

    return {
        wins: countOfWins,
        losses: totalGames - countOfWins,
        avg: `${avg.toFixed(3)}`,
        name: player

    };
};

// Helper functions

const formatGameDuration = durationFormatter<string>();

const formatLastPlayed = durationFormatter<string>(
    {
        allowMultiples: [
            "years",
            "months",
            "days",
        ]
    }

);
