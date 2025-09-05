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
    if (str === "available") {
      setSelected("available");
    } else {
      setSelected("selected");
    }

    console.log("clicked");
  };

  const handleAddPlayers = (player) => {
    if (player.priceBPL > money) {
      alert("You don't have enough money to select this player");
      return;
    } else {
      handleAddMoney(-player.priceBPL);
    }
    if (selectedPlayers.length >= 6) {
      alert("You can select up to 6 players only");
      return;
    }
    if (selectedPlayers.find((p) => p.id === player.id)) {
      alert("Player already selected");
      return;
    }
    const updatePlayers = [...selectedPlayers, player];
    setselectedPlayers(updatePlayers);
    alert(`${player.name} " are selected successfully"`);
  };

  const handleRemovePlayers = (player) => {
    const updatePlayers = selectedPlayers.filter((p) => p.id !== player.id);
    setselectedPlayers(updatePlayers);
    handleAddMoney(player.priceBPL);
    alert(`${player.name} " are removed successfully"`);
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
      ></AvailablePlayers>
      <SelectedPlayers
        handleclick={handleclick}
        selectedPlayers={selectedPlayers}
        selected={selected}
        handleRemovePlayers={handleRemovePlayers}
      ></SelectedPlayers>
    </div>
  );
};
Main.propTypes = {
  handleAddMoney: PropTypes.func,
  money: PropTypes.number,
};
export default Main;
