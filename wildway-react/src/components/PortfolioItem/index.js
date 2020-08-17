import React, { Component } from "react";
import "./style.css"; 

// add an image of the project to the background of the component

function PortfolioItem(props) {

    //let image = props.projectImage;
    
    let image = "../../content/images/helios-img.png";


    return (
        <div className="portfolioItem" style={{backgroundImage: `url(${image})`}}>
            <h2 className="projectName">{props.projectName}</h2>
            <p className="projectDesc">{props.projectDesc}</p>
            <div className="techs">
                <p className="tech">Built with:</p>
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
                        <a href={props.deployed} class="btn effect04" data-sm-link-text="click here" target="_blank" rel="noopener noreferrer"><span>deployed project</span></a>
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