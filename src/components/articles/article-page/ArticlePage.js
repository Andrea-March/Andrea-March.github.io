import React, {useEffect, useState} from "react";
import './articlePage.css'
import '../../../shared/styles/SharedStyles.css'
import {useNavigate, useParams} from "react-router-dom";
import GoBack from "../../../shared/components/go-back/GoBack";
import RelatedCard from "../related/RelatedCard";
//import {getArticle} from "../../../service/retrieve";
//import {Markup} from 'interweave';
//import {getArticle} from "../../../service/retrieve";
import CommentSection from "../../comment-section/CommentSection";
import {articleMock} from "../../../mock/Articles";

const ArticlePage = () => {


    //const { id } = useParams();
    const navigation = useNavigate()


    const [article, setArticle] = useState(undefined)

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
        setArticle(articleMock)
        window.addEventListener('scroll', scrollListener)
        //getArticle(id).then(setArticle)
        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    },[])
    if (article) {
    return (
        <div className="flex-column w-100 article-container">
            <div className="zoom-article-cover">
                <img id="article-cover-image" src={article.thumb} alt={article.imgalt}/>
            </div>
            <div className="flex-column w-100 fs-15">
                <div className="sticky-title">
                    <GoBack onClick={goBack} text={"All Articles"}/>
                    <h1>{article.title}</h1>
                </div>
                <div className="pr-10 w-60 art-body">
                    <p>
                        While it is true that a good coffee is obtained with an excellent extraction, it is equally true that how we have preserved our coffee is essential to obtain a drink with strong tastes and aromas.
                        Let's see what are the tricks to better preserve our coffee, and what are the mistakes to be avoided absolutely.
                    </p>
                    <h4>The perfect time for grinding</h4>
                    <p>
                        There is a big difference in storage time between the whole bean and a ground coffee.
                        In fact, the whole bean still retains its intense flavors and aromas for about a month after roasting, while the ground for at most 2 weeks!
                        This is because after grinding, a larger surface is exposed to the air, which through the oxidation process will quickly spoil our favorite coffee.
                    </p>
                    <span>
                        To prevent this from happening, and to make sure you fully savor all the hidden flavors, it is best to grind your coffee just before using it.
                        </span>

                    <p>
                        For this reason, a heavy coffee drinker should consider making a preparation and buying a manual grinder (more affordable) or an electric one (typically more expensive).
                        <br/>
                        Also, to make sure you always have new coffee, we recommend buying small quantities on a regular basis.
                        This prevents part of the large packet of coffee we bought from being left unused for a long time and thus losing its flavors.
                    </p>
                    <h4>Avoid Air, Light, Heat and Moisture!</h4>
                    <p>
                        Even if we cannot always grind our coffee immediately before using it, we can certainly be careful about its conservation, even if we have bought it already ground.
                        As we have already learned, air is one of the main enemies of coffee, as oxidation accelerates its stale process.
                        For this reason it is necessary to keep the coffee sealed and with as little air as possible in the container.
                    </p>
                    <span>
                        Coffee is sometimes sold in ziplock bags, and this is a great way to make sure no air can get in once the container is sealed.
                    </span>
                    <p>
                        In addition, when the ziplock is present, there is also a small valve from which we can let out as much air as we can once the container has been closed.
                    </p>
                    <span>
                        An alternative is to pour the coffee into an airtight container as soon as possible,
                    </span>
                    <p>
                        and try to let out as much air as possible to reduce the amount of oxygen our precious coffee is in contact with.
                    </p>
                    <p>
                        In addition to oxygen, direct exposure to sunlight also contributes to making our coffee stale faster, due to a process called 'photodegradation'
                        for this reason
                    </p>
                    <span>
                        Our container should be opaque
                    </span>
                    <p>
                        so as not to allow direct light to interact with our coffee. If we don't have an opaque container, don't worry!
                        It will be sufficient to store it in a place not exposed to direct sunlight.
                    </p>
                    <p>
                        the last enemy of coffee is humidity. Our whole beans and ground coffee attract moisture, but this isn't good for the end result at all.
                        For this reason it is necessary to keep the coffee in a dry place and
                    </p>
                    <span>
                        Absolutely avoid the refrigerator or freezer!
                    </span>
                    <p>
                        In fact, the continuous change of temperature when taking the coffee and putting it back in the cold, causes the appearance of condensation,
                        which is absorbed by the coffee, ruining the aromas.
                    </p>
                    <h4>Be roast-aware</h4>
                    <p>
                        It may be that the most avid coffee drinkers choose to toast their beans on their own, but I believe that most coffee lovers buy their beans already roasted.
                        In this case it is very important to pay attention to the roasting date: from that moment, the coffee slowly begins to lose its properties,
                        for all the reasons we have seen so far.
                        Generally, as we have already said,
                    </p>
                    <span>
                        whole beans retain their intense aromas and flavors for about a month after roasting, while ground coffee for at most two weeks
                    </span>
                    <p>
                        When we buy our coffee, we can find the roasting date on the package,
                        and we must therefore be careful that it is not too much in the past, otherwise we risk that our coffee quickly loses its characteristics.
                    </p>
                    <h4>To Sum Up</h4>
                    <p>
                        we have learned that storing coffee to preserve its properties longer requires a lot of attention,
                        but we can summarize in a few small precautions the secret to always having excellent coffee:
                        <ul className="sum-up">
                            <li>Try to buy small quantities of whole beans frequently and grind your own coffee just before using it</li>
                            <li>Check the roasting date: from that moment the coffee slowly begins to lose its properties</li>
                            <li>Keep the coffee in a cool, dry and dark place, avoiding contact with the air as much as possible</li>
                        </ul>
                    </p>
                </div>
            </div>
            <CommentSection comments={article.comments} />
            {
                article.related &&
                <div>
                    <div className="sticky-title">
                        <GoBack onClick={goBack} text={"All Articles"}/>
                        <h1>What's next?</h1>
                    </div>
                    <div className="flex-row flex-wrap">
                        {article?.related.map((related) => {
                            return (
                                <RelatedCard related={related}/>
                            )
                        })}
                    </div>
                </div>
            }

        </div>
    )} else {
        return (<></>)
    }
}


export default ArticlePage