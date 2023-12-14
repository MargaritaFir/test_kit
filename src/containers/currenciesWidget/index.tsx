import React, { memo, useEffect, useMemo } from "react";
import kitten from "../../assets/images/Kitten.png";
import "./index.scss";

import { useAppDispatch, useAppSelector } from "redux/store";
import {
  currenciesStore,
  getCurrencies,
  selectCurrency,
} from "redux/slices/currenciesSlice";
import {
  transformCurrenciesToSelectOption,
  transformCurrencyToSelectOption,
} from "helpers";
import Header from "components/header";
import Select, { ISelectOption } from "components/select";

const CurrenciesWidget = () => {
  const dispatch = useAppDispatch();
  const curranciesData = useAppSelector(currenciesStore);

  useEffect(() => {
    dispatch(getCurrencies());
  }, [dispatch]);

  const selectorCurrenciesData = useMemo(
    () => transformCurrenciesToSelectOption(curranciesData.currencies),
    [curranciesData.currencies]
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
            curranciesData.currencies.length
              ? transformCurrencyToSelectOption(
                  curranciesData.selectedCurrancy ??
                    curranciesData.currencies[0]
                )
              : undefined
          }
          isLoading={curranciesData.isLoading}
          onSelect={(item: ISelectOption) => {
            dispatch(selectCurrency(item.value));
          }}
        />
      </div>

      <div className="currenciesWidget_fullName">
        {curranciesData.selectedCurrancy?.name}
      </div>
      <div className="currenciesWidget_kittenImage">
        <img src={kitten} alt="kitten" />
      </div>
    </div>
  );
};

export default memo(CurrenciesWidget);
