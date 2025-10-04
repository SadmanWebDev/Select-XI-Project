import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayer = ({ selectedPlayers, removePlayer }) => {
  return (
    <div className="max-w-[1260px] mx-auto">
      {selectedPlayers.map((player) => (
        <SelectedCard
          key={player.id}
          removePlayer={removePlayer}
          player={player}
        ></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayer;
