import React from "react";
import {Routes, Route} from "react-router-dom";

import FormLog from "../containers/formLogin";
import About from "../containers/about";
import Registrar from "../containers/registrar";

function Rotas(){
    return(
            <Routes>
                <Route path="/" element={<FormLog/>}/>
                <Route path="/sobre" element={<About/>}/>
                <Route path="/registrar" element={<Registrar/>}/>
            </Routes>
    )
 }

 export default Rotas;