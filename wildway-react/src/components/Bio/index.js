import React, { Component } from "react";
import "./style.css";


function Bio() {


    let welcome = "Welcome!";

    let bio1 = "Welcome to WILDWAY, my personal website and portfolio. I am a 22 year old artist, designer and developer. Everything you see here was designed, drawn, painted, written and programmed by me. You will also find what I've done, a bit about who I am, and what I can do for you and your business. I build professional websites and applications for businesses and individuals, and I will work to deliver whatever you need.";

    let shortBio = "A Brief Biography:";

    let bio2 = "I am a recent graduate of the Trilogy Coding Bootcamp at the Harvard Extension School, which ended in March 2020. I have worked on and off at InResonance Software, a company headquartered near my home in the Pioneer Valley, between 2016 and 2018. After graduating high school, I completed Division I at Hampshire College before taking a leave of absence to travel and learn. Some of the most fulfilling work I’ve done in my life has involved programming: from senior year of high school, when I used Python to map kinematic equations for an honors Physics class; to my various roles at iR; to the work that I’ve done during the bootcamp (shown on the portfolio page)."

    let tech = [
        "Technologies:\n",
        " - Javascript (React.js, Node.js, Express.js)",
        " - Drupal 8 and Drupal 9",
        " - Wordpress",
        " - Relational and non-relational databases (MongoDB, MySQL, Firebase)",
        " - Design and animation (Blender, Procreate, Photoshop, inDesign)"
    ]


    return (
        <div className="aboutMe">
            <div className="aboutText">

                <div className="bioText"><p className="boldText">{welcome}</p><br /></div>

                <div className="bioText"><p>{bio1}</p></div>

                <div className="bioText"><p className="boldText">{shortBio}</p><br /></div>

                <div className="bioText"><p>{bio2}</p></div>


                {tech.map((text, i) => {
                    if (text.includes(":") === true) {
                        return <div className="bioText"><p className="boldText">{text}</p><br /></div>
                    } else {
                        return <div className="bioText"><p>{text}</p></div>
                    }
                })}

        <div className="bioText"><p className="boldText">Links:</p><br /></div>
        <div className="bioText"><a href="https://www.linkedin.com/in/william-hathaway-731b7a190/"><p>LinkedIn</p></a></div>
        <div className="bioText"><a href="https://github.com/willhathaway"><p>Github</p></a></div>
        <div className="bioText"><a href="https://stackoverflow.com/"><p>Stack Overflow</p></a></div>
        <div className="bioText"><a href="https://www.instagram.com/wildwayart/"><p>Instagram</p></a></div>



            
            </div>
        </div>
    )

}


export default Bio;