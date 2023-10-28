import React from "react";
import { shadowUrl, biteUrl } from "./icecream_config.js";
import {icePopDetails} from "./icecream_config.js";
import "./iceCream.css";

function IcePopsCont(props) {
  return (
    <>
      <div className="icePop_container">
        <div className="icePop_image_container">
          <div className="icePop">
            <img
              src={props.imageLink}
              className="icePop_image"
              alt="icePop_image"
            />
            <img src={biteUrl} className="icePop_bite" alt="icePop_bite" />
          </div>
          <img src={shadowUrl} className="icePop_shadow" alt="icePop_shadow" />
        </div>
        <div
          className="icePop_details_container"
          style={{ backgroundColor: props.elementColor }}
        >
          <div className="icePop_name">{props.iceCreamName}</div>
          <div className="icePop_description">{props.productDescription}</div>
          <div className="icePop_price">Rs. {props.price}</div>
          <button className="icePop_addToCart add_to_cart_btn">+ Add Item</button>
        </div>
      </div>
    </>
  );
}

function IcePops() {
  return (
    <div className="icePop_main_container">
      {icePopDetails.map((icepop, index) => (
        //here we are passing the props to the IcePopsCont component using the spread operator
        <IcePopsCont key={icepop.iceCreamName + index} {...icepop} />
      ))}
    </div>
  );
}

export default IcePops;
{
  /* 
                    1. img
                    2. iceCreamName
                    3. iceCreamDescription
                    4. Price
                    5. Add to Cart Button
                 */
}
