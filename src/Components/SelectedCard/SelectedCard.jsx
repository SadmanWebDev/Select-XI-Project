import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const SelectedCard = ({ player, removePlayer }) => {
  const remove = () => {
    removePlayer(player);
  };
  return (
    <div className="flex justify-between items-center border-2 rounded-xl p-3 mt-4">
      <div className="flex items-center">
        <img
          className=" w-[60px] h-[60px] rounded-xl mr-2"
          src={player.player_image}
          alt=""
        />
        <div>
          <h1 className="font-bold text-lg">{player.player_name}</h1>
          <p className="text-gray-500">{player.player_role}</p>
        </div>
      </div>
      <div onClick={remove}>
        <FontAwesomeIcon icon={faTrashCan} />
      </div>
    </div>
  );
};

export default SelectedCard;
