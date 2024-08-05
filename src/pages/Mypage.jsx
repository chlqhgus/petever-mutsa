import React, { useState, useEffect } from "react";
import Tab from "../components/Mypage/TypeTab";
import Posts from "../components/Mypage/Posts";
import { instance } from "../api/instance";

import "../styles/mypage/Background.css"; // 배경화면(그레이컬러) 임포트

const Mypage = () => {
  const [activeTab, setActiveTab] = useState("all"); //현재 활성화된 탭
  const [posts, setPosts] = useState([]); // 해당 탭의 Data 가져오기(API)

  useEffect(() => {
    // activeTab이 변경될 때마다 loadPosts 함수를 호출하여 데이터를 불러옴
    loadPosts(activeTab);
  }, [activeTab]);

  const loadPosts = async (tab) => {
    //해당 tab에 맞는 데이터를 불러오는 구조
    //const token = localStorage.getItem("accessToken");
    const token = //로그인 토큰. 실제로는 localStorage에 있는 token을 가져옴
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIyODgwMDQ5LCJpYXQiOjE3MjI4NzgyNDksImp0aSI6Ijk5NTc1NjE0MTc5ODRhMzBiNGZkMTZhZjNhYWVkZTkxIiwidXNlcl9pZCI6M30.6JD-lJqMHRgNcDQWxAlzN1pw0kP7yBwCQn8id1uFwB4";
    if (!token) {
      console.error("Access token is missing");
      return;
    }

    let endpoint; //tab에 따라서 endpoint 설정
    switch (tab) {
      case "today":
        endpoint = "/posts/answer/";
        break;
      case "letters":
        endpoint = "/posts/letter/";
        break;
      case "all":
      default:
        endpoint = "/posts/allposts/";
        break;
    }

    try {
      const response = await instance.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const data = response.data.map((post) => ({
          ...post,
          isQuestion: post.type === "answer",
          date: new Date(post.created_at).toLocaleDateString("ko-KR"),
        }));
        setPosts(data); // 이전 데이터를 덮어쓰기
      } else {
        console.error("Failed to load posts:", response.statusText);
      }
    } catch (error) {
      console.error("Error loading posts:", error);
    }
  };

  return (
    <div className="mypage-section">
      <div className="mypage-typecheck-button">
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <Posts posts={posts} />
    </div>
  );
};

export default Mypage;
