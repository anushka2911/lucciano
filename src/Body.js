import React from "react";

import "./Body.css";

import IcePops from "./icecream_category/icecream.js";

function Body(){
    return (
        <>
            <div className="icecreamButtons">
            <button className="icepops_button icecream_category">ICEPOPS</button>
            <button className="gelato_button icecream_category">GELATO</button>
            <button className="all_button icecream_category">ALL</button>
            </div>

            <IcePops/>
        </>
    )
}

export default Body;