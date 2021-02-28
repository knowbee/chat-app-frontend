/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./sidebar.scss";
import TimeAgo from "timeago-react";

function Sidebar({ chats }) {
  const [selectedUser, setSelectedUser] = useState();
  const selectChat = (chat) => {
    setSelectedUser(chat);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        {" "}
        <input type="text" placeholder=" Search" />
        <svg
          className="search-icon"
          width="20"
          height="20"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.207 20.8618L15.8667 14.5215C16.8506 13.2495 17.3828 11.6943 17.3828 10.0586C17.3828 8.10059 16.6187 6.26465 15.2368 4.88037C13.855 3.49609 12.0142 2.73438 10.0586 2.73438C8.10303 2.73438 6.26221 3.49854 4.88037 4.88037C3.49609 6.26221 2.73438 8.10059 2.73438 10.0586C2.73438 12.0142 3.49854 13.855 4.88037 15.2368C6.26221 16.6211 8.10059 17.3828 10.0586 17.3828C11.6943 17.3828 13.2471 16.8506 14.519 15.8691L20.8594 22.207C20.878 22.2256 20.9 22.2404 20.9243 22.2505C20.9486 22.2605 20.9747 22.2657 21.001 22.2657C21.0273 22.2657 21.0533 22.2605 21.0776 22.2505C21.1019 22.2404 21.124 22.2256 21.1426 22.207L22.207 21.145C22.2256 21.1264 22.2404 21.1044 22.2505 21.0801C22.2605 21.0558 22.2657 21.0297 22.2657 21.0034C22.2657 20.9771 22.2605 20.9511 22.2505 20.9268C22.2404 20.9025 22.2256 20.8804 22.207 20.8618ZM13.9258 13.9258C12.8906 14.9585 11.5186 15.5273 10.0586 15.5273C8.59863 15.5273 7.22656 14.9585 6.19141 13.9258C5.15869 12.8906 4.58984 11.5186 4.58984 10.0586C4.58984 8.59863 5.15869 7.22412 6.19141 6.19141C7.22656 5.15869 8.59863 4.58984 10.0586 4.58984C11.5186 4.58984 12.8931 5.15625 13.9258 6.19141C14.9585 7.22656 15.5273 8.59863 15.5273 10.0586C15.5273 11.5186 14.9585 12.8931 13.9258 13.9258Z"
            fill="#C4C4C4"
          />
        </svg>
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
                    <TimeAgo datetime={item.joined_at} locale="en_US" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
