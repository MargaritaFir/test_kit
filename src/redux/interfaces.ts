import { ICurrency } from "api/interfaces";

export type CurrenciesSliceType = {
  currencies: ICurrency[];
  selectedCurrancy?: ICurrency;
  isLoading: boolean;
};
