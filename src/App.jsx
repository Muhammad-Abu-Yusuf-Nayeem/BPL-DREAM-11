import "./App.css";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const [money, setMoney] = useState(0);

  const handleAddMoney = (amount) => {
    setMoney(money + amount);
    console.log(money);
  };
  return (
    <>
      <div className="w-10/12 mx-auto">
        <Navbar money={money} />
        <Main handleAddMoney={handleAddMoney} />
      </div>
    </>
  );
}
App.prototype = {
  handleAddMoney: PropTypes.func,
  money: PropTypes.number,
};
export default App;
