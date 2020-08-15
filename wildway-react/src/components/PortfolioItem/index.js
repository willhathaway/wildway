import React, { Component } from "react";
import "./style.css";

// add an image of the project to the background of the component

function PortfolioItem(props) {

    return (
        <div className="portfolioItem">
            <h2 className="projectName">{props.projectName}</h2>
            <img className="projectImage"></img>
            <p className="projectDesc">{props.projectDesc}</p>

            <div className="links">
            <div class="buttons">
                <div class="container">
                    <a href="https://twitter.com/masuwa1018" class="btn effect04" data-sm-link-text="click here" target="_blank"><span>deployed project</span></a>
                </div>
            </div>
            <div class="buttons">
                <div class="container">
                    <a href="https://twitter.com/masuwa1018" class="btn effect04" data-sm-link-text="click here" target="_blank"><span>github</span></a>
                </div>
            </div>
            </div>

            

        </div>
    )
}


export default PortfolioItem;