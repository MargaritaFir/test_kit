import { combineReducers } from "redux";
import currenciesSlice from "./currenciesSlice";

const rootReducer = combineReducers({
  currencies: currenciesSlice,
});

export default rootReducer;
