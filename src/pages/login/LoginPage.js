import React from "react";
import {
  InputWrap,
  LoginBottomWrap,
  LoginButton,
  LoginFooter,
  LoginInnerWrap,
  LoginWrap,
  Wrap,
} from "../../styles/login/LoginStyle";
import Layout from "../../layouts/Layout";

const LoginPage = () => {
  return (
    <>
      <Layout>
      <Wrap>
        <LoginWrap>
          <LoginInnerWrap>
            <img src="../../images/header/logo.svg" />
            <InputWrap>
            <div className="id-box">
              <img src="../../images/login/person.svg"/> 
              <input
                placeholder="아이디를 입력해주세요."
                className="id"
              ></input>
            </div>
            <div className="password-box">
              <img src="../../images/login/lock2.svg"/> 
              <input
                placeholder="비밀번호를 입력해주세요."
                className="password"
              ></input>
            </div>
            </InputWrap>
            <LoginFooter>
            <LoginButton>로그인</LoginButton>
            <LoginBottomWrap>
              <div>아이디 찾기</div>
              <hr/>
              <div>비밀번호 찾기</div>
              <hr/>
              <a href="/join">회원가입</a>
            </LoginBottomWrap>
            </LoginFooter>
          </LoginInnerWrap>
        </LoginWrap>
      </Wrap>
      </Layout>
    </>
  );
};

export default LoginPage;
