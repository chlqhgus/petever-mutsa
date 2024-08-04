import React from "react";
import InputTextSection from "./InputTextSection";
import styled from "styled-components";
import { Text, Unselect } from "../../styles/color";

const InputSectionFirst = () => {
  return (
    <SectionWrapper>
      <InputTextSection
        text1={"01"}
        text2={"반려동물의 정보를 알려주세요"}
        text3={"추모공간을 만들기 위해서는 기본적인 정보가 필요해요"}
      ></InputTextSection>
      <div>
        <InputText>반려동물 이름</InputText>
        <InputBox placeholder="반려동물의 이름을 입력해주세요"></InputBox>
      </div>
      <DateSectionWrapper>
        <DateWrapper>
          <InputText>반려동물 탄생일</InputText>
          <InputBox data-placeholder="YYYY/MM/DD" type="date"></InputBox>
        </DateWrapper>
        <DateWrapper>
          <InputText>무지개 다리를 건넌 날</InputText>
          <InputBox placeholder="YYYY/MM/DD" type="date"></InputBox>
        </DateWrapper>
      </DateSectionWrapper>
    </SectionWrapper>
  );
};

export default InputSectionFirst;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

export const InputText = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  letter-spacing: -0.36px;
  color: ${Text};
  margin-bottom: 15px;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 46px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid ${Unselect};
  background: #fff;
  padding: 13px 18px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.28px;
  color: ${Text};
  &::placeholder {
    color: ${Unselect};
  }
`;

export const DateSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DateWrapper = styled.div`
  width: 47%;
`;
