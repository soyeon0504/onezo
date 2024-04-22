import React from "react";
import Layout from "../../layouts/Layout";
import { CheckButton, InfoBox, InnerWrap, JoinButton, Wrap } from "../../styles/join/JoinStyle";

const JoinPage = () => {
  return (
    <>
      <Layout>
      <Wrap>
        <InnerWrap>
          <div className="join-title">회원가입</div>
          <InfoBox>
            <div className="bundle">
              <p>아이디</p>
              <input className="input1"/>
              <CheckButton>중복확인</CheckButton>
            </div>
            <div className="bundle">
              <p>비밀번호</p>
              <input className="input2"/>
            </div>
            <div className="bundle">
              <p>비밀번호<span>&nbsp;</span>확인</p>
              <input className="input3"/>
            </div>
            <div className="bundle">
              <p>이름</p>
              <input className="input4"/>
            </div>
            <div className="bundle">
              <p>닉네임</p>
              <input className="input5"/>
              <CheckButton>중복확인</CheckButton>
            </div>
            <div className="bundle">
              <p>연락처</p>
              <input className="input6"/>
              <CheckButton>중복확인</CheckButton>
            </div>
            <div className="join-button">
            <JoinButton>가입하기</JoinButton>
            </div>
          </InfoBox>
        </InnerWrap>
      </Wrap>
      </Layout>
    </>
  );
};

export default JoinPage;
