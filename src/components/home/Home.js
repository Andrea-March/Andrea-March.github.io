import React from "react";
import {useNavigate} from "react-router-dom";
import coffeeflavors from '../../static/coffee-flavors2.jpg'
import coffeecup from '../../static/coffee-cup-ok2.jpg'
import espresso from '../../static/espresso-ok2.jpg'
import whoweare from '../../static/background.jpg'
import './home.css'

const Home = () =>{
    let navigate = useNavigate();
    const goToArticles = () => {
        navigate('/articles');
    }
    return (
        <div className="home dFlex">
            <div className="cover" />
            {/* <div className={"btn-enter"} onClick={navigateProducts} id="link-to-page">
                    <p>Lasciati avvolgere dal gusto</p>
                </div> */}
            <div className="logo-write dFlex">For Coffee Lovers</div>
            <div className="gallery flex-column">
                <div className="gallery-title">
                    <p>Find out all about coffee</p>
                </div>
                <div className="gallery-element pr-10 ">
                    <p>Discover the warm taste of a single origin coffee, and let yourself be lulled by its fresh and intense flavors and aromas</p>
                    <img src={coffeeflavors} onClick={goToArticles}/>
                </div>
                <div className="gallery-element pl-10 right-description">
                    <p>Discover the warm taste of a single origin coffee, with intense flavors and aromas</p>
                    <img src={coffeecup} onClick={goToArticles}/>
                </div>
                <div className="gallery-element">
                    <p>Discover the best coffee extraction methods, to fully enjoy your cup and appreciate all the nuances of your coffee</p>
                    <img src={espresso} onClick={goToArticles}/>
                </div>

            </div>
            <div className="flex-column mb-10">
                <div className="whoarewe dFlex">
                    <p>Who We Are</p>
                </div>
                <div className="whoarewe-row">
                    <img src={whoweare}/>
                    <p>We are a group of friends sharing the passion for coffee! We'd like to share our passion with everybody, and we have this blog to talk about our favorite beverage!</p>
                </div>
            </div>
        </div>

    )
}


export default Home;