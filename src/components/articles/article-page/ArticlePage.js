import React, {useEffect, useState} from "react";
import './articlePage.css'
import '../../../shared/styles/SharedStyles.css'
import {useNavigate, useParams} from "react-router-dom";
import GoBack from "../../../shared/components/go-back/GoBack";
import RelatedCard from "../related/RelatedCard";
import {Markup} from 'interweave';
import {getArticle} from "../../../service/retrieve";
import CommentSection from "../../comment-section/CommentSection";
import {articleMock} from "../../../mock/Articles";

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
        window.addEventListener('scroll', scrollListener)
        getArticle(id).then(setArticle).catch(() => {
            setArticle(articleMock)
        })
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    },[id])
    if (article) {
    return (
        <div className="flex-column w-100 article-container">
            <div className="zoom-article-cover">
                <img id="article-cover-image" src={article.cover} alt={article.imgalt}/>
            </div>
            <div className="flex-column w-100 fs-15">
                <div className="sticky-title">
                    <GoBack onClick={goBack} text={"All Articles"}/>
                    <h1>{article.title}</h1>
                </div>
                <div className="pr-10 w-60 art-body">
                  <Markup content={article.body} className="markup"/>
                </div>
            </div>
            <CommentSection comments={article.comments} />
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