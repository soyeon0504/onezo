import styled from "@emotion/styled";

export const CartStyle = styled.div`
  width: 1300px;
  margin: 0 auto;
`;
export const CartHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #572a01;
  margin-bottom: 20px;
  p {
    color: #000;
    font-size: 24px;
    font-weight: 600;
  }
`;
export const CartMain = styled.div`
  width: 1220px;
  margin: 0 auto;
`;
export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1220px;
  border: 1px solid #d9d9d9;
  padding: 15px 20px;
  margin-bottom: 20px;
  img {
    width: 80px;
    height: 80px;
  }
  div {
    display: block;
    margin-left: 10px;
  }
  p {
    color: #000;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  h3 {
    color: #555;
    font-size: 16px;
    font-weight: 600;
  }
  .store_change {
    width: 65px;
    height: 40px;
    border-radius: 10px;
    background: #ff8b38;
    border: #fff;
    cursor: pointer;

    color: #fff;
    font-size: 20px;
  }
`;
export const CartMenu = styled.div`
  width: 1060px;
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 10px;
  span {
    color: #000;
    font-size: 20px;
    font-weight: 600;
  }
  button {
    width: 60px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid #555;
    background: #fff;
    cursor: pointer;

    color: #000;
    font-size: 18px;
  }
`;
export const CartCount = styled.div`
  width: 1060px;
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  div {
    display: flex;
    gap: 5px;
  }
  button {
    width: 20px;
    height: 20px;
    background: #777;
    border: none;
    cursor: pointer;

    color: #fff;
    font-size: 18px;
  }
  span {
    color: #000;
    font-size: 20px;
    font-weight: 600;
  }
`;
export const CartMoreBt = styled.button`
  width: 1220px;
  height: 50px;
  border: 1px solid #d9d9d9;
  background: #fff;
  cursor: pointer;

  color: #000;
  font-size: 21px;
  font-weight: 600;
  img {
    width: 15px;
    margin-right: 20px;
    margin-bottom: 5px;
  }
`;
export const CartTotalPrice = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: #000;
    font-size: 22px;
    font-weight: 600;
  }
  span {
    color: #000;
    font-size: 24px;
    font-weight: 600;
    margin-right: 20px;
  }
  button {
    width: 120px;
    height: 60px;
    border-radius: 10px;
    background: #ff8b38;
    border: none;
    cursor: pointer;

    color: #fff;
    font-size: 26px;
  }
`;
