import React from 'react';
import './CarouselArticleCard.css';
import '../../../shared/styles/SharedStyles.css';

const CarouselArticleCard = ({article, onClick}) => {





    return(
        <div className={`carousel-article-card flex-column`} onClick={() => onClick(article.id)}>
            <div className="image-wrapper">
                <img className="carousel-img" loading="lazy" src={article.thumb} alt={article.imgalt || ''}/>
                <div className="carousel-card-data-container">
                    <div className="carousel-card-title" >{article.title}</div>
                    <div className="carousel-card-date">{article.date}</div>
                </div>

            </div>
        </div>
    )
}

export default CarouselArticleCard;