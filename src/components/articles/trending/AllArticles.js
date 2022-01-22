import React, {useEffect, useRef} from "react";
import ArticleCard from "../article-card/ArticleCard";

import './AllArticles.css'
import {useNavigate} from "react-router-dom";

const AllArticles = ({articles}) =>{

    const navigate = useNavigate()
    let sliderImages = useRef([])
    const onClick = (id) =>{
        navigate(`/articles/${id}`)
    }


    const slideListener = () => {
        sliderImages.current.forEach((card)=>{
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
    },[articles])

    return (
        <>
            <div className="search-bar flex-row">
                <p>Search Articles:</p>
                <input type="text" placeholder="keyword"/>
                <i className="fa fa-search fa-2x" />
            </div>
        <div className="trending-list">
            { articles && articles.map((article,index) => {
                let slideClass = index % 2 === 0 ? 'slide-in left-pos' : 'slide-in right-pos'
                return (
                    <ArticleCard slideIn={slideClass} key={article.id} article={article} onClick={()=>{onClick(article.id)}} position="center" preview="preview"/>
                )
            }) }
        </div>
        </>
    )
}

export default AllArticles