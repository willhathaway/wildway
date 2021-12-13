import React, { Component } from "react";
import "./style.css";
import { SocialIcon } from "react-social-icons";

function SocialLinks() {
  return (
    <div className="socialLinksContainer">
      <div className="socialLinks">
        <SocialIcon
          url="https://www.instagram.com/wildwayart/"
          style={{ margin: "5px", padding: "5px", height: "50px" }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/william-hathaway-731b7a190/"
          style={{ margin: "5px", padding: "5px", height: "50px" }}
        />
        <SocialIcon
          url="https://github.com/willhathaway"
          style={{ margin: "5px", padding: "5px", height: "50px" }}
        />
        <SocialIcon
          url="https://stackoverflow.com/"
          style={{ margin: "5px", padding: "5px", height: "50px" }}
        />
      </div>
    </div>
  );
}

export default SocialLinks;
