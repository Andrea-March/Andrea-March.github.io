import React from "react";
import ArticleCard from "./article-card/ArticleCard";

const ArticlesCarousel = ({articlesList, slideLeft, slideRight}) => {
    return(
        <div className="cover-articles">
            <ArticleCard article={articlesList[0]} position={"left"}/>
            <i className="fa fa-arrow-left fa-2x" onClick={slideLeft}/>
            <ArticleCard article={articlesList[1]} position={"center"}/>
            <i className="fa fa-arrow-right fa-2x" onClick={slideRight}/>
            <ArticleCard article={articlesList[2]} position={"right"}/>
        </div>
    )
}

export default ArticlesCarousel;