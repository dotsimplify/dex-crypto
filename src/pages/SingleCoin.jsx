import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleCoin } from "../features/coins/coinsSlice";
import { fetchCandleData } from "../features/candle/candleSlice";
import { formatNumber, trend } from "../shared/utils/currencyCounter";
import { createChart } from "lightweight-charts";

const SingleCoin = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const { id } = useParams();
  const single = useSelector((state) => state.coins.singleCoin);
  const candle = useSelector((state) => state.candle.candleData);

  const element = ref.current;
  console.log(element, single.length, "render");
  if (element !== undefined && candle.length > 0) {
    let chart = createChart(ref.current, {
      width: 800,
      height: 300,
    });
    const lineSeries = chart.addCandlestickSeries();

    const candleData = candle.map((d) => {
      return {
        time: d.period / 1000,
        open: parseFloat(d.open),
        high: parseFloat(d.high),
        low: parseFloat(d.low),
        close: parseFloat(d.close),
      };
    });
    lineSeries.setData(candleData);
  }

  useEffect(() => {
    dispatch(fetchSingleCoin(id));
    dispatch(fetchCandleData(id));
  }, [dispatch, id]);
  return (
    <div>
      <div className="flex justify-between items-center px-12 bg-white py-8">
        <div className="flex justify-start items-center bg-white">
          {single.symbol && (
            <img
              src={`https://assets.coincap.io/assets/icons/${single.symbol.toLowerCase()}@2x.png`}
              alt=""
            />
          )}
          <h2 className="ml-4 text-xl font-semibold text-gray-800">
            {single.name}
          </h2>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-500">Market Cap</h2>
          <h2 className="text-lg font-medium text-gray-600">
            ${formatNumber(Number(single.marketCapUsd).toFixed(2))}
          </h2>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-500">Price 24 Hrs</h2>
          <h2 className="text-lg text-blue-400 font-medium ">
            {formatNumber(Number(single.changePercent24Hr).toFixed(2))}%
          </h2>
        </div>
      </div>
      <div className="flex">
        <div
          id="chart"
          ref={ref}
          className="w-full px-4 pb-8 shadow-xl bg-white text-center"
        ></div>
      </div>
    </div>
  );
};

export default SingleCoin;
