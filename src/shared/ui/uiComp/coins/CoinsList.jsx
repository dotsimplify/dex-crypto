import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCoinRequest,
  setPageNumber,
} from "../../../../features/coins/coinsSlice";
import { formatNumber, trend } from "../../../utils/currencyCounter";
import Pagination from "../../pagination/pagination";

const CoinsList = (props) => {
  const dispatch = useDispatch();
  const coinsList = useSelector((state) => state.coins.coinsList);
  const currentPage = useSelector((state) => state.coins.currentPage);
  const coinsPerPage = useSelector((state) => state.coins.coinsPerPage);

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coinsList.slice(indexOfFirstCoin, indexOfLastCoin);

  // Change page
  const paginate = (pageNumber) => dispatch(setPageNumber(pageNumber));
  useEffect(() => {
    dispatch(fetchCoinRequest());
  }, [dispatch]);

  return (
    <div className="mt-8 mx-12">
      {currentCoins.length === 0 ? (
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
                    <th className="py-4  w-1/8 font-normal text-center">
                      Price
                    </th>
                    <th className="py-4 mx-2  w-1/8 font-normal text-center">
                      Market Cap
                    </th>
                    <th className="py-4  w-1/8 font-normal text-center">
                      VWAP (24Hr)
                    </th>
                    <th className="py-4  w-1/8 font-normal text-center">
                      Supply
                    </th>
                    <th className="py-4  w-1/8 font-normal text-center">
                      Volume (24Hr)
                    </th>
                    <th className="py-4  w-1/8 font-normal text-center">
                      Change (24Hr)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm  font-light">
                  {currentCoins.length > 0 &&
                    currentCoins.map((data) => {
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
                            <div className="w-1/8">
                              <img
                                className="w-1/2 h-auto max-w-16 mt-2"
                                src={`https://assets.coincap.io/assets/icons/${data.symbol.toLowerCase()}@2x.png`}
                                alt=""
                              />
                            </div>
                            <Link to={`/assets/${data.id}`}>
                              <div>
                                <span className="py-3 px-2 text-xs font-medium ">
                                  {data.name}
                                </span>
                              </div>
                            </Link>
                          </td>
                          <td className="text-left p-2.5">
                            <span className=" text-xs font-medium ">
                              ${formatNumber(Number(data.priceUsd).toFixed(2))}
                            </span>
                          </td>
                          <td className="py-3  text-left p-2.5">
                            <span className="py-3 px-2 text-xs font-medium ">
                              $
                              {formatNumber(
                                Number(data.marketCapUsd).toFixed(2)
                              )}
                            </span>
                          </td>
                          <td className="py-3  text-left p-2.5">
                            <span className="py-3 px-2 text-xs font-medium ">
                              ${Number(data.vwap24Hr).toFixed(2)}
                            </span>
                          </td>
                          <td className="py-3  text-left p-2.5">
                            <span className="py-3 px-2 text-xs font-medium ">
                              ${formatNumber(Number(data.supply).toFixed(2))}
                            </span>
                          </td>
                          <td className="py-3  text-left p-2.5">
                            <span className="py-3 px-2 text-xs font-medium ">
                              $
                              {formatNumber(
                                Number(data.volumeUsd24Hr).toFixed(2)
                              )}
                            </span>
                          </td>
                          <td className="py-3  text-right p-2.5">
                            <span
                              className={`py-3 ${
                                trend(data.changePercent24Hr)
                                  ? "text-red-500"
                                  : "text-green-600"
                              }  px-2 text-xs font-medium `}
                            >
                              {Number(data.changePercent24Hr).toFixed(2)}%
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
      <Pagination
        coinsPerPage={coinsPerPage}
        totalCoins={coinsList.length}
        paginate={paginate}
      />
    </div>
  );
};

export default CoinsList;
