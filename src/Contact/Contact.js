import React from "react";
import contact from "../img/contact.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact1">
        <img src={contact} />
      </div>
      <div className="contact2">
        <h1>Money RT App on Google Play or Appstore</h1>
        <span>
          Build your financial literacy within a transparent community. Follow
          other investors,share insights with people
        </span>
        <div className="contact-buttons">
          <button>
            {" "}
            <i className="fab fa-apple"></i> App Store
          </button>
          <button>
            <i className="fab fa-google-play"></i> Play Store
          </button>
        </div>
      </div>
    </div>
  );
}
export default Contact;
