import PropTypes from "prop-types";
import Player from "./Player";

const AvailablePlayers = ({ players, handleAddPlayers, selected }) => {
  return (
    <div>
      <div
        className={`grid grid-cols-3 gap-6 ${
          selected === "available" ? "display-block" : "hidden"
        }`}
      >
        {players.map((player, idx) => (
          <Player
            key={idx}
            handleAddPlayers={handleAddPlayers}
            player={player}
          />
        ))}
      </div>
    </div>
  );
};
AvailablePlayers.propTypes = {
  players: PropTypes.array,
  handleAddPlayers: PropTypes.func,
  selected: PropTypes.string,
};
export default AvailablePlayers;
