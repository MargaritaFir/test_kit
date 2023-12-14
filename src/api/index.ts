import axios from "axios";

export const instance = axios.create({
  baseURL: `https://api.coinbase.com/v2/`,
});

export const getCurrenciesData = async () => {
  return instance.get("currencies").then((res) => res.data);
};
