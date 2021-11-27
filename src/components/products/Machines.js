import React from "react";
//import v60 from "../../static/v60/v60.png";
import v602 from "../../static/v60/v60-2.png";
//import aero from "../../static/aeropress.png";
//import pot from "../../static/pot.png";

const Machines= () =>{
    let productsList = [
        {
            'id': 1,
            'name': 'V 60',
            'description': 'Long coffee brewing',
            'price': '20',
            'currency': '€',
            'thumb': v602
        },
        {
            'id': 2,
            'name': 'V 60',
            'description': 'Long coffee brewing',
            'price': 20,
            'currency': '€',
            'thumb': v602
        },
        {
            'id': 3,
            'name': 'Aeropress',
            'description': 'Long coffee brewing',
            'price': '20',
            'currency': '€',
            'thumb': v602
        },
        {
            'id': 4,
            'name': 'Water Pot',
            'description': 'Water Pot',
            'price': '20',
            'currency': '€',
            'thumb': v602
        },
        {
            'id': 5,
            'name': 'Aeropress',
            'description': 'Long coffee brewing',
            'price': '20',
            'currency': '€',
            'thumb': v602
        },
        {
            'id': 6,
            'name': 'Water Pot',
            'description': 'Water Pot',
            'price': '20',
            'currency': '€',
            'thumb': v602
        },
        {
            'id': 7,
            'name': 'Aeropress',
            'description': 'Long coffee brewing',
            'price': '20',
            'currency': '€',
            'thumb': v602
        },
        {
            'id': 8,
            'name': 'Water Pot',
            'description': 'Water Pot',
            'price': '20',
            'currency': '€',
            'thumb': v602
        }
    ]

    const listItems = productsList.map((item)=>{
        return(
            <div className="card dFlex" key={item.id}>
                <div className="card-image">
                    <img src={item.thumb} />
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
            <h3 className="h3">Coffee Machines</h3>
            {listItems}
        </div>
    )
}

export default Machines;
