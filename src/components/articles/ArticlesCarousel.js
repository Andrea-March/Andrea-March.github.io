import React, {useState} from "react";
import ArticleCard from "./article-card/ArticleCard";
import {useNavigate} from "react-router-dom";
import chemex from "../../static/v60/v60-ok2.jpg";
import v60 from '../../static/v60/v60_ok.jpg'
import french from "../../static/french/french_press_ok.jpg";
import cappuccino from "../../static/cappuccino/cappuccino_ok.jpg";
import './ArticlesCarousel.css'

const ArticlesCarousel = () => {
    const navigate = useNavigate()
    const [currentIndex, setIndex] = useState(0)
    let articleList = [
        {
            id: 1,
            title: 'The Art of V60',
            date: '2021.11.26',
            thumb: v60,
            alt: 'https://unsplash.com/photos/R1zLaRmi-DE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'
        },{
            id: 2,
            title: 'The Perfect Frech Press',
            date: '2021.11.26',
            thumb: french
        },{
            id: 3,
            title: 'How to make cappuccino at home',
            date: '2021.11.26',
            thumb: cappuccino
        },{
            id: 4,
            title: 'The secret to a tasty Chemex',
            date: '2021.12.02',
            thumb: chemex
        }
    ]
    const handleProceed = (articleId) => {
        articleId && navigate(`/articles/${articleId}`);
    };
    const getPrevious = (currentIndex) => {
        return currentIndex - 1 < 0 ? articleList.length - 1 : currentIndex - 1
    }
    const getNext = (currentIndex) => {
        return currentIndex + 1 >= articleList.length ? 0 : currentIndex + 1
    }
    const slideLeft = () => {
        setIndex(getPrevious(currentIndex))
    }
    const slideRight = () => {
        setIndex(getNext(currentIndex))
    }
    return(
        <div className="cover-articles">
            <ArticleCard article={articleList[getPrevious(currentIndex)]} position={"left"} onClick={()=>{}}/>
            <div className="sliding-arrow" onClick={slideLeft}>
                <i className="fa fa-angle-left fa-3x"/>
            </div>
            <ArticleCard article={articleList[currentIndex]} position={"center"} onClick={handleProceed}/>
            <div className="sliding-arrow right-arr" onClick={slideRight}>
                <i className="fa fa-angle-right fa-3x"/>
            </div>
            <ArticleCard article={articleList[getNext(currentIndex)]} position={"right"} onClick={()=>{}}/>
        </div>
    )
}

export default ArticlesCarousel;