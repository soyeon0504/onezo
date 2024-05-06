import styled from "@emotion/styled";

export const Wrap = styled.div`
  height: 1100px;
  margin: 0 auto;
  z-index: 999999;
`;

export const LoginWrap = styled.div`
  padding-top: 170px;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginInnerWrap = styled.div`
  margin: 0 auto;
  width: 586px;
  height: 707px;
  border: 1px solid #bcbbbb;
  border-radius: 15px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  padding-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  img {
    margin: 0 auto;
  }
`;
export const InputWrap = styled.div`
  margin: 0 auto;
  .id-box,
  .password-box {
    display: flex;
    width: 340px;
    height: 63px;
    border: 1px solid #cbcbcb;
    border-radius: 15px;
    font-size: 18px;
    img {
      margin-top: 8px;
      width: 45px;
      height: 45px;
    }
    input {
      width: 260px;
      border: none;
      letter-spacing: 1px;
      margin-right: 10px;
    }
    input::placeholder {
        color: #cbcbcb;
    }
  }
  .password-box {
    margin-top: 30px;
    img {
        width: 35px;
        height: 35px;
        margin-top: 10px;
    }
  }
`;

export const LoginFooter = styled.div`
margin-bottom: 100px;
`

export const LoginButton = styled.button`
  width: 340px;
  height: 63px;
  border: 1px solid #ff8b38;
  border-radius: 15px;
  background-color: #ff8b38;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 1px;
  margin-bottom: 25px;
`;

export const LoginBottomWrap = styled.div`
width: 340px;
display: flex;
justify-content: space-between;
color: #A9A7A7;
font-size: 13px;
align-items: center;
div {
    cursor: pointer;
}
hr {
    width: 15px;
    transform: rotate(90deg);
    color: #FF8B38;
}
a {
    color: #A9A7A7;
}
`
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;