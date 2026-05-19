import { useNavigate } from "react-router";

export const Play = () => {

    const nav = useNavigate();

  return (
    <>
      <h1>Game On!</h1>
      <button 
        className="btn btn-primary btn-outline"
        onClick={
            () => nav(-2)
        }>
        End Game
      </button>
    </>
  );
};
