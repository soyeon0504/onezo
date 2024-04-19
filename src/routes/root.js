// 라우터를 별도 파일 관리하겠다.
// 패스가 주 경로 일때
// 패스가 중첩일때는 또 별도로 파일 생성
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/loading/Loading";
import { Suspense, lazy } from "react";
// import todoRouter from "./todoRouter";
// import productRouter from "./productRouter";
// import memberRouter from "./memberRouter";

// 메인패스 컴포넌트
const LazyMainPage = lazy(() => import("../pages/MainPage"));
const LazyMenuPage = lazy(() => import("../pages/MenuPage"));
const LazyMyPage = lazy(() => import("../pages/MyPage"));
const LazyLoginPage = lazy(() => import("../pages/LoginPage"));
const LazyJoinPage = lazy(() => import("../pages/JoinPage"));
const LazyPaymentPage = lazy(() => import("../pages/PaymentPage"));
const LazyShopPage = lazy(() => import("../pages/shop/ShopPage"));
const LazyDetailPage = lazy(() => import("../pages/shop/DetailPage"));
const LazyCartPage = lazy(() => import("../pages/CartPage"));

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
  {
    path: "/my",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyMyPage />
      </Suspense>
    ),
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
  {
    path: "/shop/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyShopPage />
      </Suspense>
    ),
  },
  {
    path: "/shop/detail",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyDetailPage />
      </Suspense>
    ),
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