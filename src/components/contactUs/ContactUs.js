import React, {useEffect, useState} from "react";

import './ContactUs.css'
import {send} from "../../service/retrieve";
import {useNavigate} from "react-router-dom";
import netlifyIdentity from "netlify-identity-widget";
import Button from "../buttons/Button";


const ContactUs = () => {

    const navigate = useNavigate()

    const errorMessage = "Something went wrong, please try again later!"
    const [name, setName] = useState( "")
    const [mail, setMail] = useState( "")
    const [message, setMessage] = useState("")
    const [toastText, setToastText] = useState("")
    const [showToast, setShowToast] = useState(false)
    const sendMessage = () => {
        if(name === ""){
            setToastText("Please enter your name!")
            notify()
        }else if(message ===""){
            setToastText("Please enter a message!")
            notify()
        }else{
            send({"sender": name, "message": message, "date": new Date(), "mail": mail})
                .then((res) => {
                    navigate('/thank-you')
                }).catch(()=>{setToastText(errorMessage); notify()})
        }
    }

    const notify = () => {
        setShowToast(true)
        setTimeout(()=> {setShowToast(false); setToastText("")},3000)
    }

    useEffect(()=>{
        let defaultName = ""
        let defaultMail = ""
        if(netlifyIdentity.currentUser()){
            defaultName = netlifyIdentity.currentUser().user_metadata.full_name
            defaultMail = netlifyIdentity.currentUser().email
        }
        setName(defaultName)
        setMail(defaultMail)
    },[netlifyIdentity.currentUser()])
    return(
        <div className="contact-us">
            {
                showToast &&
                    <div className="toast-message">
                        {toastText}
                    </div>
            }
            <div className="contact-bar">
                Hey There! <br/>Let's get in touch!
            </div>
            <div className="contact-form">
                    <p>
                        Hi there! I'm
                    </p>
                    <div className="form-group">
                        <input type="input"
                               className="name-input input"
                               autoComplete="off"
                               name="name"
                               id='name'
                               placeholder="Your Name"
                               defaultValue={name}
                               required onChange={(e) => {setName(e.target.value)}}
                        />
                        {/*<label htmlFor="name" id="name-label" className="name-label">Name</label> */}
                    </div>
                    <p>
                        and this is my message for you:
                    </p>
                <textarea placeholder="Be Nice :)"
                          className="message-text"
                          required maxLength={500}
                          onChange={(e) =>{setMessage(e.target.value)}}
                />
                <p className="max-length">max length: 500 words</p>
                <p>
                    I can be contacted back at my email address:
                </p>
                    <input type="email"
                           className="email-input input"
                           autoComplete="off"
                           name="mail"
                           id='mail'
                           placeholder="Your Email"
                           onChange={(e)=>setMail(e.target.value)}
                           defaultValue={mail}
                    />
                <Button click={sendMessage} text={"Send!"}/>

            </div>
        </div>
    )


}


export default ContactUs