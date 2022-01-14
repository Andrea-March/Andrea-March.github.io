import React from "react";


const Comment = ({comment}) => {
    return(
        <div className="comment-container">
            <h4 className="user-date">{comment.user} <div className="little-circle"/> {comment.date}:</h4>
            <div className="comment-body">
                {comment.message}
            </div>
        </div>
    )
}


export default Comment