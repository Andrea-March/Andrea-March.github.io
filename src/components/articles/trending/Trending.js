import React from "react";
import ArticleCard from "../article-card/ArticleCard";
import ArticleList from "../../../mock/Articles";

import './trending.css'
import {useNavigate} from "react-router-dom";

const Trending = () =>{

    const navigate = useNavigate()

    const onClick = (id) =>{
        navigate(`/articles/${id}`)
    }

    return (
        <div className="trending-list">
            { ArticleList.map((article) => {
                return (
                    <ArticleCard article={article} onClick={()=>{onClick(article.id)}} position="center"/>
                )
            }) }
        </div>
    )
}

export default Trending