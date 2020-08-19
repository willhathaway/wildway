import React, { Component } from "react";
import "./style.css";
import Header from '../../components/Header/index.js';
import Title from "../../components/Title/index.js";
import ContentDiv from "../../components/ContentDiv";
import PortfolioItem from "../../components/PortfolioItem";
import portfolioList from "../../content/lists/portfolio.json";
import Centaur from "../../content/images/Centaur.png"



function Portfolio() {

    return (

        <div>

            <Header hidden={false} />

            <ContentDiv>
                <Title title="Portfolio" />
                <div className="PortfolioItems">
                    {portfolioList.map((project, i) => {
                        return <PortfolioItem projectName={project.name} projectImage={project.image} projectDesc={project.description} technologies={project.technologies} deployed={project.deployedLink} github={project.githubLink} />
                    })}

                </div>

            </ContentDiv>

            <div className="bottom"><div className="topScrollBtn"><a href="/portfolio"><img className="topScrollBtnImg" src={Centaur}></img><p id="clickToScrollUp">back to top</p></a></div>
            </div>


        </div>

    )
}


export default Portfolio;