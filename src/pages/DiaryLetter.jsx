import React from "react";
import WriteType from "../components/DiaryQuestion/WriteType"; // 오늘의질문인지 편지쓰기인지 타입 구분파트
import Services from "../components/DiaryLetter/Services"; //서비스 설명 파트
import UploadSection from "../components/DiaryQuestion/UploadSection"; //사진, 설명글 입력파트
import SubmitButton from "../components/DiaryQuestion/SubmitButton";
import styled from "styled-components";

const DiaryLetter = () => {
  return (
    <Wrapper>
      <WriteType />
      <Services />
      <SubmitButton />
    </Wrapper>
  );
};

export default DiaryLetter;

const Wrapper = styled.div`
  margin-left: 80px;
  width: 90%;
  padding: 40px;
`;
