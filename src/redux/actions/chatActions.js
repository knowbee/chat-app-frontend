import axios from "../../helpers/axiosHelper";
import {
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILED,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILED,
  CREATE_RECEIVER_ID,
  CREATE_RECEIVER_NAME,
  UPDATE_CHAT,
} from "../action-types/chatTypes";
import { socket } from "../../context/socket";
export const sendMessageSuccess = (payload) => ({
  type: SEND_MESSAGE_SUCCESS,
  payload,
});

export const sendMessageFailed = (payload) => ({
  type: SEND_MESSAGE_FAILED,
  payload,
});

export const fetchMessagesSuccess = (payload) => ({
  type: FETCH_MESSAGES_SUCCESS,
  payload,
});

export const fetchMessagesFailed = (payload) => ({
  type: FETCH_MESSAGES_FAILED,
  payload,
});

export const updateChat = (payload) => ({
  type: UPDATE_CHAT,
  payload,
});

export const createReceiverId = (id) => (dispatch) => {
  return dispatch({ type: CREATE_RECEIVER_ID, payload: { receiver_id: id } });
};

export const createReceiverName = (name) => (dispatch) => {
  return dispatch({
    type: CREATE_RECEIVER_NAME,
    payload: { receiver_name: name },
  });
};

export const fetchMessages = (id) => (dispatch) => {
  const token = localStorage.getItem("token");
  return axios
    .get("/messages", {}, token)
    .then((res) => {
      const results = res.data.data.filter(
        (item) => item.receiver_id === id || item.sender_id === id
      );
      dispatch(fetchMessagesSuccess(results));
      return results;
    })
    .catch((err) => {
      dispatch(fetchMessagesFailed(err));
      return err;
    });
};

export const sendMessage = ({ receiver_id, message, sender_id }) => (
  dispatch
) => {
  const token = localStorage.getItem("token");
  return axios
    .post(
      "/messages",
      {
        receiver_id,
        message,
        sender_id,
      },
      token
    )
    .then((res) => {
      socket.emit("messageSent", res.data.data);
      dispatch(fetchMessages(receiver_id));
      dispatch(fetchMessages(sender_id));
      return res;
    })
    .catch((err) => {
      console.log("====>>err>", err);
      return err;
    });
};
