import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayer from "./Components/AvailablePlayer/AvailablePlayer";
import Navbar from "./Components/Navbar/Navbar";
import SelectedPlayer from "./Components/SelectedPlayer/SelectedPlayer";

const playerPromise = fetch("/players.json").then((res) => res.json());

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(10000000);

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-w-[1260px] mx-auto flex justify-between items-center font-bold mb-11">
        <h1 className="text-2xl">Available Players</h1>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`btn rounded-l-2xl ${
              toggle === true ? "bg-[#E7FE29]" : ""
            } border-r-0 rounded-r-[0]`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`btn rounded-r-2xl border-l-0 rounded-l-[0] ${
              toggle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected<span>(0)</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePlayer
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playerPromise={playerPromise}
          ></AvailablePlayer>
        </Suspense>
      ) : (
        <SelectedPlayer></SelectedPlayer>
      )}
    </>
  );
}

export default App;
