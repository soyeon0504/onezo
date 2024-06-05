import React from "react";
import Layout from "../../layouts/Layout";
import {
  ShopDetailHeader,
  ShopDetailStyle,
} from "../../styles/shop/ShopDetailStyle";

// 더미데이터
const storeSampleData = {
  id: 1,
  storeName: "원조치킨 경북대점",
  address: "대구 북구  산격로 75 1층",
  addressOld: "산격동 1220-10 1층",
  storePhone: "053-952-0778",
  storeHours: "24시간",
};

const ShopDetailPage = () => {
  return (
    <Layout>
      <ShopDetailStyle>
        <ShopDetailHeader>
          <div>
            <h1>{storeSampleData.storeName}</h1>
            <h2>매장 영업시간 : {storeSampleData.storeHours}</h2>
            <h2>주소 : {storeSampleData.address}</h2>
            <h2>전화번호 : {storeSampleData.storePhone}</h2>
          </div>
          <div>
            <button>버튼</button>
            <button>매장</button>
          </div>
        </ShopDetailHeader>
      </ShopDetailStyle>
      ShopDetailPage
    </Layout>
  );
};

export default ShopDetailPage;
