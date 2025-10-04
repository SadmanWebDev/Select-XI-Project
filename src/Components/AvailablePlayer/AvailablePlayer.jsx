import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayer = ({
  playerPromise,
  setAvailableBalance,
  availableBalance,
}) => {
  const players = use(playerPromise);
  return (
    <div className="max-w-[1260px] mx-auto m-5 grid grid-cols-1 md:grid-cols-3 gap-5 ">
      {players.map((player) => (
        <PlayerCard
          key={player.id}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          player={player}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayer;
