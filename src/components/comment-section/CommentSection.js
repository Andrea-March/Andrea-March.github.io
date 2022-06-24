import Comment from "./Comment";
import './commentSection.css'
import React, {useState} from "react";
import {sendComment, sendReaction} from "../../service/retrieve";
import netlifyIdentity from "netlify-identity-widget";
import Button from "../buttons/Button";

const CommentSection = ({comments, likes, dislikes, hearts, articleId}) => {

    const [comment, setComment] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [website, setWebsite] = useState("")

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
                console.log(`${name} ${email} ${website}`)
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

    //TODO make this better: the textarea to comment has bold and other text options, comments are better shaped, see
    //other blogs. add like/dislike to comments if possible
    return(
        <div className="comments-container">
            <hr className="horizontal-line"/>
            <div>
                Life happens, coffee helps.
            </div>
            <hr className="horizontal-line"/>


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
            <div>
                <h4 className="comments-title">Leave a comment</h4>
                <p className="">required fields are marked *</p>



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
                    <p className="comment-label">Comment *</p>
                    <textarea placeholder="say something nice..." className="comment-text" required maxLength={500} onChange={(e) =>{setComment(e.target.value)}}/>
                    <p className="comment-label">Name *</p>
                    <input type="text"
                               required
                               maxLength={128}
                               className="email-input input color-primary align-baseline"
                               autoComplete="off"
                               name="name"
                               id='name'
                               placeholder=""
                               onChange={(e)=>setName(e.target.value)}
                               defaultValue={""}
                        />
                    <p className="comment-label">Email *</p>
                    <input type="text"
                           required
                           maxLength={128}
                           className="email-input input color-primary align-baseline"
                           autoComplete="off"
                           name="email"
                           id='email'
                           placeholder=""
                           onChange={(e)=>setEmail(e.target.value)}
                           defaultValue={""}
                    />
                    <p className="comment-label">Website</p>
                    <input type="text"
                           required
                           maxLength={128}
                           className="email-input input color-primary align-baseline"
                           autoComplete="off"
                           name="website"
                           id='website'
                           placeholder=""
                           onChange={(e)=>setWebsite(e.target.value)}
                           defaultValue={""}
                    />

                    <Button click={sendYourComment} text={"Send!"}/>
                </div>
                {
                    comments.map((comment) => {
                        return <Comment comment={comment} key={comment.id}/>
                    })
                }
                { beTheFirstDiv() }
            </div>
        </div>
    )
}


export default CommentSection