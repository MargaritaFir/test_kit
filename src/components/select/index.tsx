import React, { memo } from "react";
import Select from "react-select";

export interface ISelectOption {
  id: string | number;
  value: any;
  label: string;
}

function CustomSelect(props: any) {
  return (
    <Select
      {...props}
      isMulti={false}
      isSearchable
      options={props.options}
      maxMenuHeight={props.maxMenuHeight}
      onChange={props.onSelect}
      value={props.selectedOption}
      isLoading={props.isLoading}
      styles={{
        control: (css, state) => {
          let borderColor = "#DCD9D9";
          if (state.menuIsOpen) {
            borderColor = "#DAD6D6";
          }
          return {
            ...css,
            borderRadius: 10,
            fontFamily: "Kreon",
            height: 40,
            borderWidth: "1px",
            borderColor,
            boxShadow: "none",
            ":hover": {
              borderColor: "#DAD6D6",
            },
            ":focus": {
              borderColor: "#7C7C7C",
            },
          };
        },
        indicatorSeparator: () => ({
          display: "none",
        }),
        option: (base, state) => {
          let backgroundColor = base.backgroundColor;
          if (state.isSelected) {
            backgroundColor = "#F0EFEF";
          }

          return {
            ...base,
            lineHeight: "22px",
            fontSize: "18px",
            fontWeight: 300,
            color: "#000000",
            border: "1px solid #DAD6D6",
            backgroundColor,
            ":hover": {
              backgroundColor: "#DCD9D9",
              color: "#000000",
            },
            ":focus": {
              backgroundColor: "#DCD9D9",
              color: "#000000",
            },
            ":active": {
              backgroundColor: "#DCD9D9",
              color: "#000000",
            },
          };
        },
        menu: (base) => ({
          ...base,
          padding: 0,
        }),
      }}
    />
  );
}

export default memo(CustomSelect);
