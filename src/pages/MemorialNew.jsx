import React from "react";
import InputSectionFirst from "../components/MemorialNew/InputSectionFirst";
import InputSectionSecond from "../components/MemorialNew/InputSectionSecond";
import InputSectionThird from "../components/MemorialNew/InputSectionThird";
import Button from "../components/common/Button";
import {
  MainText,
  SubText,
} from "../components/MemorialMain/OtherMemorialSection";
import styled from "styled-components";
import { SelectFuneral } from "../styles/color";

const MemorialNew = () => {
  return (
    <PageWrapper>
      <TextWrapper>
        <SubText>추억할 수 있는 소중한 공간을 만들 수 있도록. </SubText>
        <MainText>
          <span>추모공간 생성을 위한 정보</span>를<br /> 입력해주세요
        </MainText>
      </TextWrapper>
      <InputSectionWrapper>
        <InputSectionFirst></InputSectionFirst>
        <InputSectionSecond></InputSectionSecond>
        <InputSectionThird></InputSectionThird>
        <ButtonWrapper>
          <Button text={"추모공간 생성하기"} color={SelectFuneral}></Button>
        </ButtonWrapper>
      </InputSectionWrapper>
    </PageWrapper>
  );
};

export default MemorialNew;

const PageWrapper = styled.div`
  margin-left: 7%;
  display: flex;
  padding: 88px;
  gap: 30px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  line-height: normal;
  width: 50%;
`;

const InputSectionWrapper = styled.div`
  width: 50%;
  margin-top: 35  px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const ButtonWrapper = styled.div`
  button {
    font-size: 18px;
  }
  text-align: right;
`;
