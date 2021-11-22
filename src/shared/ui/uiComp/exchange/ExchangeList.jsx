import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchExchangeRequest } from "../../../../features/exchange/exchangeSlice";
import { formatNumber } from "../../../utils/currencyCounter";

const ExchangeList = () => {
  const dispatch = useDispatch();
  const exchangeList = useSelector((state) => state.exchange.exchangeList);

  useEffect(() => {
    dispatch(fetchExchangeRequest());
  }, [dispatch]);
  return (
    <div className="mt-8 mx-12 pb-8">
      {exchangeList.length === 0 ? (
        <h4>Loading ...</h4>
      ) : (
        <div className="m-2">
          <div className="w-full">
            <div className="bg-white max-w-screen-lg overflow-hidden shadow-xl rounded my-2 mx-10">
              <table className="min-w-max w-full max-w-screen-lg table-auto">
                <thead>
                  <tr className="bg-gray-50 py-4 w-full text-gray-500 text-sm uppercase font-normal leading-normal">
                    <th className="py-4  w-1/8 font-normal px-2 text-center mx-8">
                      Rank
                    </th>
                    <th className="py-4 mx-4 w-1/8 font-normal text-left ml-8">
                      Name
                    </th>
                    <th className="py-4  w-1/8 font-normal text-left">
                      Volume USD
                    </th>
                    <th className="py-4 mx-2  w-1/8 font-normal text-left">
                      Total Volume %
                    </th>
                    <th className="py-4  w-1/8 font-normal text-left">
                      Trading Pairs
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm  font-light">
                  {exchangeList.length > 0 &&
                    exchangeList.map((data) => {
                      return (
                        <tr
                          key={data.rank}
                          className="border-b border-gray-200"
                        >
                          <td className=" p-2.5 text-lg font-bold text-center">
                            <span className="font-medium text-xs">
                              {data.rank}
                            </span>
                          </td>
                          <td className="flex justify-start items-center w-64 p-2.5 text-left">
                            <div>
                              <span className="py-3 px-2 text-blue-600 text-xs font-medium ">
                                {data.exchangeId}
                              </span>
                            </div>
                          </td>
                          <td className="text-left p-2.5">
                            <span className=" text-xs font-medium ">
                              ${formatNumber(Number(data.volumeUsd).toFixed(2))}
                            </span>
                          </td>
                          <td className="py-3  text-left p-2.5">
                            <span className="py-3 px-2 text-xs font-medium ">
                              $
                              {formatNumber(
                                Number(data.percentTotalVolume).toFixed(2)
                              )}
                            </span>
                          </td>
                          <td className="py-3  text-left p-2.5">
                            <span className="py-3 px-2 text-xs font-medium ">
                              ${data.tradingPairs}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExchangeList;
