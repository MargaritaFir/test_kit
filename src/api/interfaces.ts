export interface ICurrency {
  id: string;
  name: string;
  min_size: string;
}

export interface ICurrencyResponse {
  data: ICurrency[];
}
