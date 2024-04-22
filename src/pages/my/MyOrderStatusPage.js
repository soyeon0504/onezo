import React from "react";
import {
  OrderStatusGraph,
  OrderStatusStyle,
} from "../../styles/my/MyOrderStatusStyle";
import { Steps } from "antd";

const orderStatusData = [
  {
    id: 1,
    menu: "핫황금올리브치킨™크리스피",
    count: 1,
    price: 21000,
    pic: `/images/my/chicken1.jpg`,
    totalPrice: 53500,
    orderStatus: "주문 확인 중",
  },
  {
    id: 2,
    menu: "자메이카 통다리구이",
    count: 1,
    price: 21500,
    pic: `/images/my/chicken2.jpg`,
    totalPrice: 53500,
    orderStatus: "주문 확인 중",
  },
  {
    id: 3,
    menu: "모둠감자튀김",
    count: 1,
    price: 11000,
    pic: `/images/my/chicken2.jpg`,
    totalPrice: 53500,
    orderStatus: "주문 확인 중",
  },
];

const MyOrderStatusPage = () => {
  return (
    <OrderStatusStyle>
      <h1>주문 현황</h1>
      <OrderStatusGraph>
        <h2>주문을 확인하고 있습니다.</h2>
        {/* <div>
          <span>주문 확인 중</span>
          <span>음식 제조 중</span>
          <span>음식 제조 완료</span>
          <span>픽업 완료</span>
        </div> */}
        <Steps
          progressDot
          current={0}
          // direction="vertical"
          items={[
            {
              title: "주문 확인 중",
              description: "",
            },
            {
              title: "음식 제조 중",
              description: "",
            },
            {
              title: "음식 제조 완료",
              description: "",
            },
            {
              title: "픽업 완료",
              description: "",
            },
          ]}
        />
      </OrderStatusGraph>
    </OrderStatusStyle>
  );
};

export default MyOrderStatusPage;
