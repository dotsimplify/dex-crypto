import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from "../features/coins/coinsSlice";
import exchangeReducer from "../features/exchange/exchangeSlice";
import candleReducer from "../features/candle/candleSlice";
export const store = configureStore({
  reducer: {
    coins: coinsReducer,
    exchange: exchangeReducer,
    candle: candleReducer,
  },
});
