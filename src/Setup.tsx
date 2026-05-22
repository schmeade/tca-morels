import { useNavigate } from "react-router";


export const Setup = () => {

    const nav = useNavigate();

  return (
    <>
      <h1>Setup</h1>
      <button 
        className="btn btn-primary btn-outline"
        onClick={
            () => nav('/play')
        }>
        Start Game
      </button>
    </>
  );
};
