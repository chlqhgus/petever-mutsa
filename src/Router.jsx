import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MemorialMain from "./pages/MemorialMain";
import MemoralDetail from "./pages/MemoralDetail";
import SideBar from "./components/common/SideBar";
import MemorialNew from "./pages/MemorialNew";
import styled from "styled-components";

function Router() {
  return (
    <BrowserRouter>
      <SideBarDiv>
        <SideBar></SideBar>
      </SideBarDiv>
      <PageDiv>
        <Routes>
          <Route path="/memorialMain" element={<MemorialMain />}></Route>
          <Route path="/memorialNew" element={<MemorialNew />}></Route>
          <Route path="/memorialDetail/:id" element={<MemoralDetail />}></Route>
        </Routes>
      </PageDiv>
    </BrowserRouter>
  );
}

export default Router;

const SideBarDiv = styled.div`
  position: relative;
  z-index: 2;
`;
const PageDiv = styled.div`
  position: relative;
  z-index: 1;
`;
