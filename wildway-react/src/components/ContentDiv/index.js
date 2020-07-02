import React from "react";
import "./style.css";

function ContentDiv(props) {
    
        return (
            <div className="contentDiv">
               {props.children}
            </div>
        )
    }


export default ContentDiv;