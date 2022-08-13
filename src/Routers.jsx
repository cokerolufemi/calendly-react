import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Individual from "./Components/Individual";
import Teams from "./Components/Teams";
import Enterprise from "./Components/Enterprise";

function Routers() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/individual" element={<Individual />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/enterprise" element={<Enterprise />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
