import React from "react";
import styled from "styled-components";
import { SecondaryText, SelectFuneral } from "../../styles/color";
import PostBlock from "../common/PostBlock";
import mockImage from "../../assets/icon/mockImage.jpg";

const mockData = [
  {
    id: 1,
    title: "Example Title",
    main_image_url: "../../assets/icon/mockImage.jpg",
    message: "This is a memorial message.",
    birth_date: "1980-01-01",
    death_date: "2020-01-01",
    created_at: "2024-01-01T12:00:00Z",
  },
  {
    id: 2,
    title: "Another Title",
    main_image_url: "../../assets/icon/mockImage.jpg",
    message: "Another memorial message.",
    birth_date: "1975-05-20",
    death_date: "2019-11-15",
    created_at: "2024-01-02T15:30:00Z",
  },
];

const OtherMemorialSection = () => {
  console.log(mockData[1].main_image_url);
  return (
    <SectionWrapper>
      <MainText>
        <span>다른 유저들의 추모공간</span>도
        <br />
        방문해보세요
      </MainText>
      <SubText>
        다양한 이야기와 기억들을 나누며, 서로의 슬픔을 이해하고 위로받는 시간을
        가지실 수 있습니다
        <br /> 함께 추모하며, 소중한 반려동물들을 기억하는 따뜻한 커뮤니티에
        참여해보세요.
      </SubText>
      <div>
        <PostBlock textMain={mockData[0].title} img={mockImage}></PostBlock>
      </div>
    </SectionWrapper>
  );
};

export default OtherMemorialSection;

const SectionWrapper = styled.div`
  margin-left: 7%;
  padding: 88px;
  display: flex;
  flex-direction: column;
  gap: 27px;
  line-height: normal;
`;

export const MainText = styled.div`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -1px;
  span {
    color: ${SelectFuneral};
  }
`;

export const SubText = styled.div`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: ${SecondaryText};
`;
