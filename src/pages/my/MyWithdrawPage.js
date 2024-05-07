import React, { useState } from "react";
import { PasswordSection, WithdrawForm, WithdrawStyle } from "../../styles/my/MyWithdrawStyle";
import { deleteMemberInfo } from "../../api/my/my_api";
import { ShowPasswordImg } from "../../styles/my/MyInfoStyle";

const MyWithdrawPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  // 데이터 연동(회원 탈퇴)
  const handleWithdraw = async () => {
    try {
      const data = {
        userId: id,
        password: password,
        phone: phone,
      };
      await deleteMemberInfo(data);
      alert("회원 탈퇴가 성공적으로 처리되었습니다.");
    } catch (error) {
      console.error(error);
    }
  };

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
    <WithdrawStyle>
      <h1>회원 탈퇴</h1>
      <WithdrawForm>
        <div>
          <h2>아이디</h2>
          <input
            type="text"
            maxLength={15}
            placeholder="아이디"
            value={id}
            onChange={e => setId(e.target.value)}
          />
        </div>
        <div>
          <h2>비밀번호</h2>
          <PasswordSection>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button type="button" onClick={handleTogglePassword}>
              {showPassword ? (
                <img src="/images/my/eye_open.png" />
              ) : (
                <img src="/images/my/eye_close.png" />
              )}
            </button>
          </PasswordSection>
        </div>
        <div>
          <h2>연락처</h2>
          <input
            type="text"
            maxLength={14}
            placeholder="휴대폰 번호"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <h3>※ 탈퇴한 아이디로는 다시 가입할 수 없습니다.</h3>{" "}
        <h3>
          {" "}
          ※ 탈퇴한 뒤에는 아이디 및 데이터를 복구할 수 없으니 신중히 진행하세요.
        </h3>
        <button onClick={handleWithdraw}>회원 탈퇴</button>
      </WithdrawForm>
    </WithdrawStyle>
  );
};

export default MyWithdrawPage;
