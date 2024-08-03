import "./Signup.css";

const Signup = () => {
  return (
    <div className="Signup">
      <h1>회원가입</h1>
      <p>이름</p>
      <input placeholder="이름을 입력해주세요"></input>
      <p>비밀번호</p>
      <input placeholder="비밀번호를 입력해주세요"></input>
      <p>비밀번호 확인</p>
      <input placeholder="비밀번호를 입력해주세요"></input>
    </div>
  );
};

export default Signup;
