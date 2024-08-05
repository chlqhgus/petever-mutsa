import React from "react";
import styled from "styled-components";
import iconX from "../../assets/icon/iconX.png";
import iconCheck from "../../assets/icon/iconCheck.png";

const SuccessModal = ({ onCloseClick }) => {
  return (
    <ModalOverlay>
      <StyledModal>
        <CloseImg onClick={onCloseClick} src={iconX} alt="Close" />
        <TextWrapper>
          <CheckImgWrapper>
            <img src={iconCheck} alt="Check" />
          </CheckImgWrapper>
          <span>
            오늘의 기록이 완료되었어요!
            <br />
            작성된 글은
            <BoldText> 마이페이지-내 글 보기</BoldText>에서 확인하실 수 있어요.
          </span>
        </TextWrapper>
      </StyledModal>
    </ModalOverlay>
  );
};

export default SuccessModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const StyledModal = styled.div`
  background-color: white;
  width: 50%;
  height: 35%;
  border-radius: 30px;
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CloseImg = styled.img`
  position: absolute;
  top: 24px;
  right: 30px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: -0.5px;
`;

const CheckImgWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
  > img {
    width: 50px;
    height: 50px;
  }
`;

const BoldText = styled.span`
  font-weight: 700;
`;
