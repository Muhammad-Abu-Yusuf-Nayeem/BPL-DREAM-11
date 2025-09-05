import { useState, useEffect } from "react";
import Banner from "./Banner";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
import Toggling from "./Toggling";

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
    console.log("selected players", updatePlayers);
  };

  return (
    <div>
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
        selectedPlayers={selectedPlayers}
        selected={selected}
        handleRemovePlayers={handleRemovePlayers}
      ></SelectedPlayers>
    </div>
  );
};

export default Main;
