// Import global CSS file
import "./App.css";

// Import prop type validation library
import PropTypes from "prop-types";

// Import custom components
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

// Import React hooks
import { useState, useEffect } from "react";

function App() {
  // State to store user's money
  const [money, setMoney] = useState(0);

  // Set the web page title once when the app loads
  useEffect(() => {
    document.title = "BPL-DREAM-11";
  }, []);

  // Function to increase money balance
  const handleAddMoney = (amount) => {
    setMoney(money + amount);
    console.log(money); // Debug: show updated money in console
  };

  return (
    <>
      <div>
        {/* Main container with centered content */}
        <div className="w-10/12 mx-auto">
          {/* Navbar shows current money balance */}
          <Navbar money={money} />

          {/* Main section handles players & money logic */}
          <Main handleAddMoney={handleAddMoney} money={money} />
        </div>

        {/* Footer section */}
        <Footer />
      </div>
    </>
  );
}

// PropTypes for validation
App.prototype = {
  handleAddMoney: PropTypes.func,
  money: PropTypes.number,
};

// Export App component as default
export default App;
