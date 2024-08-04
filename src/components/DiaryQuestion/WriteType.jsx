import React from "react";
import "../../styles/diary/WriteType.css";
import { useNavigate, useLocation } from "react-router-dom";

const WriteType = () => {
  let navigate = useNavigate();
  const goToQuestionPage = () => {
    navigate("/diaryQuestion");
  };

  const goToWriteLetterPage = () => {
    navigate("/diaryLetter");
  };

  const location = useLocation();
  const isDiaryQuestion = location.pathname === "/diaryQuestion";

  return (
    <writetype className="writetype">
      <div className="typecheck-button">
        <button
          className={
            isDiaryQuestion
              ? "question-button-select"
              : "question-button-unselect"
          }
          onClick={goToQuestionPage}
        >
          오늘의질문
        </button>
        <button
          className={
            isDiaryQuestion ? "letter-button-unselect" : "letter-button-select"
          }
          onClick={goToWriteLetterPage}
        >
          편지쓰기
        </button>
      </div>
    </writetype>
  );
};

export default WriteType;
