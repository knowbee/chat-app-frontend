import { combineReducers } from "redux";
import register from "./registerReducer";
import login from "./loginReducer";
import currentUser from "./currentUserReducer";

const reducer = combineReducers({
  register,
  login,
  currentUser,
});
export default reducer;
