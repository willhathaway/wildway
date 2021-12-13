import React, { Component } from "react";
import "./style.css";

const HomeSection = (props) => {
  return (
    <div className="homeSection" style={props.style}>
      <a href={props.link}>
        <img className="homeImg" src={props.img}></img>
        <p className="sectionTitle">{props.name}</p>
        <p id="quoteText">{props.quote}</p>
      </a>
    </div>
  );
};

export default HomeSection;
