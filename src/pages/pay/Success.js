import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const SuccessStyle = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  .box_section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 500px;
    height: 500px;
    border-radius: 10px;
  }
  h2 {
    font-family: "DAEAM_LEE_TAE_JOON";
    font-size: 44px;
    padding: 30px;
  }
  p {
    font-family: "DAEAM_LEE_TAE_JOON";
    font-size: 19px;
    padding: 20px;
  }
  span {
    font-family: "DAEAM_LEE_TAE_JOON";
    font-size: 14px;
  }
  button {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    gap: 10px;
    background: #fff;
    border: 2px solid #ff8b38;
    border-radius: 10px;

    font-family: DAEAM_LEE_TAE_JOON;
    font-size: 19px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
  }
`;

const Success = () => {
  // URL에서 매개변수 추출
  const urlParams = new URLSearchParams(window.location.search);
  const paymentKey = urlParams.get("paymentKey");
  const orderId = urlParams.get("orderId");
  const amount = urlParams.get("amount");

  async function confirm() {
    const requestData = {
      paymentKey: paymentKey,
      orderId: orderId,
      amount: amount,
    };

    const response = await fetch("/confirm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    const json = await response.json();

    if (!response.ok) {
      // 결제 실패 비즈니스 로직을 구현하세요.
      console.log(json);
      window.location.href = `/fail?message=${json.message}&code=${json.code}`;
    }
  }

  // 페이지 이동
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate("/");
  };

  return (
    <SuccessStyle>
      <div className="box_section">
        <h2>결제 성공</h2>
        <p>{`주문번호: ${orderId}`}</p>
        <p>{`결제 금액: ${amount}원`}</p>
        <span>원조통닭을 이용해주셔서 감사합니다.</span>
        <span>더 좋은 서비스로 보답하겠습니다.</span>
        <div style={{ padding: "30px" }}>
          <button onClick={moveToMain}>메인화면으로 가기</button>
        </div>
      </div>
    </SuccessStyle>
  );
};

export default Success;
