import React, { useRef } from "react";
import "../../styles/diary/UploadSection.css";
import { useLocation } from "react-router-dom";

const UploadSection = () => {
  const location = useLocation();
  const isDiaryQuestion = location.pathname === "/diaryQuestion";
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="upload-section">
      <div className="upload-box" onClick={handleButtonClick}>
        <input type="file" accept="jpg" ref={fileInputRef} />
      </div>
      <div className="upload-textbox">
        <textarea placeholder="여기에 내용을 입력해주세요" />
      </div>
    </div>
  );
};

export default UploadSection;
