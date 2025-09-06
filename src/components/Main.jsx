import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Required CSS for toast notifications
import { useState, useEffect } from "react";

// Import child components
import Banner from "./Banner";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
import Toggling from "./Toggling";
import PropTypes from "prop-types";

const Main = ({ handleAddMoney, money }) => {
  // State to store selected players
  const [selectedPlayers, setselectedPlayers] = useState([]);

  // State to store all available players
  const [players, setplayers] = useState([]);

  // State to track which tab is active ("available" or "selected")
  const [selected, setSelected] = useState("available");

  // Fetch player data from local JSON file once on load
  useEffect(() => {
    fetch("/player.json")
      .then((res) => res.json())
      .then((data) => setplayers(data));
  }, []);

  // Handle tab switching
  const handleclick = (str = "available") => {
    setSelected(str);
    console.log("clicked");
  };

  // Add player to the selected list
  const handleAddPlayers = (player) => {
    // Check if user has enough money
    if (player.priceBPL > money) {
      toast.error("You don't have enough money to select this player");
      return;
    } else {
      handleAddMoney(-player.priceBPL); // Deduct player price
    }

    // Restrict selection to 6 players
    if (selectedPlayers.length >= 6) {
      toast.warning("You can select up to 6 players only");
      return;
    }

    // Prevent duplicate player selection
    if (selectedPlayers.find((p) => p.id === player.id)) {
      toast.info("Player already selected");
      return;
    }

    // Add player to selected list
    const updatePlayers = [...selectedPlayers, player];
    setselectedPlayers(updatePlayers);
    toast.success(`${player.name} is selected successfully`);
  };

  // Remove player from selected list
  const handleRemovePlayers = (player) => {
    const updatePlayers = selectedPlayers.filter((p) => p.id !== player.id);
    setselectedPlayers(updatePlayers);

    // Refund money when player is removed
    handleAddMoney(player.priceBPL);

    toast.success(`${player.name} is removed successfully`);
    console.log("selected players", updatePlayers);
  };

  return (
    <div className="mb-[300px]">
      {/* Banner section (adds money to balance) */}
      <Banner handleAddMoney={handleAddMoney} />

      {/* Tab buttons (Available / Selected Players) */}
      <Toggling
        handleclick={handleclick}
        selected={selected}
        selectedPlayers={selectedPlayers}
      />

      {/* Available players list */}
      <AvailablePlayers
        handleclick={handleclick}
        selected={selected}
        players={players}
        handleAddPlayers={handleAddPlayers}
        selectedPlayers={selectedPlayers}
      />

      {/* Selected players list */}
      <SelectedPlayers
        handleclick={handleclick}
        selectedPlayers={selectedPlayers}
        selected={selected}
        handleRemovePlayers={handleRemovePlayers}
      />

      {/* Toast container (must be included once in app) */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

// Props validation
Main.propTypes = {
  handleAddMoney: PropTypes.func,
  money: PropTypes.number,
};

export default Main;
