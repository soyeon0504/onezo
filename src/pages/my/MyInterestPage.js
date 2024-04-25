import React from "react";
import styled from "@emotion/styled";
import {
  InterestItem,
  InterestMoreBt,
  InterestPageStyle,
} from "../../styles/my/MyInterestStyle";

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
  // {
  //   id: 3,
  //   store: "대구경북대점",
  //   address: "대구 북구 대학로80길 8",
  // },
];

const MyInterestPage = () => {
  return (
    <InterestPageStyle>
      <h1>즐겨찾는 매장</h1>
      {interestData.map(item => (
        <InterestItem key={item.id}>
          <img src="/images/my/store.png" />
          <div>
            <span>{item.store}</span>
            <p>{item.address}</p>
          </div>
          <button>삭제</button>
        </InterestItem>
      ))}
      {interestData.length < 3 && (
        <InterestMoreBt>
          <img src="/images/my/bt_plus.svg" />
          관심매장 추가
        </InterestMoreBt>
      )}
    </InterestPageStyle>
  );
};

export default MyInterestPage;
