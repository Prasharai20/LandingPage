import { combineReducers } from "redux";
import { State } from "./state";

export const rootReducer = combineReducers({
  state: State,
});
