import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoIosFlag } from "react-icons/io";

const Player = ({ player, handleAddPlayers }) => {
  return (
    <div className="p-6 rounded-xl bg-[#5a515113]  ">
      <div>
        <img className="rounded-lg" src={player.image} alt="" />
      </div>
      <div className="flex items-center py-4 font-semibold text-lg text-[#131313]">
        <FaUserAlt className="text-2xl mr-3 rounded-full" />
        {player.name}
      </div>
      <div className="flex items-center justify-between text-[#131313b9] text-[14px] py-1">
        <div className="flex gap-2 ">
          <IoIosFlag className="text-2xl" /> {player.country}
        </div>
        {player.skill}
      </div>
      <div>
        <h3 className="text-[16px] font-semibold text-[#131313] py-8">
          Rating
        </h3>
        <div className="flex items-center justify-between text-[#131313ab] text-[16px]">
          <p className="text-[#131313] font-semibold">{player.battingStyle}</p>
          <p>{player.bowlingStyle}</p>
        </div>
        <div className="flex items-center justify-between mt-6">
          <p className="font-semibold">Price: ${player.priceBPL}</p>
          <button
            onClick={() => handleAddPlayers(player)}
            className="border px-4 py-2 rounded-lg text-[14px] border-[#1313132c]"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
