import React from "react";
import Header from "../components/LandingMain/Header"; //메인 부분
import Services from "../components/LandingMain/Services"; //서비스 소개 파트
import Footer from "../components/LandingMain/Footer"; //하단 부분

import "../styles/landing/Background.css"; //배경화면 이미지 임포트

const LandingPage = () => {
  return (
    <div className="background">
      <Header />
      <Services />
      <Footer />
    </div>
  );
};

export default LandingPage;
