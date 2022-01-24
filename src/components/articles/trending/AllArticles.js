import React, {useEffect, useRef, useState} from "react";
import ArticleCard from "../article-card/ArticleCard";

import './AllArticles.css'
import {useNavigate} from "react-router-dom";
import {getArticlesByTag, getList} from "../../../service/retrieve";

const AllArticles = ({articles ,setLoading}) =>{

    const navigate = useNavigate()
    let sliderImages = useRef([])

    const [search, setSearch] = useState("")
    const [articleList, setArticleList] = useState(articles)
    console.log(articleList)
    const onClick = (id) =>{
        navigate(`/articles/${id}`)
    }

    const searchArticles = () =>{
        setLoading(true)
        getArticlesByTag(search).then((res)=>{
            setArticleList(res)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })
    }

    const resetArticles = () => {
        setLoading(true)
        getList()
            .then((res)=>{
                setArticleList(res)
                setLoading(false)
            })
            .catch((err)=> {
                console.log(err)
                setLoading(false)
            })
    }

    const slideListener = () => {
        sliderImages.current.forEach((card, index)=>{
            const slideInAt = (window.scrollY + window.innerHeight) - card.getBoundingClientRect().height / 4
            const imageBottom = card.offsetTop + card.getBoundingClientRect().height;
            const isHalfShown = slideInAt > card.offsetTop;
            const isNoScrolledPast = window.scrollY < imageBottom;
            if(isHalfShown && isNoScrolledPast) {
                card.classList.add('active-slide');
            } else {
                card.classList.remove('active-slide');
            }
        })
    }
    function debounce(func, wait, immediate) {
        let timeout;
        return function() {
            let context = this, args = arguments;
            let later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    useEffect(()=>{
        sliderImages.current = document.querySelectorAll('.slide-in')
        window.addEventListener('scroll', debounce(slideListener))
        return () => {
            window.removeEventListener('scroll', debounce(slideListener))
        }
    },[articleList])

    useEffect(()=>{
        setArticleList(articles)
    },[articles])

    return (
        <>
            <div className="search-bar flex-row">
                <p>Search Articles:</p>
                <input type="text" placeholder="keyword" onChange={(e) => setSearch(e.target.value)}/>
                <div className="dFlex">
                    <i className="fa fa-search fa-2x" onClick={()=>searchArticles()}/>
                    <i className="fa fa-undo fa-2x" onClick={()=>resetArticles()}/>
                </div>
            </div>
        <div className="trending-list">
            { articleList && articleList.map((article,index) => {
                let slideClass = index % 2 === 0 ? 'slide-in left-pos' : 'slide-in right-pos'
                return (
                    <ArticleCard slideIn={slideClass} key={article.id} article={article} onClick={()=>{onClick(article.id)}} position="center" preview="preview"/>
                )
            }) }
            {
                !articleList.length && (
                    <div className="no-results">
                        No Articles Found!
                    </div>
                )
            }
        </div>
        </>
    )
}

export default AllArticles