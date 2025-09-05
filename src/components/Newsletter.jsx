import React from "react";

const Newsletter = () => {
  return (
    <div className="w-10/12 mx-auto border-2 border-gray-300 p-5 rounded-xl absolute -top-36 left-1/2 transform -translate-x-1/2 bg-[#64646451]">
      <div
        className=" py-10 px-5 rounded-lg bg-cover bg-center bg-white"
        style={{
          backgroundImage: "url('/assets/bg-shadow.png')",
        }}
      >
        <h2 className="text-[32px] text-[#131313] font-bold text-center my-5">
          Subscribe to our Newsletter
        </h2>
        <p className="font-medium text-center text-[20px] text-[#131313b6] mb-6">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="text-center mb-5 flex justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none text-[16px]"
          />
          <button className="bg-gradient-to-r from-pink-300 to-yellow-300 text-black p-2 rounded-lg font-bold text-[16px]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
