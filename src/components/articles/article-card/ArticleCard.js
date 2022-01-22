import React from "react";
import './ArticleCard.css'

const ArticleCard = ({article, position, preview, onClick, slideIn}) => {

    return(
        <div className={`article-card flex-column ${position} ${preview} ${slideIn}`} onClick={() => onClick(article.id)}>
            <div className="image-wrapper">
                <img src={article.thumb} alt={article.imgalt || ''}/>
            </div>
            <div className="card-data flex-column">
                <div className="card-title">{article.title}</div>
                <div className="card-date">{article.date}</div>
            </div>
            {preview &&
            <div className="article-preview">
                {article.preview}
                <p className="read-more">Read More!</p>
            </div>
            }
        </div>
    )

}


export default ArticleCard;