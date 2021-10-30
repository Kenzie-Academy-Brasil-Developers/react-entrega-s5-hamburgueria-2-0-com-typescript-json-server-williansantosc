import styled from "styled-components";

export const CardContainer = styled.div`
  border-bottom: 2px solid #e0e0e0;
  display: flex;
  justify-content: space-between;

  svg:nth-child(2) {
    margin: 20px;
    cursor: pointer;
    color: #e0e0e0;
  }
`;

export const Image = styled.div`
  height: 80px;
  width: 82.25861358642578px;
  left: 23.8447265625px;
  top: 20px;
  border-radius: 5px;
  background: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const QuantityBar = styled.div`
  height: 34px;
  width: 106.55619812011719px;
  left: 116.193359375px;
  top: 66px;
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;

  div:nth-child(2) {
    background: #ffffff;
    flex: 1;
  }

  div {
    height: 34px;
    width: 30.44462776184082px;
    border-radius: 0px;
    background: #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      cursor: pointer;
      color: var(--red);
    }
  }
`;
