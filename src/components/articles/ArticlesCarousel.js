import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import './ArticlesCarousel.css'
import CarouselArticleCard from "./article-card/CarouselArticleCard";
//import {getList} from "../../service/retrieve";

const ArticlesCarousel = ({articles}) => {

    const navigate = useNavigate()

    const [currentIndex, setIndex] = useState(0)



    const handleProceed = (articleId) => {
        articleId && navigate(`/articles/${articleId}`);
    };
    const getPrevious = (currentIndex) => {
        return currentIndex - 1 < 0 ? articles.length - 1 : currentIndex - 1
    }
    const getNext = (currentIndex) => {
        return currentIndex + 1 >= articles.length ? 0 : currentIndex + 1
    }
    const slideLeft = () => {
        setIndex(getPrevious(currentIndex))
    }
    const slideRight = () => {
        setIndex(getNext(currentIndex))
    }
    return(
        <div className="cover-articles">
            {/*<div className="trending-carousel">*/}
            {/*    <h1>Trending</h1>*/}
            {/*</div>*/}
            {/*<ArticleCard article={articles[getPrevious(currentIndex)]} position={"left"} onClick={()=>{}}/>*/}
            <div className="sliding-arrow" onClick={slideLeft}>
                <i className="fa fa-angle-left fa-3x" id="arrow-left"/>
            </div>
            <CarouselArticleCard article={articles[currentIndex]} onClick={handleProceed}/>
            <div className="sliding-arrow right-arr" onClick={slideRight}>
                <i className="fa fa-angle-right fa-3x"/>
            </div>
            {/*<ArticleCard article={articles[getNext(currentIndex)]} position={"right"} onClick={()=>{}}/>*/}
        </div>
    )
}

export default ArticlesCarousel;