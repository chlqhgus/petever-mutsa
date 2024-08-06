import "./FuneralLocationDetail.css";
import { useLocation, useNavigate } from "react-router-dom";
import caretleft from "../img/CaretLeft.png";
import Kakaomap from "../components/funeral/Kakaomap";

const FuneralLocationDetail = () => {
  const location = useLocation();
  const state = location.state || {};
  const { img, title, address, phonenum, link } = state;
  const nav = useNavigate();
  const onClickLeft = () => {
    nav("/funeralLocation");
  };

  return (
    <div className="container">
      <div className="location-detail-header">
        <img className="header-img" src={img} alt={title} />
        <div className="location-header-overlay"></div>
        <div className="location-header-content">
          <div className="title">
            <img src={caretleft} className="careleft" onClick={onClickLeft} />
            <h1>{title}</h1>
          </div>
          <p className="adress">{address}</p>
        </div>
      </div>
      <div className="main">
        <table className="info-table">
          <tbody>
            <tr>
              <td className="left">홈페이지</td>
              <td className="right">
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                ) : (
                  "링크 없음"
                )}
              </td>
            </tr>
            <tr>
              <td className="left">대표번호</td>
              <td className="right">{phonenum || "번호 없음"}</td>
            </tr>
            <tr>
              <td className="left">주소</td>
              <td className="right">{address || "주소 없음"}</td>
            </tr>
          </tbody>
        </table>
        <div className="detail2">{title} &nbsp;카카오맵 상세 위치 </div>
        <Kakaomap title={title} address={address}></Kakaomap>
      </div>
    </div>
  );
};

export default FuneralLocationDetail;
