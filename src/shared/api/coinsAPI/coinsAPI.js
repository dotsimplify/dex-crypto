import { instance } from "../instance";

export const coinsAPI = {
  fetchCoins: () => {
    return instance.get("/v2/assets").then((res) => res.data);
  },
  fetchOne: (id) => {
    return instance.get("/v2/assets/" + id).then((res) => res.data);
  },
};
