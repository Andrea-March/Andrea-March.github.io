import React from 'react'
import './ContactUs.css'
import '../../shared/styles/SharedStyles.css'
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
        <div className="thanks-div text-center flex-column bg-acc">
            {thankText}
            <Button click={goBackHome} text={"Home"} />
        </div>
    )
}

export default ThankYou;