import React from "react";
import "../../styles/mypage/Posts.css"; // 스타일 파일 추가

const Posts = ({ posts }) => {
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div key={post.id} className="post-box">
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
    </div>
  );
};

export default Posts;
