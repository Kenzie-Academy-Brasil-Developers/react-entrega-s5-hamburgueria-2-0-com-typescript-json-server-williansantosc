import React from "react";
import Routes from "./routes";
import GlobalStyles from "./styles/global";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <GlobalStyles />
      <Toaster />
      <Routes />
    </>
  );
}

export default App;
