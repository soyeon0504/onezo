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
import PasswordFind from "../../components/login/PasswordFind";
import Layout from "../../layouts/Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useCustomLogin from "../../hooks/useCustomLogin";
import JoinPopUp from "../../components/joinpopup/JoinPopUp";
import { loginPost } from "../../api/login/login_api";
import { loginPostAsync } from "../../slices/loginSlice";
import { setCookie } from "../../util/cookieUtil";

const initState = {
userId: '',
password: '',
}
const LoginPage = () => {
  const navigate = useNavigate();
  const [loginParam, setLoginParam] = useState(initState);
  const handleChange = e => {
    loginParam[e.target.name] = e.target.value;
    setLoginParam({ ...loginParam });
  };
  // 커스텀훅 사용하기
  const { doLogin, isLogin, moveToPath, userAuth } = useCustomLogin();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const handleClick = async () => {
    dispatch(loginPostAsync({ loginParam, successFn, failFn}));
    try {
      await doLogin({ loginParam, successFn, failFn });
    } catch (error) {
      console.log("login error");
    }
  };

  const successFn = (data) => {
    setCookie('accessToken',data.accessToken)
    setCookie('refreshToken',data.refreshToken)
    moveToPath("/")
  };
  const failFn = result => {
    console.log("실패", result);
  };
  // const errorFn = () => {
  //   console.log("에러");
  // };

  const [idFail, setIdFail] = useState(false);
  const [pwFail, setPwFail] = useState(false);
  const [loginFail, setLoginFail] = useState(false);
  // const errorFn = error => {
  //   console.log("서버 에러입니다.", error);
  //   if (error.response && error.response.status === 456) {
  //     setPwFail(true);
  //   }
  //   if (error.response && error.response.status === 455) {
  //     setIdFail(true);
  //   }
  //   if (error.response && error.response.status === 400) {
  //     setLoginFail(true);
  //   }
  //   if (error.response && error.response.status === 494) {
  //     setLoginFail(true);
  //   }
  // };

   // 아이디 찾기 버튼 클릭
   const [idFindModal, setIdFindModal] = useState(false);
   const [passwordFindModal, setPasswordFindModal] = useState(false);
   const handleIdFind = () => {
     setIdFindModal(true);
   };
   const handlePasswordFind = () => {
    setPasswordFindModal(true);
  };
   const closeIdFindModal = () => {
     setIdFindModal(false);
   };
   const closePasswordFindModal = () => {
    setPasswordFindModal(false);
  };

  const moveToMain = () => {
    const url = '/'
    navigate(url);
  }


  return (
    <>
      <Layout>
      {idFail && (
        <>
          <JoinPopUp txt="아이디를 확인해주세요." onConfirm={closeIdModal} />
          <ModalBackground></ModalBackground>
        </>
      )}
      {pwFail && (
        <>
          <JoinPopUp txt="비밀번호를 확인해주세요." onConfirm={closePwModal} />
          <ModalBackground></ModalBackground>
        </>
      )}
      {loginFail && (
        <>
          <JoinPopUp
            txt="잘못된 범위의 값을"
            txt2="입력하였습니다."
            onConfirm={closeLoginModal}
          />
          <ModalBackground></ModalBackground>
        </>
      )}
      <Wrap>
        <LoginWrap>
          <LoginInnerWrap>
            <img src="../../images/header/logo.svg" />
            <InputWrap>
            <div className="id-box">
              <img src="../../images/login/person.svg"/> 
              <input
              type="userId"
              maxLength={20}
              name="userId"
              value={loginParam.userId}
              onChange={e => handleChange(e)}
                placeholder="아이디를 입력해주세요."
                className="userId"
              ></input>
            </div>
            <div className="password-box">
              <img src="../../images/login/lock2.svg"/> 
              <input
              type="password"
              maxLength={20}
              name="password"
              value={loginParam.password}
              onChange={e => handleChange(e)}
                placeholder="비밀번호를 입력해주세요."
                className="password"
              ></input>
            </div>
            </InputWrap>
            <LoginFooter>
            <LoginButton onClick={handleClick}>로그인</LoginButton>
            <LoginBottomWrap>
              <div onClick={handleIdFind}>아이디 찾기</div>
              {idFindModal && (
              <>
                <IdFind closeModal={closeIdFindModal} />
                <ModalBackground></ModalBackground>
              </>
            )}
              <hr/>
              <div onClick={handlePasswordFind}>비밀번호 찾기</div>
              {passwordFindModal && (
              <>
                <PasswordFind closeModal={closePasswordFindModal} />
                <ModalBackground></ModalBackground>
              </>
            )}
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
