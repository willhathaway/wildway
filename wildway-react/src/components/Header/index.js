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
                        <div className="headerButtonsContainer">
                            <div class="headerButtons">
                                
                                    <a href="/journal" className="btn02 effect02 " data-sm-link-text="journal"><span>journal</span></a>
                                
                                
                                    <a href="/#contact" className="btn02 effect02 " data-sm-link-text="inquiries"><span>inquiries</span></a>
                              
                                    <a href="/portfolio" className="btn02 effect02 "  data-sm-link-text="portfolio"><span>portfolio</span></a>
                                
                            </div>
                            </div>
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