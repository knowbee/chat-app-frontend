import React, { useState, useContext, useEffect, useRef } from "react";
import "./message.scss";
import { connect } from "react-redux";
import { sendMessage, fetchMessages } from "../../redux/actions";
import { SocketContext } from "../../context/socket";

import sendIcon from "./send.svg";
import useSound from "use-sound";
import notification from "./message.mp3";
import TimeAgo from "timeago-react";

function Message({ receiver_id, send, messages, fetchMessages }) {
  const [message, setMessage] = useState("");
  const [sender_id, setSenderId] = useState(null);
  const [newMessage, setNewMessage] = useState({});

  const bottomRef = useRef(null);

  const executeScroll = () => bottomRef.current.scrollIntoView();

  const socket = useContext(SocketContext);

  useEffect(() => {}, [newMessage]);

  const [playOn] = useSound(notification, { volume: 0.4 });

  const handleSendMessage = (receiver_id, message, sender_id) => {
    send({ receiver_id, message, sender_id });
    setMessage("");
  };

  const handleEnterKey = (e, receiver_id, message, sender_id) => {
    if (e.charCode === 13) {
      handleSendMessage(receiver_id, message, sender_id);
    }
  };

  useEffect(() => {
    executeScroll();
  }, [messages]);

  useEffect(() => {
    const current_user = JSON.parse(localStorage.getItem("current_user"));
    socket.on("incomingMessage", (message) => {
      if (message.message.receiver_id === current_user.id) {
        playOn();
      }
      setNewMessage(message);
      fetchMessages(message.message.sender_id);
      fetchMessages(message.message.receiver_id);

      localStorage.setItem("new-message", JSON.stringify(message));
    });

    return () => socket.off("messageSent");
  }, [newMessage, socket, fetchMessages]);

  useEffect(() => {
    const current_user = JSON.parse(localStorage.getItem("current_user"));
    setSenderId(current_user.id);
  }, []);

  return (
    <div className="message">
      <div className="chats">
        {receiver_id ? (
          messages.map((message) => {
            if (receiver_id === message.receiver_id) {
              return (
                <div className="message-card-one" key={message.id}>
                  <div>
                    <p>{message.message}</p>
                    <small>
                      <TimeAgo datetime={message.created_at}></TimeAgo>
                    </small>
                  </div>
                </div>
              );
            } else if (receiver_id === message.sender_id) {
              return (
                <div className="message-card" key={message.id}>
                  <div>
                    <p>{message.message}</p>
                    <small>
                      <TimeAgo datetime={message.created_at}></TimeAgo>
                    </small>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <h2 className="no-chat">No chat selected</h2>
        )}
      </div>

      {receiver_id ? (
        <div className="input-container" id="input">
          <input
            type="text"
            placeholder="Type a message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => {
              handleEnterKey(e, receiver_id, message, sender_id);
            }}
          ></input>
          <img
            className="send-icon"
            src={sendIcon}
            alt="send"
            onClick={() => {
              handleSendMessage(receiver_id, message, sender_id);
              executeScroll();
            }}
          />
        </div>
      ) : null}
      <div ref={bottomRef}></div>
    </div>
  );
}

const mapStateToProps = ({
  chat: { receiver_id, receiver_name, messages },
}) => {
  return { receiver_id, receiver_name, messages };
};

export const mapDispatchToProps = (dispatch) => ({
  send: ({ receiver_id, message, sender_id }) =>
    dispatch(sendMessage({ receiver_id, message, sender_id })),
  fetchMessages: (id) => dispatch(fetchMessages(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
