import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const nav = useNavigate();

  const onClickSignup = () => {
    nav("/signup")
  };
  return (
    <div className="Login">
      <h1>
        <span className="orange">PET:</span>
        <span className="yellow">EVER</span>
      </h1>
      <input placeholder="이메일을 입력하세요"></input>
      <input placeholder="비밀번호를 입력하세요"></input>
      <button className="E-login">이메일로 로그인하기</button>
      <hr class="one"></hr>
      <p>
        PETEVER가 처음이시라면{" "}
        <button onClick={onClickSignup} className="su">
          회원가입
        </button>
      </p>
    </div>
  );
};

export default Login;
