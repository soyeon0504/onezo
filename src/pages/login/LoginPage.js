// 프론트 박소연 담당
import React, { useState } from "react";
import {
  InputWrap,
  LoginBottomWrap,
  LoginButton,
  LoginFooter,
  LoginInnerWrap,
  LoginWrap,
  Wrap,
  ModalBackground,
} from "../../styles/login/LoginStyle";
import IdFind from "../../components/login/IdFind";
import PasswordFind from "../../components/login/PasswordFind";
import Layout from "../../layouts/Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useCustomLogin from "../../hooks/useCustomLogin";
import JoinPopUp from "../../components/joinpopup/JoinPopUp";
import { loginPost } from "../../api/login/login_api";
import { login, loginPostAsync } from "../../slices/loginSlice";
import { setCookie } from "../../util/cookieUtil";

const initState = {
  userId: "",
  password: "",
};
const LoginPage = () => {
  const navigate = useNavigate();
  const [loginParam, setLoginParam] = useState(initState);
  const handleChange = e => {
    loginParam[e.target.name] = e.target.value;
    setLoginParam({ ...loginParam });
  };
  // 커스텀훅 사용하기
  const { doLogin, moveToPath } = useCustomLogin();
  // const dispatch = useDispatch();
  const handleClick = e => {
    doLogin({ loginParam, successFn, failFn, errorFn });
    // dispatch(loginPostAsync({ loginParam, successFn, failFn, errorFn }));
  };
  // const handleClick = async () => {
  //   dispatch(loginPostAsync({ loginParam, successFn, failFn }));
  //   try {
  //     await doLogin({ loginParam, successFn, failFn });
  //   } catch (error) {
  //     console.log("login error");
  //   }
  // };

  const successFn = result => {
    console.log("성공", result);
    moveToPath("/");
  };
  const failFn = result => {
    // alert("로그인에 실패하였습니다. 아이디와 비밀번호를 다시 확인해주세요.")
    console.log("실패", result);
  };
  const errorFn = result => {
    alert("아이디와 비밀번호를 다시 확인해주세요.")
    moveToPath("/login")
    console.log("서버 에러", result);
  };

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
    const url = "/";
    navigate(url);
  };

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
            <JoinPopUp
              txt="비밀번호를 확인해주세요."
              onConfirm={closePwModal}
            />
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
                  <img src="../../images/login/person.svg" />
                  <input
                    type="text"
                    maxLength={20}
                    name="userId"
                    value={loginParam.userId}
                    onChange={e => handleChange(e)}
                    placeholder="아이디를 입력해주세요."
                    className="userId"
                  ></input>
                </div>
                <div className="password-box">
                  <img src="../../images/login/lock2.svg" />
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
                  <hr />
                  <div onClick={handlePasswordFind}>비밀번호 찾기</div>
                  {passwordFindModal && (
                    <>
                      <PasswordFind closeModal={closePasswordFindModal} />
                      <ModalBackground></ModalBackground>
                    </>
                  )}
                  <hr />
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
