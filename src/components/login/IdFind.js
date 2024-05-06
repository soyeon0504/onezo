import React, { useState } from "react";
import { idGet } from "../../api/login/login_api";
import {
  CancelBt,
  IdBox,
  IdBtSection,
  IdFindStyle,
  InputBundle,
  LoginBox,
  Logo,
  LogoZone,
  NameBox,
  NumberBox,
  SaveBt
} from "../../styles/login/IdFindStyle";

const IdFind = ({ closeModal }) => {
  const [userName, setUserName] = useState("");
  const [userNum, setUserNum] = useState("");
  const [userList, setUserList] = useState({ userId: "", iauth: 0 });

  const [confirmClick, setConfirmClick] = useState(false);
  const [showIdBox, setShowIdBox] = useState(false); // IdBox 상태 추가


  const loginUserId = () => {
    setConfirmClick(true);
    // const obj = {
    //   name: userName,
    //   phone: userNum,
    // };
    idGet(setUserList, userName, userNum)
    // idGet(obj, setUserList)
    .then(() => {
      setShowIdBox(true); // 데이터가 성공적으로 받아와지면 IdBox를 표시
    })
    .catch(() => {
      setShowIdBox(false); // 데이터를 받아오지 못하면 IdBox를 숨김
    });
  };

  // 상태에 따라 문구 바꾸기
  let content;
if (confirmClick) {
  if (userList.userId) {
    content = (
      <p>
        고객님의 아이디입니다. <br />
      </p>
    );
  } else {
    content = (
      <p style={{ color: "red" }}>
        잘못된 이름 또는 휴대폰 번호입니다.
        <br />
        다시 입력해주세요.
      </p>
    );
  }
} else {
  content = (
    <p>
      아이디를 잊으셨나요? <br />
      이름과 휴대폰 번호를 입력해 주세요.
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
      {!showIdBox && (
          <InputBundle>
          <NameBox 
          type="text"
          placeholder="이름을 입력해주세요."
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <NumberBox
            type="text"
            placeholder="휴대폰 번호 예) 010-0000-0000"
            value={userNum}
            onChange={e => setUserNum(e.target.value)}
          />
          {/* <IdBox /> */}
          </InputBundle>
        )}
        {showIdBox && <IdBox value={`아이디: ${userList.userId}`} />} {/* showIdBox가 true인 경우에만 IdBox 표시 */}
        <IdBtSection>
          <CancelBt onClick={closeModal}>닫기</CancelBt>
          <SaveBt onClick={() => loginUserId(userName,userNum)}>확인</SaveBt>
          {/* 사용자 정보 : {userList.iauth} : {userList.uid} */}
        </IdBtSection>
      </LoginBox>
    </IdFindStyle>
  );
};

export default IdFind;
