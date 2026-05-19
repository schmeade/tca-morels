import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-3">
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <div className="card">
          <button
            className="btn btn-lg btn-outline btn-primary w-full lg:w-64 my-5"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </div>
      </section>

      <div className="card bg-base-100 w-full shadow-lg">
        <div className="card-body p-2">
          <h2 className="card-title">Leaderboards</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </div>
      </div>

      <div className="card bg-base-100 w-full shadow-lg">
        <div className="card-body p-2">
          <h2 className="card-title">Leaderboards</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </div>
      </div>

      <div className="card bg-base-100 w-full shadow-lg">
        <div className="card-body p-2">
          <h2 className="card-title">Leaderboards</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </div>
      </div>

      <div className="card bg-base-100 w-full shadow-lg">
        <div className="card-body p-2">
          <h2 className="card-title">Leaderboards</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </div>
      </div>

      <div className="card bg-base-100 w-full shadow-lg">
        <div className="card-body p-2">
          <h2 className="card-title">Leaderboards</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
        </div>
      </div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </div>
  );
}

export default App;
