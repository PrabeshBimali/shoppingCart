import React from 'react'
import "./productPage.css"
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductPage(props) {

   
    const { id } = useParams()

    const [productDetail, setProductDetail] = useState({})
    const [totalPrice, setTotalPrice] = useState(productDetail.price);
    const [qty, setQty] = useState(1);

    const addProduct = ()=>{
        props.setCart(productDetail._id, productDetail.name, productDetail.price, productDetail.imgSrc, qty);
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(data=>{
            console.log(data.data)
            setProductDetail(data.data)
            setTotalPrice(data.data.price)
        })
        .catch(error=>console.log(error.message));
      }, []);


    return (
        
        <div className="productPage">
            <div className="productPageLeft">
                <div className="productPageLeftImageContainer">
                    <img src={productDetail.imgSrc} alt="" className="productPageLeftImage" />
                </div>
                <div className="productPageLeftInfo">
                <p className="productLeftInfoName">{productDetail.name}</p>
                <p className="productLeftInfoDescription">{productDetail.description}</p>
                <p className="productLeftInfoPrice">${productDetail.price}</p>
            </div>
                
            </div>
            
            <div className="productPageRight">
                <div className="productPageRightInfo">
                    <p>Price: <span>{totalPrice}</span></p>
                    <p>
                        status: <span>In Stock</span>
                    </p>
                    <p>
                        Qty:
                        <select onChange={(e)=>{
                            const newPrice = e.target.value * productDetail.price;
                            setTotalPrice(newPrice);
                            setQty(e.target.value);
                        }}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>

                    </p>
                    <p>
                        <button type="button" onClick={addProduct}> Add to Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}
