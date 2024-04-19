// 라우터를 별도 파일 관리하겠다.
// 패스가 주 경로 일때
// 패스가 중첩일때는 또 별도로 파일 생성
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/loading/Loading";
import { Suspense, lazy } from "react";
import myRouter from "./myRouter";
import shopRouter from "./shopRouter";
// import todoRouter from "./todoRouter";
// import productRouter from "./productRouter";
// import memberRouter from "./memberRouter";

// 메인패스 컴포넌트
const LazyMainPage = lazy(() => import("../pages/main/MainPage"));
const LazyMenuPage = lazy(() => import("../pages/menu/MenuPage"));
const LazyMyPage = lazy(() => import("../pages/my/MyPage"));

const LazyLoginPage = lazy(() => import("../pages/login/LoginPage"));
const LazyJoinPage = lazy(() => import("../pages/join/JoinPage"));
const LazyPaymentPage = lazy(() => import("../pages/pay/PaymentPage"));
const LazyShopPage = lazy(() => import("../pages/shop/ShopPage"));
const LazyCartPage = lazy(() => import("../pages/cart/CartPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyMainPage />
      </Suspense>
    ),
  },
  {
    path: "/menu",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyMenuPage />
      </Suspense>
    ),
  },

  // My Area
  {
    path: "/my",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyMyPage />
      </Suspense>
    ),
    children:myRouter(),
  },
  
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyLoginPage />
      </Suspense>
    ),
    // children: todoRouter(),
  },
  {
    path: "/join",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyJoinPage />
      </Suspense>
    ),
    // children: productRouter(),
  },
  {
    path: "/payment/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyPaymentPage />
      </Suspense>
    ),
    // children: memberRouter(),
  },
  // shop Area
  {
    path: "/shop/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyShopPage />
      </Suspense>
    ),
    children:shopRouter(),
  },
  {
    path: "/cart",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyCartPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <h1>.</h1>,
  },
]);

export default router;