import { combineReducers } from "redux";
import register from "./registerReducer";
import login from "./loginReducer";
import currentUser from "./currentUserReducer";
import users from "./usersReducer";
import chat from "./chatReducer";

const reducer = combineReducers({
  register,
  login,
  currentUser,
  users,
  chat,
});
export default reducer;
