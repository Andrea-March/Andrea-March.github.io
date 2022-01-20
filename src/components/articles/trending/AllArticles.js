import React from "react";
import ArticleCard from "../article-card/ArticleCard";

import './AllArticles.css'
import {useNavigate} from "react-router-dom";

const AllArticles = ({articles}) =>{

    const navigate = useNavigate()

    const onClick = (id) =>{
        navigate(`/articles/${id}`)
    }

    return (
        <div>
            <div className="search-bar flex-row">
                <p>Search Articles:</p>
                <input type="text" placeholder="keyword"/>
                <i className="fa fa-search fa-2x" />
            </div>
        <div className="trending-list">
            { articles && articles.map((article) => {
                return (
                    <ArticleCard key={article.id} article={article} onClick={()=>{onClick(article.id)}} position="center" preview="preview"/>
                )
            }) }
        </div>
        </div>
    )
}

export default AllArticles