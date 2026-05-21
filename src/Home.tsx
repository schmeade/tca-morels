import { useNavigate } from "react-router";
import type { GeneralFacts } from "./GameResults";

type HomeProps = {
    genreralFacts: GeneralFacts    
};

export const Home: React.FC<HomeProps> = (
    generalFacts
) => {

    console.log(generalFacts);
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
