import React, { useEffect, useState } from "react";
import FootprintItem from "./FootprintItem";
import styled from "styled-components";
import pawBrown from "../../assets/icon/pawBrown.png";
import gradationLeft from "../../assets/icon/gradationLeft.png";
import gradationRight from "../../assets/icon/gradationRight.png";
import iconLeft from "../../assets/icon/iconLeft.png";
import iconRight from "../../assets/icon/iconRight.png";
import "../../styles/FootprintSection.css";
const FootprintSection = ({ data }) => {
  const [position, setPosition] = useState(30);
  const [page, setPage] = useState(1);
  const movePosition = (direction) => {
    const totalPage = Math.ceil(data.footprints.length / 4);
    console.log(totalPage);
    if (direction === "left") {
      if (page > 1) {
        setPosition((prevPosition) => prevPosition + 890);
        setPage((prevPage) => prevPage - 1);
      }
    }
    if (direction === "right") {
      if (page < totalPage) {
        setPosition((prevPosition) => prevPosition - 890);
        setPage((prevPage) => prevPage + 1);
      }
    }
  };
  return (
    <SectionWrapper>
      <div className="titleText">우리가 남긴 발자국들</div>
      <img className="titlePaw" src={pawBrown}></img>
      <FootprintWrapper position={position} className="footprintSlider">
        {data.footprints?.map((item) => {
          return (
            <FootprintItem
              className="footprintItem"
              key={item.id}
              content={item.content}
              username={item.username}
              date={item.created_at}
            ></FootprintItem>
          );
        })}
      </FootprintWrapper>
      <TempDiv></TempDiv>
      <div className="leftSide">
        <img className="gradationImg" src={gradationLeft}></img>
        <img
          className="arrowImg"
          src={iconLeft}
          onClick={() => {
            movePosition("left");
          }}
        ></img>
      </div>
      <div className="rightSide">
        <img className="gradationImg" src={gradationRight}></img>
        <img
          className="arrowImg"
          src={iconRight}
          onClick={() => {
            movePosition("right");
          }}
        ></img>
      </div>
    </SectionWrapper>
  );
};

export default FootprintSection;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  position: relative;

  .titleText {
    text-align: center;
    font-size: 36px;
    font-weight: 800;
    line-height: normal;
  }
  .titlePaw {
    position: absolute;
    width: 100px;
    top: -15%;
    left: 65%;
    opacity: 0.1;
  }
  .leftSide,
  .rightSide {
    top: 110px;
    width: 175px;
    height: 250px;
    position: absolute;
  }
  .leftSide {
    left: 0%;
    margin-left: -60px;
    > .arrowImg {
      left: 10%;
    }
  }

  .rightSide {
    right: 0%;
    margin-right: -60px;
    > .arrowImg {
      right: 10%;
    }
    /* > .gradationImg {
      right: 0%;
    } */
  }
  .gradationImg {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .arrowImg {
    width: 30%;
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    cursor: pointer;
  }
`;

const FootprintWrapper = styled.div`
  display: flex;
  position: absolute;
  gap: 30px;
  left: ${(props) => props.position}px;
  transition: left 0.8s ease;
  top: 135px;
`;

const TempDiv = styled.div`
  height: 200px;
`;
