import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_FORM_SUBMIT,
  CLEAR_REGISTER_FORM,
} from "../action-types";

import axios from "../../helpers/axiosHelper";

export const clearRegistrationForm = () => ({
  type: CLEAR_REGISTER_FORM,
});

export const submitForm = (payload) => ({
  type: REGISTER_FORM_SUBMIT,
  payload,
});

export const submitRegisterSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const submitRegisterFailure = (payload) => ({
  type: REGISTER_FAILURE,
  payload,
});

export const submitRegister = ({ name, email, password }) => (dispatch) => {
  dispatch(submitForm({ submitting: true }));
  return axios
    .post("/auth/register", { name, email, password })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      dispatch(submitRegisterFailure({ message: err.message }));
      return err;
    });
};
