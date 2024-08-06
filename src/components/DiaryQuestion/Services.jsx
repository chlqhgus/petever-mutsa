import React from "react";
import "../../styles/diary/Services.css";

const Services = () => {
  return (
    <services className="service">
      <div className="service-contents">
        <div className="service-text">
          <h1>반려동물과 함께했던 순간 중<br />
            <span className="accent">가장 행복했던 기억</span>은 언제인가요?</h1>
          <p>
            사랑하는 반려동물과의 행복한 순간들을 기록해봐요!
            <br />
            그때, 반려동물이 어떤 행동을 했는지 구체적으로 적어보는 것도 좋아요.
            <br />
            장난기 넘치는 모습이나 사랑스러운 행동 같은 거요 ☺️
          </p>
        </div>
      </div>
    </services>
  );
};

export default Services;
