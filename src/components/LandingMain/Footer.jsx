import React from "react";
import "../../styles/landing/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1>
          PET:EVER와 함께라면, 소중한 추억은{" "}
          <span className="accent">영원</span>합니다
        </h1>
        <p>그리움을 함께 나누고, 따뜻한 기억을 영원히 보존하는 공간.</p>
        <p>사랑하는 반려동물과의 아름다운 순간을 오래토록 기억할 수 있도록,</p>
        <p>PET:EVER가 언제나 여러분과 함께하겠습니다.</p>
      </div>
      <button>시작하기</button>
    </footer>
  );
};

export default Footer;
