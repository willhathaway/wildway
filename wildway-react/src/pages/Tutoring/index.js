import React, { Component } from "react";
import "./style.css";
import Header from "../../components/Header/index.js";
import Title from "../../components/Title/index.js";
import ContentDiv from "../../components/ContentDiv";

function Tutoring() {
  return (
    <div>
      <Header hidden={false} />
      <div className="tutoringDiv">
        <ContentDiv>
          <Title title="Tutoring" />
          <div className="portfolioText">
            <p>
              Hi! I have spent the last 5 years gaining knowledge and experience
              in the ever-changing field of web development and computer
              programming, and now I want to help you or your children get
              started on your path to excellence.
            </p>
            <p>
              Programming is not only one of the most sought-after and highly
              valued skills in todays economy, it also provides crucial
              understanding of the systems that are the foundation of our modern
              world.
            </p>
            <p>
              These skills also help tremendously with critical thinking,
              categorization, mathematics, and other areas that can be usefully
              applied to any area of life.
            </p>
            <p>
              If you are interested, please reach out at 413-326-4769 or email
              me at william.hathaway38@gmail.com
            </p>
            <p>I look forward to working with you!</p>
          </div>
        </ContentDiv>
      </div>
    </div>
  );
}

export default Tutoring;
