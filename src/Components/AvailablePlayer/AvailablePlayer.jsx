import React, { use } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faFlag } from "@fortawesome/free-solid-svg-icons";

const AvailablePlayer = ({ playerPromise }) => {
  const players = use(playerPromise);
  console.log(players);
  return (
    <div className="max-w-[1260px] mx-auto m-5 grid grid-cols-1 md:grid-cols-3 gap-5 ">
      {players.map((player) => (
        <div className="card bg-base-100 shadow-md">
          <figure>
            <img
              className="w-full h-[300px] object-cover"
              src={player.player_image}
              alt="Shoes"
            />
          </figure>
          <div className=" p-4 space-y-2">
            <h2 className="card-title">
              <FontAwesomeIcon icon={faUser} />
              {player.player_name}
            </h2>
            <div className="flex justify-between border-b border-gray-300 pb-1.5 items-center">
              <p className=" text-gray-500">
                <FontAwesomeIcon icon={faFlag} />
                {player.player_country}
              </p>
              <p className=" w-fit p-2 bg-gray-100 rounded-lg ">
                {player.player_role}
              </p>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Rating</span>
              <span>{player.player_rating}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">{player.batting_position}</span>
              <span className="from-neutral-100">
                {player.bowling_position}
              </span>
            </div>
            <div className="card-actions justify-between items-center">
              <p className="font-bold">Price: ${player.price}</p>
              <button className="btn ">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayer;
