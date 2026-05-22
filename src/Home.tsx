import { useNavigate } from "react-router";
import type { GeneralFacts, LeaderboardEntry } from "./GameResults";

type HomeProps = {
    generalFacts: GeneralFacts,
    leaderboard: LeaderboardEntry[],
};

export const Home: React.FC<HomeProps> = ({
    generalFacts,
    leaderboard
}) => {

   
    const nav = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <button 
        className="btn btn-primary btn-outline"
        onClick={
            () => nav('/setup')
        }>
        Setup a Game
      </button>

    <div className="card bg-base-100 w-full shadow-lg my-5">
        <div className="card-body p-2">
            <h2 className="card-title">General Facts</h2>
            <table className="table table-zebra">
                <tbody>
                    <tr>
                        <td>Last Played</td>
                        <th>{generalFacts.lastPlayed}</th>
                    </tr>
                    <tr>
                        <td>Total Games</td>
                        <th>{generalFacts.totalGames}</th>
                    </tr>
                    <tr>
                        <td>Shortest Game</td>
                        <th>{generalFacts.shortestGame}</th>
                    </tr>
                    <tr>
                        <td>Longest Game</td>
                        <th>{generalFacts.longestGame}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="card bg-base-100 w-full shadow-lg my-5">
        <div className="card-body p-2">
            <h2 className="card-title">Leaderboard</h2>
            {
                leaderboard.length === 0 && (
                    <p className="text-center">No games played yet!</p>
                )
            }
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>AVG</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map(x => (
                        <tr key={x.name}>
                            <td>{x.name}</td>
                            <td>{x.wins}</td>
                            <td>{x.losses}</td>
                            <td>{x.avg}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    </>
  );
};
