import styled from "styled-components";

export const ProductCard = styled.div`
  height: 338px;
  width: 300px;
  left: 433px;
  top: 2469px;
  border-radius: 5px;
  border: 2px solid #e0e0e0;
  transition: 0.5s;

  &:hover {
    border-color: #27ae60;

    button {
      background: #27ae60;
    }
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;

  background: var(--gray-100);

  img {
    width: 200px;
    height: 150px;
  }
`;

export const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 2.8;
  margin-left: 10px;

  span {
    font-weight: 600;
    font-size: 14px;
    color: #27ae60;
  }

  button {
    height: 40px;
    width: 106px;
    background: #bdbdbd;
  }
`;
