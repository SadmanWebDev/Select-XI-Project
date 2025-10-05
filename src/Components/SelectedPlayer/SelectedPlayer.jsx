import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayer = ({ selectedPlayers, removePlayer, setToggle }) => {
  return (
    <div className="max-w-[1260px] mx-auto">
      {selectedPlayers.map((player) => (
        <SelectedCard
          key={player.id}
          removePlayer={removePlayer}
          player={player}
        ></SelectedCard>
      ))}

      <div className="border w-fit rounded-2xl my-10">
        <button
          onClick={() => setToggle(true)}
          className="bg-[#E7FE29] hover:bg-[#c7dc0d] px-3 py-2 rounded-xl font-semibold m-1"
        >
          Add More Players
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayer;
