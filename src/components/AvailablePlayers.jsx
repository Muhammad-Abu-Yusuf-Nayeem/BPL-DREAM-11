import { useState, useEffect } from "react";
import Player from "./Player";

const AvailablePlayers = () => {
  const [players, setplayers] = useState([]);

  useEffect(() => {
    fetch("/player.json")
      .then((res) => res.json())
      .then((data) => setplayers(data));
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between py-6">
        <p className="font-bold text-[28]">Available Players</p>
        <div className="rounded-xl border border-[#13131317]  flex justify-center items-center ">
          <div className="bg-[#E7FE29] px-6 py-2 rounded-l-xl">
            <button className="font-semibold ">Available</button>
          </div>
          <div className=" px-6 py-2">
            <button className="text-[#13131394]">Selected</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {players.map((player, idx) => (
          <Player key={idx} player={player} />
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
