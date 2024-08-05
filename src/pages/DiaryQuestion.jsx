import React, { useRef } from "react";
import WriteType from "../components/DiaryQuestion/WriteType"; // 오늘의질문인지 편지쓰기인지 타입 구분파트
import Services from "../components/DiaryQuestion/Services"; //서비스 설명 파트
import UploadSection from "../components/DiaryQuestion/UploadSection"; //사진, 설명글 입력파트
import SubmitButton from "../components/DiaryQuestion/SubmitButton";

const DiaryQuestion = () => {
  return (
    <div>
      <WriteType />
      <Services />
      <SubmitButton />
    </div>
  );
};

export default DiaryQuestion;
