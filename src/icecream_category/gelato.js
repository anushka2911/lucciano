import React from "react";
import {gelatoData} from "./icecream_config.js";
import "./gelato.css";

function GelatoCont(props) {
  return (
    <>
      <div className="gelato_container">
        <div className="gelato_image">
          <img src={props.imageLink}></img>
        </div>

        <div className="gelato_info" style={{backgroundColor:props.color}}>
          <h3 className="gelato_name">{props.icecreamName}</h3>
          <p className="gelato_description">{props.productDescription}</p>
          <p className="gelato_price">{props.price}</p>
          <button className="gelato_addToCart"> + Add to Cart</button>
        </div>
      </div>
    </>
  );
}

function Gelato() {
  return (
    <>
      <div className="gelato_main_container">
      {gelatoData.map((gelato, index) => (
        <GelatoCont {...gelato} />
      ))}
      </div>
    </>
  );
}

export default Gelato;