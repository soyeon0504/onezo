import React, { Suspense, lazy } from 'react'
import Loading from '../components/loading/Loading';
import {Navigate} from 'react-router-dom'

const LazyMyInfoPage = lazy(() => import("../pages/my/MyInfoPage"));
const LazyMyInterestPage = lazy(() => import("../pages/my/MyInterestPage"));
const LazyMyOrderListPage = lazy(() => import("../pages/my/MyOrderListPage"));
const LazyMyOrderStatusPage = lazy(() => import("../pages/my/MyOrderStatusPage"));
const LazMyWithdrawPage = lazy(() => import("../pages/my/MyWithdrawPage"));
const LazyMyOrderDetailPage = lazy(() => import("../pages/my/MyOrderDetailPage"));


const myRouter = () => {
  return [
    {path:"",element:<Navigate to="orderList" />},
    {
        path: "info",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyMyInfoPage />
          </Suspense>
        ),
      },
      {
        path: "interest",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyMyInterestPage />
          </Suspense>
        ),
      },
      {
        path: "orderList",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyMyOrderListPage />
          </Suspense>
        ),
      },
      {
        path: "orderStatus",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyMyOrderStatusPage />
          </Suspense>
        ),
      },
      {
        path: "withdraw",
        element: (
          <Suspense fallback={<Loading />}>
            <LazMyWithdrawPage />
          </Suspense>
        ),
      },
      {
        path:"orderDetail",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyMyOrderDetailPage />
          </Suspense>
        ),
      },
  ];
}
export default myRouter