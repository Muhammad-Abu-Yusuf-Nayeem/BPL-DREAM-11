import React from "react";

const Navbar = ({ money }) => {
  return (
    <div className="flex justify-between items-center my-12 z-50 sticky top-0 bg-[#e2e2e24a] shadow ">
      <div>
        <img src="/assets/logo.png" alt="" />
      </div>
      <div className="flex items-center gap-8">
        <ul className="flex gap-6">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams </li>
          <li>Schedules</li>
        </ul>
        <button className="font-bold flex gap-2 items-center border border-gray-300 py-2 px-4 rounded-lg">
          {money} Coin{" "}
          <img src="/assets/coin.png" className="w-5 h-5" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
