import { useState, useEffect } from "react";
import Banner from "./Banner";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
import Toggling from "./Toggling";

const Main = ({ handleAddMoney }) => {
  const [selectedPlayers, setselectedPlayers] = useState([]);

  const handleAddPlayers = (player) => {
    const updatePlayers = [...selectedPlayers, player];
    setselectedPlayers(updatePlayers);
    console.log("selected players", updatePlayers);
  };
  const [players, setplayers] = useState([]);
  const [selected, setSelected] = useState("");

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
      ></SelectedPlayers>
    </div>
  );
};

export default Main;
