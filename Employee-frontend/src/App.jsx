import React, { useState } from "react";

import './App.css'
import ListEmployee from './Component/ListEmployee'
import HeaderSassion from "./Component/HeaderSassion";
import FooterSession from "./Component/FooterSession";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./Component/Employee";
import Home from "./Component/Home";
import Login from "./Component/login";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <HeaderSassion />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/employees" element={<ListEmployee />} />
          <Route path="/add-employee" element={<Employee />} />
          <Route path="/edit-employee/:id" element={<Employee />}></Route>


        </Routes>

        <FooterSession />
      </BrowserRouter>
    </>
  )
}

export default App
