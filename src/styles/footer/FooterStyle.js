import styled from "@emotion/styled";

export const FooterStyle = styled.div`
  /* position: fixed; */
  /* width: 100vw; */
  text-align: center;
  margin: 0 auto;
  border-top: 1px solid #D9D9D9;
  background-color: #fff;
  z-index: 9999;
  /* bottom: 0; */
  /* margin-top: auto;  */
  /* 나머지 공간을 차지하기 위해 사용 */

  /* width: 100%; */
`;
export const FooterTop = styled.div`
text-align: start;
  width: 1300px;
  margin: 0 auto;
  height: 70px;
  padding-top: 30px;
`;
export const FooterLogo = styled.img`
  width: 60px;
  height: 50px;
  background-color: transparent;
`;
export const FooterMain = styled.div`
  width: 1300px;
  margin: 0 auto;
  display: flex;
  height: 270px;

  padding-top: 25px;
  div {
    text-align: start;
  }
  h1 {
    text-align: start;
    color: #777;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  h2 {
    color: #572A01;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  img {
    margin-right: 15px;
  }
`;
export const FooterMainContact = styled.div`
  width: 550px;
`;
export const FooterMainInfo = styled.div`
  width: 610px;
`;
export const FooterBottom = styled.div`
  border-top: 1px solid #572A01;
  height: 60px;
  span {
    color: #777;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
