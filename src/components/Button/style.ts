import styled from "styled-components";

interface ButtonProps {
  graySchema: boolean;
  medium: boolean;
}

export const Container = styled.button<ButtonProps>`
  background: ${(props) => (props.graySchema ? "#E0E0E0" : "#27AE60")};
  height: ${(props) => (props.medium ? "40px" : "60px")};
  width: 130px;
  left: 20px;
  top: 20px;
  border-radius: 8px;
  border: none;
  padding: 0px, 20px, 0px, 20px;
  transition: 0.5s;
  color: ${(props) => (props.graySchema ? "#333333" : "#F5F5F5")};
  font-weight: bold;
  width: 100%;

  &:hover {
    background: ${(props) => (props.graySchema ? "#828282" : "#93D7AF")};
  }
`;
