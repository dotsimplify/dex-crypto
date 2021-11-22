import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { coinsAPI } from "../../shared/api/coinsAPI/coinsAPI";

export const fetchCoinRequest = createAsyncThunk(
  "coins/fetchCoinRequest",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const data = await coinsAPI.fetchCoins();
      dispatch(getCoins(data.data));
    } catch (error) {
      if (error.message) {
        return rejectWithValue({ hasError: error.message });
      }
    }
  }
);

export const fetchSingleCoin = createAsyncThunk(
  "coins/fetchSingleCoin",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const data = await coinsAPI.fetchOne(id);
      dispatch(getSingleCoin(data.data));
    } catch (error) {
      if (error.message) {
        return rejectWithValue({ hasError: error.message });
      }
    }
  }
);

const initialState = {
  coinsList: [],
  hasError: "",
  message: "",
  singleCoin: {},
  currentPage: 1,
  coinsPerPage: 20,
};

const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    getCoins: (state, action) => {
      state.coinsList = action.payload;
    },
    getSingleCoin: (state, action) => {
      state.singleCoin = action.payload;
    },
    setPageNumber: (state, action) => {
      state.currentPage++;
    },
  },
});

export const { getCoins, getSingleCoin, setPageNumber } = coinsSlice.actions;
export default coinsSlice.reducer;
