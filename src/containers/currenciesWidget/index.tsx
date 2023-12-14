import React, { memo, useEffect, useMemo } from "react";
import kitten from "../../assets/images/Kitten.png";
import "./index.scss";

import { RootState, useAppDispatch, useAppSelector } from "redux/store";
import { getCurrencies, selectCurrency } from "redux/slices/currenciesSlice";
import {
  transformCurrenciesToSelectOption,
  transformCurrencyToSelectOption,
} from "helpers";
import Header from "components/header";
import Select, { ISelectOption } from "components/select";

const CurrenciesWidget = () => {
  const dispatch = useAppDispatch();
  const { currencies, selectedCurrancy, isLoading } = useAppSelector(
    ({ currencies }: RootState) => ({
      ...currencies,
    })
  );
  useEffect(() => {
    dispatch(getCurrencies());
  }, [dispatch]);

  const selectorCurrenciesData = useMemo(
    () => transformCurrenciesToSelectOption(currencies),
    [currencies]
  );

  return (
    <div className="currenciesWidget">
      <div className="currenciesWidget_selectedField">
        <Header />
        <Select
          maxMenuHeight={164}
          className="currenciesWidget_selectedField_selector"
          options={selectorCurrenciesData}
          selectedOption={
            currencies.length
              ? transformCurrencyToSelectOption(
                  selectedCurrancy ?? currencies[0]
                )
              : undefined
          }
          isLoading={isLoading}
          onSelect={(item: ISelectOption) => {
            dispatch(selectCurrency(item.value));
          }}
        />
      </div>

      <div className="currenciesWidget_fullName">{selectedCurrancy?.name}</div>
      <div className="currenciesWidget_kittenImage">
        <img src={kitten} alt="" />
      </div>
    </div>
  );
};

export default memo(CurrenciesWidget);
