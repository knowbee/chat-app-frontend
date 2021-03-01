/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from "react";
import "./sidebar.scss";
import { connect } from "react-redux";
import Moment from "react-moment";

import {
  createReceiverId,
  createReceiverName,
  fetchMessages,
} from "../../redux/actions";
function Sidebar({ chats, saveReceiverId, saveReceiverName, fetchMessages }) {
  const [selectedUser, setSelectedUser] = useState();

  const chatsEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [selectedUser]);

  const scrollToBottom = () => {};
  const selectChat = (chat) => {
    setSelectedUser(chat);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        {" "}
        <div className="active">
          {" "}
          <p>Messages</p>
        </div>
      </div>
      <div className="sidebar-body">
        <ul>
          {chats.map((item) => (
            <a
              key={item.id}
              id="link"
              onClick={() => {
                selectChat(item);
                saveReceiverId(item.id);
                saveReceiverName(item.name);
                fetchMessages(item.id);
              }}
            >
              <div
                className={
                  selectedUser && selectedUser.id === item.id
                    ? "active-chat"
                    : ""
                }
              >
                <div className="chat">
                  <h4>{item.name}</h4>
                  <div>
                    <Moment format="h:mm:ss a">{item.joined_at}</Moment>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </ul>
      </div>
      <div ref={chatsEndRef} />
    </div>
  );
}

export const mapDispatchToProps = (dispatch) => ({
  saveReceiverId: (id) => dispatch(createReceiverId(id)),
  saveReceiverName: (name) => dispatch(createReceiverName(name)),
  fetchMessages: (id) => dispatch(fetchMessages(id)),
});

export default connect(null, mapDispatchToProps)(Sidebar);
