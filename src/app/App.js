import React from "react";
import HomePage from "../pages/Home/index"
import {Routes,Route} from "react-router-dom";
import NotFound from "../pages/Session/NotFound";
import Login from "../pages/Session/Login";
import FlexBoxLayout from "../pages/Layout/FlexBox";

function App() {
    return (

        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route  path='login' element={<Login/>}/>
          <Route  path='flex_layout' element={<FlexBoxLayout/>}/>
          <Route  path="*" element={<NotFound/>}/>

        </Routes>
    );
}

export default App;
