import styled from "@emotion/styled";

export const OrderListItem = styled.div`
  display: block;
  width: 1000px;
  height: 180px;
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  margin-bottom: 25px;
`;
export const OrderListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #d9d9d9;
  div {
    display: flex;
    gap: 10px;
  }
  p {
    font-size: 20px;
    font-weight: 700;
  }
  span {
    color: #ff8b38;
    font-size: 21px;
    font-weight: 700;
  }
  button {
    width: 60px;
    height: 30px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #572a01;
    cursor: pointer;

    color: #000;
    font-size: 13px;
    font-weight: 400;
  }
`;
export const OrderListContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  img {
    width: 80px;
    height: 80px;
  }
  span {
    color: #000;
    font-size: 16px;
    font-weight: 600;
  }
  p {
    color: #777;
    font-size: 16px;
    font-weight: 600;
    margin: 10px 0;
  }
  button {
    width: 65px;
    height: 20px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #572a01;
    cursor: pointer;

    color: #000;
    font-size: 12px;
    font-weight: 600;
  }
  h1 {
    color: #000;
    font-size: 24px;
    font-weight: 700;
  }
`;
