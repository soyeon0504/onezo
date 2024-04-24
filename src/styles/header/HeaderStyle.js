import styled from "@emotion/styled";

export const Wrap = styled.div`
position: fixed;
  margin: 0 auto;
  width: 100vw;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.1);
  z-index: 99999;
  background-color: #fff;
`;

export const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1300px;
  height: 200px;
  margin: 0 auto;
`;

export const Logo = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  img {
    width: 260px;
    height: 64px;
    left: 10px;
  }
`;

export const HeaderRight = styled.div`
  display: block;
  align-items: center;
  right: 0;
  padding-top: 5px;
`;

export const HeaderRightTop = styled.div`
  position: relative;
  .header-right-top-inner {
    position: absolute;
    font-weight: 400;
    width: 130px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    top: 50px;
    right: 4px;
    a {
      text-decoration-line: none;
      color: black;
    }
  }
`;

export const LoginState = styled.div`
  position: absolute;
  font-weight: 400;
  width: 130px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  top: 50px;
  right: 4px;
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const HeaderRightBottom = styled.div`
  position: relative;
  display: flex;
  top: 90px;
  right: 0;
  width: 350px;
  justify-content: space-between;
  img {
    width: 25px;
    height: 25px;
  }
  .menu {
    padding-right: 20px;
  }
  .order {
    padding-right: 10px;
  }
  a {
    font-size: 22px;
    text-decoration-line: none;
    color: black;
  }
  a:hover {
    color: #ff8b38;
    font-weight: 500;
  }
  .cart {
  }
`;
export const Login = styled.a`
  /* right: 0px;
  top: 50px; */
`;
export const Join = styled.a``;
