import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Wrap } from "./styles/basic";

const App = () => {
  return (
    // <Wrap maxw={1980}>
      <Routes>
        <Route path="*" element={<h1>반가워요</h1>}></Route>
      </Routes>
    // </Wrap>
  );
};

export default App;