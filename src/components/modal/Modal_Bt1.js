import styled from "@emotion/styled";
import React from "react";

const Modal_Bt1_Stlye = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  width: 350px;
  height: 220px;
  display: flex;

  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 30px;

  border-radius: 10px;
  border: 1px solid #ff8b38;
  background: #fff;
  h1 {
    color: #000;
    text-align: center;
    font-style: normal;
    line-height: normal;
  }
  button {
    width: 100px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  
    border: 1px solid #ff8b38;
    background: #ff8b38;
    color: #fff;
  }
`;
const Modal_Bt1 = ({txt, onConfirm}) => {
  return (
    <Modal_Bt1_Stlye>
      <div>
        <h1>{txt}</h1>
      </div>
      <div>
        <button onClick={onConfirm}>확인</button>
      </div>
    </Modal_Bt1_Stlye>
  );
};

export default Modal_Bt1;
