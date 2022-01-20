import React from "react";
import AllArticles from "../articles/trending/AllArticles";
import './guides.css'

const Guides = () => {

    return (
            <div className="flex-column">
                <div className="guides">
                    <div className="guides-title">
                        <h1>All guides</h1>
                    </div>
                    <AllArticles />
                </div>
            </div>
    )
}

export default Guides