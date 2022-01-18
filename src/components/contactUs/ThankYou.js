import React from 'react'
import './ContactUs.css'
import {useNavigate} from "react-router-dom";
import netlifyIdentity from "netlify-identity-widget";
import Button from "../buttons/Button";

const ThankYou = () => {

    const navigate = useNavigate()

    let thankText = netlifyIdentity.currentUser() ?
        `Thank you, ${netlifyIdentity.currentUser().user_metadata.full_name}, for your precious feedback! Your opinion is very important for us!`
        :
        "Thank you for your precious feedback! Your opinion is very important for us!"

    const goBackHome = () => {
        navigate('/')
    }

    return(
        <div className="thanks-div">
            {thankText}
            <Button click={goBackHome} text={"Home"} className="back-home-btn"/>
        </div>
    )
}

export default ThankYou;