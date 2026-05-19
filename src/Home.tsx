import { useNavigate } from "react-router";

export const Home = () => {

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
    </>
  );
};
