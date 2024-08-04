import React from "react";
import styled from "styled-components";
import { SecondaryText, SelectFuneral } from "../../styles/color";
import PostBlock from "../common/PostBlock";
import mockImage from "../../assets/icon/mockImage.jpg";
import { useNavigate } from "react-router-dom";

const mockData = [
  {
    id: 8,
    user_id: 1,
    user_name: "John Doe",
    pet_name: "버디",
    main_image:
      "http://127.0.0.1:8000/media/memorials/main_images/final_ah55aED.jpg",
    birth_date: "2015-06-01",
    death_date: "2022-08-01",
    memorial_tagline: "추모관 한줄",
  },
  {
    id: 9,
    user_id: 1,
    user_name: "John Doe",
    pet_name: "버디",
    main_image:
      "http://127.0.0.1:8000/media/memorials/main_images/final_ZTFL8AJ.jpg",
    birth_date: "2015-06-01",
    death_date: "2022-08-01",
    memorial_tagline: "추모관 한줄",
  },
  {
    id: 10,
    user_id: 1,
    user_name: "John Doe",
    pet_name: "버디",
    main_image:
      "http://127.0.0.1:8000/media/memorials/main_images/final_7ebaslq.jpg",
    birth_date: "2015-06-01",
    death_date: "2022-08-01",
    memorial_tagline: "추모관 한줄",
  },
  {
    id: 11,
    user_id: 1,
    user_name: "John Doe",
    pet_name: "버디",
    main_image:
      "http://127.0.0.1:8000/media/memorials/main_images/final_7ebaslq.jpg",
    birth_date: "2015-06-01",
    death_date: "2022-08-01",
    memorial_tagline: "추모관 한줄",
  },
  {
    id: 12,
    user_id: 1,
    user_name: "John Doe",
    pet_name: "버디",
    main_image:
      "http://127.0.0.1:8000/media/memorials/main_images/final_7ebaslq.jpg",
    birth_date: "2015-06-01",
    death_date: "2022-08-01",
    memorial_tagline: "추모관 한줄",
  },
];

const OtherMemorialSection = () => {
  const nav = useNavigate();
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
      <PostWrapper>
        {mockData.map((item) => {
          return (
            <PostBlock
              key={item.id}
              textMain={item.memorial_tagline}
              textSub={item.user_name}
              img={mockImage}
              onClick={() => {
                nav(`/memorialDetail/${item.id}`);
              }}
            ></PostBlock>
          );
        })}
      </PostWrapper>
    </SectionWrapper>
  );
};

export default OtherMemorialSection;

export const SectionWrapper = styled.div`
  margin-left: 7%;
  padding: 88px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  line-height: normal;
`;

export const MainText = styled.div`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: -1px;
  span {
    color: ${SelectFuneral};
  }
`;

export const SubText = styled.div`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.5px;
  color: ${SecondaryText};
`;

export const PostWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 2%;
  width: 100%;
  flex-wrap: wrap;
  > div {
    width: 23%;
    height: 210px;
    margin-bottom: 2%;
  }
`;
