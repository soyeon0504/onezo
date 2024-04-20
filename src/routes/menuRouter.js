import React, { Suspense, lazy } from 'react'
import Loading from '../components/loading/Loading';
import {Navigate} from 'react-router-dom'

const LazyDetailPage = lazy(() => import("../pages/menu/DetailPage"));


const menuRouter = () => {
  return [
    {path:"",element:<Navigate to="list" />},

  {
    path: "/menu/detail",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyDetailPage />
      </Suspense>
    ),
  },
  ]
}

export default menuRouter