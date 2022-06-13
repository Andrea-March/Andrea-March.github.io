import React from "react";
import {useNavigate} from "react-router-dom";
import coffeeflavors from '../../static/coffee-flavors2.webp'
import coffeecup from '../../static/coffee-cup-ok2.webp'
import espresso from '../../static/espresso-ok2.webp'
import './home.css'

const Home = () =>{
    let navigate = useNavigate();
    const goToArticles = () => {
        navigate('/articles');
    }
    return (
        <div className="home dFlex" >
            <div className="cover" />
            {/* <div className={"btn-enter"} onClick={navigateProducts} id="link-to-page">
                    <p>Lasciati avvolgere dal gusto</p>
                </div> */}
            {/*<div className="temporary-div">Site Under Construction!</div>*/}
            <div className="logo-write dFlex">For Coffee Lovers</div>
            <div className="gallery flex-column">
                <div className="gallery-title">
                    <p>Find out all about coffee</p>
                </div>
                <div className="gallery-element">
                    <p>Discover the warm taste of a single origin coffee, and let yourself be lulled by its fresh and intense flavors and aromas</p>
                    <img src={coffeeflavors} loading="lazy" onClick={goToArticles} alt=""/>
                </div>
                <div className="gallery-element right-description">
                    <p>Discover the particularities and singular characteristics of coffees from all over the world</p>
                    <img src={coffeecup} loading="lazy" onClick={goToArticles} alt="https://unsplash.com/photos/nBJHO6wmRWw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"/>
                </div>
                <div className="gallery-element last">
                    <p>Discover the best coffee extraction methods, to fully enjoy your cup and appreciate all the nuances of your coffee</p>
                    <img src={espresso} loading="lazy" onClick={goToArticles} alt="https://unsplash.com/photos/KixfBEdyp64?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"/>
                </div>

            </div>

        </div>

    )
}


export default Home;