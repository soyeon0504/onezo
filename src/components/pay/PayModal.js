import React, { useState } from "react";
import styled from "@emotion/styled";

import {
  PayBt,
  PayCancelBt,
  PayInnerBox,
  PayStyle,
} from "../../styles/pay/PayStyle";
import { postTossPay } from "../../api/pay/pay_api";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
const PayModal = ({ add, menu, count, price, onCloseModal }) => {
  // 결제수단 클릭
  const [payment, setPayment] = useState(null);
  const buttonStyles = {
    "card-btn": {
      background:
        "card-btn" === payment ? "#FF8B38" : "rgba(255, 139, 56, 0.5)",
      color: "card-btn" === payment ? "#FFF" : "#000",
    },
    "toss-btn": {
      background:
        "toss-btn" === payment ? "#FF8B38" : "rgba(255, 139, 56, 0.5)",
      color: "toss-btn" === payment ? "#FFF" : "#000",
    },
    "cash-btn": {
      background:
        "cash-btn" === payment ? "#FF8B38" : "rgba(255, 139, 56, 0.5)",
      color: "cash-btn" === payment ? "#FFF" : "#000",
    },
  };
  const handleClickPayment = e => {
    const id = e.target.id;
    setPayment(id);
  };

  // 데이터연동(토스페이)
  const handleTossPay = async () => {
    try {
      const res = await postTossPay({
        price: price,
        userId: "ssumin08@naver.com",
        menuName: menu,
      });
      if (res.status === 200) {
        const { nextRequestUrl, id } = res.data;
        // 토스페이 API에서 받은 URL로 이동합니다.
        window.location.href = nextRequestUrl; // 현재 창에서 이동
        // setPaymentDetailId(id); // 결제 상세 ID를 저장합니다.
      }
    } catch (error) {
      alert("토스페이 결제 과정에서 오류가 발생했습니다.");
      console.error("토스페이 결제 과정에서 오류가 발생했습니다.", error);
    }
  };

  return (
    <PayStyle>
      <PayCancelBt>
        <img src="/images/my/bt_cancel.svg" onClick={onCloseModal} />
      </PayCancelBt>
      <PayInnerBox>
        <h1>가게주소</h1>
        <h2>{add}</h2>
      </PayInnerBox>
      <PayInnerBox>
        <h1>결제수단</h1>
        <button
          id="card-btn"
          onClick={handleClickPayment}
          style={buttonStyles["card-btn"]}
        >
          신용·체크카드
        </button>
        <button
          id="toss-btn"
          onClick={handleClickPayment}
          style={buttonStyles["toss-btn"]}
        >
          토스페이
        </button>
        <button
          id="cash-btn"
          onClick={handleClickPayment}
          style={buttonStyles["cash-btn"]}
        >
          현장 결제
        </button>
      </PayInnerBox>
      <PayInnerBox>
        <h1>결제금액</h1>
        <div>
          <h2>
            {menu} 외 {count}개
          </h2>
          <p>{new Intl.NumberFormat().format(`${price}`)}원</p>
        </div>
      </PayInnerBox>
      {"toss-btn" === payment ? (
        <PayBt onClick={handleTossPay}>결제하기</PayBt>
      ) : (
        <PayBt>결제하기</PayBt>
      )}
    </PayStyle>
  );
};
export default PayModal;
