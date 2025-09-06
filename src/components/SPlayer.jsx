import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";

// Single Selected Player Card
const SPlayer = ({ player, handleRemovePlayers }) => {
  return (
    <div className="flex items-center justify-between p-6 rounded-xl bg-[#5a515113] mb-4">
      {/* Left side: player image & details */}
      <div className="flex items-center gap-6 border-[#1313132c]">
        {/* Player image */}
        <div>
          <img
            className="w-20 h-20 object-cover rounded-2xl"
            src={player.image}
            alt={player.name}
          />
        </div>

        {/* Player details */}
        <div>
          <h2 className="font-semibold text-[24px] text-[#131313]">
            {player.name}
          </h2>
          <h4 className="text-[16px] text-[#131313a2]">{player.skill}</h4>
          <h4 className="text-[16px] text-[#131313a2]">
            {player.priceBPL} BDT
          </h4>
        </div>
      </div>

      {/* Remove player button */}
      <button
        onClick={() => handleRemovePlayers(player)}
        className="text-2xl text-[#ff0000a8]"
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};

// Props validation
SPlayer.propTypes = {
  player: PropTypes.object, // Single player data
  handleRemovePlayers: PropTypes.func, // Function to remove player
};

export default SPlayer;
