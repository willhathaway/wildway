import React, { Component } from "react";
import "./style.css";
import Header from '../../components/Header/index.js';
import Title from "../../components/Title/index.js";
import ContentDiv from "../../components/ContentDiv";


function Portfolio() {
    
        return (

            <div>

            <Header hidden={false} />

            <ContentDiv>
                <Title title="Portfolio" />
            </ContentDiv>

        </div>

        )
    }


export default Portfolio;