import { ICurrency } from "api/interfaces";
import { ISelectOption } from "../components/select";

export const transformCurrenciesToSelectOption = (
  data: ICurrency[]
): ISelectOption[] => {
  return data.map((currency) => ({
    id: currency.id,
    value: currency,
    label: currency.id,
  }));
};

export const transformCurrencyToSelectOption = (
  currency: ICurrency
): ISelectOption => ({
  id: currency.id,
  value: currency,
  label: currency.id,
});
