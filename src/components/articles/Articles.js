import React, {useState} from "react";
import ArticleCard from "./article-card/ArticleCard";
import v60 from '../../static/v60/v60-ok2.jpg'
import french from '../../static/french.jpg'
import cappuccino from '../../static/cappuccino.jpg'
import './articles.css'
import {useNavigate} from "react-router-dom";

const Articles = () => {

    const navigate = useNavigate()

    const [currentIndex, setIndex] = useState(0)


    const handleProceed = (articleId) => {
        console.log(articleId)
        articleId && navigate(`/articles/${articleId}`);
    };

    let articleList = [
        {
            id: 1,
            title: 'The Art of V60',
            date: '2021.11.26',
            thumb: v60
        },{
            id: 2,
            title: 'The Perfect Frech Press',
            date: '2021.11.26',
            thumb: french
        },{
            id: 3,
            title: 'How to make latte at home',
            date: '2021.11.26',
            thumb: cappuccino
        }
    ]

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
        <div className="flex-column">
            <div className="cover-articles">
                <ArticleCard article={articleList[getPrevious(currentIndex)]} position={"left"} onClick={()=>{}}/>
                <i className="fa fa-arrow-left fa-2x" onClick={slideLeft}/>
                <ArticleCard article={articleList[currentIndex]} position={"center"} onClick={handleProceed}/>
                <i className="fa fa-arrow-right fa-2x" onClick={slideRight}/>
                <ArticleCard article={articleList[getNext(currentIndex)]} position={"right"} onClick={()=>{}}/>
            </div>
            <div className="shortcut-images">
                <div className="powders shortcut">
                    Powders
                </div>
                <div className="machines shortcut">
                    Machines
                </div>
                <div className="curiosities shortcut">
                    Curiosities
                </div>
            </div>
        </div>
    )
}


export default Articles;