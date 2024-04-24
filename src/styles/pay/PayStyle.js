import styled from "@emotion/styled";
export const PayStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 500px;
  padding: 10px 20px 20px;
  text-align: center;
  background-color: #fff;
`;
export const PayCancelBt = styled.div`
  text-align: end;
  margin-bottom: 5px;
  img {
    width: 20px;
    cursor: pointer;
  }
`;
export const PayInnerBox = styled.div`
  width: 460px;
  border: 1px solid #D9D9D9;
  padding: 10px 20px;
  margin-bottom: 20px;
  text-align: start;
  h1 {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 10px;
  }
  h2 {
    color: #555;
    font-size: 16px;
    font-weight: 400;
  }
  button {
    width: 100px;
    height: 50px;
    border-radius: 10px;
    margin-right: 59px;
    background: rgba(255, 139, 56, 0.5);
    border: none;
    cursor: pointer;
    color: #000;
    font-size: 14px;
    font-weight: 400;
  }
  button:nth-of-type(3) {
    margin-right: 0px;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    color: #000;
    font-size: 20px;
    font-weight: 700;
  }
`;
export const PayBt = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background: #FF8B38;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 22px;
`;