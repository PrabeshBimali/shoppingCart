import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'

export default function Product({product}) {
    return (
        <div className="product">
            <img src={product.imgSrc} alt="" className="productImg" />
            <div className="productInfo">
                <p className="productInfoName">{product.name}</p>
                <p className="productInfoDescription">{product.description}</p>
                <p className="productInfoPrice">Price: ${product.price}</p>
            </div>
            <Link to={`/product/${product._id}`} className="productInfoButton">show</Link>
        </div>
    )
}
