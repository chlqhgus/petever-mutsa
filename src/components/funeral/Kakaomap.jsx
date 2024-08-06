import React, { useEffect } from "react";
import "./Kakaomap.css";

const { kakao } = window;

const Kakaomap = () => {
  useEffect(() => {
    const mapContainer = document.getElementById("map"); // 올바른 ID 사용
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // kakao.maps.LatLng 사용
      level: 3,
    };
    const map = new kakao.maps.Map(mapContainer, options);
  }, []);

  return <div id="map" style={{ width: "80%", height: "400px" }}></div>; // 올바른 ID 사용 및 스타일 추가
};

export default Kakaomap;
