import React from "react";
import powder from '../../static/powder.png'
import '../../App.css'
import './powders.css'

const Powders = () =>{
    let productsList = [
        {
            'id': 1,
            'name': 'Etiopia Yirgachefe Guji',
            'description': 'Medium-roasted (ideal for filter coffee)',
            'price': '5',
            'currency': '€/hg',
            'thumb': powder
        },
        {
            'id': 2,
            'name': 'Etiopia Worka',
            'description': 'blended coffee',
            'price': '5',
            'currency': '€/hg',
            'thumb': powder
        },
        {
            'id': 3,
            'name': 'Etiopia Worka',
            'description': 'blended coffee',
            'price': '5',
            'currency': '€/hg',
            'thumb': powder
        },
        {
            'id': 4,
            'name': 'Etiopia Worka',
            'description': 'blended coffee',
            'price': '5',
            'currency': '€/hg',
            'thumb': powder
        },
        {
            'id': 5,
            'name': 'Etiopia Worka',
            'description': 'blended coffee',
            'price': '5',
            'currency': '€/hg',
            'thumb': powder
        },
        {
            'id': 6,
            'name': 'Etiopia Worka',
            'description': 'blended coffee',
            'price': '5',
            'currency': '€/hg',
            'thumb': powder
        },
        {
            'id': 7,
            'name': 'Etiopia Worka',
            'description': 'blended coffee',
            'price': '5',
            'currency': '€/hg',
            'thumb': powder
        },
        {
            'id': 8,
            'name': 'Etiopia Worka',
            'description': 'blended coffee',
            'price': '5',
            'currency': '€/hg',
            'thumb': powder
        },
        {
            'id': 9,
            'name': 'Etiopia Worka',
            'description': 'blended coffee',
            'price': '5',
            'currency': '€/hg',
            'thumb': powder
        }
    ]

    const listItems = productsList.map((item)=>{
        return(
            <div className="card dFlex" key={item.id}>
                <div className="card-image">
                    <img src={item.thumb} alt=""/>
                </div>
                <div className="card-header dFlex">
                    <h2 className="h2">{item.name}</h2>
                    <p className="p">{item.description}</p>
                    <p className="p price">{item.price}<span className="span">{item.currency}</span></p>
                    <p className="p btn">Go To Detail</p>
                </div>
            </div>
        )
    })
    return(
        <div className="main-content dFlex">
            <h3 className="h3">Coffee Powders</h3>
            {listItems}
        </div>
    )
}


export default Powders;