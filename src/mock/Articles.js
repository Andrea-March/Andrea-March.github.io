import v60 from "../static/v60/v60_ok.jpg";
import french from "../static/french/french_press_ok.jpg";
import cappuccino from "../static/cappuccino/cappuccino_ok.jpg";
import chemex from "../static/v60/v60-ok2.jpg";

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

export default ArticleList;