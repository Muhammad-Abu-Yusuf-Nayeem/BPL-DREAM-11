import { RiDeleteBin6Line } from "react-icons/ri";

const SPlayer = ({ player }) => {
  return (
    <div className="flex items-center justify-between p-6 rounded-xl bg-[#5a515113] mb-4">
      <div className="flex items-center gap-6  border-[#1313132c] ">
        <div>
          <img
            className="w-20 h-20 object-cover rounded-2xl"
            src={player.image}
            alt=""
          />
        </div>
        <div>
          <h2 className="font-semibold text-[24px] text-[#131313]">
            {player.name}
          </h2>
          <h4 className="text-[16px] text-[#131313a2]">
            {player.battingStyle}
          </h4>
        </div>
      </div>
      <button>
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};

export default SPlayer;
