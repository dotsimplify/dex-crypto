import React from "react";
import play from "../assets/googleplay.svg";
import apple from "../assets/apple.svg";
import { FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-evenly items-start text-white px-16 py-8 bg-gradient-to-r from-green-600 via-green-500 to-green-400 ">
      <div className="w-1/5">
        <h2 className="text-2xl text-white font-semibold">DEX</h2>

        <h2 className="text-gray-100 hover:text-white cursor-pointer mt-2 text-sm ">
          Support
        </h2>
      </div>
      <div className="w-1/5">
        <h2 className="text-base text-gray-300 font-semibold">LEGALS</h2>
        <h2 className="text-gray-100 hover:text-white  cursor-pointer mt-2  text-sm">
          Terms of Service
        </h2>
        <h2 className="text-gray-100 hover:text-white  cursor-pointer mt-2  text-sm">
          Privacy Policy
        </h2>
      </div>
      <div className="w-1/5 text-center">
        <h2 className="text-base text-gray-300 font-semibold">Follow Us</h2>
        <div className="flex justify-center items-center mt-4">
          <FaTwitter className="mx-4 text-2xl cursor-pointer text-gray-100 hover:text-white " />
          <FaFacebook className=" text-2xl cursor-pointer text-gray-100 hover:text-white " />
        </div>
      </div>
      <div className="w-2/5 text-center">
        <h2 className="text-base text-gray-300 font-semibold">
          DEX APP AVAILABLE ON
        </h2>
        <img src={play} className="w-1/3 mx-auto my-4" alt="" />
        <img src={apple} className="w-1/3 mx-auto" alt="" />
      </div>
    </footer>
  );
};
export default Footer;
