import React, { Component } from "react";
import "./style.css";
import Header from '../../components/Header/index.js';
import Title from "../../components/Title/index.js";
import ContentDiv from "../../components/ContentDiv";

function Contact() {
    
        return (

            <div>

            <Header />

            <ContentDiv>
                <Title title="Contact" />
            </ContentDiv>

        </div>

        )
    }


export default Contact;