import React from "react";
import "./userslist.scss";

function UsersList({ users }) {
  return users.map((user) => (
    <div className="contact">
      <img src="../../assets/pfp-placeholder.png" alt="" />
      <div className="contact-info">
        <h4>{user.name}</h4>
        <p>{user.status}</p>
      </div>
    </div>
  ));
}

export default UsersList;
