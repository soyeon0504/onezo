import styled from "@emotion/styled";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ReviewStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 400px;
  padding: 10px 20px 20px;
  background-color: #fff;
  p {
    color: #000;
    font-size: 20px;
    font-weight: 700;
    margin-top: -10px;
    margin-bottom: 15px;
  }
  textarea {
    margin-top: 15px;
    width: 360px;
    height: 160px;
    resize: none;
    border: 1px solid #d9d9d9;
    padding: 10px;

    font-size: 15px;
  }
  button {
    width: 100px;
    height: 50px;
    border-radius: 20px;
    background: #ff8b38;
    border: none;
    margin-top: 15px;

    color: #fff;
    font-size: 22px;
    font-weight: 600;
  }
`;
export const ReviewCancelBt = styled.div`
  text-align: end;
  margin-bottom: 5px;
  img {
    width: 20px;
    cursor: pointer;
  }
`;
export const ReviewOrder = styled.div`
  display: flex;
  gap: 15px;
  img {
    width: 70px;
    height: 70px;
  }
  h1 {
    color: #000;
    font-size: 18px;
    font-weight: 700;
    margin: 5px 0px 10px 0px;
  }
  h2 {
    color: #000;
    font-size: 18px;
    font-weight: 500;
  }
`;
export const ReviewStar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  gap: 20px;
  img {
    width: 40px;
    height: 40px;
  }
`;
