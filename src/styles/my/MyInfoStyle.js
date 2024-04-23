import styled from "@emotion/styled";

export const InfoStyle = styled.div`
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
export const InfoForm = styled.form`
  width: 900px;
  height: 550px;
  border: 1px solid #d9d9d9;
  padding-top: 30px;
  .bundle {
    position: relative;
    margin: 0 auto;
    width: 850px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 15px;
  }
  p {
    left: 0;
    font-size: 16px;
    font-weight: 700;
  }
  input {
    position: absolute;
    right: 0;
    width: 700px;
    height: 35px;
    border: 1px solid #572a01;
    border-radius: 10px;
    font-size: 16px;
    padding-left: 10px;
  }
  .input1,
  .input5,
  .input6 {
    position: absolute;
    left: 150px;
    width: 500px;
    height: 35px;
    border: 1px solid #572a01;
    border-radius: 10px;
  }
  .join-button {
    padding-top: 50px;
  }
`;
export const PasswordInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* font-size: 16px; */
  /* padding-left: 10px; */
`;
export const ShowPasswordBt = styled.button`
  background: transparent;
  border: none;
  width: 0px;
  height: 0px;
`;
export const ShowPasswordImg = styled.img`
  width: 25px;
  height: 25px;
  border: none;
  position: absolute;
  right: 15px;
  top: 20px;
  /* transform: translate(-0%, 0%); */
  cursor: pointer;
`;
