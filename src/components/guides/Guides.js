import React from "react";
import Trending from "../articles/trending/Trending";
import './guides.css'

const Guides = () => {

    return (
            <div className="flex-column">
                <div className="guides">
                    <div className="guides-title">
                        <h1>All guides</h1>
                    </div>
                    <Trending />
                </div>
            </div>
    )
}

export default Guides