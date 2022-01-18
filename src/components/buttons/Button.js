import React from "react";
import './Button.css'

const Button = ({click, text}) => {

    return (
        <div className="button-send" onClick={() => click()}>
            <p>- {text} -</p>
        </div>
    )
}

export default Button