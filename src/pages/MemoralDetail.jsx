import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const MemorialDetail = () => {
  const params = useParams();

  return <div>memorial detail #{`${params.id}`}</div>;
};

export default MemorialDetail;
