import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="flex justify-between items-center px-24 py-3 border-b border-green-600 border-opacity-30">
      <Link to="/">
        <div className="text-xl text-green-600 font-semibold">DEX</div>
      </Link>
      <div className="flex justify-between items-center mr-12">
        <Link to="/">
          <h3 className=" text-sm font-medium text-gray-600">Coins</h3>
        </Link>
        <Link to="/exchanges">
          <h3 className="mx-6 text-sm font-medium text-gray-600">Exchange</h3>
        </Link>
      </div>

      <div className="">
        <div className="">
          <button className=" transform hover:-translate-y-0.5 px-4 text-sm py-2 font-medium text-white bg-green-500 rounded-3xl">
            Connect wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
