import React, { useEffect } from "react";
import BackgroundTicker from "../shared/ui/uiComp/coins/BackgroundTicker";
import CoinsList from "../shared/ui/uiComp/coins/CoinsList";
import { fetchExchangeRequest } from "../features/exchange/exchangeSlice";
import { fetchCoinRequest } from "../features/coins/coinsSlice";
import { cleanData } from "../features/candle/candleSlice";
import { useDispatch } from "react-redux";

function Index() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExchangeRequest());
    dispatch(fetchCoinRequest());
    dispatch(cleanData());
  }, [dispatch]);
  return (
    <div>
      <BackgroundTicker />
      <CoinsList />
    </div>
  );
}

export default Index;
