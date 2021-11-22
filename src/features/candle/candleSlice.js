import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { candleAPI } from "../../shared/api/candleAPI/candleAPI";

export const fetchCandleData = createAsyncThunk(
  "candle/fetchCandleData",
  async (details, { dispatch, rejectWithValue }) => {
    try {
      const data = await candleAPI.fetchData(details);
      console.log(data, "req");
      dispatch(getCandleData(data.data));
    } catch (error) {
      if (error.message) {
        return rejectWithValue({ hasError: error.message });
      }
    }
  }
);

const initialState = {
  candleData: [],
  hasError: "",
};

const candleSlice = createSlice({
  name: "candle",
  initialState,
  reducers: {
    getCandleData: (state, action) => {
      state.candleData = action.payload;
    },
    cleanData: (state) => {
      state.candleData = [];
    },
  },
});

export const { getCandleData, cleanData } = candleSlice.actions;
export default candleSlice.reducer;
