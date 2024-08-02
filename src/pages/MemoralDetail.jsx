import React from "react";
import { useNavigate } from "react-router-dom";

const FuneralDetail = () => {
  const nav=useNavigate();
  const onClick=()=>{
    nav("/funeralMain");
  }
  return <button onClick={onClick}>liknk to funeral main</button>;
  
};

export default FuneralDetail;
