import React from "react";
import Button from "../common/Button";
import {
  SelectFuneral,
  BoxFuneral,
  SecondaryText,
  Unselect,
} from "../../styles/color";
import imageFrame from "../../assets/icon/imageFrame.png";
import styled from "styled-components";
import pawBrown from "../../assets/icon/pawBrown.png";

const getFormattedDate = (date) => {
  return `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getDay().toString().padStart(2, "0")}`;
};

const MainSection = ({ data, onChangeData, inputRef, onSubmit }) => {
  return (
    <SectionWrapper>
      <FrameWrapper>
        <img src={imageFrame}></img>
        <FrameContent>
          <img src={data.main_image}></img>
          <div className="petName">{data.pet_name}</div>
          <div className="lifeTime">{`${getFormattedDate(
            new Date(data.birth_date)
          )} ~ ${getFormattedDate(new Date(data.death_date))}`}</div>
        </FrameContent>
      </FrameWrapper>
      <TextWrapper>
        <div className="mainText">
          사랑하는 코코, <br />
          그와 함께한 순간들을 기억하며.
        </div>
        <div className="subText">
          “ 코코야, 우리랑 함께해줘서 정말 고마웠어. <br />
          너랑 있는 모든 시간이 행복했다는 걸 잊지 말아주라. 사랑해🤍 ”
        </div>

        <InputWrapper>
          <div className="inputText">
            민우님 혹은 민우님의 반려동물에게 남기고 싶은 말이 있으신가요?{" "}
            <br />
            유민우님의 소중한 가족이었던 코코와의 마지막 여정에 발자국을
            남겨주세요.
          </div>
          <InputContent>
            <textarea
              id="content"
              onChange={onChangeData}
              placeholder="원하시는 문구를 작성해주세요"
              ref={(ref) => (inputRef.current[0] = ref)}
            ></textarea>
          </InputContent>
          <SubmitWrapper>
            <input
              id="username"
              onChange={onChangeData}
              placeholder="작성자 이름(닉네임)을 작성해주세요"
              ref={(ref) => (inputRef.current[1] = ref)}
            ></input>
            <div>
              <Button
                text={"발자국 남기기"}
                color={SelectFuneral}
                onClick={onSubmit}
              ></Button>
              <img src={pawBrown}></img>
            </div>
          </SubmitWrapper>
        </InputWrapper>
      </TextWrapper>
    </SectionWrapper>
  );
};

export default MainSection;

const SectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const FrameWrapper = styled.div`
  width: 390px;
  position: relative;
  > img {
    width: 360px;
  }
`;

const FrameContent = styled.div`
  position: absolute;
  top: 70px;
  left: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  font-family: NanumPen;
  > img {
    width: 240px;
    height: 240px;
    margin-bottom: 13px;
    object-fit: cover;
  }
  .petName {
    font-size: 60px;
    font-weight: 400;
    letter-spacing: 5px;
    line-height: 0.7;
  }
  .lifeTime {
    font-size: 22px;
    font-weight: 400;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .mainText {
    font-size: 36px;
    font-weight: 800;
    line-height: 140%;
    letter-spacing: -1px;
  }
  .subText {
    font-size: 18px;
    font-weight: 700;
    line-height: 140%; /* 32.2px */
    letter-spacing: -1.15px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  .inputText {
    font-size: 12px;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -1px;
    color: ${SecondaryText};
  }
  input,
  textarea {
    border: none;
    border-radius: 10px;
    background: ${BoxFuneral};
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.2) inset,
      4px 4px 8px 0px rgba(0, 0, 0, 0.2);
    font-family: NanumMyeongjo;
    font-size: 15px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;
    resize: none;
    &::placeholder {
      color: ${Unselect};
    }
  }
`;

const InputContent = styled.div`
  margin-top: 10px;
  textarea {
    width: 100%;
    height: 120px;
    padding: 20px;
  }
`;

const SubmitWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  input {
    flex: 1;
    padding: 16px;
  }
  div {
    position: relative;
  }
  img {
    position: absolute;
    width: 25px;
    top: 12px;
    left: 142px;
    opacity: 0.4;
  }
  button {
    font-family: NanumMyeongjo;
    font-size: 18px;
    text-align: left;
    padding-left: 30px;
  }
`;
