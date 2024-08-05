import React, {
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import "../../styles/diary/UploadSection.css";
import { useLocation } from "react-router-dom";

const UploadSection = forwardRef((props, ref) => {
  const location = useLocation();
  const isDiaryQuestion = location.pathname === "/diaryQuestion";
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  useImperativeHandle(ref, () => ({
    reset: () => {
      setImage(null);
      setText("");
    },
  }));

  useEffect(() => {
    document.body.classList.add("white-background");
    return () => {
      document.body.classList.remove("white-background");
    };
  }, []);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="upload-section">
      <div className="upload-box">
        {image ? (
          <img src={image} alt="Preview" className="image-preview" />
        ) : (
          <div
            className={
              isDiaryQuestion
                ? "upload-placeholder-pink"
                : "upload-placeholder-yellow"
            }
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input"
            />
          </div>
        )}
      </div>
      <div className="upload-textbox">
        <textarea
          placeholder="여기에 내용을 입력해주세요"
          value={text}
          onChange={handleTextChange}
        />
      </div>
    </div>
  );
});

export default UploadSection;
