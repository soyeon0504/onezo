import styled from "@emotion/styled";

export const OrderStatusStyle = styled.div`
  width: 1000px;
  border: 1px solid #d9d9d9;
  padding: 10px 50px 20px;
  h1 {
    color: #000;
    font-size: 24px;
    font-weight: 700;
  }
`;
export const OrderStatusGraph = styled.div`
  padding-top: 20px;
  h2 {
    color: #000;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 30px;
  }
`;
export const OrderStatusList = styled.div`
  margin-top: 50px;
  h2 {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
  }
`;
export const OrderStatusItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  border: 1px solid #D9D9D9;
  padding: 15px 30px;
  margin-bottom: 20px;
  img {
    width: 80px;
    height: 80px;
  }
  div {
    display: block;
    margin-left: 10px;
  }

`;
export const OrderStatusMenu = styled.div`
  width: 740px;
  height: 50px;
  display: flex !important;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid #D9D9D9;
  padding-bottom: 10px;
  span {
    color: #000;
    font-size: 20px;
    font-weight: 600;
  }
`;
export const OrderStatusCount = styled.div`
  width: 740px;
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;

  span {
    color: #000;
    font-size: 20px;
    font-weight: 600;
  }
`;
