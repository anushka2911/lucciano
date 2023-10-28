import React from "react";
import {url} from "./config.js"; 
import "./Navbar.css";
function Navbar() {
    return (
        <>
        <div className="navbar">
        <p className="nav_logo">Lucciano</p>
        <p className="quote">Scoops of happiness, one cone at a time!</p>
        <div className="cart">
        <img src={url} />
        <h5 className="total_cart_items">1</h5>
        </div>
        </div>


        <div className="header">
        <p className="enjoy_it">ENJOY IT</p>
        <div className="discover_products">
        <p className="discover">DISCOVER OUR </p>
        <p className="products">PRODUCTS</p>
        </div>
        </div>

        </>
    );
    }

export default Navbar;