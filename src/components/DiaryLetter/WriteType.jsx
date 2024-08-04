import React from "react";
import "../../styles/diary/WriteType.css";
import { useNavigate } from "react-router-dom";

const WriteType = () => {
  let navigate = useNavigate();
  const goToQuestionPage = () => {
    navigate("/DiaryQuestion");
  };

  const goToWriteLetterPage = () => {
    navigate("/DiaryLetter");
  };

  return (
    <writetype className="writetype">
      <div className="typecheck-button">
        <button className="question-button-select" onClick={goToQuestionPage}>
          오늘의질문
        </button>
        <button
          className="letter-button-unselect"
          onClick={goToWriteLetterPage}
        >
          편지쓰기
        </button>
      </div>
    </writetype>
  );
};

export default WriteType;
