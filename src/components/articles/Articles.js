import React from "react";
import './articles.css'
import ArticlesCarousel from "./ArticlesCarousel";
import Trending from "./trending/Trending";

const Articles = () => {


    return(
        <div className="flex-column">
          <ArticlesCarousel />
            <div className="trending">
                <div className="trending-title">
                    <h1>All Articles</h1>
                </div>
                <Trending />
            </div>
            {/*
             <div className="shortcut-images">
                <div className="powders shortcut">
                    Powders
                </div>
                <div className="machines shortcut">
                    Guides To Brewing
                </div>
                <div className="curiosities shortcut">
                    Curiosities
                </div>
            </div>
            */}

        </div>
    )
}


export default Articles;