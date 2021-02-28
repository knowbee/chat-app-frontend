import { combineReducers } from "redux";
import register from "./registerReducer";
import login from "./loginReducer";

const reducer = combineReducers({
  register,
  login,
});
export default reducer;
