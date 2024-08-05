import React, { useState, useEffect, useRef } from "react";
import Tab from "../components/Mypage/TypeTab";
import Posts from "../components/Mypage/Posts";

import "../styles/mypage/Background.css"; //배경화면(그레이컬러) 임포트

const Mypage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const observerRef = useRef(null);

  useEffect(() => {
    // 초기 로드 시 더미 데이터를 사용
    loadPosts(activeTab, 1);
  }, [activeTab]);

  const dummyData = {
    all: [
      {
        id: 1,
        title: "Post 1",
        content: `보고싶다 우리 제니 잘 지내고 있지?
  언니는 행복한 하루를 보냈어
  제니도 좋은 하루가 됐길 바래`,
        image: "https://via.placeholder.com/300", // 실제 이미지 URL로 교체 필요
        date: "2024년 7월 19일",
        type: "오늘의질문",
      },
      {
        id: 2,
        title: "Post 2",
        content: "This is the second post.",
        image: "https://via.placeholder.com/300",
        date: "2024년 7월 19일",
        type: "오늘의질문",
      },
      {
        id: 3,
        title: "Post 3",
        content: "This is the third post.",
        image: "https://via.placeholder.com/300",
        date: "2024년 7월 19일",
        type: "오늘의질문",
      },
    ],
    today: [
      {
        id: 4,
        title: "Today's Post 1",
        content: `This is today's first post.
  This is a new line.`,
        image: "https://via.placeholder.com/300",
        date: "2024년 7월 19일",
        type: "오늘의질문",
      },
      {
        id: 5,
        title: "Today's Post 2",
        content: `This is today's second post.
  Another new line.`,
        image: "https://via.placeholder.com/300",
        date: "2024년 7월 19일",
        type: "오늘의질문",
      },
    ],
    letters: [
      {
        id: 6,
        title: "Letter 1",
        content: `This is the first letter.
  This is a new line.`,
        image: "https://via.placeholder.com/300",
        date: "2024년 7월 19일",
        type: "편지쓰기",
      },
      {
        id: 7,
        title: "Letter 2",
        content: `This is the second letter.
  Another new line.`,
        image: "https://via.placeholder.com/300",
        date: "2024년 7월 19일",
        type: "편지쓰기",
      },
    ],
  };

  const loadPosts = (tab, page) => {
    // 더미 데이터를 사용하여 포스트를 로드
    const data = (dummyData[tab] || []).map((post) => ({
      ...post,
      isQuestion: post.type === "오늘의질문",
    }));
    setPosts((prevPosts) => (page === 1 ? data : [...prevPosts, ...data]));
  };

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prevPage) => prevPage + 1);
      loadPosts(activeTab, page + 1);
    }
  };

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    observerRef.current = new IntersectionObserver(handleObserver, option);
    if (observerRef.current)
      observerRef.current.observe(document.querySelector("#scrollTarget"));
  }, []);

  return (
    <div className="mypage-section">
      <div className="mypage-typecheck-button">
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <Posts posts={posts} />
      <div id="scrollTarget"></div>
    </div>
  );
};

export default Mypage;
