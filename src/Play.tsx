import { useNavigate } from "react-router";
import type { GameResult } from "./GameResults";
import { useState } from "react";

type PlayProps = {
    addNewGameResult: (newGameResult: GameResult) => void;
};

export const Play: React.FC<PlayProps> = ({addNewGameResult}) => {

    const nav = useNavigate();
    const [startTimeStamp] = useState(new Date().toISOString());

    return (
        <>
        <h1>Game On!</h1>
        <button 
            className="btn btn-primary btn-outline"
            onClick={
                () => {
                    addNewGameResult({
                        winner: "Harry",
                        players: [
                            "Harry",
                            "Hermione",
                        ],
                        start: startTimeStamp,
                        end: new Date().toISOString()
                    });
                    nav(-2);
                }
            }>
            End Game
        </button>
        </>
    );
};
