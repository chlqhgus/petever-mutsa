import React from "react";
import InputTextSection from "./InputTextSection";

const InputSectionThird = () => {
  return (
    <div>
      <InputTextSection
        text1={"03"}
        text2={"추모공간에 들어갈 내용을 입력해주세요"}
        text3={
          "소중한 우리 아이에게 전하고 싶은 말이나, 남기고 싶은 사진이 있으신가요?"
        }
      ></InputTextSection>
    </div>
  );
};

export default InputSectionThird;
