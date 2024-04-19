import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 1980px;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.1);
`;

export const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1300px;
  height: 200px;
  margin: 0 auto;
  /* background-color: hotpink; */
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
  /* top: 60px; */
`;

export const HeaderRightTop = styled.div`
position: relative;
  .header-right-top-inner {
    position: absolute;
    font-weight: 500;
    width: 100px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    top: 50px;
    right: 4px;
    a {
      text-decoration-line: none;
      color: black;
    }
  }
`;

export const HeaderRightBottom = styled.div`
  position: relative;
  display: flex;
  top: 90px;
  right: 0;
  width: 285px;
  justify-content: space-between;
  img {
    position: absolute;
    right: 77px;
    bottom: 12px;
  }
  a {
    font-size: 22px;
    text-decoration-line: none;
    color: black;
  }
  a:hover {
    color: #FF8B38;
    font-weight: 500;
}
.cart {
    margin-bottom: 10px;
  }
`;
export const Login = styled.a`
  /* right: 0px;
  top: 50px; */
`;
export const Join = styled.a``;
