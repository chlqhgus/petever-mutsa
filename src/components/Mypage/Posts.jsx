import React, { useState } from "react";
import "../../styles/mypage/Posts.css"; // 스타일 파일 추가
import PostDetail from "./PostDetail";

const Posts = ({ posts }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div
          key={post.id}
          className="post-box"
          onClick={() => handlePostClick(post)}
        >
          <img
            src={post.image || "https://via.placeholder.com/300"}
            alt={post.title}
            className="post-image"
            onError={(e) => (e.target.src = "https://via.placeholder.com/300")} // 이미지 로드 실패 시 대체 이미지 사용
          />
          <div className="post-content">
            <p
              dangerouslySetInnerHTML={{
                __html: post.content.replace(/\n/g, "<br />"),
              }}
            ></p>

            <div className="date-and-type">
              <p className="post-date">{post.date}</p>
              <button
                className={post.isQuestion ? "post-type-que" : "post-type-let"}
              >
                {post.isQuestion ? "오늘의질문" : "편지쓰기"}
              </button>
            </div>
          </div>
        </div>
      ))}
      {selectedPost && (
        <PostDetail
          showModal={showModal}
          handleClose={handleCloseModal}
          post={selectedPost}
        />
      )}
    </div>
  );
};

export default Posts;
