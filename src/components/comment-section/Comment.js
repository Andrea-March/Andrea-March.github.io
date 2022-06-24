import React from "react";


const Comment = ({comment}) => {

    const openUserWebsite = () => {
        if(comment.website){
            window.open(comment.website, '_blank')
        }
    }

    return(
        <div className="comment-container">
            <h4 className="user-date" onClick={openUserWebsite}>{comment.user} <div className="little-circle"/> {comment.date}:</h4>
            <div className="comment-body">
                {comment.message}
            </div>
        </div>
    )
}


export default Comment