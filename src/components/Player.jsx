import PropTypes from "prop-types";
// Icons
import { FaUserAlt } from "react-icons/fa";
import { IoIosFlag } from "react-icons/io";

// Player card component
const Player = ({ player, handleAddPlayers }) => {
  return (
    <div className="p-6 rounded-xl bg-[#5a515113]">
      {/* Player image */}
      <div>
        <img className="rounded-lg" src={player.image} alt={player.name} />
      </div>

      {/* Player name with icon */}
      <div className="flex items-center py-4 font-semibold text-lg text-[#131313]">
        <FaUserAlt className="text-2xl mr-3 rounded-full" />
        {player.name}
      </div>

      {/* Player country and skill */}
      <div className="flex items-center justify-between text-[#131313b9] text-[14px] py-1">
        <div className="flex gap-2">
          <IoIosFlag className="text-2xl" /> {player.country}
        </div>
        {player.skill}
      </div>

      {/* Player stats section */}
      <div>
        <h3 className="text-[16px] font-semibold text-[#131313] py-8">
          Rating
        </h3>

        {/* Batting and bowling style */}
        <div className="flex items-center justify-between text-[#131313ab] text-[16px]">
          <p className="text-[#131313] font-semibold">{player.battingStyle}</p>
          <p>{player.bowlingStyle}</p>
        </div>

        {/* Price and choose button */}
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

// Props validation
Player.propTypes = {
  player: PropTypes.object, // Player data
  handleAddPlayers: PropTypes.func, // Function to add player
};

export default Player;
