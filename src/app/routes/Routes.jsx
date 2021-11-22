import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Index";
import Exchanges from "../../pages/Exchanges";
import SingleCoin from "../../pages/SingleCoin";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exchanges" element={<Exchanges />} />
      <Route path="/assets/:id" element={<SingleCoin />} />
    </Routes>
  );
}
