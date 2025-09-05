import React from "react";
import SPlayer from "./SPlayer";

const SelectedPlayers = ({
    handleclick,
  selectedPlayers,
  selected,
  handleRemovePlayers,
}) => {
  return (
    <div>
      {/* <h1 className="text-2xl text-center bg-amber-300 py-4 my-4 font-bold">
        Selected Players
      </h1> */}
      <div
        className={`${selected === "selected" ? "display-block" : "hidden"}`}
      >
        {selectedPlayers.map((player, idx) => (
          <SPlayer
            key={idx}
            player={player}
            handleRemovePlayers={handleRemovePlayers}
          />
        ))}
        <span className="w-fit border border-[#131313] p-2 flex  items-center rounded-2xl mt-10">
          <button
            onClick={() => handleclick("available")}
            className="bg-[#E7FE29] px-4 py-2 rounded-lg"
          >
            Add More Player
          </button>
        </span>
      </div>
    </div>
  );
};

export default SelectedPlayers;
