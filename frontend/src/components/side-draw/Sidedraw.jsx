import React from 'react'
import "./sidedraw.css"
import {Link} from "react-router-dom"
import { Shop, ShoppingCart } from '@material-ui/icons';

export default function Sidedraw({show, click, cart}) {
    const sideDrawClass = ["sidedraw"];

    if(show){
        sideDrawClass.push("show");
    }
    return (
        <div className={sideDrawClass.join(" ")}>
            <div className="sidedrawLinksContainer">
                <ul className="sidedrawLinks">
                    <li>
                        <Link to="/cart" className="sidedrawLink" onClick={click}> 
                            <ShoppingCart className="sidedrawShoppingCartIcon"/>
                            <span className="sidedrawShoppingCartBadge">{cart}</span>
                            <span className="sidedrawShoppingCartText">Cart</span>
                        </Link>
                    </li>
                    <li>
                    <Link to="/" className="sidedrawLink" onClick={click}>
                            <Shop className="sidedrawShopIcon"/>
                            <span className="sidedrawShopText">Shop</span>
                        </Link>
                    </li>
                </ul>

                
            </div>
        </div>
    )
}
