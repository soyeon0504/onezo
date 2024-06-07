import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  InterestItem,
  InterestMoreBt,
  InterestPageStyle,
} from "../../styles/my/MyInterestStyle";
import { getInterestShop } from "../../api/shop/shop_api";

const interestData = [
  {
    id: 1,
    store: "대구동성로점",
    address: "대구 중구 동성로 5길 89",
  },
  {
    id: 2,
    store: "대구경북대점",
    address: "대구 북구 대학로80길 8",
  },
];

const MyInterestPage = () => {
  const [data, setData] = useState(null);
  // 데이터 연동(관심매장 조회)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getInterestShop();
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <InterestPageStyle>
      <h1>즐겨찾는 매장</h1>
      {data?.map((item,index) => (
        <InterestItem key={index}>
          <img src="/images/my/store.png" />
          <div>
            <span>{item.storeName}</span>
            <br />
            <p>{item.address}</p>
          </div>
          {/* <button>삭제</button> */}
        </InterestItem>
      ))}
      {/* {data.length < 3 && (
        <InterestMoreBt>
          <img src="/images/my/bt_plus.svg" />
          관심매장 추가
        </InterestMoreBt>
      )} */}
    </InterestPageStyle>
  );
};

export default MyInterestPage;
