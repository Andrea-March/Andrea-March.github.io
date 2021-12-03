import React, {useEffect, useState} from "react";

import './related.css'
import RelatedCard from "./RelatedCard";


const Related = ({article}) => {

    const [relatedList, setRelatedList] = useState([])

    useEffect(()=>{
        let relateds = []
        for(let related of article.related){
            relateds.push({
                id: related.id,
                title: related.title
            })
        }
        setRelatedList(relateds)
    },[article.related])

    return (
        <div className="related-list">
            { relatedList.map((related) => {
                return (
                  <RelatedCard related={related} />
                )
            }) }
        </div>
    )
}

export default Related