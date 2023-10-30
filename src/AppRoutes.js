import React from "react";
import {Routes, Route} from "react-router-dom";

import IcePops from "./icecream_category/icecream.js";
import Gelato from "./icecream_category/gelato.js";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<IcePops/>} />
            <Route path="/icepops" element={<IcePops/>} />
            <Route path="/gelato" element={<Gelato/>} />
        </Routes>
    );
}

export default AppRoutes;