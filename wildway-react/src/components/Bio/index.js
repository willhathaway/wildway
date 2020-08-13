import React, { Component } from "react";
import "./style.css";


function Bio() {


    let welcome = "Welcome!";

    let bio = "Welcome to WILDWAY, my personal website and portfolio. I am a 22 year old artist, designer and developer. Here you'll find what I've done, a bit about who I am and what I believe, and what I can do for you and your business. I build  professional websites and applications for businesses and individuals. I can work hard and smart to deliver whatever you need, provided it falls within my abilities (or just far enough outside them that I can learn something new!)";


    let tech = [
        "Technologies:\n",
        " - Javascript (React.js, Node.js, Express.js)",
        " - Drupal 8 and Drupal 9",
        " - Relational and non-relational databases (MongoDB, MySQL, Firebase)",
        " - Design and animation (Blender, Procreate, Photoshop, inDesign)"
    ]

    return (
        <div className="aboutMe">
            <div className="aboutText">

                <div className="bioText"><p className="boldText">{welcome}</p><br /></div>

                <div className="bioText"><p>{bio}</p></div>

                {tech.map((text, i) => {
                    if (text.includes(":") === true) {
                        return <div className="bioText"><p className="boldText">{text}</p><br /></div>
                    } else {
                        return <div className="bioText"><p>{text}</p></div>
                    }
                })}

            </div>
        </div>
    )

}


export default Bio;