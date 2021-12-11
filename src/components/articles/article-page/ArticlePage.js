import React, {useEffect, useState} from "react";
import './articlePage.css'
import '../../../shared/styles/SharedStyles.css'
import {useNavigate, useParams} from "react-router-dom";
import GoBack from "../../../shared/components/go-back/GoBack";
import RelatedCard from "../related/RelatedCard";
import {getArticle} from "../../../service/retrieve";
import ReactMarkdown from "react-markdown";

const ArticlePage = () => {


    const { id } = useParams();
    const navigation = useNavigate()


    const [article, setArticle] = useState(undefined)

    const goBack = () => {
        navigation("/articles")
    }


    const scrollListener = () => {
        let scroll = window.scrollY
        let y  = (scroll/100)
        let scale = (100+scroll/5)/100
        document.getElementById("article-cover-image").style = `transform: translate3d(-50%, -${y+15}%, 0) scale(${scale})`
    }

    useEffect(()=>{
        //setArticle(articleMock)
        window.addEventListener('scroll', scrollListener)
        getArticle(id).then(setArticle)
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    },[])
    if (article) {
    return (
        <div className="flex-column w-100 article-container">
            <div className="zoom-article-cover">
                <img id="article-cover-image" src={article.thumb} alt={article.imgalt}/>
            </div>
            <div className="flex-column w-100 fs-15">
                <div className="sticky-title">
                    <GoBack onClick={goBack} text={"All Articles"}/>
                    <h1>{article.title}</h1>
                </div>
                <div className="pr-10 w-60 art-body">
                   <ReactMarkdown children={article.body} />
                </div>
            </div>
            {
                article.related &&
                <div>
                    <div className="sticky-title">
                        <GoBack onClick={goBack} text={"All Articles"}/>
                        <h1>What's next?</h1>
                    </div>
                    <div className="flex-row flex-wrap">
                        {article?.related.map((related) => {
                            return (
                                <RelatedCard related={related}/>
                            )
                        })}
                    </div>
                </div>
            }

        </div>
    )} else {
        return (<></>)
    }
}


export default ArticlePage