import "./App.css";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const [money, setMoney] = useState(0);

  useEffect(() => {
    document.title = "BPL-DREAM-11";
  }, []);

  const handleAddMoney = (amount) => {
    setMoney(money + amount);
    console.log(money);
  };
  return (
    <>
      <div>
        <div className="w-10/12 mx-auto">
          <Navbar money={money} />
          <Main handleAddMoney={handleAddMoney} money={money} />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
App.prototype = {
  handleAddMoney: PropTypes.func,
  money: PropTypes.number,
};
export default App;
