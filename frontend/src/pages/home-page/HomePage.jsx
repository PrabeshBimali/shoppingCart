import React from 'react'
import Product from '../../components/product/Product'
import "./homePage.css"
import axios from "axios";
import { useState, useEffect } from 'react';

export default function HomePage() {

    const [productDetail, setProductDetail] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(data=>{
            console.log(data.data)
            setProductDetail(data.data)
        })
        .catch(error=>console.log(error.message));
      }, []);


    return (
        <div className="homePage">
            <h2 className="homePageTitle">Trending Products</h2>
            <div className="homePageProducts">
                {productDetail.map(arr => (
                    <Product product={arr}/>
                ))}
            </div>
        </div>
    )
}
