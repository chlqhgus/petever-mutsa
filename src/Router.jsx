import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FuneralMain from "./pages/FuneralMain";
import FuneralNewFirst from "./pages/FuneralNewFirst";
import FuneralNewSecond from "./pages/FuneralNewSecond";
import FuneralDetail from "./pages/FuneralDetail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/funeralMain" element={<FuneralMain />}></Route>
        <Route path="/funeralNewFirst" element={<FuneralNewFirst />}></Route>
        <Route path="/funeralNewSecond" element={<FuneralNewSecond />}></Route>
        <Route path="/funeralDetail" element={<FuneralDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
