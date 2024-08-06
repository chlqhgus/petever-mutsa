import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/diary/SubmitButton.css";
import SuccessModal from "./SuccessModal";
import UploadSection from "./UploadSection";
import axios from "axios";
import { instance } from "../../api/instance";
const SubmitButton = () => {
  const location = useLocation();
  const isDiaryQuestion = location.pathname === "/diaryQuestion";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const uploadSectionRef = useRef(null);

  const handleButtonClick = async () => {
    if (uploadSectionRef.current) {
      const image = uploadSectionRef.current.getImage();
      const text = uploadSectionRef.current.getText();

      const formData = new FormData();
      formData.append("user", 1); // 사용자 ID를 실제 값으로 변경해야 합니다.
      formData.append("question", 1); // 질문 ID를 실제 값으로 변경해야 합니다.
      formData.append("content", text);
      if (image) {
        const response = await fetch(image);
        const blob = await response.blob();
        formData.append("image", blob, "image.png");
      }

      //const token = localStorage.getItem("accessToken"); // 로컬 스토리지에서 토큰을 가져옴
      const token = localStorage.getItem("accessToken");
      try {
        const response = await instance.post("/posts/answer/", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status === 201) {
          setIsModalOpen(true);
          console.log("good");
          if (uploadSectionRef.current) {
            uploadSectionRef.current.reset();
          }
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="sectionWrapper">
      <UploadSection ref={uploadSectionRef} />
      <div className="record-button">
        <button
          className={
            isDiaryQuestion ? "record-button-pink" : "record-button-yellow"
          }
          onClick={handleButtonClick}
        >
          기록하기
        </button>
      </div>
      {isModalOpen && <SuccessModal onCloseClick={handleCloseModal} />}
    </div>
  );
};

export default SubmitButton;
