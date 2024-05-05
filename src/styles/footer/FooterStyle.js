import styled from "@emotion/styled";

export const FooterStyle = styled.div`
  /* position: fixed; */
  /* width: 100vw; */
  text-align: center;
  margin: 0 auto;
  border-top: 1px solid #d9d9d9;
  background-color: #fff;
  z-index: 999;
  /* bottom: 0; */
  /* margin-top: auto;  */
  /* 나머지 공간을 차지하기 위해 사용 */

  /* width: 100%; */
`;
export const FooterTop = styled.div`
  text-align: start;
  max-width: 1300px;
  min-width: 850px;
  margin: 0 auto;
  height: 70px;
  padding-top: 5px;
`;
export const FooterLogo = styled.img`
  width: 200px;
  height: 60px;
  background-color: transparent;
`;
export const FooterMain = styled.div`
  max-width: 1300px;
  min-width: 850px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 230px;

  padding-top: 15px;
  div {
    text-align: start;
  }
  h1 {
    text-align: start;
    color: #777;
    font-size: 14px;
    font-weight: 400;
    margin: 0px 0px 13px;
  }
  h2 {
    color: #572a01;
    font-size: 14px;
    font-weight: 700;
  }
  img {
    margin-right: 15px;
  }
`;
export const FooterMainContact = styled.div`
  width: 330px;
`;
export const FooterMainInfo = styled.div`
  width: 360px;
`;
export const FooterMainSocial = styled.div`
width: 150px;
`
export const FooterBottom = styled.div`
  border-top: 1px solid #572a01;
  height: 50px;
  span {
    color: #777;
    font-size: 14px;
    font-weight: 400;
  }
`;
