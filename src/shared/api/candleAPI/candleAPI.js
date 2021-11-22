import { instance } from "../instance";

export const candleAPI = {
  fetchData: (id) => {
    return instance
      .get(
        `/v2/candles?exchange=poloniex&interval=h8&baseId=${id}&quoteId=tether`
      )
      .then((res) => res.data);
  },
};
