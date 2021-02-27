import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <div className="contact-info">
      <div className="contact-info-header">
        <img
          src="../../assets/pfp-placeholder.png"
          alt=""
          className="profile-picture"
        />
        <h2>Contact Information</h2>
      </div>
      <div className="contact-info-details">
        <h4>Email</h4>
        <p>kwizera@gmail.com</p>
        <h4>Phone number</h4>
        <p>+25078555555541</p>
        <h4>Address</h4>
        <p>Kigali,Rwanda</p>
      </div>
    </div>
  );
}

export default Contact;
