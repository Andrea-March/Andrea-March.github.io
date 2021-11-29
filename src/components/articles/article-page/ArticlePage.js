import React, {useEffect, useState} from "react";
import articlesMock from "../../../mocks/articles/ArticlesMock";
import {useParams} from "react-router-dom";


const ArticlePage = () => {

    const { id } = useParams();

    const [article, setArticle] = useState(undefined)

    useEffect(()=>{
        setArticle(id)
    },[id])

    const getArticle = (articleId) => {
        setArticle(articlesMock[articleId]);
    }

    return (
        <div>
            <h2>The Art Of V60</h2>
            <div>
               <p>
                   Have you ever wondered how you get a great v60?
                   Today we will discover together some of the details that will make your coffee tasty,
                   and that will make you appreciate all the hidden nuances of your ground coffee.
               </p>
            </div>
        </div>
    )
}


export default ArticlePage