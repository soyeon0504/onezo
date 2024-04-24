import React from "react";
import {
  OrderStatusCount,
  OrderStatusGraph,
  OrderStatusItem,
  OrderStatusList,
  OrderStatusMenu,
  OrderStatusStyle,
} from "../../styles/my/MyOrderStatusStyle";
import { ConfigProvider, Steps } from "antd";

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
        <h2>음식이 맛있게 만들어지고 있습니다.</h2>

        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#FF8B38",
              fontFamily: "Noto Sans KR"
            },
          }}
        >
          <Steps
          progressDot
          current={1}
          // direction="vertical"
          finishIconBorderColor="#FF8B38"
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
        </ConfigProvider>

      </OrderStatusGraph>
      <OrderStatusList>
        <h2>주문내역({orderStatusData.length})</h2>
        {orderStatusData.map(item => (
          <OrderStatusItem key={item.id}>
            <img src={item.pic} />
            <div>
              <OrderStatusMenu>
                <span>{item.menu}</span>
              </OrderStatusMenu>
              <OrderStatusCount>
                <h2>수량 : {item.count}</h2>
                <span>{new Intl.NumberFormat().format(item.price)}원</span>
              </OrderStatusCount>
            </div>
          </OrderStatusItem>
        ))}
      </OrderStatusList>
    </OrderStatusStyle>
  );
};

export default MyOrderStatusPage;
