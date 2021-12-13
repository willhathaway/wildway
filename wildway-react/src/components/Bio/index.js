import React, { Component } from "react";
import "./style.css";
import Fade from "react-reveal/Fade";
import Artemis from "../../content/images/Artemis.png";
import Cupid from "../../content/images/Cupid.png";
import Centaur from "../../content/images/Centaur.png";
import Contact from "../Contact";

function Bio() {
  let tech = [
    "Technologies:\n",
    " - Javascript (React.js, Node.js, Express.js)",
    " - Drupal 8 and Drupal 9",
    " - Wordpress",
    " - Relational and non-relational databases (MongoDB, MySQL, Firebase)",
    " - Design and animation (Blender, Procreate, Photoshop, inDesign)",
  ];

  return (
    <div className="aboutMe">
      <div className="aboutText">
        <div className="bioContainer" title="bioContainer">
          {tech.map((text, i) => {
            if (text.includes(":") === true) {
              return (
                <div className="bioText">
                  <p className="boldText">{text}</p>
                  <br />
                </div>
              );
            } else {
              return (
                <div className="bioText">
                  <p>{text}</p>
                </div>
              );
            }
          })}

          <Fade up>
            <Contact />
          </Fade>
          <div style={{ flex: 1 }}>
            <Fade left>
              <div className="scrollBtn">
                <img className="scrollBtnImg" src={Cupid}></img>
              </div>
            </Fade>
            <Fade right>
              <div className="scrollBtn">
                <img className="scrollBtnImg" src={Artemis}></img>
              </div>
            </Fade>
            <Fade left>
              <div className="scrollBtn">
                <img className="scrollBtnImg" src={Centaur}></img>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
