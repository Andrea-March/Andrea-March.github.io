import React, {useEffect, useState} from "react";
import './articlePage.css'
import '../../../shared/styles/SharedStyles.css'
import {useNavigate, useParams} from "react-router-dom";
import GoBack from "../../../shared/components/go-back/GoBack";
import RelatedCard from "../related/RelatedCard";
import {Markup} from 'interweave';
import {getArticle, sendReaction} from "../../../service/retrieve";
import CommentSection from "../../comment-section/CommentSection";
import {articleMock} from "../../../mock/Articles";

const ArticlePage = () => {


    const { id } = useParams();
    const navigation = useNavigate()


    const [article, setArticle] = useState(undefined)

    const goBack = () => {
        navigation("/articles")
    }

    const react = (reaction) => {
        sendReaction(reaction, article.id).then(()=> {
            window.location.reload(false);
        }).catch(()=>{
            window.location.reload(false);
        })
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
                <div className="body-wrapper">
                    <div className="reactions-side">
                        <div className="likes-side">
                            <i className="fa fa-thumbs-up fa-2x fa-icon-article" onClick={() => {react(0)}}/>
                            <div className="counts-side">{article.likes}</div>
                        </div>
                        <div className="likes-side">
                            <i className="fa fa-thumbs-down fa-2x fa-icon-article" onClick={() => {react(1)}}/>
                            <div className="counts-side">{article.dislikes}</div>
                        </div>
                        <div className="likes-side">
                            <i className="fa fa-heart fa-2x fa-icon-article" onClick={() => {react(2)}}/>
                            <div className="counts-side">{article.hearts}</div>
                        </div>
                    </div>
                    <div className="p-10 w-60 art-body">
                        <Markup content={article.body} className="markup"/>
                    </div>
                    <div className="adsdesktop">
                        <script async
                                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3090563077320193"
                                crossOrigin="anonymous"></script>
                        <ins className="adsbygoogle"
                             style={{display:"inline-block",width:"300px",height:"250px"}}
                             data-ad-client="ca-pub-3090563077320193"
                             data-ad-slot="5340879486"></ins>
                        <script>
                            (adsbygoogle = window.adsbygoogle || []).push({});
                        </script>
                    </div>
                </div>
                <div className="advmobile">
                    <script async
                            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3090563077320193"
                            crossOrigin="anonymous"></script>
                    <ins className="adsbygoogle"
                         style={{display:"inline-block",width:"300px",height:"250px"}}
                         data-ad-client="ca-pub-3090563077320193"
                         data-ad-slot="5340879486"></ins>
                    <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    </script>
                </div>

            </div>
            <CommentSection comments={article.comments} articleId={article.id} likes={article.likes} dislikes={article.dislikes} hearts={article.hearts}/>
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
                                <RelatedCard related={related} key={related.id}/>
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