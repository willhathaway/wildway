import React, { Component } from "react";
import "./style.css";

function JournalPost(props) {
    
        return (
            <div className="journalPost">
               <h2 className="postTitle">{props.title}</h2>
               <p className="postContent">{props.content}</p>
               <p className="postDate">{props.date}</p>
               <img className="postImage">{props.image}</img>
               
            </div>
        )
    }


export default JournalPost;