import React from "react";
import "./message.scss";

function Message() {
  return (
    <div className="message">
      <h2>Kwizera Elvis</h2>

      <div className="message-card">
        <img
          src="../../assets/pfp-placeholder.png"
          alt=""
          className="profile-picture"
        />
        <div>
          <p>When are you coming ?</p>
          <small>09:30pm</small>
        </div>
      </div>
      <div className="message-card-one">
        <img
          src="../../assets/pfp-placeholder.png"
          alt=""
          className="profile-picture"
        />
        <div>
          <p>Hi, I’ll be there at 7:30pm</p>
          <small>09:30pm</small>
        </div>
      </div>

      <div className="message-card">
        <img
          src="../../assets/pfp-placeholder.png"
          alt=""
          className="profile-picture"
        />
        <div>
          <p>When are you coming ?</p>
          <small>09:30pm</small>
        </div>
      </div>
      <div className="message-card-one">
        <img
          src="../../assets/pfp-placeholder.png"
          alt=""
          className="profile-picture"
        />
        <div>
          <p>Hi, I’ll be there at 7:30pm</p>
          <small>09:30pm</small>
        </div>
      </div>
      <div className="message-card">
        <img
          src="../../assets/pfp-placeholder.png"
          alt=""
          className="profile-picture"
        />
        <div>
          <p>When are you coming ?</p>
          <small>09:30pm</small>
        </div>
      </div>
      <div className="message-card-one">
        <img
          src="../../assets/pfp-placeholder.png"
          alt=""
          className="profile-picture"
        />
        <div>
          <p>Hi, I’ll be there at 7:30pm</p>
          <small>09:30pm</small>
        </div>
      </div>
      <input
        className="message-input"
        type="text"
        placeholder="Type a message"
      ></input>
      <svg
        className="send-icon"
        width="20"
        height="20"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.6954 0.291234C23.5604 0.156908 23.3899 0.0639048 23.2039 0.0231609C23.0179 -0.0175829 22.8241 -0.00437409 22.6454 0.0612345L0.645352 8.06123C0.45562 8.1332 0.292272 8.26118 0.177003 8.42819C0.0617345 8.59519 0 8.79331 0 8.99623C0 9.19916 0.0617345 9.39728 0.177003 9.56428C0.292272 9.73128 0.45562 9.85927 0.645352 9.93123L9.23535 13.3612L15.5754 7.00123L16.9854 8.41123L10.6154 14.7812L14.0554 23.3712C14.1295 23.5573 14.2577 23.7168 14.4235 23.8292C14.5894 23.9415 14.7851 24.0014 14.9854 24.0012C15.1874 23.9971 15.3835 23.9318 15.5478 23.814C15.712 23.6962 15.8367 23.5313 15.9054 23.3412L23.9054 1.34123C23.9735 1.16431 23.9899 0.971665 23.9527 0.785758C23.9156 0.599851 23.8263 0.428345 23.6954 0.291234Z"
          fill="#2AA2FA"
        />
      </svg>
    </div>
  );
}

export default Message;
