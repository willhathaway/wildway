import React, { Component } from "react";
import "./style.css";
import Header from '../../components/Header/index.js';
import Title from "../../components/Title/index.js";
import ContentDiv from "../../components/ContentDiv";
import PortfolioItem from "../../components/PortfolioItem";


function Portfolio() {
    
        return (

            <div>

            <Header hidden={false} />

            <ContentDiv>
                <Title title="~ Portfolio ~" />
                <PortfolioItem projectName="Helios Dayplanner" projectImage="img" projectDesc="A simple task manager and planner. Build with React, NodeJS, and MongoDB with Auth0 user authentication" /> 
            </ContentDiv>

        </div>

        )
    }


export default Portfolio;