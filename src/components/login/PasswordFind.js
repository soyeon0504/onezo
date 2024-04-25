import React, { useEffect, useState } from "react";
import {
  IdBox,
  LoginBox,
  Logo,
  LogoZone,
  IdFindStyle,
  BtSection, CancelBt, SaveBt
} from "../../styles/login/IdFindStyle";
import { passwordPost } from "../../api/login/login_api";

const PasswordFind = ({ closeModal }) => {
  const [userId, setUserId] = useState("");
  const [userList, setUserList] = useState({ uid: "", iauth: 0 });

  const [confirmClick, setConfirmClick] = useState(false);
  const loginUserId = () => {
    setConfirmClick(true);
    const obj = {
      id: userId,
    };
    passwordPost(obj, setUserList);
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
      아이디를 입력해 주세요.
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
          <IdBox
            type="text"
            value={userId}
            onChange={e => setUserId(e.target.value)}
          />
        )}
        {/* {userList.uid && <IdBox value={`비밀번호: ${userList.uid}`} />} */}
        <BtSection>
          <CancelBt onClick={closeModal}>닫기</CancelBt>
          <SaveBt onClick={() => loginUserId(userId)}>확인</SaveBt>
          {/* 사용자 정보 : {userList.iauth} : {userList.uid} */}
        </BtSection>
      </LoginBox>
    </IdFindStyle>
  );
};

export default PasswordFind;
