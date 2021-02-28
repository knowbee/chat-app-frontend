import axios from "../../helpers/axiosHelper";
import {
  FAILED_FETCHING_USERS,
  FETCHED_USERS_SUCCESSFULLY,
  FETCHING_USERS,
} from "../action-types/usersTypes";

export const fetchingUsersFailed = (payload) => ({
  type: FAILED_FETCHING_USERS,
  payload,
});

export const fetchingUsers = (payload) => ({
  type: FETCHING_USERS,
  payload,
});

export const fetchingUsersSuccess = (payload) => ({
  type: FETCHED_USERS_SUCCESSFULLY,
  payload,
});

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchingUsers());
  return axios
    .get("/users", {})
    .then((res) => {
      dispatch(fetchingUsersSuccess(res.data.data));
      return res;
    })
    .catch((err) => {
      dispatch(fetchingUsersFailed());
      return err;
    });
};
