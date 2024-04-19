import React, { Suspense, lazy } from 'react'
import Loading from '../components/loading/Loading';
import {Navigate} from 'react-router-dom'

const LazyMyInfoPage = lazy(() => import("../pages/my/MyInfoPage"));
const LazyMyInterestPage = lazy(() => import("../pages/my/MyInterestPage"));
const LazyMyOrderDetailPage = lazy(() => import("../pages/my/MyOrderDetailPage"));
const LazyMyOrderListPage = lazy(() => import("../pages/my/MyOrderListPage"));
const LazyMyOrderStatePage = lazy(() => import("../pages/my/MyOrderStatePage"));
const LazMyWithdrawPage = lazy(() => import("../pages/my/MyWithdrawPage"));


const myRouter = () => {
  return [
    {path:"",element:<Navigate to="list" />},
    {
        path: "/my/info",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyMyInfoPage />
          </Suspense>
        ),
      },
      {
        path: "/my/interest",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyMyInterestPage />
          </Suspense>
        ),
      },
      {
        path: "/my/orderDetail",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyMyOrderDetailPage />
          </Suspense>
        ),
      },
      {
        path: "/my/orderList",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyMyOrderListPage />
          </Suspense>
        ),
      },
      {
        path: "/my/orderState",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyMyOrderStatePage />
          </Suspense>
        ),
      },
      {
        path: "/my/withdraw",
        element: (
          <Suspense fallback={<Loading />}>
            <LazMyWithdrawPage />
          </Suspense>
        ),
      },
  ];
}
export default myRouter