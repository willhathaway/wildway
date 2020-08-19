import React, { Component } from "react";
import "./style.css";
import Header from '../../components/Header/index.js';
import Title from "../../components/Title/index.js"
import ContentDiv from "../../components/ContentDiv";
import JournalPost from "../../components/JournalPost";

function Journal() {


    return (

        <div>

            <Header hidden={false}/>

            <ContentDiv>
                <Title title="Journal" />
                <JournalPost title="Coming soon" content="This page will be a home for essays and notes written by myself and others, as well as links to things I find interesting" img="testImg"/>
            </ContentDiv>

        </div>
    )
}


export default Journal;