import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { exchangeAPI } from "../../shared/api/exchangesAPI/exchangeAPI";

export const fetchExchangeRequest = createAsyncThunk(
  "exchange/fetchExchangeRequest",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const data = await exchangeAPI.fetchExchangeData();
      dispatch(getExchanges(data.data));
    } catch (error) {
      if (error.message) {
        return rejectWithValue({ hasError: error.message });
      }
    }
  }
);

const initialState = {
  exchangeList: [],
  hasError: "",
  message: "",
  singleExchange: {},
  currentPage: 1,
  exchangePerPage: 20,
};

const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    getExchanges: (state, action) => {
      state.exchangeList = action.payload;
    },
    setPageNumber: (state, action) => {
      state.currentPage++;
    },
  },
});

export const { getExchanges, setPageNumber } = exchangeSlice.actions;
export default exchangeSlice.reducer;
