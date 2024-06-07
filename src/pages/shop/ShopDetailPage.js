import React, { useEffect, useState } from "react";
import Layout from "../../layouts/Layout";
import {
  ReviewItem,
  ShopDetailHeader,
  ShopDetailStyle,
  ShopReviewZone,
} from "../../styles/shop/ShopDetailStyle";
import ShopMap from "../../components/shop/ShopMap";
import { getShopInfo, postInterestShop } from "../../api/shop/shop_api";

// 더미데이터
const storeSampleData = {
  id: 1,
  storeName: "원조치킨 경북대점",
  address: "대구 북구  산격로 75 1층",
  addressOld: "산격동 1220-10 1층",
  storePhone: "053-952-0778",
  storeHours: "24시간",
};
const reviewData = [
  {
    review_id: 1,
    user_nick: "김그린",
    user_id: "green",
    comment: "짱짱 맛있어요",
    date: "2024.06.07",
  },
  {
    review_id: 2,
    user_nick: "그리니",
    user_id: "greeny",
    comment: "벌써 10번째 시켜먹어요",
    date: "2024.06.05",
  },
  {
    review_id: 3,
    user_nick: "김원조",
    user_id: "onezo",
    comment:
      "리뷰가 많은 이유가 있네요! 여러 지점에서 먹어봤는데 경북대점이 제일 맛있게 튀기네요.",
    date: "2024.06.03",
  },
];

const ShopDetailPage = () => {
  // URl 에서 storeId 추출
  const searchParams = new URLSearchParams(location.search);
  const storeId = parseInt(searchParams.get("store"));

  // 데이터 연동(매장 상세조회)
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getShopInfo(storeId);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  // 데이터 연동(관심매장 등록)
  const [like, setLike] = useState(false);
  const handleClickLike = async () => {
    await postInterestShop({ storeId });
    setLike(true);
  };

  return (
    <Layout>
      <ShopDetailStyle>
        <ShopDetailHeader>
          <div>
            <div
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <h1>{data?.storeName}</h1>
              {like ? (
                <img className="like" src="images/shop/like_full.svg" />
              ) : (
                <img
                  className="like"
                  src="images/shop/like.svg"
                  onClick={handleClickLike}
                />
              )}
            </div>

            <h2>매장 영업시간 : {data?.storeHours}</h2>
            <h2>주소 : {data?.address}</h2>
            <h2>전화번호 : {data?.storePhone}</h2>
          </div>
          {/* <div>
            <button>
              <img src="images/shop/icon_takeout.svg" />
              <br />
              포장
            </button>
            <button>
              <img src="images/shop/icon_dinein.svg" />
              <br />
              매장
            </button>
          </div> */}
        </ShopDetailHeader>
        <ShopMap x="35" y="127" />
        <ShopReviewZone>
          <h1>매장 리뷰</h1>
          {reviewData.map(item => {
            return (
              <ReviewItem key={item.review_id}>
                <div>
                  <h2>
                    {item.user_nick} ({item.user_id})
                  </h2>
                  <p>{item.date}</p>
                </div>

                <h3>{item.comment}</h3>
              </ReviewItem>
            );
          })}
        </ShopReviewZone>
      </ShopDetailStyle>
    </Layout>
  );
};

export default ShopDetailPage;
