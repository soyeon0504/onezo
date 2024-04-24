import styled from "@emotion/styled";

export const WithdrawStyle = styled.div`
  width: 1000px;
  border: 1px solid #d9d9d9;
  padding: 10px 50px 20px;
  h1 {
    margin-bottom: 20px;

    color: #000;
    font-size: 24px;
    font-weight: 700;
  }
`;
export const WithdrawForm = styled.form`
  width: 900px;
  border: 1px solid #d9d9d9;
  padding: 25px;
  text-align: center;
  div {
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
  }
  h2 {
    color: #000;
    font-size: 16px;
    font-weight: 700;
  }
  input {
    width: 700px;
    height: 35px;
    border: 1px solid #572a01;
    border-radius: 10px;
    font-size: 16px;
    padding-left: 10px;
  }
  h3 {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 5px;
  }
  h3:nth-of-type(1) {
    margin-top: 25px;
  }
  button {
    width: 200px;
    height: 50px;
    border-radius: 20px;
    background: #ff8b38;
    border: none;
    margin-top: 40px;

    color: #fff;
    font-size: 22px;
    cursor: pointer;
  }
`;
