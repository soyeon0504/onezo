import styled from "@emotion/styled";

export const WithdrawStyle = styled.div`
  width: 1000px;
  /* height: 500px; */
  border: 1px solid #d9d9d9;
  padding: 10px 30px;
  h1 {
    color: #000;
    font-family: "Noto Sans";
    font-size: 20px;
    font-weight: 700;
  }
`;
export const WithdrawForm = styled.form`
  border: 1px solid #d9d9d9;
  padding: 25px;
  text-align: center;
  div {
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h2 {
    color: #000;
    font-family: "Noto Sans";
    font-size: 16px;
    font-weight: 600;
  }
  input {
    width: 700px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid #000;
  }
  h3 {
    color: #000;
    font-family: "Noto Sans";
    font-size: 14px;
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
    font-family: "Noto Sans";
    font-size: 22px;
    font-weight: 600;
  }
`;
