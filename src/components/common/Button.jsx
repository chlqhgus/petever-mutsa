import React from "react";
import styled from "styled-components";

const Button = ({ text, color, onClick }) => {
  return (
    <StyledButton onClick={onClick} color={color}>
      {text}
    </StyledButton>
  );
};

export default Button;

export const StyledButton = styled.button`
  width: 191px;
  height: 51px;
  background: ${(props) => props.color};
  box-shadow: 0 px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 23px;
  font-weight: 700;
  flex-shrink: 0;
`;
