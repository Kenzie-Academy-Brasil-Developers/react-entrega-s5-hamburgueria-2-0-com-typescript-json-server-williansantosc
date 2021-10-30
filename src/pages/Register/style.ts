import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 40px;

  #logo {
    display: none;
  }

  @media (min-width: 1024px) {
    #logo {
      display: flex;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  border: 1px solid #828282;
  border-radius: 5px;
  padding: 20px;

  div:nth-child(1) {
    justify-content: center;
    background: #27ae601a;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 8px;

    svg {
      font-size: 25px;
      color: var(--green);
    }
  }

  div:nth-child(2) {
    width: 300px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  h3 {
    margin-top: 10px;
    color: var(--red);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    color: var(--gray-300);
  }

  .MuiOutlinedInput-root {
    border-radius: 8px;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #168821;
  }

  .MuiFormLabel-root.Mui-focused {
    color: #999999;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  min-width: 320px;
  max-width: 500px;
  margin-bottom: 10px;
`;
