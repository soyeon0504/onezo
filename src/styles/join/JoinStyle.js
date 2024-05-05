import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
export const InnerWrap = styled.div`
  width: 1300px;
  margin: 0 auto;
  padding-top: 140px;
  padding-bottom: 230px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .join-title {
    font-size: 24px;
    color: #572a01;
    font-weight: 700;
    padding-bottom: 100px;
  }
`;
export const InfoBox = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 800px;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  padding-top: 100px;
  form {
    position: relative;
    .message {
      padding-top: 40px;
      padding-left: 125px;
      position: absolute;
      color: red;
      font-size: 14px;
    }
  }
`;

export const FormGroup = styled.div`
  position: relative;
  margin: 0 auto;
  width: 850px;
  display: flex;
  justify-content: space-evenly;
  justify-content: flex-start;
  padding: 0 33px 70px;
  label {
    left: 0;
    font-size: 16px;
    font-weight: 700;
    padding-top: 5px;
  }
  input {
    position: absolute;
    right: 0;
    width: 700px;
    height: 40px;
    border: 1px solid #572a01;
    border-radius: 10px;
    font-size: 16px;
    padding-left: 10px;
  }
  .input1,
  .input5 {
    position: absolute;
    left: 150px;
    width: 500px;
    height: 40px;
    border: 1px solid #572a01;
    border-radius: 10px;
  }
  .join-button {
    padding-top: 50px;
  }
`;

export const Essential = styled.p`
  font-size: 18px;
  color: red;
  padding-top: 5px;
`;

export const CheckButton = styled.button`
  position: absolute;
  width: 150px;
  height: 40px;
  border: 1px solid #572a01;
  border-radius: 10px;
  background-color: #fff;
  font-size: 16px;
  font-weight: 500;
  right: 0;
  color: #555;
  cursor: pointer;
  &:hover {
    background-color: #ff8b38;
    border: #ff8b38;
    color: #fff;
  }
`;

export const ConfirmBt = styled.button`
  position: absolute;
  width: 150px;
  height: 40px;
  border: 1px solid #572a01;
  border-radius: 10px;
  background-color: #fff;
  font-size: 16px;
  font-weight: 500;
  right: 0;
  color: #555;
  cursor: pointer;
  &:hover {
    background-color: #ff8b38;
    border: #ff8b38;
    color: #fff;
  }
`;

export const JoinButton = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 20px;
  background-color: #ff8b38;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
