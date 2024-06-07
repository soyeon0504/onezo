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

  // 날짜와 시간만 추출(댓글)
  const formatDate = dateString => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");

    return {
      date: `${year}-${month}-${day}`,
      time: `${hour}:${minute}:${second}`,
    };
  };

  // 리뷰창 나오기
  const [reviewModal, setReviewModal] = useState(false);
  const [storeId, setStoreId] = useState(0);
  const [storeName, setStoreName] = useState("");
  const handleReviewModal = (storeId, storeName) => {
    setReviewModal(true);
    setStoreId(storeId);
    setStoreName(storeName);
  };
  const closeReviewModal = () => setReviewModal(false);

  // orderDetail창 나오기
  const [orderDetailModal, setOrderDetailModal] = useState(false);
  const handleDetailModal = (storeId, storeName) => {
    setOrderDetailModal(true);
    setStoreId(storeId);
    setStoreName(storeName);
  };
  const closeDetailModal = () => setOrderDetailModal(false);

  return (
    <div>
      {reviewModal && (
        <>
          <ReviewModal
            storeId={storeId}
            store={storeName}
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
      {data?.map((item, index) => {
        const { date, time } = formatDate(item.payDate);
        return (
          <OrderListItem key={index}>
            <OrderListTitle>
              <div>
                <p>
                  {date} {time}
                </p>
                <span>포장/식사 완료</span>
              </div>
              <div>
                <button
                  onClick={() =>
                    handleReviewModal(item.store.id, item.storeName)
                  }
                >
                  별점
                </button>
              </div>
            </OrderListTitle>
            <OrderListContent>
              <img src={`/images/my/chicken1.jpg`} />
              <div style={{ width: "740px" }}>
                <span>[{item.storeName}] 원조 바삭 후라이드</span>
                <br />
                <p>[{item.takeInOut == "DINE_IN" ? "매장" : "포장"}] 원조 바삭 후라이드</p>
                <br />
                <button onClick={() => handleDetailModal()}>주문 상세</button>
              </div>
              <div>
                <h1>{item.totalPrice}원</h1>
              </div>
            </OrderListContent>
          </OrderListItem>
        );
      })}
      <div style={{ margin: "0 auto" }}>
        <PaginationOrange />
      </div>
    </div>
  );
};

export default MyOrderListPage;
