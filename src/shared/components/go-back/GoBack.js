import React from "react";
import './go-back.css'

const GoBack = ({onClick, text}) => {
    return (
        <div className="go-back-div" onClick={() => onClick()}>
            <i className="fa fa-angle-left fa-2x"/>
            <p>{text}</p>
        </div>
    )
}

export default GoBack