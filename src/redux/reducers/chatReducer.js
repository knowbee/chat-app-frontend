import * as types from "../action-types/chatTypes";

const initialState = {
  receiver_id: "",
  receiver_name: "",
  messages: [],
};

const chatReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_CHAT:
      return {
        ...state,
      };
    case types.CREATE_RECEIVER_ID:
      return {
        ...state,
        receiver_id: payload.receiver_id,
      };
    case types.CREATE_RECEIVER_NAME:
      return {
        ...state,
        receiver_name: payload.receiver_name,
      };
    case types.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: payload,
      };
    default:
      return state;
  }
};

export default chatReducer;
