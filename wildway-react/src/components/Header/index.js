import React, { Component } from "react";
import "./style.css";


function Header() {

    return (
        <div className="header">
            <div id="bar">
                <a href='/'>
                    <div className="wildway"><p>WILDWAY</p></div>
                    <div className="webDesign"><p>WEB DESIGN</p></div>
                </a>
                <div className="line"></div>

                <div id="nav-buttons">
                    <nav>
                        <a href="/about" id="nav-about">about</a>
                        <a href="/portfolio" id="nav-portfolio">portfolio</a>
                        <a href="/contact" id="nav-contact">contact</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}


export default Header;