import React from "react";
import NotFound from '../../../static/not-found.jpg'
import './pageNotFound.css'

const PageNotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-text">
                <h3>Ops, there's nothing here... <br /> 404</h3>
            </div>
            <img src={NotFound} alt="not found" className="not-found-image"/>
        </div>
    )
}


export default PageNotFound