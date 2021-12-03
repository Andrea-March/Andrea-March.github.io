import React from "react";

import './About.css'
import me from '../../static/me.jpg'


const About = () => {
    return (
        <div className="about-container">
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
                <a className="link-to-contacts" href={"/contacts"}>
                <div className="contact-link-container">
                    <i className="fa fa-arrow-right arrow-r" />
                    <p className="go-to-contacts">go to the contact section!</p>
                    <i className="fa fa-arrow-left arrow" />
                </div>
                </a>
            </div>
        </div>
    )
}

export default About;