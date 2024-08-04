import React from "react";
import "../../styles/landing/Services.css";

const Services = () => {
  return (
    <section className="services">
      <div className="services-content">
        <h2>
          <span className="service_highlight">그리운</span> 마음을 위한 특별한
          서비스
        </h2>
        <p className="service_details">
          PET:EVER은 당신과 반려동물의 소중한 추억을 위해 다음과 같은 서비스를
          제공합니다.
        </p>
        <div className="service-cards">
          <div className="service-card">
            <h1>📝</h1>
            <h3>
              <span class="accent">매일매일 </span>기록하는 우리의 하루
            </h3>
            <p>반려동물과의 일상을 기록하고 추억을 공유하세요.</p>
            <p>매일매일 달라지는 오늘의 질문을 통해</p>
            <p>특별한 순간을 더 깊이 새길 수 있을 거예요.</p>
          </div>
          <div className="service-card">
            <h1>🏡</h1>
            <h3><span class="accent">따뜻한 </span>기억으로 가득한 공간</h3>
            <p>먼 여행을 떠난 반려동물과의 추억을</p>
            <p>언제든지 돌아볼 수 있는 공간이예요.</p>
            <p>
              사진을 올리고, 다른 사람들과 추억을 나누며 위로를 받을 수 있어요.
            </p>
          </div>
          <div className="service-card">
            <h1>🐾</h1>
            <h3><span class="accent">소중한 </span>이별의 준비</h3>
            <p>신뢰할 수 있는 반려동물 장례식장 정보를 제공합니다.</p>
            <p>소중한 반려동물의 마지막 순간을 </p>
            <p>아름답게 준비할 수 있도록 도와드릴게요.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
