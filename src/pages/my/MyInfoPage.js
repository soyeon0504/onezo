import React, { useState } from "react";
import {
  InfoForm,
  InfoStyle,
  PasswordInput,
  ShowPasswordBt,
  ShowPasswordImg,
} from "../../styles/my/MyInfoStyle";
import { CheckButton, JoinButton } from "../../styles/join/JoinStyle";

const MyInfoData = {
  id: "onezo123",
  name: "김그린",
  nick: "그린컴퓨터",
  phone: "01012341234",
};

const MyInfoPage = () => {
  // 비밀번호 보이기/감추기
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };
  const handleTogglePasswordConfirm = () => {
    setShowPasswordConfirm(prev => !prev);
  };

  return (
    <>
      <InfoStyle>
        <h1>내 정보</h1>
        <InfoForm>
          <div className="bundle">
            <p>아이디</p>
            <input className="input1" />
            <CheckButton>중복확인</CheckButton>
          </div>

          <div className="bundle">
            <p>비밀번호</p>
            <PasswordInput>
              <input
                className="input2"
                type={showPassword ? "text" : "password"}
              />
              <ShowPasswordBt type="button" onClick={handleTogglePassword}>
                {showPassword ? (
                  <ShowPasswordImg src="/images/my/eye_open.png" />
                ) : (
                  <ShowPasswordImg src="/images/my/eye_close.png" />
                )}
              </ShowPasswordBt>
            </PasswordInput>
          </div>

          <div className="bundle">
            <p>
              비밀번호<span>&nbsp;</span>확인
            </p>
            <PasswordInput>
              <input
                className="input3"
                type={showPasswordConfirm ? "text" : "password"}
              />
              <ShowPasswordBt
                type="button"
                onClick={handleTogglePasswordConfirm}
              >
                {showPasswordConfirm ? (
                  <ShowPasswordImg src="/images/my/eye_open.png" />
                ) : (
                  <ShowPasswordImg src="/images/my/eye_close.png" />
                )}
              </ShowPasswordBt>
            </PasswordInput>
          </div>

          <div className="bundle">
            <p>이름</p>
            <input className="input4" />
          </div>
          <div className="bundle">
            <p>닉네임</p>
            <input className="input5" />
            <CheckButton>중복확인</CheckButton>
          </div>
          <div className="bundle">
            <p>연락처</p>
            <input className="input6" />
            <CheckButton>중복확인</CheckButton>
          </div>
          <div className="join-button">
            <JoinButton>수정하기</JoinButton>
          </div>
        </InfoForm>
      </InfoStyle>
    </>
  );
};

export default MyInfoPage;
