import React from "react";
import { useNavigate } from "react-router-dom";

const MemorialDetail = () => {
  const nav = useNavigate();
  const onClick = () => {
    nav("/MemorialMain");
  };
  return <button onClick={onClick}>liknk to funeral main</button>;
};

export default MemorialDetail;
