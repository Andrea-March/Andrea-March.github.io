import React from "react";
import './productsHome.css'
import machines from "../../static/v60/v60-2.png";
import coffees from "../../static/powder.png";
import {Link} from "react-router-dom";

const ProductsHome = () =>{

    let productTypes = [
        {
            'id': 1,
            'name': 'Powders',
            'thumb': coffees
        },
        {
            'id': 2,
            'name': 'Machines',
            'thumb': machines
        }
    ]
    return(
        <div className="product-types">
            {
                productTypes.map((type) =>{
                    return(
                        <div className="product-single-type"><Link className="link" to={`/products/${type.name.toLowerCase()}`}><img src={type.thumb}></img><p>{type.name}</p></Link></div>
                    )
                })
            }
        </div>
    )
}


export default ProductsHome;