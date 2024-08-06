import React, { useState } from "react";
import styled from "styled-components";
import { BoxFuneral, SelectFuneral } from "../../styles/color";
import pawBrown from "../../assets/icon/pawBrown.png";
import iconX from "../../assets/icon/iconX.png";

const getFormattedDate = (date) => {
  return `${date.getFullYear()}. ${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}. ${date.getDate().toString().padStart(2, "0")}.`;
};

const FootprintItem = ({ content, username, date }) => {
  const [detailedItem, setDetailedItem] = useState(false);
  return (
    <Itemwrapper>
      <ItemBox onClick={() => setDetailedItem(true)}>
        <div className="footprintContent">
          {content?.length <= 50 ? content : content?.slice(0, 50) + "..."}
        </div>
        <div className="footprintUser">{username}</div>
      </ItemBox>
      <img src={pawBrown}></img>
      {detailedItem && (
        <>
          <DetailSection>
            <section></section>
            <div className="background"></div>
          </DetailSection>
          <DetailSection>
            <section></section>
            <ImgWrapper>
              <div className="detailBox"></div>
              <div className="detailContent">{content}</div>
              <div className="detailUser">
                {getFormattedDate(new Date(date))}
                <br /> by. {username}
              </div>
              <img
                className="iconX"
                src={iconX}
                onClick={() => {
                  setDetailedItem(false);
                }}
              ></img>
            </ImgWrapper>
          </DetailSection>
        </>
      )}
    </Itemwrapper>
  );
};

export default FootprintItem;

const Itemwrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  > img {
    position: absolute;
    width: 60px;
    top: -25px;
    right: -25px;
    opacity: 0.7;
  }
`;

const ItemBox = styled.div`
  width: 200px;
  height: 200px;
  padding: 25px 25px 10px 25px;
  border-radius: 30px 30px 30px 0px;
  background: ${BoxFuneral};
  box-shadow: 5px 4px 7.5px 0px rgba(0, 0, 0, 0.25);
  word-break: keep-all;
  color: ${SelectFuneral};
  font-family: "NanumPen";
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .footprintContent {
    font-size: 24px;
    height: 100%;
  }
  .footprintUser {
    text-align: right;
    font-size: 20px;
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
  font-size: 22px;
  font-family: "NanumPen";
  .detailBox {
    width: 480px;
    height: 480px;
    border-radius: 60px 60px 60px 0px;
    background: ${BoxFuneral};
    box-shadow: 5px 4px 7.5px 0px rgba(0, 0, 0, 0.25);
    word-break: keep-all;
    color: ${SelectFuneral};
    font-family: "NanumPen";
    font-weight: 400;
    line-height: normal;
  }
  .detailContent {
    width: 480px;
    height: 480px;
    padding: 60px 40px 80px 40px;
    font-size: 36px;
    position: absolute;
    word-break: keep-all;
  }
  .detailUser {
    position: absolute;
    width: 480px;
    height: 480px;
    padding: 400px 60px 80px 60px;
    text-align: right;
    font-size: 30px;
  }
  .iconX {
    position: absolute;
    width: 60px;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
`;
