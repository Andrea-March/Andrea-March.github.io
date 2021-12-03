import React, {useEffect, useState} from "react";
import ArticleCard from "./article-card/ArticleCard";
import {useNavigate} from "react-router-dom";
import './ArticlesCarousel.css'
import ArticleList from "../../mock/Articles";

const ArticlesCarousel = () => {
    const navigate = useNavigate()
    const [currentIndex, setIndex] = useState(0)

    const emptyArticle = {
        id: 0,
        title: '',
        date: '',
        thumb: '',
        related: [{
            id: -1,
            title: ''
        }]
    }

    const [articleList, setArticleList] = useState([emptyArticle])

    useEffect(()=>{
        setArticleList(ArticleList)
    },[])

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