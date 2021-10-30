import styled from "styled-components";

export const HomeContainer = styled.div``;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  margin: 30px;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  text-align: center;
  background: var(--gray-100);
  margin-bottom: 20px;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-right: 20px;

  svg {
    cursor: pointer;
    width: 28px;
    height: 20px;
    color: var(--gray-300);
  }
`;

export const CartIcon = styled.div`
  position: relative;

  div {
    position: absolute;
    top: -10px;
    left: 16px;
    background: #27ae60;
    border-radius: 7px;
    width: 18px;
    color: #f5f5f5;
  }
`;

export const Input = styled.div`
  max-width: 365px;
  width: 100%;
  height: 65px;
  border: 2px solid #e0e0e0;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    position: absolute;
    top: 5px;
    left: 0px;
    z-index: 1;
  }

  input {
    width: 90%;
    height: 90%;
    font-size: 24px;
    color: var(--gray-100);
    padding: 0 20px;
    outline: none;
    border: none;
  }

  button {
    margin: 0 10px;
    width: 53px;
    height: 40px;
    background-color: var(--green);
    border-radius: 8px;
    display: flex;
    align-items: center;
    border: none;
    justify-content: center;

    svg {
      color: #ffffff;
      font-size: 24px;
    }
  }
`;
