import React, { use } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AvailablePlayer = ({ playerPromise }) => {
  const players = use(playerPromise);
  console.log(players);
  return (
    <div className="max-w-[1260px] mx-auto">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayer;
