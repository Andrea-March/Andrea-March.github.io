import React from "react";
import './article.css'

const Article = ({article, position}) => {

    return(
        <div className={`article-card flex-column ${position}`}>
            <img src={article.thumb}/>
            <div className="card-data flex-column">
                <div className="card-title">{article.title}</div>
                <div className="card-date">{article.date}</div>
            </div>
        </div>
    )

}


export default Article;