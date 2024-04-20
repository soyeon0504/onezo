import React from "react";
import Layout from "../../layouts/Layout";
import { InfoBox, InnerWrap, JoinButton, Wrap } from "../../styles/join/JoinStyle";

const JoinPage = () => {
  return (
    <>
      <Layout />
      <Wrap>
        <InnerWrap>
          <div className="join-title">회원가입</div>
          <InfoBox>
            <div className="bundle">
              <p>아이디</p>
              <input className="input1"/>
              <button>중복확인</button>
            </div>
            <div className="bundle">
              <p>비밀번호</p>
              <input className="input2"/>
            </div>
            <div className="bundle">
              <p>비밀번호 확인</p>
              <input className="input3"/>
            </div>
            <div className="bundle">
              <p>이름</p>
              <input className="input4"/>
            </div>
            <div className="bundle">
              <p>닉네임</p>
              <input className="input5"/>
              <button>중복확인</button>
            </div>
            <div className="bundle">
              <p>연락처</p>
              <input className="input6"/>
              <button>중복확인</button>
            </div>
          </InfoBox>
            <JoinButton>가입하기</JoinButton>
        </InnerWrap>
      </Wrap>
    </>
  );
};

export default JoinPage;
