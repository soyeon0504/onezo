import React, { useState } from "react";
import { passwordGet } from "../../api/login/login_api";
import {
  CancelBt,
  IdBox,
  IdFindStyle,
  LoginBox,
  Logo,
  LogoZone,
  NameBox,
  NumberBox,
  PasswordBtSection,
  PwBox,
  SaveBt
} from "../../styles/login/PwFindStyle";

const PasswordFind = ({ closeModal }) => {
  const [userId, setUserId] = useState("");
  const [userNum, setUserNum] = useState("");
  const [userName, setUserName] = useState("");
  const [userList, setUserList] = useState({ userId: "", password: "", iauth: 0 });

  const [confirmClick, setConfirmClick] = useState(false);
  const [showPwBox, setShowPwBox] = useState(false);


  const loginUserPw = () => {
    setConfirmClick(true);
    // const obj = {
    //   userId: userId,
    //   name: userName,
    //   phone: userNum,
    // };
    passwordGet(setUserList, userId, userName, userNum)
    .then(() => {
      setShowPwBox(true); // 데이터가 성공적으로 받아와지면 IdBox를 표시
    })
    .catch(() => {
      setShowPwBox(false); // 데이터를 받아오지 못하면 IdBox를 숨김
    });
  };

  

  // 상태에 따라 문구 바꾸기
  let content;
if (confirmClick) {
  if (userList.password) {
    content = (
      <p>
        고객님의 비밀번호입니다. <br />
      </p>
    );
  } else {
    content = (
      <p style={{ color: "red" }}>
        존재하지않는 아이디입니다.
        <br />
        다시 입력해주세요.
      </p>
    );
  }
} else {
  content = (
    <p>
      비밀번호를 잊으셨나요? <br />
      아이디, 이름, 휴대폰 번호를 입력해 주세요.
    </p>
  );
}
  return (
    <IdFindStyle>
      <LoginBox mgbtm={"50px"}>
      <LogoZone>
        <Logo src="/images/header/logo.svg" />
      </LogoZone>
      {content}
        {!showPwBox && (
          <div>
          <IdBox 
          type="text"
          placeholder="아이디를 입력해주세요."
            value={userId}
            onChange={e => setUserId(e.target.value)}
          />
          <NameBox 
          type="text"
          placeholder="이름을 입력해주세요."
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <NumberBox
            type="text"
            placeholder="휴대폰 번호 예 ) 010-0000-0000"
            value={userNum}
            onChange={e => setUserNum(e.target.value)}
          />
          {/* <PwBox /> */}
          </div>
        )}
        {showPwBox && <PwBox value={`비밀번호: ${userList.password}`} />}
        <PasswordBtSection>
          <CancelBt onClick={closeModal}>닫기</CancelBt>
          <SaveBt onClick={() => loginUserPw(userId, userName, userNum)}>확인</SaveBt>
          {/* 사용자 정보 : {userList.iauth} : {userList.uid} */}
        </PasswordBtSection>
      </LoginBox>
    </IdFindStyle>
  );
};

export default PasswordFind;
