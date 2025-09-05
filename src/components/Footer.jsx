import React from "react";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="relative bg-black pb-10">
      <Newsletter></Newsletter>
      <div className="w-10/12 mx-auto">
        <div className="pt-[200px] text-white">
          <div className="flex justify-center py-10">
            <img className="" src="../assets/logo-footer.png" alt="" />
          </div>
          {/* links */}
          <div className="flex flex-col gap-10 md:flex-row justify-between ">
            <div>
              <ul className=" leading-7">
                <h2 className="font-semibold text-[18px] mb-3">About us</h2>
                <li className="text-[16px]">We are a passionate team </li>
                <li className="text-[16px]">
                  dedicated to providing the best{" "}
                </li>
                <li className="text-[16px]">services to our customers</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc list-inside leading-8">
                <h2 className="font-semibold text-[18px] mb-3">Quick Links</h2>
                <li className="text-[16px]">Home</li>
                <li className="text-[16px]">Services</li>
                <li className="text-[16px]">About</li>
                <li className="text-[16px]">Contact</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-[18px] mb-3">Subscribe</h2>
              <p className="text-[16px]  leading-7">
                Subscribe to our newsletter for the <br />
                latest updates.
              </p>
              <div className="mt-3 flex ">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" bg-white text-black border-gray-300 py-2 px-6 rounded-l-lg focus:outline-none text-[16px]"
                />
                <button className="bg-gradient-to-r from-yellow-300 to-pink-300 text-black py-2 px-6 rounded-r-lg font-bold text-[16px]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className=" mt-12 text-gray-800" />
      <div className="text-[#ffffff6b] font-thin text-[16px] text-center py-5">@2024 BPL All Rights Reserved. </div>
    </div>
  );
};

export default Footer;
