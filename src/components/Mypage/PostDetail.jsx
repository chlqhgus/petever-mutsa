import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/mypage/PostDetail.css"; // 모달 스타일 파일 추가
import { instance } from "../../api/instance";

const PostDetail = ({ showModal, handleClose, post }) => {
  const [question, setQuestion] = useState("");

  useEffect(() => {
    if (showModal && post && post.date) {
      const formattedDate = formatDate(post.date);
      fetchQuestion(formattedDate);
    }
  }, [showModal, post]);

  const formatDate = (date) => {
    const parsedDate = new Date(date);
    const year = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
    const day = String(parsedDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const fetchQuestion = async (date) => {
    const res = await instance.get(`/posts/question/${date}`);
    try {
      const response = await axios.get(`/posts/question/${date}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(`/posts/question/${date}`);
      console.log(res.data[0].content);
      console.log(response.data[0].content);
      if (response.status === 200 && response.data.length > 0) {
        setQuestion(res.data[0].content);
        console.log("Question은:" + question);
      } else {
        setQuestion("질문을 불러오는 데 실패했습니다.");
      }
    } catch (error) {
      console.error("Error fetching question:", error);
      setQuestion("질문을 불러오는 데 실패했습니다.");
    }
  };

  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <div className="modal-img-text">
          <img
            src={"http://3.39.121.123:8001" + post.image}
            alt={post.title}
            className="modal-image"
          />
          <div className="modal-textarea">
            <div className="modal-text">
              <h2>{question}</h2>
              <h1>{post.content}</h1>
              <p className="modal-date">{post.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
