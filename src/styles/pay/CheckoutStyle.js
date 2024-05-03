import styled from "@emotion/styled";

export const TossCheckoutHeader = styled.div`
padding: 0 40px;
  p {
    font-size: 20px;
    font-weight: 700;
    color: rgb(51, 61, 75);
  }
  .orderInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    h1{
    font-size: 18px;
    font-weight: 700;
    color: #777;
    }
    h2{
    font-size: 20px;
    font-weight: 700;
    color: rgb(51, 61, 75);
    }
  }
  .orderPrice {
    display: flex;
    align-items: center;
    gap: 30px;
    p{
      font-size: 24px;
    }
  }
`;
export const PaymentBtSection = styled.div`
position: relative;
text-align: center;
  button {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    background: #ff8b38;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 22px;
  }
`;
