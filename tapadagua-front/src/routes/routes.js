import React from "react";
import {Routes, Route} from "react-router-dom";

import FormLog from "../containers/formLogin";
import About from "../containers/about";
import Registrar from "../containers/registrar";
import UserPainel from "../containers/userpainel";
import Denunciar from "../containers/denunciar";

function Rotas(){
    return(
            <Routes>
                <Route path="/" element={<FormLog/>}/>
                <Route path="/sobre" element={<About/>}/>
                <Route path="/registrar" element={<Registrar/>}/>
                <Route path="/user" element={<Denunciar/>}/>
            </Routes>
    )
 }

 export default Rotas;