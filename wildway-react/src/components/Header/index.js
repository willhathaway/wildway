import React, { Component } from "react";
import "./style.css";


function Header(props) {

    

    if (props.hidden === false) {

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
                        <a href="/journal" id="nav-journal">journal</a>
                        <a href="/#contact" id="nav-contact">contact</a>
                        <a href="/portfolio" id="nav-portfolio">portfolio</a>
                    </nav>
                </div>
            </div>
        </div>
    )
    }
    else {
        return <div></div>
    }
}


export default Header;