import React, { useEffect } from "react";
import "./chat.scss";
import { connect } from "react-redux";
import Message from "../Message/index";
import ConversationsList from "../ConversationsList/index";
import { fetchUsers } from "../../redux/actions";
import menu from "./menuIcon.svg";

function Chat({ fetchUsers, chats, receiver_name }) {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const Toggle = () => setShowSidebar(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      fetchUsers().then((res) => {});
    }
  }, [fetchUsers, token]);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="chat">
      <div className="header">
        <img
          style={{ width: "auto" }}
          src="https://iili.io/fi0ROQ.png"
          alt=""
        />
        <h4>{receiver_name}</h4>
        <button className="logout-button" onClick={logout}>
          Logout
        </button>
        <button
          className="dropdown-button"
          onClick={() => {
            Toggle();
          }}
        >
          <img src={menu} alt="menu" />
          {showSidebar ? <ConversationsList chats={chats} /> : null}
        </button>
      </div>
      <div className="chat-body">
        <ConversationsList chats={chats} />
        <Message />
      </div>
    </div>
  );
}

const mapStateToProps = ({
  users: { fetching, chats, errors },
  chat: { receiver_name },
}) => ({
  fetching,
  receiver_name,
  chats,
  errors,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
