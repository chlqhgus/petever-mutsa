import React from "react";
import "../../styles/diary/Services.css";

const Services = () => {
  return (
    <services className="service">
      <div className="service-contents">
        <div className="service-text">
          <h1>
            사랑하는 반려동물에게 <br />
            <span className="accent2">못다한 마음</span>을 전해보세요.
          </h1>
          <p>
            반려동물과의 소중한 순간들을 떠올리며, 그들에게 마음을 전해보세요.
            <br />
            속으로만 가지고 있었던 혼자만의 이야기를 적어도 좋고, 오늘 있었던
            이야기를 기록해도 좋아요.
            <br />
            그리움과 슬픔을 함게 나누고, 치유를 받을 수 있는 특별한 공간이 될
            거예요.
          </p>
        </div>
      </div>
    </services>
  );
};

export default Services;
