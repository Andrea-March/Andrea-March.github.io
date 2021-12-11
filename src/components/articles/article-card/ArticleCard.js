import React from "react";
import './ArticleCard.css'

const ArticleCard = ({article, position, onClick}) => {

    return(
        <div className={`article-card flex-column ${position}`} onClick={() => onClick(article.id)}>
            <div className="image-wrapper">
                <img src={article.thumb} alt={article.imgalt || ''}/>
            </div>
            <div className="card-data flex-column">
                <div className="card-title">{article.title}</div>
                <div className="card-date">{article.date}</div>
            </div>
        </div>
    )

}


export default ArticleCard;