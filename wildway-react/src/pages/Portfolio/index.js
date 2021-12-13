import React, { Component } from "react";
import "./style.css";
import Header from "../../components/Header/index.js";
import Title from "../../components/Title/index.js";
import ContentDiv from "../../components/ContentDiv";
import PortfolioItem from "../../components/PortfolioItem";
import portfolioList from "../../content/lists/portfolio.json";
import Centaur from "../../content/images/Centaur.png";

function Portfolio() {
  return (
    <div>
      <Header hidden={false} />

      <ContentDiv>
        <Title title="Portfolio" />
        <div className="portfolioText">
          <p>
            A Full-Stack Web Developer with a longstanding passion for design
            and visual communication. Focused and driven, with recent successes
            working as a technical intern creating solutions to complex data
            problems for Born Digital, as well as leading development projects
            in the Coding Bootcamp at the Harvard Extention School.
          </p>
          <p>
            Fluent in JavaScript, with special interets in NodeJS and
            React/React Mobile. Proficient in Drupal 7 and 8. Experience in art
            and design are combined with a fascination for elegant problem
            solving.{" "}
          </p>
          <p>
            I look forward to discussing how I might be of help to you and your
            business!
          </p>
        </div>
        <div className="PortfolioItems">
          {portfolioList.map((project, i) => {
            return (
              <PortfolioItem
                projectName={project.name}
                projectImage={project.image}
                projectDesc={project.description}
                technologies={project.technologies}
                deployed={project.deployedLink}
                github={project.githubLink}
              />
            );
          })}
        </div>
      </ContentDiv>

      <div className="bottom">
        <div className="topScrollBtn">
          <a href="/portfolio">
            <img className="topScrollBtnImg" src={Centaur}></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
