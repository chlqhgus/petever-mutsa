import React from "react";
import styled from "styled-components";
import iconX from "../../assets/icon/iconX.png";
import iconCheck from "../../assets/icon/iconCheck.png";

const ModalComplete = ({ onCloseClick }) => {
  return (
    <StyledModal>
      <CloseImg onClick={onCloseClick} src={iconX}></CloseImg>
      <CheckImg src={iconCheck}></CheckImg>
      <StyledText>
        추모공간 생성이 완료되었습니다.
        <br />
        생성된 추모공간은
        <StyledTextBold> 발자국 남기기- 추모공간 입장하기</StyledTextBold>에서
        확인하실 수 있어요
      </StyledText>
    </StyledModal>
  );
};

export default ModalComplete;

const StyledModal = styled.div`
  background-color: white;
  width: 908px;
  height: 356px;
  flex-shrink: 0;
  border-radius: 30px;
  position: relative;
`;

const CloseImg = styled.img`
  position: absolute;
  top: 10%;
  left: 90%;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const CheckImg = styled.img`
  position: absolute;
  top: 94px;
  left: 425px;
  width: 58px;
  height: 58px;
`;

const StyledText = styled.span`
  position: absolute;
  top: 200px;
  left: 98px;
  width: 712px;
  height: 66px;
  text-align: center;
  font-size: 23px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: -0.5px;
`;

const StyledTextBold = styled.span`
  font-weight: 700;
`;
