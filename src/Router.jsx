import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FuneralMain from "./pages/FuneralMain";
import FuneralDetail from "./pages/FuneralDetail";
import SideBar from "./components/common/SideBar";
import FuneralNew from "./pages/FuneralNew";

function Router() {
  return (
    <BrowserRouter>
    <SideBar></SideBar>
      <Routes>
        <Route path="/funeralMain" element={<FuneralMain />}></Route>
        <Route path="/funeralNew" element={<FuneralNew />}></Route>
        <Route path="/funeralDetail" element={<FuneralDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
