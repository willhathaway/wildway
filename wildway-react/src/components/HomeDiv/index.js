import React, { Component } from "react";
import "./style.css";
import HomeSection from "../HomeSection";
import portfolioImg from "../../content/images/portfolio.jpg";
import tutoringImg from "../../content/images/portfolio.jpg";
import consultingImg from "../../content/images/consulting.jpeg";
import contactImg from "../../content/images/contact.jpg";

function HomeDiv() {
  let quoteArray = {
    portfolio:
      "Everything I look for when hiring someone: smart, self-starter, and cares about doing things the right way",
    tutoring:
      "A talented communicator, explaining complex ideas in a clear and non-abstract way.",
    consulting:
      "The website that William built for me has increased my ability to reach people and given me a digital home for my business.",
    contact:
      "Get in touch with the winner of the Most Likely to Inspire Young Coders award from the Harvard Coding Bootcamp.",
  };
  return (
    <div className="homeDiv">
      <HomeSection
        name="portfolio"
        style={{ backgroundColor: "red" }}
        img={portfolioImg}
        link="/portfolio"
        quote={quoteArray.portfolio}
      />
      <HomeSection
        name="tutoring"
        style={{ backgroundColor: "blue" }}
        img={tutoringImg}
        link="/tutoring"
        quote={quoteArray.tutoring}
      />
      <HomeSection
        name="consulting"
        style={{ backgroundColor: "green" }}
        img={consultingImg}
        link="/consulting"
        quote={quoteArray.consulting}
      />
      <HomeSection
        name="contact"
        style={{ backgroundColor: "yellow" }}
        img={contactImg}
        link="/contact"
        quote={quoteArray.contact}
      />
    </div>
  );
}

export default HomeDiv;
