import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../components/loading/Loading";

// 고깃집 페이지
const LazyPayCheckPage = lazy(() => import("../pages/pay/CheckoutPage"));
const LazyPaySuccessPage = lazy(() => import("../pages/pay/Success"));
const LazyPayFailPage = lazy(() => import("../pages/pay/Fail"));

const paymentRouter = () => {
  return [
    { path: "", element: <Navigate to="checkout" /> },
    {
      path: "checkout",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyPayCheckPage />
        </Suspense>
      ),
    },
    {
      path: "success",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyPaySuccessPage />
        </Suspense>
      ),
    },
    {
      path: "fail",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyPayFailPage />
        </Suspense>
      ),
    },
  ];
};

export default paymentRouter;