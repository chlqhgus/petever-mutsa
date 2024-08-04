import React, { useRef, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import ModalComplete from "../components/common/ModalComplete";

const MemorialNew = () => {
  const [data, setData] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const inputRef = useRef([]);
  const nav = useNavigate();

  const onChangeData = (e, imgURL) => {
    if (e.target.id === "main_image" || e.target.id === "gallery_images") {
      setData({ ...data, [e.target.id]: imgURL });
    } else {
      setData({ ...data, [e.target.id]: e.target.value });
    }
  };

  const onSubmit = () => {
    if (inputRef.current.filter((item) => item.value).length !== 8) {
      alert("추모공간 정보를 모두 입력해주세요.");
      return;
    }
    setIsSubmit(true);
  };

  const onCloseClick = () => {
    nav("/memorialMain");
  };

  return (
    <>
      <PageWrapper>
        <TextWrapper>
          <NewSubText>추억할 수 있는 소중한 공간을 만들 수 있도록. </NewSubText>
          <MainText>
            <span>추모공간 생성을 위한 정보</span>를<br /> 입력해주세요
          </MainText>
        </TextWrapper>
        <InputSectionWrapper>
          <InputSectionFirst
            inputRef={inputRef}
            onChangeData={onChangeData}
          ></InputSectionFirst>
          <InputSectionSecond
            inputRef={inputRef}
            onChangeData={onChangeData}
          ></InputSectionSecond>
          <InputSectionThird
            inputRef={inputRef}
            onChangeData={onChangeData}
          ></InputSectionThird>
          <ButtonWrapper>
            <Button
              text={"추모공간 생성하기"}
              color={SelectFuneral}
              onClick={onSubmit}
            ></Button>
          </ButtonWrapper>
        </InputSectionWrapper>
        {isSubmit && (
          <Background>
            <section></section>
            <div>
              <ModalComplete onCloseClick={onCloseClick}></ModalComplete>
            </div>
          </Background>
        )}
      </PageWrapper>
    </>
  );
};

export default MemorialNew;

const PageWrapper = styled.div`
  margin-left: 80px;
  display: flex;
  padding: 88px;
  gap: 30px;
  background-color: #f6f5f4;
  position: relative;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  line-height: normal;
  width: 50%;
  position: fixed;
`;

const NewSubText = styled(SubText)`
  font-size: 15px;
`;

const InputSectionWrapper = styled.div`
  width: 50%;
  margin-top: 35px;
  margin-left: 50%;
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

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  display: flex;
  > section {
    width: 80px;
  }
  > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
