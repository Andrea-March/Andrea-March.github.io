import React, {useEffect, useState} from "react";
import './articlePage.css'
import '../../../shared/styles/SharedStyles.css'
import placeholder from '../../../static/coffee-cup-ok2.webp'
import coverArticle from '../../../static/bar.jpg'
import need from '../../../static/mine/need.jpg'
import step1 from '../../../static/mine/step_1.gif'
import step4 from '../../../static/mine/step_4.gif'
import gentle from '../../../static/mine/step_2.gif'
import Related from "../related/Related";
import ArticleList from "../../../mock/Articles";
import {useNavigate} from "react-router-dom";
import GoBack from "../../../shared/components/go-back/GoBack";


const ArticlePage = () => {

    //const { id } = useParams();
    const navigation = useNavigate()

    const emptyArticle = {
        id: -1,
        title: '',
        thumb: '',
        date: '',
        related: [{
            id: -1,
            title: 'EMPTY'
        }]
    }

    const [article, setArticle] = useState(emptyArticle)

    const goBack = () => {
        navigation("/articles")
    }


    const scrollListener = () => {
        let scroll = window.scrollY
        let y  = (scroll/100)
        let scale = (100+scroll/5)/100
        document.getElementById("article-cover-image").style = `transform: translate3d(-50%, -${y+15}%, 0) scale(${scale})`
    }

    useEffect(()=>{
        setArticle(ArticleList[0])
        window.addEventListener('scroll', scrollListener)
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    },[])

    return (
        <div className="flex-column w-100 article-container">
            <div className="zoom-article-cover">
                <img id="article-cover-image" src={coverArticle} alt={"coffee on shelf"}/>
            </div>
            <div className="flex-column w-100 fs-15">
                <div className="sticky-title">
                   <GoBack onClick={goBack} text={"All Articles"}/>
                    <h1>The Art Of V60</h1>
                </div>
                <div className="pr-10 w-60 art-body">
                <p>
                    Have you ever wondered how you get a great v60?
                    Today we will discover together some of the details that will make your coffee tasty,
                    and that will make you appreciate all the hidden nuances of your ground coffee.
                </p>
                <h4 className="fs-13">Preparation</h4>
                <p>
                    To prepare our coffee, we will use a medium-sized and medium roast ground, perfect for this type of brewing.
                    In particular, I am using an Ethiopia Yirgachefe Guji, as I really love the characteristics and aromas of this ground coffee.
                </p>
                <img src={need} className="gif" alt=""/>
                <p>
                    To begin with, we grind our favorite coffee by adjusting our grinder to a medium size,
                    so as to have a perfect powder for our brewing. Let's put the ground coffee aside and let's get all set to prepare our V60!
                </p>
                <h4 className="fs-13">Coffee Brewing</h4>
                <p>
                    First, we put a paper filter inside our v60, and we let hot water fall all over the surface of the filter.
                    At the end of the procedure, the entire surface of the filter should be well adherent to the walls,
                    and the water we have poured will be collected by the ampoule in which we will collect our coffee.
                    This serves not only to prepare the filter, making it very moist and adherent, but also to heat the ampoule
                    that will collect our coffee, so as to have a drink as warm as a toast at the end of the brewing.
                    Be sure to remove the water we just spilled from the ampoule!
                </p>
                <img src={step1} className="gif" alt=""/>
                <p> Now that everything is ready, we place the ground coffee inside the filter, and we equalize the content
                    by gently tapping the structure, until we are satisfied with the arrangement of the coffee.
                    It is important that the ground coffee is evenly placed inside the filter,
                    to prevent the water from flowing in points where we have less ground, thus obtaining a watered-down drink.
                </p>
                <img src={gentle} className="gif" alt=""/>
                <p>
                    At this point, pour 50 g (what if I do not have a scale?) of water in concentric circles in the center of the ground coffee (without pouring on the edges of the ground coffee!) and wait 30 seconds. This time should be enough to filter almost all of the water we just poured out. We proceed to pour 100g of water (at most until it reaches half a centimeter below the limit of the ground) again with concentric movements and taking care not to pour on the edges of the ground.
                    Now let's wait 60 seconds, which should be enough to drain the water we poured out.
                    At the end of this time, pour the remaining 50g of water with the same movements, which should take another 30 seconds to filter completely.
                </p>
                <img src={step4} className="gif" alt=""/>
                <p>Our coffee should be ready at this point, and we will be able to taste and appreciate all its hidden aromas and flavors!</p>
                <img src={placeholder} alt=""/>
                <p>If the extraction took longer than the time we have indicated, we recommend trying and coarsening the grinding next time.
                    If instead it took shorter, try finer!</p>


                <p>What if I do not have a scale?<br/>
                    No worries! Simply cover the ground coffee halfway up when you have to pour 50g of water,
                    and almost entirely (leaving just under half a centimeter from the highest point) when you have to pour
                    100g! It is important in this procedure not to wet the higher edges of the ground coffee</p>
                </div>
            </div>

            <div>
                <div className="sticky-title">
                    <GoBack onClick={goBack} text={"All Articles"} />
                    <h1>What's next?</h1>
                </div>

                <Related article={article}/>
            </div>

        </div>
    )
}


export default ArticlePage