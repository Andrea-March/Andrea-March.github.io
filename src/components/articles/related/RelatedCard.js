import React from "react";

import './relatedCard.css'
import '../article-card/ArticleCard.css'
import {useNavigate} from "react-router-dom";

import placeholder from '../../../static/v60/v60_ok.jpg'

const RelatedCard = ({related}) => {

    const navigate = useNavigate()

    const navigateToArticle = (id) => {
        id && navigate(`/articles/${id}`);
    }
    return(
        <div className={`article-card flex-column related-card`} onClick={() => navigateToArticle(related?.id || 1)}>
            <img src={related?.thumb || placeholder} alt={related?.alt || ''}/>
            <div className="card-data flex-column">
                <div className="card-title">{related?.title || 'title here'}</div>
                <div className="card-date">{related?.date || 'date here'}</div>
            </div>
        </div>
    )

}


export default RelatedCard