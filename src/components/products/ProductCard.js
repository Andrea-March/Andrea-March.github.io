import React from "react";
import './products.css'

const ProductCard = ({product}) =>{
    return(
        <div className="product-card">
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
        </div>
    )
}


export default ProductCard;