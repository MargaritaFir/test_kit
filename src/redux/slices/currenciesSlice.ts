import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrenciesData } from "api";
import { ICurrency } from "api/interfaces";
import { CurrenciesSliceType } from "redux/interfaces";
import { RootState } from "redux/store";

export const getCurrencies = createAsyncThunk(
  "currencies/getCurrencies",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getCurrenciesData();
      return res;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

const initialState: Readonly<CurrenciesSliceType> = {
  currencies: [],
  isLoading: true,
};

export const currenciesSlice = createSlice({
  name: "currencies",
  initialState: initialState,
  reducers: {
    selectCurrency: (state, action: PayloadAction<ICurrency>) => {
      state.selectedCurrancy = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCurrencies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrencies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currencies = action.payload.data;
        state.selectedCurrancy = action.payload.data[0];
      })
      .addCase(getCurrencies.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const currencies = (state: RootState) => state.currencies.currencies;
export const selectedCurrancy = (state: RootState) =>
  state.currencies.selectedCurrancy;

export const { selectCurrency } = currenciesSlice.actions;
export default currenciesSlice.reducer;
