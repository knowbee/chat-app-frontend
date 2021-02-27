import React from "react";
import "./chat.scss";
import Message from "../Message/index";
import ConversationsList from "../ConversationsList/index";
import Contact from "../Contact/index";

function Chat() {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const Toggle = () => setShowSidebar(true);

  const Conversations = [
    {
      id: 1,
      name: "Kwizera Elvis",
      text: "Lorem ipsum dolor sit amet",
      time: "09:30",
      image:
        "https://images.unsplash.com/photo-1614174568206-7620823e6aee?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Kalisa Rome",
      text: "Lorem ipsum dolor sit amet",
      time: "09:30",
      image:
        "https://images.unsplash.com/photo-1614174568206-7620823e6aee?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Ishimwe Cynthia",
      text: "Lorem ipsum dolor sit amet",
      time: "09:30",
      image:
        "https://images.unsplash.com/photo-1614174568206-7620823e6aee?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Rugwiro David",
      text: "Lorem ipsum dolor sit amet",
      time: "09:30",
      image:
        "https://images.unsplash.com/photo-1614174568206-7620823e6aee?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      name: "Umwali Anet",
      text: "Lorem ipsum dolor sit amet",
      time: "09:30",
      image:
        "https://images.unsplash.com/photo-1614174568206-7620823e6aee?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      name: "Karangwa Eric",
      text: "Lorem ipsum dolor sit amet",
      time: "09:30",
      image:
        "https://images.unsplash.com/photo-1614174568206-7620823e6aee?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="chat">
      <div className="header">
        <img
          style={{ width: "auto" }}
          src="https://iili.io/fi0ROQ.png"
          alt=""
        />
        <img
          style={{ width: "40px", height: "50px", borderRadius: "50%" }}
          src="https://images.unsplash.com/photo-1614174568206-7620823e6aee?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="profile-picture"
        />
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
          {showSidebar ? <ConversationsList /> : null}
        </button>
      </div>
      <div className="chat-body">
        <ConversationsList conversations={Conversations} />
        <Message />
        <Contact />
      </div>
    </div>
  );
}

export default Chat;
