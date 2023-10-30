import React from "react";
import { BrowserRouter,NavLink } from "react-router-dom";

import "./Body.css";
import AppRoutes from "./AppRoutes";

import IcePops from "./icecream_category/icecream.js";
import Gelato from "./icecream_category/gelato.js";

function Body() {
  return (
    <BrowserRouter>
      <div className="icecreamButtons">
        <NavLink to="/icepops" element={<IcePops />}>
          <button className="icepops_button icecream_category">ICEPOPS</button>
        </NavLink>

        <NavLink to="/gelato" element={<Gelato />}>
          <button className="gelato_button icecream_category">GELATO</button>
        </NavLink>
      </div>

      <div className="subCategoryIceCreamButton">
      <button className="vegan sub-btn button-one">VEGAN</button>
     <button className="fruits sub-btn button-one">FRUITS</button>
     <button className="chocolate sub-btn button-one">CHOCOLATE</button>
     <button className="coated sub-btn button-one">COATED</button>
    
      </div>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default Body;
