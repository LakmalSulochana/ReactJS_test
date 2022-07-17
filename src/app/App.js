import React from "react";
import HomePage from "../pages/Home/index"
import {Routes,Route} from "react-router-dom";
import NotFound from "../pages/Session/NotFound";
import Login from "../pages/Session/Login";

function App() {
    return (

        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='login' element={<Login/>}/>
          <Route exact path="*" element={<NotFound/>}/>

        </Routes>
    );
}

export default App;
