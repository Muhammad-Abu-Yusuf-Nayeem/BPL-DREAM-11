const Toggling = ({ handleclick, selected, selectedPlayers }) => {
  return (
    <div className="flex items-center justify-between py-6">
      <div>
        <button
          className={`font-bold text-[28px] ${
            selected === "available" ? "display-block" : "hidden"
          }`}
        >
          Available Players
        </button>
        <button
          className={`font-bold text-[28px] ${
            selected === "selected" ? "display-block" : "hidden"
          }`}
        >
          Selected Players ({selectedPlayers.length}/6)
        </button>
      </div>
      <div className="rounded-xl border border-[#13131317]  flex justify-center items-center ">
        <div className="bg-[#E7FE29] px-6 py-2 rounded-l-xl">
          <button
            onClick={() => handleclick("available")}
            className="font-semibold "
          >
            Available
          </button>
        </div>
        <div className=" px-6 py-2">
          <button
            onClick={() => handleclick("selected")}
            className="text-[#13131394] "
          >
            Selected
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toggling;
