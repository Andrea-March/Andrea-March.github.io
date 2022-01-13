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

const articleBody = " <p>\n" +
    "                        While it is true that a good coffee is obtained with an excellent extraction, it is equally true that how we have preserved our coffee is essential to obtain a drink with strong tastes and aromas.\n" +
    "                        Let's see what are the tricks to better preserve our coffee, and what are the mistakes to be avoided absolutely.\n" +
    "                    </p>\n" +
    "                    <h4>The perfect time for grinding</h4>\n" +
    "                    <p>\n" +
    "                        There is a big difference in storage time between the whole bean and a ground coffee.\n" +
    "                        In fact, the whole bean still retains its intense flavors and aromas for about a month after roasting, while the ground for at most 2 weeks!\n" +
    "                        This is because after grinding, a larger surface is exposed to the air, which through the oxidation process will quickly spoil our favorite coffee.\n" +
    "                    </p>\n" +
    "                    <span>\n" +
    "                        To prevent this from happening, and to make sure you fully savor all the hidden flavors, it is best to grind your coffee just before using it.\n" +
    "                        </span>\n" +
    "\n" +
    "                    <p>\n" +
    "                        For this reason, a heavy coffee drinker should consider making a preparation and buying a manual grinder (more affordable) or an electric one (typically more expensive).\n" +
    "                        <br/>\n" +
    "                        Also, to make sure you always have new coffee, we recommend buying small quantities on a regular basis.\n" +
    "                        This prevents part of the large packet of coffee we bought from being left unused for a long time and thus losing its flavors.\n" +
    "                    </p>\n" +
    "                    <h4>Avoid Air, Light, Heat and Moisture!</h4>\n" +
    "                    <p>\n" +
    "                        Even if we cannot always grind our coffee immediately before using it, we can certainly be careful about its conservation, even if we have bought it already ground.\n" +
    "                        As we have already learned, air is one of the main enemies of coffee, as oxidation accelerates its stale process.\n" +
    "                        For this reason it is necessary to keep the coffee sealed and with as little air as possible in the container.\n" +
    "                    </p>\n" +
    "                    <span>\n" +
    "                        Coffee is sometimes sold in ziplock bags, and this is a great way to make sure no air can get in once the container is sealed.\n" +
    "                    </span>\n" +
    "                    <p>\n" +
    "                        In addition, when the ziplock is present, there is also a small valve from which we can let out as much air as we can once the container has been closed.\n" +
    "                    </p>\n" +
    "                    <span>\n" +
    "                        An alternative is to pour the coffee into an airtight container as soon as possible,\n" +
    "                    </span>\n" +
    "                    <p>\n" +
    "                        and try to let out as much air as possible to reduce the amount of oxygen our precious coffee is in contact with.\n" +
    "                    </p>\n" +
    "                    <p>\n" +
    "                        In addition to oxygen, direct exposure to sunlight also contributes to making our coffee stale faster, due to a process called 'photodegradation'\n" +
    "                        for this reason\n" +
    "                    </p>\n" +
    "                    <span>\n" +
    "                        Our container should be opaque\n" +
    "                    </span>\n" +
    "                    <p>\n" +
    "                        so as not to allow direct light to interact with our coffee. If we don't have an opaque container, don't worry!\n" +
    "                        It will be sufficient to store it in a place not exposed to direct sunlight.\n" +
    "                    </p>\n" +
    "                    <p>\n" +
    "                        the last enemy of coffee is humidity. Our whole beans and ground coffee attract moisture, but this isn't good for the end result at all.\n" +
    "                        For this reason it is necessary to keep the coffee in a dry place and\n" +
    "                    </p>\n" +
    "                    <span>\n" +
    "                        Absolutely avoid the refrigerator or freezer!\n" +
    "                    </span>\n" +
    "                    <p>\n" +
    "                        In fact, the continuous change of temperature when taking the coffee and putting it back in the cold, causes the appearance of condensation,\n" +
    "                        which is absorbed by the coffee, ruining the aromas.\n" +
    "                    </p>\n" +
    "                    <h4>Be roast-aware</h4>\n" +
    "                    <p>\n" +
    "                        It may be that the most avid coffee drinkers choose to toast their beans on their own, but I believe that most coffee lovers buy their beans already roasted.\n" +
    "                        In this case it is very important to pay attention to the roasting date: from that moment, the coffee slowly begins to lose its properties,\n" +
    "                        for all the reasons we have seen so far.\n" +
    "                        Generally, as we have already said,\n" +
    "                    </p>\n" +
    "                    <span>\n" +
    "                        whole beans retain their intense aromas and flavors for about a month after roasting, while ground coffee for at most two weeks\n" +
    "                    </span>\n" +
    "                    <p>\n" +
    "                        When we buy our coffee, we can find the roasting date on the package,\n" +
    "                        and we must therefore be careful that it is not too much in the past, otherwise we risk that our coffee quickly loses its characteristics.\n" +
    "                    </p>\n" +
    "                    <h4>To Sum Up</h4>\n" +
    "                    <p>\n" +
    "                        we have learned that storing coffee to preserve its properties longer requires a lot of attention,\n" +
    "                        but we can summarize in a few small precautions the secret to always having excellent coffee:\n" +
    "                        <ul className=\"sum-up\">\n" +
    "                            <li>Try to buy small quantities of whole beans frequently and grind your own coffee just before using it</li>\n" +
    "                            <li>Check the roasting date: from that moment the coffee slowly begins to lose its properties</li>\n" +
    "                            <li>Keep the coffee in a cool, dry and dark place, avoiding contact with the air as much as possible</li>\n" +
    "                        </ul>\n" +
    "                    </p>\n"




const articleMock= {
    title: 'How To Store Your Coffee',
    body: articleBody,
    date: '2021/04/10',
    thumb: cup,
    cover:cup,
    likes: 10,
    dislikes: 1,
    hearts: 5,
    comments: [
        {
            id: 1,
            user: 'Guest',
            date: '2021-01-10',
            message: 'This article is super dope! I was trying to use my coffee grounds to fertilize my garden and this article gave me the idea to do so. It worked brilliantly, thank you :)'
        },
        {
            id: 2,
            user: 'Guest_2',
            date: '2021-01-09',
            message: 'This article is super dope! I was trying to use my coffee grounds to fertilize my garden and this article gave me the idea to do so. It worked brilliantly, thank you :)'
        }
    ],
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