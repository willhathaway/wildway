import React, { Component } from "react";
import "./style.css";
import Fade from "react-reveal/Fade";
import Cupid from "../../content/images/Cupid.png";
import Artemis from "../../content/images/Artemis.png";
import Centaur from "../../content/images/Centaur.png";

function MobileHome(props) {
  return (
    <div className="mobileHome">
      <div className="contents">
        <Fade left>
          <div className="contentBlock block1">
            <h3 class="contentBlockTitle">Welcome to WILDWAY</h3>
            <p className="contentBlockText">
              WILDWAY is the personal website and portfolio of myself, William
              Hathaway, artist, designer and UI/UX developer.
            </p>
            <p className="contentBlockText">
              I build professional websites and applications for businesses and
              individuals.
            </p>
            <p className="contentBlockText">
              Everything you see here was designed, drawn, painted, written and
              programmed (with the exception of one or two CSS animations) by
              me.
            </p>
          </div>
        </Fade>

        <div className="mobileImg">
          <img className="mobileCupid" src={Cupid}></img>
        </div>

        <Fade right>
          <div className="contentBlock block2">
            <h3 class="contentBlockTitle">An eye for design</h3>
            <p className="contentBlockText">
              A recent graduate of the Harvard Extension School's Full Stack
              Coding Bootcamp, I was awarded 'Most Likely To Inspire Young
              Developers' from my fellow classmates for my work during the
              course.
            </p>
            <p className="contentBlockText">
              Having attended Hampshire College and one of the best Arts high
              schools in Massachusetts, I bring experience in both digital and
              fine art to my programming work.
            </p>
          </div>
        </Fade>

        <div className="mobileImg">
          <img className="mobileArtemis" src={Artemis}></img>
        </div>

        <Fade left>
          <a href="/#contact">
            <div className="contentBlock block3">
              <h3 class="contentBlockTitle">What I can do for you</h3>
              <p className="contentBlockText">Proficient in:</p>
              <ul>
                <li>Javascript (React.js, Node.js, Express.js)</li>
                <li>Drupal 8 and Drupal 9</li>
                <li>Wordpress</li>
                <li>Databases (MongoDB, MySQL, Firebase)</li>
                <li>
                  Design and animation (Blender, Procreate, Photoshop, inDesign)
                </li>
              </ul>
              <p className="contentBlockText">
                Click here to look at some of my previous work.
              </p>
              <p className="contentBlockText">
                Are you ready to take your online presence to the next level?
                Tap anywhere to send me an email.
              </p>
            </div>
          </a>
        </Fade>

        <div className="mobileImg">
          <a href="/#contact">
            <img className="mobileCentaur" src={Centaur}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileHome;
