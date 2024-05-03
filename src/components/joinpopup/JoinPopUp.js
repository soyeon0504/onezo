import styled from "@emotion/styled";
import React from "react";

const JoinPopUp = ({ txt, txt2, onConfirm }) => {
  const JoinPopUp = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;

    width: 300px;
    height: 180px;
    display: flex;

    flex-direction: column;
    text-align:center;
    justify-content: center;
    align-items: center;
    gap: 30px;

    border-radius: 10px;
    border: 1px solid #2c39b5;
    background: #fff;
    b {
      color: #000;
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    button {
      width: 100px;
      height: 50px;
      border-radius: 5px;
      border: none;
      background: #2c39b5;
      cursor: pointer;
      color: #fff;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  `;

  return (
    <JoinPopUp>
      <div>
        <b>{txt}</b>
        <br />
        <b>{txt2}</b>
      </div>
      <button onClick={onConfirm}>확인</button>
    </JoinPopUp>
  );
};

export default JoinPopUp;
