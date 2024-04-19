import React, { Suspense, lazy } from 'react'
import Loading from '../components/loading/Loading';
import {Navigate} from 'react-router-dom'

const LazyDetailPage = lazy(() => import("../pages/shop/DetailPage"));


const shopRouter = () => {
  return [
    {path:"",element:<Navigate to="list" />},

  {
    path: "/shop/detail",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyDetailPage />
      </Suspense>
    ),
  },
  ]
}

export default shopRouter