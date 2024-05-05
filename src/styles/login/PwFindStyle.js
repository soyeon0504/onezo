import styled from "@emotion/styled";


export const IdFindStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 500px;
  height: 600px;
  border-radius: 10px;
  border: 2px solid #8D8D8D;
  background: #fff;
  padding-top: 20px;
  box-shadow: 0 5px 5px 0px rgba(0, 0, 0, 0.1);

`;
export const LoginBox = styled.div`
  margin: 0 auto;
  width: 380px;
  p {
    margin-top: 50px;
    margin-bottom: ${props => (props.mgbtm ? props.mgbtm : "160px")};
    color: #572a01;
    font-family: KyivType Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
  }
  li {
    position: relative;
    cursor: pointer;
    color: #000;
    font-family: KyivType Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const LogoZone = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 30px;
`;
export const Logo = styled.img`
  margin: 0 auto;
  width: 180px;
  height: 60px;
`;


export const InputBundle = styled.div`
/* height: 150px;
width: 380px;
display: block;
justify-content: space-evenly; */
`

export const IdBox = styled.input`
margin: 0 auto;
display: flex;
justify-content: center;
  width: 380px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid #572a01;
  padding-left: 20px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 30px;
`;

export const NameBox = styled.input`
margin: 0 auto;
display: flex;
justify-content: center;
  width: 380px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid #572a01;
  padding-left: 20px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 20px;
`

export const NumberBox = styled.input`
margin: 0 auto;
display: flex;
justify-content: center;
  width: 380px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid #572a01;
  padding-left: 20px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 20px;
`;

export const IdBtSection = styled.div`
width: 380px;
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  /* width: ${props => (props.width ? props.width : "")}; */
  /* margin-top: ${props => (props.mgtop ? props.mgtop : "60px")}; */
  margin-top: 80px;
  margin-bottom: ${props => (props.mgbtm ? props.mgbtm : "90px")};
`

export const PasswordBtSection = styled.div`
width: 380px;
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  /* width: ${props => (props.width ? props.width : "")}; */
  /* margin-top: ${props => (props.mgtop ? props.mgtop : "60px")}; */
  margin-top: 50px;
  margin-bottom: ${props => (props.mgbtm ? props.mgbtm : "90px")};
`;
export const CancelBt = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background: #fff;
  border: none;
  cursor: pointer;
  color: #572A01;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: 1px solid #572A01;
`;
export const SaveBt = styled(CancelBt)`
  background: #FF8B38;
  border: 1px solid #FF8B38;
  color: #fff;
  cursor: pointer;
`;
