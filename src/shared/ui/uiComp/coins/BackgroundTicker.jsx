import React from "react";
import { useSelector } from "react-redux";
import bitcoin from "../../../../app/assets/bitcoin.svg";
import eth from "../../../../app/assets/eth.svg";

const BackgroundTicker = () => {
  const coins = useSelector((state) => state.coins.coinsList);
  const exchanges = useSelector((state) => state.exchange.exchangeList);
  return (
    <div className="flex justify-between items-center px-12 bg-gray-100">
      <div>
        <h2 className="bg-white p-2 shadow-lg border-opacity-30 px-4 text-green-500 border-b border-l border-r border-green-400  rounded-b-xl">
          Listed Coins
        </h2>
        <div className="text-center  text-white">
          <span className=" bg-green-500 px-4 py-0.5 pb-1 rounded-b-xl">
            {coins.length}
          </span>
        </div>
      </div>
      <div>
        <h2 className="bg-white p-2 shadow-lg border-opacity-30 px-4 text-green-600 border-b border-l border-r border-green-400  rounded-b-xl">
          Exchanges
        </h2>
        <div className="text-center  text-white">
          <span className=" bg-green-500 px-4 py-0.5 pb-1 rounded-b-xl">
            {exchanges.length}
          </span>
        </div>
      </div>
      <div>
        <div>
          <img
            src={bitcoin}
            className="h-10 pb-1 w-28 bg-white  shadow-lg border-opacity-30 text-green-600 border-b border-l border-r border-green-400  rounded-b-xl"
            alt=""
          />
        </div>
        <div className="text-center  text-white">
          <span className=" bg-green-500 px-4 py-0.5 pb-1 rounded-b-xl">
            $ {Number(coins.length > 0 && coins[0].priceUsd).toFixed(2)}
          </span>
        </div>
      </div>
      <div>
        <div>
          <img
            src={eth}
            className="h-10 pb-1 w-28 bg-white shadow-lg border-opacity-30 text-green-600 border-b border-l border-r border-green-400  rounded-b-xl"
            alt=""
          />
        </div>
        <div className="text-center  text-white">
          <span className=" bg-green-500 px-4 py-0.5 pb-1 rounded-b-xl">
            $ {Number(coins.length > 0 && coins[1].priceUsd).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BackgroundTicker;
