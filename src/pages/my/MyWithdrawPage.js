import React from "react";
import { WithdrawForm, WithdrawStyle } from "../../styles/my/MyWithdrawStyle";

const MyWithdrawPage = () => {
  return (
    <WithdrawStyle>
      <h1>회원 탈퇴</h1>
      <WithdrawForm>
        <div>
          <h2>아이디</h2>
          <input />
        </div>
        <div>
          <h2>비밀번호</h2>
          <input />
        </div>
        <div>
          <h2>연락처</h2>
          <input />
        </div>
        <h3>※ 탈퇴한 아이디로는 다시 가입할 수 없습니다.</h3>{" "}
        <h3>
          {" "}
          ※ 탈퇴한 뒤에는 아이디 및 데이터를 복구할 수 없으니 신중히 진행하세요.
        </h3>
        <button>회원 탈퇴</button>
      </WithdrawForm>
    </WithdrawStyle>
  );
};

export default MyWithdrawPage;
