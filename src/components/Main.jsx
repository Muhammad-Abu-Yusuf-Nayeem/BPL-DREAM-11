import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // important
import { useState, useEffect } from "react";
import Banner from "./Banner";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
import Toggling from "./Toggling";
import PropTypes from "prop-types";

const Main = ({ handleAddMoney, money }) => {
  const [selectedPlayers, setselectedPlayers] = useState([]);
  const [players, setplayers] = useState([]);
  const [selected, setSelected] = useState("available");

  useEffect(() => {
    fetch("/player.json")
      .then((res) => res.json())
      .then((data) => setplayers(data));
  }, []);

  const handleclick = (str = "available") => {
    setSelected(str);
    console.log("clicked");
  };

  const handleAddPlayers = (player) => {
    if (player.priceBPL > money) {
      toast.error("You don't have enough money to select this player");
      return;
    } else {
      handleAddMoney(-player.priceBPL);
    }

    if (selectedPlayers.length >= 6) {
      toast.warning("You can select up to 6 players only");
      return;
    }

    if (selectedPlayers.find((p) => p.id === player.id)) {
      toast.info("Player already selected");
      return;
    }

    const updatePlayers = [...selectedPlayers, player];
    setselectedPlayers(updatePlayers);
    toast.success(`${player.name} is selected successfully`);
  };

  const handleRemovePlayers = (player) => {
    const updatePlayers = selectedPlayers.filter((p) => p.id !== player.id);
    setselectedPlayers(updatePlayers);
    handleAddMoney(player.priceBPL);
    toast.success(`${player.name} is removed successfully`);
    console.log("selected players", updatePlayers);
  };

  return (
    <div className="mb-[300px]">
      <Banner handleAddMoney={handleAddMoney} />
      <Toggling
        handleclick={handleclick}
        selected={selected}
        selectedPlayers={selectedPlayers}
      />
      <AvailablePlayers
        handleclick={handleclick}
        selected={selected}
        players={players}
        handleAddPlayers={handleAddPlayers}
        selectedPlayers={selectedPlayers}
      />
      <SelectedPlayers
        handleclick={handleclick}
        selectedPlayers={selectedPlayers}
        selected={selected}
        handleRemovePlayers={handleRemovePlayers}
      />

      {/* Toast container must be here once */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

Main.propTypes = {
  handleAddMoney: PropTypes.func,
  money: PropTypes.number,
  
};

export default Main;
