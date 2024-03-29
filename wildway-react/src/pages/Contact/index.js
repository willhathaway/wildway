import React, { Component } from "react";
import "./style.css";
import Header from "../../components/Header/index.js";
import Title from "../../components/Title/index.js";
import ContentDiv from "../../components/ContentDiv";
import ContactDiv from "../../components/ContactDiv/index.js";

function Contact() {
  return (
    <div>
      <Header hidden={false} />
      <div>
        <ContentDiv>
          <Title title="Contact" />
          <ContactDiv />
        </ContentDiv>
      </div>
    </div>
  );
}

export default Contact;
