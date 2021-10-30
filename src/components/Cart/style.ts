import styled from "styled-components";

export const MainContainer = styled.div`
  background: #ffffff;
  padding: 20px;
`;

export const Bag = styled.div`
  background: #ffffff;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 158px;

  h3 {
    margin-bottom: 10px;
  }

  p {
    color: var(--gray-300);
  }
`;

export const Container = styled.div`
  height: 259px;
  min-width: 320px;
  max-width: 500px;
  width: 100%;
  left: 0px;
  top: 54px;
  padding: 20px;
  position: absolute;
  top: 34%;
  transform: translate(-50%, -50%);
  left: 50%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  width: 100%;
  left: 0px;
  top: 0px;
  padding: 13px, 22px, 13px, 22px;
  background: #27ae60;

  h3 {
    margin-left: 10px;
    color: var(--gray-0);
  }

  svg {
    margin-right: 10px;
    color: var(--gray-0);
    font-size: 20px;
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-weight: 600;
      font-size: 14px;
    }

    p:nth-child(2) {
      color: var(--gray-300);
    }
  }
`;
