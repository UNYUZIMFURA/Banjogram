import { toggleVisibility } from "./toggleVisibility";
import { toggleVisibility2 } from "./toggleVisibility2";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  toggleVisibility,
  toggleVisibility2,
});

export { allReducers };
