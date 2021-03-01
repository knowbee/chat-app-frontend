import axios from "../../helpers/axiosHelper";
import { LOGIN_FAILURE, SUBMIT_LOGIN_FORM, CLEAR_LOGIN } from "../action-types";
import {
  setCurrentUser,
  setCurrentUserSuccess,
  setCurrentUserFailed,
} from "./currentUserActions";
import { fetchUsers } from "./usersActions";
export const submitLoginForm = () => ({
  type: SUBMIT_LOGIN_FORM,
});

export const clearLogin = () => ({
  type: CLEAR_LOGIN,
});

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch(submitLoginForm());
  return axios
    .post("/auth/login", {
      email,
      password,
    })
    .then((res) => {
      dispatch(setCurrentUser(res.data.data.user));
      dispatch(clearLogin());
      dispatch(setCurrentUserSuccess("User logged in"));
      localStorage.setItem("current_user", JSON.stringify(res.data.data.user));
      localStorage.setItem("token", res.data.data.token);
      dispatch(fetchUsers());
      return res;
    })
    .catch((err) => {
      dispatch(setCurrentUserFailed("Failed to loggin"));
      dispatch({
        type: LOGIN_FAILURE,
        payload: err,
      });
      return err;
    });
};
