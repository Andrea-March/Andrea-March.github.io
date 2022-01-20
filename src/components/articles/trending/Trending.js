import React from "react";
import ArticleCard from "../article-card/ArticleCard";

import './trending.css'
import {useNavigate} from "react-router-dom";

const Trending = ({articles}) =>{

    const navigate = useNavigate()

    const onClick = (id) =>{
        navigate(`/articles/${id}`)
    }

    return (
        <div className="trending-list">
            { articles && articles.map((article) => {
                return (
                    <ArticleCard key={article.id} article={article} onClick={()=>{onClick(article.id)}} position="center"/>
                )
            }) }
        </div>
    )
}

export default Trending