import { Suspense } from "react";
import "./App.css";
import AvailablePlayer from "./Components/AvailablePlayer/AvailablePlayer";
import Navbar from "./Components/Navbar/Navbar";

const playerPromise = fetch("/players.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <AvailablePlayer playerPromise={playerPromise}></AvailablePlayer>
      </Suspense>
    </>
  );
}

export default App;
