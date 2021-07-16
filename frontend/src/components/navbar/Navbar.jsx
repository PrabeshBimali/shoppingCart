import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"
import {ShoppingCart, Shop, Menu, Search} from "@material-ui/icons"

export default function Navbar({click, cart}) {
    return (
        <div className="navbarContainer">
            <div className="navbarLogoContainer">
                Expensive
            </div>

            <div className="navbarSearchContainer">
                <Search className="searchIcon"/>
                <input placeholder="search for any products" className="searchInput" />
            </div>

            <div className="navbarLinksContainer">
                <ul className="navbarLinks">
                    <li>
                        <Link to="/cart" className="navbarLink">
                            <ShoppingCart className="shoppingCartIcon"/>
                            <span className="shoppingCartBadge">{cart}</span>
                            <span className="shoppingCartText">Cart</span>
                        </Link>
                    </li>
                    <li>
                    <Link to="/" className="navbarLink">
                            <Shop className="shopIcon"/>
                            <span className="shopText">Shop</span>
                        </Link>
                    </li>
                </ul>

                
            </div>
            <div className="hamburgerMenuContainer">
                    <Menu className="hamburgerMenu" onClick={click}/>
            </div>
            
        </div>
    )
}
