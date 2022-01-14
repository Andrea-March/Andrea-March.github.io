import Comment from "./Comment";
import './commentSection.css'
import React, {useState} from "react";
import {sendComment, sendReaction} from "../../service/retrieve";
import netlifyIdentity from "netlify-identity-widget";

const CommentSection = ({comments, likes, dislikes, hearts, articleId}) => {

    const [comment, setComment] = useState("")



    const beTheFirstDiv = () => {
        if(!comments.length){
            return(
                <div className="be-the-first">
                    It seems that no one has commented yet, be the first to leave a comment!
                </div>
            )
        }else return null
    }

    const sendYourComment = () => {
        if(netlifyIdentity.currentUser()){
            sendComment(articleId, comment, netlifyIdentity.currentUser().user_metadata.full_name).catch((err) => {
                window.location.reload(false);
            }).then(
                (res) => {
                    window.location.reload(false);
                }
            )
        }else {
            netlifyIdentity.open()
        }

    }

    const react = (reaction) => {
        sendReaction(reaction, articleId).then(()=> {
            window.location.reload(false);
        }).catch(()=>{
            window.location.reload(false);
        })
    }
    return(
        <div className="comments-container">
            <h4 className="comments-title">What do you think about this article? Let others know!</h4>
            <div className="reactions">
                <div className="likes">
                    <i className="fa fa-thumbs-up fa-2x fa-icon-article" onClick={() => {react(0)}}/>
                    <div className="counts">{likes}</div>
                </div>
                <div className="likes">
                    <i className="fa fa-thumbs-down fa-2x fa-icon-article" onClick={() => {react(1)}}/>
                    <div className="counts">{dislikes}</div>
                </div>
                <div className="likes">
                    <i className="fa fa-heart fa-2x fa-icon-article" onClick={() => {react(2)}}/>
                    <div className="counts">{hearts}</div>
                </div>
            </div>
                { /*
                    <div className="reactions">
                    <AiFillFire size="2.5rem" color="red"/>
                    <FaGlassCheers size="2.5rem" color="grey"/>
                    <FaLaughBeam size="2.5rem" color="greenyellow" />
                    <AiFillHeart size="2.5rem" color="red"/>
                    </div>
                    */
                }
            <div className="own-comment">
                <textarea placeholder="Write your comment" className="comment-text" required maxLength={500} onChange={(e) =>{setComment(e.target.value)}}/>
                <div className="btn-send" onClick={() => sendYourComment()}>
                    <p>- Send! -</p>
                </div>
            </div>
            {
                comments.map((comment) => {
                    return <Comment comment={comment} key={comment.id}/>
                })
            }
            { beTheFirstDiv() }
        </div>
    )
}


export default CommentSection