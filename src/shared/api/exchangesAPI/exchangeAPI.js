import { instance } from "../instance";

export const exchangeAPI = {
  fetchExchangeData: () => {
    return instance.get("/v2/exchanges").then((res) => res.data);
  },
};
