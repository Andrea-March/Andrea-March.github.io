import Comment from "./Comment";
import './commentSection.css'
import React from "react";


const CommentSection = ({comments}) => {
    return(
        <div className="comments-container">
            <h4 className="comments-title">What do you think about this article? Let others know!</h4>
                { /*
                    <div className="reactions">
                    <AiFillFire size="2.5rem" color="red"/>
                    <FaGlassCheers size="2.5rem" color="grey"/>
                    <FaLaughBeam size="2.5rem" color="greenyellow" />
                    <AiFillHeart size="2.5rem" color="red"/>
                    </div>
                    */
                }

            {
                comments.map((comment) => {
                    return <Comment comment={comment} />
                })
            }
        </div>
    )
}


export default CommentSection