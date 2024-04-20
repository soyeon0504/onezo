import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 1980px;
  margin: 0 auto;
`;
export const InnerWrap = styled.div`
  width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .join-title {
    font-size: 24px;
    color: #572a01;
    font-weight: 700;
  }
`;
export const InfoBox = styled.div`
  width: 1000px;
  height: 800px;
  border: 1px solid #d9d9d9;
  border-radius: 15px;
  .bundle {
    width: 1000px;
    display: flex;
    justify-content: space-evenly;
    justify-content: flex-start;
    padding: 30px 100px 30px 70px;
  }
  p {
    font-size: 16px;
    font-weight: 700;
  }
  input {
    width: 700px;
    height: 35px;
    border: 1px solid #572a01;
    border-radius: 10px;
    font-size: 16px;
  }
  .input1,
  .input5,
  .input6 {
    width: 500px;
    height: 35px;
    border: 1px solid #572a01;
    border-radius: 10px;
  }
  button {
    width: 150px;
    height: 35px;
    border: 1px solid #572a01;
    border-radius: 10px;
    background-color: #fff;
    font-size: 16px;
    font-weight: 500;
    color: #555;
    cursor: pointer;
  }
  button:hover {
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
`;
