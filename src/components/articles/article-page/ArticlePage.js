import React from "react";
import './articlePage.css'
import placeholder from '../../../static/coffee-cup-ok2.jpg'


const ArticlePage = () => {

    //const { id } = useParams();

    //useEffect(()=>{
        //CALL HERE BACKEND TO GET ARTICLE
        //console.log(id)
    //},[])

    return (
        <div className="article-container">
            <div className="inner-article-container">
                <h1>The Art Of V60</h1>
                <p>
                    Have you ever wondered how you get a great v60?
                    Today we will discover together some of the details that will make your coffee tasty,
                    and that will make you appreciate all the hidden nuances of your ground coffee.
                </p>
                <p>
                    To prepare our coffee, we will use a medium-sized and medium roast ground , perfect for this type of brewing.
                    In particular, I am using an Ethiopia Works, as I really love the characteristics and aromas of this ground coffee.
                </p>
                <img src={placeholder} alt=""/>
                <p>
                    To begin with, we grind our favorite coffee by adjusting our grinder to a medium size,
                    so as to have a perfect powder for our brewing. Let's put the ground coffee aside and let's get all set to prepare our V60!
                </p>
                <p>
                    First, we put a paper filter inside our v60, and we let hot water fall all over the surface of the filter.
                    At the end of the procedure, the entire surface of the filter should be well adherent to the walls,
                    and the water we have poured will be collected by the ampoule in which we will collect our coffee.
                    This serves not only to prepare the filter, making it very moist and adherent, but also to heat the ampoule
                    that will collect our coffee, so as to have a drink as warm as a toast at the end of the brewing.
                    Be sure to remove the water we just spilled from the ampoule!
                </p>
                <img src={placeholder} alt=""/>
                <p> Now that everything is ready, we place the ground coffee inside the filter, and we equalize the content
                    by gently tapping the structure, until we are satisfied with the arrangement of the coffee.
                    It is important that the ground coffee is evenly placed inside the filter,
                    to prevent the water from flowing in points where we have less ground, thus obtaining a watered-down drink.
                </p>
                <img src={placeholder} alt=""/>
                <p>
                    At this point, pour 50 g (<a>what if I do not have a scale?</a>) of water in concentric circles in the center of the ground coffee (without pouring on the edges of the ground coffee!) and wait 30 seconds. This time should be enough to filter almost all of the water we just poured out. We proceed to pour 100g of water (at most until it reaches half a centimeter below the limit of the ground) again with concentric movements and taking care not to pour on the edges of the ground.
                    Now let's wait 60 seconds, which should be enough to drain the water we poured out.
                    At the end of this time, pour the remaining 50g of water with the same movements, which should take another 30 seconds to filter completely.
                </p>
                <img src={placeholder} alt=""/>
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
    )
}


export default ArticlePage