import React, {useEffect, useState} from "react";
import './articles.css'
import ArticlesCarousel from "./ArticlesCarousel";
import Trending from "./trending/Trending";
import {ArticleList} from "../../mock/Articles";
import {getList} from "../../service/retrieve";

const Articles = () => {

    const emptyArticle = {
        id: 0,
        title: '',
        date: '',
        thumb: '',
        cover: '',
        imgalt: '',
        related: [{
            id: -1,
            title: ''
        }],
        trending: true
    }

    const [articleList, setArticleList] = useState([emptyArticle])

    const setMock = () => {
        setArticleList(ArticleList)
    }

    useEffect(()=>{
        getList().then(setArticleList).catch((err)=>setMock())

    },[])

    return(
        <div className="flex-column">
          <ArticlesCarousel articles={articleList.filter((el) => el.trending)}/>
            <div className="trending">
                <div className="trending-title">
                    <h1>All Articles</h1>
                </div>
                <Trending articles={articleList}/>
            </div>
            {/*
             <div className="shortcut-images">
                <div className="powders shortcut">
                    Powders
                </div>
                <div className="machines shortcut">
                    Guides To Brewing
                </div>
                <div className="curiosities shortcut">
                    Curiosities
                </div>
            </div>
            */}

        </div>
    )
}


export default Articles;