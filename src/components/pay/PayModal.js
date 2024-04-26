import React from "react";
import styled from "@emotion/styled";

import {
  PayBt,
  PayCancelBt,
  PayInnerBox,
  PayStyle,
} from "../../styles/pay/PayStyle";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
const PayModal = ({add, menu, count, price, onCloseModal}) => {
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
        <button>신용·체크카드</button>
        <button>토스페이</button>
        <button>현장 결제</button>
      </PayInnerBox>
      <PayInnerBox>
        <h1>결제금액</h1>
        <div>
          <h2>{menu} 외 {count}개</h2>
          <p>{price}원</p>
        </div>
      </PayInnerBox>
      <PayBt>결제하기</PayBt>
    </PayStyle>
  );
};
export default PayModal;