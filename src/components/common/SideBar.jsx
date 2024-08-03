import React, { useState } from "react";
import iconMenu from "../../assets/icon/iconMenu.png";
import iconHome from "../../assets/icon/iconHome.png";
import iconDiary from "../../assets/icon/iconDiary.png";
import iconPaw from "../../assets/icon/iconPaw.png";
import iconFuneral from "../../assets/icon/iconFuneral.png";
import iconMy from "../../assets/icon/iconMy.png";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { SecondaryText, ButtonSecondary } from "../../styles/color";

const SideBar = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [isExtended, SetIsExtended] = useState(false);

  const deleteText = () => {
    if (!isExtended) {
      const sideText = document.querySelectorAll(".hideText");
      sideText.forEach((item) => {
        item.innerText = "";
      });
      console.log(sideText);
    } else {
      const sideText = document.querySelectorAll(".showText");
      sideText.forEach((item) => {
        item.innerText = item.id;
      });
    }
  };
  return (
    <div>
      <SideBarWrapper>
        <StyledSideBar className={isExtended ? "extendedBar" : ""}>
          <div className="menuWrapper">
            <MenuImg
              src={iconMenu}
              onClick={() => {
                SetIsExtended(!isExtended);
                // deleteText();
              }}
            ></MenuImg>
          </div>
          <IconSectionWrapper>
            <IconWrapper
              onClick={() => {
                nav("/");
              }}
            >
              <IconImg src={iconHome}></IconImg>
              <div id="홈" className={isExtended ? "showText" : "hideText"}>
                홈
              </div>
            </IconWrapper>
            <IconWrapper
              onClick={() => {
                nav("/");
              }}
            >
              <IconImg src={iconDiary}></IconImg>
              <div
                id="일기 작성하기"
                className={isExtended ? "showText" : "hideText"}
              >
                일기 작성하기
              </div>
            </IconWrapper>
            <IconWrapper
              onClick={() => {
                nav("/memorialMain");
              }}
              className={
                location.pathname.includes("memorial") ? "currentPage" : ""
              }
            >
              <IconImg src={iconPaw}></IconImg>
              <div
                id="추모공간 입장하기"
                className={isExtended ? "showText" : "hideText"}
              >
                추모공간 입장하기
              </div>
            </IconWrapper>
            <IconWrapper
              onClick={() => {
                nav("/funeralLocation");
              }}
            >
              <IconImg src={iconFuneral}></IconImg>
              <div
                id="장례식장 찾기"
                className={isExtended ? "showText" : "hideText"}
              >
                장례식장 찾기
              </div>
            </IconWrapper>
            <IconWrapper
              onClick={() => {
                nav("/");
              }}
            >
              <IconImg src={iconMy}></IconImg>
              <div
                id="MY 페이지"
                className={isExtended ? "showText" : "hideText"}
              >
                MY 페이지
              </div>
            </IconWrapper>
          </IconSectionWrapper>
        </StyledSideBar>
        <BackgroundDiv></BackgroundDiv>
      </SideBarWrapper>
    </div>
  );
};

export default SideBar;

const SideBarWrapper = styled.div`
  .extendedBar {
    width: 21%;
    z-index: 3;
  }
  z-index: 0;
`;

const StyledSideBar = styled.div`
  background-color: white;

  width: 7%;
  transition: width 0.5s;
  height: 100vh;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  .menuWrapper {
    width: 7vw;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const MenuImg = styled.img`
  width: 3.5vw;
  flex-shrink: 0;
  cursor: pointer;
  &:hover {
    filter: contrast(115%);
  }
`;

const IconImg = styled.img`
  width: 2vw;
  flex-shrink: 0;
`;

const IconSectionWrapper = styled.div`
  width: 18vw;
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-left: 2.5vw;

  .currentPage {
    color: ${ButtonSecondary};
    img {
      filter: invert(35%) sepia(12%) saturate(1426%) hue-rotate(321deg)
        brightness(117%) contrast(81%);
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  font-size: 1.3vw;
  font-weight: 700;
  color: ${SecondaryText};
  &:hover {
    img {
      filter: invert(35%) sepia(12%) saturate(1426%) hue-rotate(321deg)
        brightness(117%) contrast(81%);
    }
    color: ${ButtonSecondary};
  }

  align-items: center;
  cursor: pointer;

  div {
    margin-left: 2vw;
    width: 10vw;
  }
  .hideText {
    opacity: 0;
    transition: opacity 0.2s linear;
    cursor: default;
    /* visibility: hidden; */
    /* width: 1vw; */
  }

  .showText {
    opacity: 1;
    transition: opacity 0.2s linear 0.2s;
    cursor: pointer;
  }
`;

const BackgroundDiv = styled.div`
  width: 93vw;
  height: 100vh;
  position: fixed;
  margin-left: 7vw;
  background-color: rgba(0, 0, 0, 0);
  z-index: -1;
`;
