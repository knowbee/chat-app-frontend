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
          <button>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-name="Layer 2">
                <g data-name="close">
                  <rect
                    width="24"
                    height="24"
                    transform="rotate(180 12 12)"
                    opacity="0"
                  />
                  <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
                </g>
              </g>
            </svg>
          </button>
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
