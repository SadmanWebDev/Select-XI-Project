import React, { useState } from "react";

const ChoosePlayers = () => {
  const [toggle, setToggle] = useState(true);

  return (
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
  );
};

export default ChoosePlayers;
