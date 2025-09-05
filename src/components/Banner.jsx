import PropTypes from "prop-types";
const Banner = ({ handleAddMoney }) => {
  return (
    <div
      className="w-full  rounded-xl bg-[#131313] bg-cover bg-center flex flex-col justify-center gap-4 items-center my-12 py-12"
      style={{
        backgroundImage: "url('/assets/bg-shadow.png')",
      }}
    >
      {/* You can put content inside this banner */}
      <div>
        <img src="/assets/banner-main.png" alt="" />
      </div>
      <h2 className="text-[40px] font-bold text-white text-center">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h2>
      <p className="inter text-gray-400 text-[24px] text-center">
        Beyond Boundaries Beyond Limits
      </p>
      <div className="border border-[#E7FE29] rounded-2xl p-2">
        <button
          onClick={() => handleAddMoney(7000000)}
          className="rounded-lg py-2 px-4 bg-[#E7FE29]"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};
Banner.propTypes = {
  handleAddMoney: PropTypes.func,
};

export default Banner;
