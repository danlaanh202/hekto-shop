import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PrimaryButtonStyles = styled.button`
  background: ${(props) => props.theme.pinkSecondary};
  border-radius: 4px;
  border: none;

  font-family: "Josefin Sans";
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.02em;
  width: 160px;
  padding: 16px 0;
  color: #ffffff;
  max-width: 165px;
  cursor: pointer;
`;
const PrimaryButton = ({ children, className, to, onClick = () => {} }) => {
  const navigate = useNavigate();
  return (
    <PrimaryButtonStyles
      onClick={() => (to ? navigate(to) : onClick())}
      className={className}
    >
      {children}
    </PrimaryButtonStyles>
  );
};

export default PrimaryButton;
