import React, { useEffect } from "react";
import "./layout.scss";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="layout">
      <div className="left-side">
        <div className="middle-container">
          <img src="https://iili.io/fi0IUb.png" alt="logo" />
          <p>stay in touch with your friends anytime and anywhere</p>
        </div>
      </div>
      <div className="right-side">{children}</div>
    </div>
  );
};
export default Layout;
