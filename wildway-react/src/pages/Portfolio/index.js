import React, { Component } from "react";
import "./style.css";
import Header from '../../components/Header/index.js';
import Title from "../../components/Title/index.js";
import ContentDiv from "../../components/ContentDiv";
import PortfolioItem from "../../components/PortfolioItem";
import portfolioList from "../../content/lists/portfolio.json";


function Portfolio() {
    
        return (

            <div>

            <Header hidden={false} />

            <ContentDiv>
                <Title title="~ Portfolio ~" />
                {portfolioList.map((project, i ) => {
                    return <PortfolioItem projectName={project.name} projectImage={project.image} projectDesc={project.description} technologies={project.technologies} deployed={project.deployedLink} github={project.githubLink} /> 
                })}
                <div className="bottom"></div>
            </ContentDiv>

            

        </div>

        )
    }


export default Portfolio;