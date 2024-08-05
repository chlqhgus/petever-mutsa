import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainSection from "../components/MemorialDetail/MainSection";
import FootprintSection from "../components/MemorialDetail/FootprintSection";
import GallerySection from "../components/MemorialDetail/GallerySection";
import Button from "../components/common/Button";
import styled from "styled-components";
import { Unselect } from "../styles/color";

const mockData = {
  id: 1,
  user_name: "admin",
  pet_name: "코코",
  birth_date: "2011-09-09",
  death_date: "2022-08-01",
  memorial_name: "보고싶은 우리 코코",
  memorial_tagline: "사랑하는 코코, 그와 함께한 순간들을 기억하며",
  main_image: "http://3.39.121.123:8001/media/memorials/main_images/sample.png",
  message:
    "코코야, 우리랑 함께해줘서 정말 고마웠어. 너랑 있는 모든 시간이 행복했다는 걸 잊지 말아주라. 사랑해♥",
  gallery_images: [
    {
      id: 1,
      image:
        "http://3.39.121.123:8001/media/memorials/gallery_images/sample.png",
      uploaded_at: "2024-08-04T11:00:50.067619Z",
    },
    {
      id: 2,
      image:
        "http://3.39.121.123:8001/media/memorials/gallery_images/sample_C5XV3t0.png",
      uploaded_at: "2024-08-04T11:00:50.078836Z",
    },
  ],
  footprints: [
    {
      id: 1,
      content: "코코야 거기선 꼭 행복해야해...",
      username: "마이누",
      created_at: "2024-08-04T11:01:26.123129Z",
    },
    {
      id: 2,
      content: "코코야 거기선 꼭 행복해야해...",
      username: "정주",
      created_at: "2024-08-04T11:01:33.701694Z",
    },
  ],
  created_at: "2024-08-04T11:00:50.061599Z",
};

const MemorialDetail = () => {
  const nav = useNavigate();
  const [data, setData] = useState(mockData);
  return (
    <PageWrapper>
      {/* <Button
        text={"< 돌아가기"}
        color={Unselect}
        onClick={() => {
          nav("/memorialMain");
        }}
      ></Button> */}
      <SectionWrapper>
        <MainSection data={data}></MainSection>
        <FootprintSection></FootprintSection>
        <GallerySection></GallerySection>
      </SectionWrapper>
    </PageWrapper>
  );
};

export default MemorialDetail;

const PageWrapper = styled.div`
  font-family: NanumMyeongjo;
  margin-left: 80px;
  background-color: #f6f5f4;
  /* position: relative;
  > button {
    font-family: NanumMyeongjo;
    margin: 10px 0px 0px 60px;
    position: absolute;
  } */
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 60px;
`;
