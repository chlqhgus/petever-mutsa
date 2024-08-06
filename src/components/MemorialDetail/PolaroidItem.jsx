import React, { useState } from "react";
import polaroid from "../../assets/icon/polaroid.png";
import tape from "../../assets/icon/tape.png";
import styled from "styled-components";
import iconX from "../../assets/icon/iconX.png";

const getFormattedDate = (date) => {
  return `\` ${date.getFullYear().toString().slice(2)} ${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")} ${date.getDate().toString().padStart(2, "0")}`;
};

const PolaroidItem = ({ image, date }) => {
  const [detailedImg, setDetailedImg] = useState(false);
  return (
    <ItemWrapper>
      <img
        onClick={() => setDetailedImg(true)}
        className="polaroidImg"
        src={polaroid}
      ></img>
      <img className="polaroidTapeImg" src={tape}></img>
      <img
        onClick={() => setDetailedImg(true)}
        className="polaroidContentImg"
        src={image}
      ></img>
      {detailedImg && (
        <>
          <DetailSection>
            <section></section>
            <div className="background"></div>
          </DetailSection>
          <DetailSection>
            <section></section>
            <ImgWrapper>
              <img className="detailImg" src={polaroid}></img>
              <img className="detailContentImg" src={image}></img>
              <div className="backgroundText">
                {getFormattedDate(new Date(date))}
              </div>
              <div>{getFormattedDate(new Date(date))}</div>
              <img
                className="iconX"
                src={iconX}
                onClick={() => {
                  setDetailedImg(false);
                }}
              ></img>
            </ImgWrapper>
          </DetailSection>
        </>
      )}
    </ItemWrapper>
  );
};

export default PolaroidItem;

const ItemWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 228px;
  margin-bottom: 80px;
  img {
    position: absolute;
    width: 200px;
  }
  .polaroidImg {
    cursor: pointer;
  }
  .polaroidTapeImg {
    position: absolute;
    width: 170px;
    height: 62px;
    top: -35px;
    left: 15px;
    z-index: 1;
  }
  .polaroidContentImg {
    position: absolute;
    width: 180px;
    height: 180px;
    top: 10px;
    left: 10px;
    object-fit: cover;
    cursor: pointer;
  }
`;

const DetailSection = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  > section {
    width: 80px;
  }
  .background {
    flex: 1;
    opacity: 50%;
    background-color: black;
  }
`;

const ImgWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .detailImg {
    width: 480px;
  }
  .detailContentImg {
    width: 440px;
    margin-bottom: 70px;
  }
  > div {
    font-family: "DS-DIGII";
    text-align: right;
    font-size: 40px;
    font-weight: 500;
    color: #ff8605;
    width: 480px;
    position: absolute;
    margin-top: 300px;
    margin-right: 70px;
    opacity: 80%;
  }
  .backgroundText {
    filter: blur(4px);
  }
  .iconX {
    position: absolute;
    width: 60px;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;
