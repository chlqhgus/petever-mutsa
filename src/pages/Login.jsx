import React, { useEffect, useRef, useState } from "react";
import { instance } from "../api/instance";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isPendingRequest, setIsPendingRequest] = useState(false);

  const idRef = useRef();
  const navigate = useNavigate();
  const onChangeField = (e) => {
    const { name, value } = e.target;
    if (name === "id") {
      setId(value);
    } else {
      setPw(value);
    }
  };
  const postLoginData = async () => {
    if (isPendingRequest) return;
    const body = {
      email: id,
      password: pw,
    };
    try {
      setIsPendingRequest(true);
      const res = await instance.post("/auth/login/", body);
      if (res.status === 200 && !isPendingRequest) {
        localStorage.setItem("accessToken", res.data.access);
        localStorage.setItem("user_id", res.data.user.pk);
        navigate(-1);
        console.log(res);
      } else {
        alert("아이디나 비번이 틀렸어요!");
      }
    } catch (err) {
      alert("아이디나 비번이 틀렸어요!");
    } finally {
      setIsPendingRequest(false);
    }
  };
  useEffect(() => {
    idRef.current.focus();
  }, []);
  return (
    <LoginWrapper>
      <div className="id">
        <h1>아이디</h1>
        <input
          placeholder="아이디를 입력해주세요."
          value={id}
          name="id"
          onChange={onChangeField}
          ref={idRef}
        />
      </div>
      <div className="pw">
        <h1>비밀번호</h1>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={pw}
          name="pw"
          onChange={onChangeField}
        />
      </div>
      <button onClick={postLoginData}>로그인</button>
    </LoginWrapper>
  );
}

export default Login;

const LoginWrapper = styled.div`
  margin-left: 80px;
`;
