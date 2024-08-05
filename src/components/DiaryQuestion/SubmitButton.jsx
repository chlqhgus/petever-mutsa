import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/diary/SubmitButton.css";
import SuccessModal from "./SuccessModal";
import UploadSection from "./UploadSection";

const SubmitButton = () => {
  const location = useLocation();
  const isDiaryQuestion = location.pathname === "/diaryQuestion";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const uploadSectionRef = useRef(null);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (uploadSectionRef.current) {
      uploadSectionRef.current.reset();
    }
  };

  return (
    <div>
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
