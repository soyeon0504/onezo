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
    border: 2px solid #FF8B38;
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
  const [orderId, setOrderId] = useState("");
  const [amount, setAmount] = useState("");
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const orderIdParam = searchParams.get("orderId");
    const amountParam = searchParams.get("amount");
    setOrderId(orderIdParam);
    setAmount(amountParam);
  }, [location]);

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
