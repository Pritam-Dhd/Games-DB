import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Categories from "../Pages/Categories";

const Routex = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:item" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routex;
