import React, { Component } from "react";
import "./style.css"; 

// add an image of the project to the background of the component

function PortfolioItem(props) {

    //let image = props.projectImage;
    
    let image = "../../content/images/helios-img.png";


    return (
        <div className="portfolioItem" >
            <h2 className="projectName">{props.projectName}</h2>
            <p className="projectDesc">{props.projectDesc}</p>
            <div className="techs">
                {props.technologies.map((technology, i) => {
                    if (i === props.technologies.length - 1){
                    return <div className="tech"><p>{technology}</p></div>
                } else {
                    return <div className="tech"><p>{technology}, </p></div>

                }
                })}
            </div>


            <div className="links">
                <div class="buttons">
                    <div class="container">
                        <a href={props.deployed} class="btn effect04" data-sm-link-text="click here" target="_blank" rel="noopener noreferrer"><span>live demo</span></a>
                    </div>
                </div>
                <div class="buttons">
                    <div class="container">
                        <a href={props.github} class="btn effect04" data-sm-link-text="click here" target="_blank" rel="noopener noreferrer"><span>github</span></a>
                    </div>
                </div>
            </div>



        </div>
    )
}


export default PortfolioItem;