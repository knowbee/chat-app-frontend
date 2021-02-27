import React from "react";
import "./modal.scss";
import UsersList from "../UserList";
function Modal(props) {
  if (!props.show) {
    return null;
  }
  const users = [
    {
      id: 0,
      name: "Karemera Elvis",
      status: "online",
    },
    {
      id: 1,
      name: "Malonga Cedrick",
      status: "offline",
    },
  ];
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>New Chat</h2>
          <input
            className="search-user"
            type="text"
            placeholder="Search for a user"
          ></input>
          <button onClick={props.onClose}>
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
        <div className="modal-body">
          <UsersList users={users} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
