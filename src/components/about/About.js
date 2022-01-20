import React, {useEffect} from "react";

import './About.css'
import me from '../../static/me.webp'
import {useNavigate} from "react-router-dom";


const About = ({setLoading}) => {
    const navigate = useNavigate()

    const goToContact = () =>{
        navigate('/contacts');
    }

    useEffect(()=>{
        setLoading(true)
    },[])
    return (
        <div className="about-container" onLoad={()=>setLoading(false)}>
            <img src={me} className="me" alt="me"/>
            <div className="me-description">
                <p>
                    My name is Andrea, and I'm a coffee lover!
                </p>
                <p>
                    My passion for coffee began when I was in my 20's, in desperate need for caffeine for studying, and it was love at first sight, or better, love at first taste.
                </p>
                <p>
                    I worked for a few years in one of the best coffee shops here in Italy,
                    where I learned the basics of alternative extractions (espresso is by far the most popular in Italy),
                    and I met the specialty coffees that I fell in love with.
                </p>
                <p>
                    Thanks to this experience, a world full of different flavors, stories of passion and tastes to discover, opened up to me.
                </p>
                <p>
                    I created this blog to try to share this passion with as many people as possible,
                    hoping that this will give others the sensations and emotions
                    I felt when I tasted a very good filtered coffee for the first time
                </p>
                <p>
                    If you feel like sharing your opinion or experience, don't think twice:
                </p>
                <div className="contact-link-container" onClick={() => goToContact()}>
                    <p className="go-to-contacts">- Contact Section! -</p>
                </div>

            </div>
        </div>
    )
}

export default About;