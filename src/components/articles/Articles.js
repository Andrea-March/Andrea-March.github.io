import React, {useState} from "react";
import Article from "./article/Article";
import v60 from '../../static/v60/v60-ok2.jpg'
import french from '../../static/french.jpg'
import cappuccino from '../../static/cappuccino.jpg'
import './articles.css'

const Articles = () => {
    const [currentIndex, setIndex] = useState(0)

    let articleList = [
        {
            title: 'The Art of V60',
            date: '2021.11.26',
            thumb: v60
        },{
            title: 'The Perfect Frech Press',
            date: '2021.11.26',
            thumb: french
        },{
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
                    <Article article={articleList[getPrevious(currentIndex)]} position={"left"}/>
                <i className="fa fa-arrow-left fa-2x" onClick={slideLeft}/>
                    <Article article={articleList[currentIndex]} position={"center"}/>
                <i className="fa fa-arrow-right fa-2x" onClick={slideRight}/>
                <Article article={articleList[getNext(currentIndex)]} position={"right"}/>
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