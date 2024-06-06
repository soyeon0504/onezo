import React, { useEffect, useState } from "react";
import {
  OrderListContent,
  OrderListItem,
  OrderListTitle,
} from "../../styles/my/MyOrderListStyle";
import { PaginationOrange } from "../../styles/Pagination";
import ReviewModal from "../../components/review/ReviewModal";
import MyOrderDetailPage from "./MyOrderDetailPage";
import { ModalBackground } from "../../styles/review/ReveiwStyle";
import { getOrderList } from "../../api/my/order_api";

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
  const [data, setData] = useState(null);
  // 데이터 연동(주문 List 조회)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getOrderList();
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  
  // 리뷰창 나오기
  const [reviewModal, setReviewModal] = useState(false);
  const handleReviewModal = () => setReviewModal(true);
  const closeReviewModal = () => setReviewModal(false);

  // orderDetail창 나오기
  const [orderDetailModal, setOrderDetailModal] = useState(false);
  const handleDetailModal = () => setOrderDetailModal(true);
  const closeDetailModal = () => setOrderDetailModal(false);

  return (
    <div>
      {reviewModal && (
        <>
          <ReviewModal
            store={orderListData[0].store}
            onCloseModal={closeReviewModal}
          />
          <ModalBackground></ModalBackground>
        </>
      )}
      {orderDetailModal && (
        <>
          <MyOrderDetailPage></MyOrderDetailPage>
          <ModalBackground></ModalBackground>
        </>
      )}
      {orderListData.map(item => (
        <OrderListItem key={item.id}>
          <OrderListTitle>
            <div>
              <p>{item.date}</p>
              <span>포장/식사 완료</span>
            </div>
            <div>
              <button onClick={handleReviewModal}>별점</button>
            </div>
          </OrderListTitle>
          <OrderListContent>
            <img src={item.pic} />
            <div style={{ width: "740px" }}>
              <span>
                [{item.store}] {item.menu}
              </span>
              <br />
              <p>
                [{item.howto}] {item.menu}
              </p>
              <br />
              <button onClick={handleDetailModal}>주문 상세</button>
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
