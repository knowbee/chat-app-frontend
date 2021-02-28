import React, { useEffect } from "react";
import "./chat.scss";
import { connect } from "react-redux";
import Message from "../Message/index";
import ConversationsList from "../ConversationsList/index";
import Contact from "../Contact/index";
import { fetchUsers } from "../../redux/actions";

function Chat({ fetchUsers, chats }) {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const Toggle = () => setShowSidebar(true);

  useEffect(() => {
    fetchUsers().then((res) => {});
  }, []);

  return (
    <div className="chat">
      <div className="header">
        <img
          style={{ width: "auto" }}
          src="https://iili.io/fi0ROQ.png"
          alt=""
        />
        <button className="logout-button">logout</button>
        <button className="dropdown-button" onClick={Toggle}>
          <svg
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 384.97 384.97"
            width="20px"
            height="20px"
          >
            <g>
              <g id="Menu">
                <path
                  d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03
			C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"
                />
                <path
                  d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03
			S379.58,180.455,372.939,180.455z"
                />
                <path
                  d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909
			c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"
                />
              </g>
            </g>
          </svg>
          {showSidebar ? <ConversationsList chats={chats} /> : null}
        </button>
      </div>
      <div className="chat-body">
        <ConversationsList chats={chats} />
        <Message />
        <Contact />
      </div>
    </div>
  );
}

const mapStateToProps = ({ users: { fetching, chats, errors } }) => ({
  fetching,
  chats,
  errors,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
