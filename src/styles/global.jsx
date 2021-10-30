import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        list-style-type: none;
        font-family: 'Inter', sans-serif;
    }

    :root{
      --green: #27AE60;
      --green-50: #93D7AF;
      --red: #EB5757;
      --gray-600: #333333;
      --gray-300: #828282;
      --gray-100: #E0E0E0;
      --gray-0: #F5F5F5;
    }

    body{
       background: var(--gray-0)
    }

   h1{
     font-size: 26px;
     font-weight: bold
   }

   h2{
     font-size: 22px;
     font-weight: bold
   }

   h3{
     font-size: 18px;
     font-weight: bold
   }

   p{
     font-size: 12px;
      font-weight: 400;
   }

    button{
        cursor: pointer;
       }

    ::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }
    ::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--gray-300);
      border: 0px none #ffffff;
      border-radius: 50px;
    }


    ::-webkit-scrollbar-track {
      background: transparent;
      border: 0px none #ffffff;
      border-radius: 50px;
    }


    ::-webkit-scrollbar-corner {
      background: transparent;
    }
 
`;
