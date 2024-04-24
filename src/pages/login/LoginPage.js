import React, { useState } from "react";
import {
  InputWrap,
  LoginBottomWrap,
  LoginButton,
  LoginFooter,
  LoginInnerWrap,
  LoginWrap,
  Wrap,
  ModalBackground
} from "../../styles/login/LoginStyle";
import IdFind from "../../components/login/IdFind";
import Layout from "../../layouts/Layout";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
   // 아이디 찾기 버튼 클릭
   const [idFindModal, setIdFindModal] = useState(false);
   const handleIdFind = () => {
     setIdFindModal(true);
   };
   const closeIdFindModal = () => {
     setIdFindModal(false);
   };

  const moveToMain = () => {
    const url = '/'
    navigate(url);
  }

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
            <LoginButton onClick={moveToMain}>로그인</LoginButton>
            <LoginBottomWrap>
              <div onClick={handleIdFind}>아이디 찾기</div>
              {idFindModal && (
              <>
                <IdFind closeModal={closeIdFindModal} />
                <ModalBackground></ModalBackground>
              </>
            )}
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
