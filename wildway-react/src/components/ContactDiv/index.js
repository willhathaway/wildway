import React, { Component } from "react";
import "./style.css";
import SocialLinks from "../SocialLinks/index.js";

export default function Contact(props) {
  return (
    <div className="contactDiv">
      <div className="inquiries" id="">
        <h6 className="emailText">
          Please click below to send me an email. I will respond as soon as
          possible. Thank you.
        </h6>

        <button className="emailBtn">
          <a href="mailto:william.hathaway38@gmail.com" subject="inquiry">
            Send an email
          </a>
        </button>
        <SocialLinks />
      </div>
    </div>
  );
}
