import React from 'react'
import "./cartPage.css"
import CartItem from '../../components/cart-item/CartItem'
//import { useState } from 'react'

export default function CartPage(props) {

    let amount = 0;
    for(let i =0; i<props.addCart.length; i++){
        amount += (props.addCart[i].price * props.addCart[i].quantity)
    }

    return (
        <div className="cartPage">
            <div className="cartPageLeft">
                <h2 className="cartPageLeftTitle">
                    Shopping Cart
                </h2>
                {
                    props.addCart.map(val=>(
                        <CartItem addCart={val} deleteCart={props.deleteCart}/>
                    )

                    )
                }
            </div>
            <div className="cartPageRight">
                <div className="cartRightInfo">
                    <p className="cartRightInfoTotal">Subtotal ({props.addCart.length}) items</p>
                    <p className="cartRightInfoPrice">${amount}</p>
                </div>
                <div className="cartRightButtonContainer">
                    <button className="cartRightButton">
                        Proceed To checkout
                    </button>
                </div>
                
            </div>
            
        </div>
    )
}
