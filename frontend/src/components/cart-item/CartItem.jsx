import "./cartItem.css"

import React from 'react'
import {Link} from "react-router-dom"
import {Delete} from "@material-ui/icons"

export default function CartItem(props) {

    const onDelete = () =>{ 
        props.deleteCart(props.addCart.url);
        console.log("Item Deleted!!")
    }

    return (
        

        <div className="cartItem">
            <div className="cartItemImageContainer">
                <img src={props.addCart.image} alt="" className="cartItemImage" />
            </div>

            <Link to={`/product/${props.addCart.url}`} className="cartItemName">
                <p>{props.addCart.name}</p>
            </Link>
            <p className="cartItemPrice">${props.addCart.price}</p>
            <select disabled>
                <option value="1">{props.addCart.quantity}</option>
            </select>
            <button className="cartItemDeleteBtn">
                <Delete className="deleteBtnIcon" onClick={onDelete}/>
            </button>
        </div>
    )
}
