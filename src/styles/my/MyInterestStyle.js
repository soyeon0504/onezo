import styled from "@emotion/styled";

export const InterestPageStyle = styled.div`
  width: 1000px;
  border: 1px solid #d9d9d9;
  padding: 10px 50px 20px;
  h1 {
    margin-bottom: 20px;

    color: #000;
    font-family: "Noto Sans";
    font-size: 20px;
    font-weight: 700;
  }
`;
export const InterestItem = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d9d9d9;
  padding: 10px;
  margin-bottom: 20px;
  img {
    width: 70px;
    height: 70px;
  }
  div {
    width: 700px;
  }
  span {
    color: #000;
    font-family: "Noto Sans";
    font-size: 20px;
    font-weight: 600;
  }
  p {
    color: #555;
    font-family: "Noto Sans";
    font-size: 14px;
    font-weight: 600;
    margin-top: 15px;
  }
  button {
    width: 65px;
    height: 40px;
    border-radius: 10px;
    background: #ff8b38;
    border: none;
    margin-right: 10px;
    cursor: pointer;

    color: #fff;
    font-family: "Noto Sans";
    font-size: 18px;
    font-weight: 600;
  }
`;
export const InterestMoreBt = styled.button`
  width: 937px;
  height: 50px;
  border: 1px solid #d9d9d9;
  background: #fff;
    cursor: pointer;

  color: #000;
  font-family: "Noto Sans";
  font-size: 20px;
  font-weight: 600;
  img{
    width: 15px;
    margin-right: 20px;
    margin-bottom: 5px;
  }
`;