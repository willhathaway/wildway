import React, { Component } from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="header">
      <div className="bar">
        <a href="/">
          <div className="animate" id="divPrime">
            <div className="ww letterDiv" id="div1">
              W
            </div>
            <div className="ww letterDiv" id="div2">
              I
            </div>
            <div className="ww letterDiv" id="div3">
              L
            </div>
            <div className="nw letterDiv" id="div4">
              L
            </div>
            <div className="nw letterDiv" id="div5">
              I
            </div>
            <div className="nw letterDiv" id="div6">
              A
            </div>
            <div className="nw letterDiv" id="div7">
              M
            </div>
            <div className="nw letterDiv" id="div8">
              {" "}
            </div>
            <div className="ww letterDiv" id="div9">
              D
            </div>
            <div className="nw letterDiv" id="div10">
              A
            </div>
            <div className="nw letterDiv" id="div11">
              N
            </div>
            <div className="nw letterDiv" id="div12">
              I
            </div>
            <div className="nw letterDiv" id="div13">
              E
            </div>
            <div className="nw letterDiv" id="div14">
              L
            </div>
            <div className="nw letterDiv" id="div15">
              {" "}
            </div>
            <div className="nw letterDiv" id="div16">
              H
            </div>
            <div className="nw letterDiv" id="div17">
              A
            </div>
            <div className="nw letterDiv" id="div18">
              T
            </div>
            <div className="nw letterDiv" id="div19">
              H
            </div>
            <div className="nw letterDiv" id="div20">
              A
            </div>
            <div className="ww letterDiv" id="div21">
              W
            </div>
            <div className="ww letterDiv" id="div22">
              A
            </div>
            <div className="ww letterDiv" id="div23">
              Y
            </div>
          </div>
          <div className="wildwayAlt">WILDWAY</div>
          <div className="webDesignIndex">
            <p>WEB DESIGN</p>
          </div>
          <div className="homeLine"></div>

          <div className="wildwayIndex">
            <p>WILDWAY</p>
          </div>
          <div>
            <div class="headerButtons">
              <a
                href="/consulting"
                className="btn02 effect02 "
                data-sm-link-text="consulting"
              >
                <span>consulting</span>
              </a>

              <a
                href="/tutoring"
                className="btn02 effect02 "
                data-sm-link-text="tutoring"
              >
                <span>tutoring</span>
              </a>

              <a
                href="/portfolio"
                className="btn02 effect02 "
                data-sm-link-text="portfolio"
              >
                <span>portfolio</span>
              </a>
              <a
                href="/contact"
                className="btn02 effect02 "
                data-sm-link-text="contact"
              >
                <span>contact</span>
              </a>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
export default Header;
