import axios from "../../helpers/axiosHelper";
import { LOGIN_FAILURE, SUBMIT_LOGIN_FORM } from "../action-types";

export const submitLoginForm = () => ({
  type: SUBMIT_LOGIN_FORM,
});

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch(submitLoginForm());
  return axios
    .post("/auth/login", {
      email,
      password,
    })
    .then((res) => {
      localStorage.setItem("current_user", JSON.stringify(res.data.data.user));
      localStorage.setItem("token", res.data.data.token);
      return res;
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err,
      });
      return err;
    });
};
