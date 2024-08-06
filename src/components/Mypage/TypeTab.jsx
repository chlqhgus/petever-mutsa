import React from "react";
import "../../styles/mypage/TypeTab.css";

const TypeTab = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <button
        onClick={() => setActiveTab("all")}
        className={activeTab === "all" ? "active-button" : "inactive-button"}
      >
        전체글보기
      </button>
      <button
        onClick={() => setActiveTab("answer")}
        className={activeTab === "answer" ? "active-button" : "inactive-button"}
      >
        오늘의질문
      </button>
      <button
        onClick={() => setActiveTab("letter")}
        className={activeTab === "letter" ? "active-button" : "inactive-button"}
      >
        남긴편지
      </button>
    </div>
  );
};

export default TypeTab;
