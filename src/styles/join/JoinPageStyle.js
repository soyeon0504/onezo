import styled from "@emotion/styled";

export const JoinPageStyle = styled.div`
  width: 1300px;
  text-align: center;
  margin: 0 auto;
  /* background: skyblue; */
`;
export const JoinBox = styled.form`
  width: 980px;
  /* height: 700px; */
  border-radius: 10px;
  border: 1px solid #2c39b5;
  margin: ${props => props.margin ? props.margin : "0 auto 100px"};
  padding: 60px 90px;
`;

export const JoinElement = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 3px;
`;
export const JoinElementTxt = styled.div`
  display: flex;
  p {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  span {
    color: #ff0303;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const JoinElementInputBox = styled.div`
  display: block;
  text-align: start;
`;
export const JoinElementInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  /* background: pink; */
  img {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 5px;
    border: 1px solid #2c39b5;
  }
  input {
    border-radius: 5px;
    border: 1px solid #2c39b5;

    width: ${props => (props.width ? props.width : "600px")};
    height: 36px;
    padding-left: 15px;

    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  div {
    border-radius: 5px;
    border: 1px solid #2c39b5;

    width: ${props => (props.width ? props.width : "600px")};
    height: 36px;
    padding-left: 15px;

    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: ${props => (props.lineHight ? props.lineHight : "normal")};
  }
  /* input[type="file"] {
    width: 180px;
    height: 180px;
  } */
  /* input[type="text"] {
    width: ${props => (props.width ? props.width : "600px")};
    height: 36px;
    padding-left: 15px;

    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  } */
`;
export const InputValid = styled.div`
  color: red;
  font-size: 15px;
`;
export const ImageInputBt = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;
export const JoinAddressInput = styled.div`
  display: block;
  width: 600px;
  text-align: start;
  input {
    border-radius: 5px;
    border: 1px solid #2c39b5;
    width: 600px;
    height: 36px;
    padding-left: 15px;
    margin-top: 10px;

    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const ShowPasswordBt =styled.button`
background: transparent;
border: none;
width: 0px;
height: 0px;
`;
export const ShowPasswordImg = styled.img`
  width: 20px !important;
  height: 20px !important;
  border: none !important;
  transform: translate(-150%, 40%);
  cursor: pointer;
`;
export const ConfirmBt = styled.button`
  width: ${props => props.width ? props.width : "105px"};
  height: 36px;
  border-radius: 5px;
  border: 1px solid #2c39b5;
  background: #2c39b5;
  cursor: pointer;

  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
// export const AddressBt = styled.button`
//   width: 105px;
//   height: 36px;
//   border-radius: 5px;
//   border: 1px solid #2c39b5;
//   background: #fff;

//   color: #777;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
// `;

export const VerifiBt = styled.button`
  width: 320px;
  height: 50px;
  border-radius: 10px;
  background: #2c39b5;
  color: #fff;
  cursor: pointer;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: 1px solid #2c39b5;
`;
