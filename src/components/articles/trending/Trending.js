import React from "react";
import ArticleCard from "../article-card/ArticleCard";
import ArticleList from "../../../mock/Articles";

import './trending.css'

const Trending = () =>{
    return (
        <div className="trending-list">
            { ArticleList.map((article) => {
                return (
                    <ArticleCard article={article} />
                )
            }) }
        </div>
    )
}

export default Trending