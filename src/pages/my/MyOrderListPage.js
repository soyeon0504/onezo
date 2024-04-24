import React from "react";
import { Link } from "react-router-dom";
import {
  OrderListContent,
  OrderListItem,
  OrderListTitle,
} from "../../styles/my/MyOrderListStyle";
import { PaginationOrange } from "../../styles/Pagination";
import { useNavigate } from "react-router-dom";

const orderListData = [
  {
    id: 1,
    date: "2024.04.18",
    store: "대구방촌행운점",
    menu: "핫황금올리브치킨™크리스피",
    howto: "포장",
    price: "22,500",
    pic: `/images/my/chicken1.jpg`,
  },
  {
    id: 2,
    date: "2024.04.10",
    store: "대구동성로점",
    menu: "바삭갈릭",
    howto: "식사",
    price: "21,000",
    pic: `/images/my/chicken2.jpg`,
  },
  {
    id: 3,
    date: "2024.04.08",
    store: "대구들안길점",
    menu: "바삭갈릭",
    howto: "식사",
    price: "21,000",
    pic: `/images/my/chicken2.jpg`,
  },
];

const MyOrderListPage = () => {
  const navigate = useNavigate();

  const moveToOrderDetail = () => {
    navigate(`/my/orderDetail`);
  };
  return (
    <div>
      {orderListData.map(item => (
        <OrderListItem key={item.id}>
          <OrderListTitle>
            <div>
              <p>{item.date}</p>
              <span>포장/식사 완료</span>
            </div>
            <div>
              <button>재주문</button>
              <button>별점</button>
            </div>
          </OrderListTitle>
          <OrderListContent>
            <img src={item.pic} />
            <div style={{ width: "740px" }}>
              <span>
                [{item.store}] {item.menu}
              </span>
              <p>
                [{item.howto}] {item.menu}
              </p>
              <button onClick={moveToOrderDetail}>주문 상세</button>
            </div>
            <div>
              <h1>{item.price}원</h1>
            </div>
          </OrderListContent>
        </OrderListItem>
      ))}
      <div style={{ margin: "0 auto" }}>
        <PaginationOrange />
      </div>
    </div>
  );
};

export default MyOrderListPage;
