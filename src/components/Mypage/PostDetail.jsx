import React from "react";
import "../../styles/mypage/PostDetail.css"; // 모달 스타일 파일 추가

const PostDetail = ({ showModal, handleClose, post }) => {
  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <div className="modal-img-text">
          <img
            src="src/assets/Images/petImage/3472382475093041960_20230415100936572.JPG"
            //src={post.image || "https://via.placeholder.com/300"}
            alt={post.title}
            className="modal-image"
          />
          <div className="modal-textarea">
            <div className="modal-text">
              <h2>{post.question}</h2>
              <p>{post.content}</p>
              <p2 className="modal-date">{post.date}</p2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
