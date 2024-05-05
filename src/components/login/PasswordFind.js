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
  SaveBt
} from "../../styles/login/PwFindStyle";

const PasswordFind = ({ closeModal }) => {
  const [userId, setUserId] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [userList, setUserList] = useState({ uid: "", iauth: 0 });

  const [confirmClick, setConfirmClick] = useState(false);
  const loginUserId = () => {
    setConfirmClick(true);
    const obj = {
      id: userId,
    };
    passwordGet(obj, setUserList);
  };

  

  // 상태에 따라 문구 바꾸기
  let content;
if (confirmClick) {
  if (userList.uid !== "") {
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
        {!userList.uid && (
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
            value={userNumber}
            onChange={e => setUserNumber(e.target.value)}
          />
          </div>
        )}
        {/* {userList.uid && <IdBox value={`비밀번호: ${userList.uid}`} />} */}
        <PasswordBtSection>
          <CancelBt onClick={closeModal}>닫기</CancelBt>
          <SaveBt onClick={() => loginUserId(userId)}>확인</SaveBt>
          {/* 사용자 정보 : {userList.iauth} : {userList.uid} */}
        </PasswordBtSection>
      </LoginBox>
    </IdFindStyle>
  );
};

export default PasswordFind;
