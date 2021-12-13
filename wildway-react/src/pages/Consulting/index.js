import React, { Component } from "react";
import "./style.css";
import Header from "../../components/Header/index.js";
import Title from "../../components/Title/index.js";
import ContentDiv from "../../components/ContentDiv";
import Centaur from "../../content/images/Centaur.png";

function Consulting() {
  return (
    <div>
      <Header hidden={false} />

      <ContentDiv>
        <Title title="Consulting" />
      </ContentDiv>
    </div>
  );
}

export default Consulting;
