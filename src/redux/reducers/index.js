import { combineReducers } from "redux";
import register from "./registerReducer";
import login from "./loginReducer";
import currentUser from "./currentUserReducer";
import users from "./usersReducer";

const reducer = combineReducers({
  register,
  login,
  currentUser,
  users,
});
export default reducer;
