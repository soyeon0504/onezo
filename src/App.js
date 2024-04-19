import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import { Wrap } from "./styles/basic";

const LazyMyPage = lazy(() => import("./pages/my/MyPage"));
const LazyCartPage = lazy(() => import("./pages/CartPage"));

const App = () => {
  return (
    // <Wrap maxw={1980}>
      <Routes>
        {/* <Route path="*" element={<h1>반가워요</h1>}></Route> */}
        <Route
          path="/my"
          element={
            <Suspense>
              <LazyMyPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Suspense>
              <LazyCartPage />
            </Suspense>
          }
        ></Route>
      </Routes>
    // </Wrap>
  );
};

export default App;