import React, {useEffect, useState} from "react";
import './articles.css'
import ArticlesCarousel from "./ArticlesCarousel";
import {ArticleList, emptyArticle} from "../../mock/Articles";
import {getList, getTrending} from "../../service/retrieve";
import AllArticles from "./trending/AllArticles";

const Articles = ({setLoading}) => {


    const [articleList, setArticleList] = useState([emptyArticle])
    const [trendingList, setTrendingList] = useState([emptyArticle])
    const setMock = () => {
        setArticleList(ArticleList)
        setTrendingList(ArticleList)
    }

    useEffect(()=>{
        setLoading(true)
        getList()
            .then(setArticleList)
            .catch((err)=>setMock())
        getTrending()
            .then(setTrendingList)
            .catch((err) => {})
    },[setLoading])

    return(
        <div className="flex-column articles-body" onLoad={()=>setLoading(false)}>
          <ArticlesCarousel articles={trendingList}/>
            <div className="trending">
                <div className="trending-title">
                    <h1>All Articles</h1>
                </div>
                <AllArticles articles={articleList}/>
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