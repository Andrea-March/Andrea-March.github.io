import React from "react";
import {useNavigate} from "react-router-dom";
import './home.css'

const Home = () =>{
    let navigate = useNavigate();
    const goToArticles = () => {
        navigate('/articles');
    }

    const navigateToProducts = (type) => {
        navigate(`/products/${type}`);
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
                    <p>Choose the best product for you</p>
                </div>
                <div className="gallery-element" onClick={() => navigateToProducts('powders')}>
                    <p>Choose the best bean to have your favorite flavor at home, whenever you want</p>
                    <img src="https://drive.google.com/uc?id=1eBB4svjPXBrM9L86_b0-xmA9rVnd2cf4" loading="lazy" alt="coffee beans"/>
                </div>
                <div className="gallery-element  right-description" onClick={() => navigateToProducts('machines')}>
                    <p>Discover new extraction methods to fully enjoy all the nuances of your ground coffee</p>
                    <img src="https://drive.google.com/uc?id=15aULUvNCUFwXf5kKEmJvDTvTzJeoY1ag" loading="lazy" alt="coffee machine v60"/>
                </div>
                <div onClick={() => navigateToProducts('')} className="all-products-link">
                    All products
                    <i className="fa-solid fa-arrow-right-long center-arrow"/>
                </div>
            </div>

            <div>
                <div className="gallery-title">
                    <p>Find out all about coffee in the blog section</p>
                </div>
                <div className="gallery-element">
                    <p>Discover the warm taste of a single origin coffee, and let yourself be lulled by its fresh and intense flavors and aromas</p>
                    <img src="https://drive.google.com/uc?id=yopYpRkEQChKwA4IkpLglh75" loading="lazy" onClick={goToArticles} alt=""/>
                </div>
                <div className="gallery-element right-description">
                    <p>Discover the particularities and singular characteristics of coffees from all over the world</p>
                    <img src="https://drive.google.com/uc?id=1Hrvgk2raZYq6u2VXqWiAcQhcUeEdkbk4" loading="lazy" onClick={goToArticles} alt="https://unsplash.com/photos/nBJHO6wmRWw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"/>
                </div>
                <div className="gallery-element last">
                    <p>Discover the best coffee extraction methods, to fully enjoy your cup and appreciate all the nuances of your coffee</p>
                    <img src="https://drive.google.com/uc?id=11YFKtjwdN1mGapbS_2NawwLBhKqDy7Op" loading="lazy" onClick={goToArticles} alt="https://unsplash.com/photos/KixfBEdyp64?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"/>
                </div>

            </div>



        </div>

    )
}


export default Home;