import React from "react";
import './ContactUs.css'
import {useNavigate} from "react-router-dom";

const ThankYou = () => {

    const navigate = useNavigate()

    const goBackHome = () => {
        navigate('/')
    }

    return(
        <div className="thanks-div">
            Thank you for your precious feedback! Your opinion is very important for us!
            <div className="button-send" onClick={() => {goBackHome()}}>
                Back Home
            </div>
        </div>
    )
}

export default ThankYou;