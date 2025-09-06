import PropTypes from "prop-types";

// Component for toggling between Available Players and Selected Players view
const Toggling = ({ handleclick, selected, selectedPlayers }) => {
  return (
    <div className="flex items-center justify-between py-6 z-55 sticky top-16">
      {/* Display current section title */}
      <div>
        {/* Show title if "available" tab is active */}
        <button
          className={`font-bold text-[28px] ${
            selected === "available" ? "display-block" : "hidden"
          }`}
        >
          Available Players
        </button>

        {/* Show title if "selected" tab is active */}
        <button
          className={`font-bold text-[28px] ${
            selected === "selected" ? "display-block" : "hidden"
          }`}
        >
          Selected Players ({selectedPlayers.length}/6)
        </button>
      </div>

      {/* Toggle buttons (Available / Selected) */}
      <div className="rounded-xl border border-[#13131317] flex justify-center items-center">
        {/* Available button */}
        <div
          className={` px-6 py-2 rounded-l-xl ${
            selected === "available" ? "bg-[#E7FE29]" : "bg-transparent"
          }`}
        >
          <button
            onClick={() => handleclick("available")}
            className="font-semibold"
          >
            Available
          </button>
        </div>

        {/* Selected button */}
        <div
          className={` px-6 py-2 rounded-r-xl ${
            selected === "selected" ? "bg-[#E7FE29]" : "bg-transparent"
          }`}
        >
          <button
            onClick={() => handleclick("selected")}
            className="text-[#13131394]"
          >
            Selected
          </button>
        </div>
      </div>
    </div>
  );
};

// Props validation
Toggling.propTypes = {
  handleclick: PropTypes.func, // Function to switch tabs
  selected: PropTypes.string, // Current selected tab ("available" or "selected")
  selectedPlayers: PropTypes.array, // List of selected players
};

export default Toggling;
