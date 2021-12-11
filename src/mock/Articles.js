import v60 from "../static/v60/v60_ok.jpg";
import french from "../static/french/french_press_ok.jpg";
import cappuccino from "../static/cappuccino/cappuccino_ok.jpg";
import chemex from "../static/v60/v60-ok2.jpg";
import cup from '../static/cup_ok.jpg'

const ArticleList = [
    {
        id: 1,
        title: 'The Art of V60',
        date: '2021.11.26',
        thumb: v60,
        alt: 'https://unsplash.com/photos/R1zLaRmi-DE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
        related: [2,3,4]
    },{
        id: 2,
        title: 'The Perfect Frech Press',
        date: '2021.11.26',
        thumb: french,
        related: [1,3,4]
    },{
        id: 3,
        title: 'How to make cappuccino at home',
        date: '2021.11.26',
        thumb: cappuccino,
        related: [2,1,4]
    },{
        id: 4,
        title: 'The secret to a tasty Chemex',
        date: '2021.12.02',
        thumb: chemex,
        related: [2,3,1]
    }
]

const articleBody = "While it is true that a good coffee is obtained with an excellent extraction, it is equally true that how we have preserved our coffee is essential to obtain a drink with strong tastes and aromas. Let's see what are the tricks to better preserve our coffee, and what are the mistakes to be avoided absolutely.\n" +
    "\n" +
    "#### The perfect time for grinding\n" +
    "\n" +
    "There is a big difference in storage time between the whole bean and a ground coffee. In fact, the whole bean still retains its intense flavors and aromas for about a month after roasting, while the ground for at most 2 weeks! This is because after grinding, a larger surface is exposed to the air, which through the oxidation process will quickly spoil our favorite coffee.\n" +
    "\n" +
    "<span>To prevent this from happening, and to make sure you fully savor all the hidden flavors, it is best to grind your coffee just before using it.</span>\n" +
    "\n" +
    "For this reason, a heavy coffee drinker should consider making a preparation and buying a manual grinder (more affordable) or an electric one (typically more expensive).  \n" +
    "Also, to make sure you always have new coffee, we recommend buying small quantities on a regular basis. This prevents part of the large packet of coffee we bought from being left unused for a long time and thus losing its flavors.\n" +
    "\n" +
    "#### Avoid Air, Light, Heat and Moisture!\n" +
    "\n" +
    "Even if we cannot always grind our coffee immediately before using it, we can certainly be careful about its conservation, even if we have bought it already ground. As we have already learned, air is one of the main enemies of coffee, as oxidation accelerates its stale process. For this reason it is necessary to keep the coffee sealed and with as little air as possible in the container.\n" +
    "\n" +
    "<span>Coffee is sometimes sold in ziplock bags, and this is a great way to make sure no air can get in once the container is sealed.</span>\n" +
    "\n" +
    "In addition, when the ziplock is present, there is also a small valve from which we can let out as much air as we can once the container has been closed.\n" +
    "\n" +
    "<span>An alternative is to pour the coffee into an airtight container as soon as possible,</span>\n" +
    "\n" +
    "and try to let out as much air as possible to reduce the amount of oxygen our precious coffee is in contact with.\n" +
    "\n" +
    "In addition to oxygen, direct exposure to sunlight also contributes to making our coffee stale faster, due to a process called 'photodegradation' for this reason\n" +
    "\n" +
    "<span>Our container should be opaque</span>\n" +
    "\n" +
    "so as not to allow direct light to interact with our coffee. If we don't have an opaque container, don't worry! It will be sufficient to store it in a place not exposed to direct sunlight.\n" +
    "\n" +
    "the last enemy of coffee is humidity. Our whole beans and ground coffee attract moisture, but this isn't good for the end result at all. For this reason it is necessary to keep the coffee in a dry place and\n" +
    "\n" +
    "<span>Absolutely avoid the refrigerator or freezer!</span>\n" +
    "\n" +
    "In fact, the continuous change of temperature when taking the coffee and putting it back in the cold, causes the appearance of condensation, which is absorbed by the coffee, ruining the aromas.\n" +
    "\n" +
    "#### Be roast-aware\n" +
    "\n" +
    "It may be that the most avid coffee drinkers choose to toast their beans on their own, but I believe that most coffee lovers buy their beans already roasted. In this case it is very important to pay attention to the roasting date: from that moment, the coffee slowly begins to lose its properties, for all the reasons we have seen so far. Generally, as we have already said,\n" +
    "\n" +
    "<span>whole beans retain their intense aromas and flavors for about a month after roasting, while ground coffee for at most two weeks</span>\n" +
    "\n" +
    "When we buy our coffee, we can find the roasting date on the package, and we must therefore be careful that it is not too much in the past, otherwise we risk that our coffee quickly loses its characteristics.\n" +
    "\n" +
    "#### To Sum Up\n" +
    "\n" +
    "we have learned that storing coffee to preserve its properties longer requires a lot of attention, but we can summarize in a few small precautions the secret to always having excellent coffee:\n" +
    "\n" +
    "*   Try to buy small quantities of whole beans frequently and grind your own coffee just before using it\n" +
    "*   Check the roasting date: from that moment the coffee slowly begins to lose its properties\n" +
    "*   Keep the coffee in a cool, dry and dark place, avoiding contact with the air as much as possible"




const articleMock= {
    title: 'How To Store Your Coffee',
    body: articleBody,
    date: '2021/04/10',
    cover: cup,
    related:[
        {
            id: 2,
            title: 'The Perfect Frech Press',
            thumb: french,
        },
        {
            id: 3,
            title: 'How to make cappuccino at home',
            thumb: cappuccino,
        },
        {
            id: 4,
            title: 'The secret to a tasty Chemex',
            thumb: chemex,
        }

    ]
}

export {ArticleList, articleMock};