import React, { useEffect, useState } from "react";
import {
  PasswordSection,
  WithdrawForm,
  WithdrawStyle,
} from "../../styles/my/MyWithdrawStyle";
import { deleteMemberInfo } from "../../api/my/my_api";
import { ShowPasswordImg } from "../../styles/my/MyInfoStyle";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import { ModalBackground } from "../../styles/review/ReveiwStyle";
import Modal_Bt2 from "../../components/modal/Modal_Bt2";
import Modal_Bt1 from "../../components/modal/Modal_Bt1";

const MyWithdrawPage = () => {
  // 유저 memberId 값
  const memberId = useSelector(state => state.loginSlice.memberId);

  const [data, setData] = useState(null);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  // 데이터 연동(회원 탈퇴)
  const navigate = useNavigate();
  const { doLogout } = useCustomLogin();
  const [showModal, setShowModal] = useState(false);

  const handleClickBt = async () => {
    setShowModal(true);
  };

  const handleWithdraw = async () => {
    setData({
      userId: userId,
      password: password,
      phone: phone,
    });
    setShowModal(false);
  };

  useEffect(() => {
    const deleteInfo = async () => {
      if (data) {
        await deleteMemberInfo({ memberId, data, successFn, errFn });
      }
    };
    deleteInfo();
  }, [data]);

  const handlecloseModal = () => {
    setShowModal(false);
  };

  const [successModal, setSuccessModal] = useState(false);
  const [errModal, setErrModal] = useState(false);
  const successFn = () => {
    setSuccessModal(true);
  };
  const SuccessModalOkBt = () => {
    setSuccessModal(false);
    doLogout();
    navigate(`/`);
  };

  const errFn = () => {
    setErrModal(true);
  };
  const errFnOkBt = () => {
    setErrModal(false);
  };

  // 비밀번호 보이기/감추기
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <WithdrawStyle>
      {showModal && (
        <>
          <Modal_Bt2
            onCancel={handlecloseModal}
            onConfirm={handleWithdraw}
          ></Modal_Bt2>
          <ModalBackground></ModalBackground>
        </>
      )}
      {successModal && (
        <>
          <Modal_Bt1
            txt="회원탈퇴가 성공적으로 처리되었습니다."
            onConfirm={SuccessModalOkBt}
          ></Modal_Bt1>
          <ModalBackground></ModalBackground>
        </>
      )}
      {errModal && (
        <>
          <Modal_Bt1
            txt="회원 정보를 잘못 입력하였습니다."
            onConfirm={errFnOkBt}
          ></Modal_Bt1>
          <ModalBackground></ModalBackground>
        </>
      )}
      <h1>회원 탈퇴</h1>
      <WithdrawForm>
        <div>
          <h2>아이디</h2>
          <input
            type="text"
            minLength={5}
            maxLength={20}
            placeholder="아이디"
            value={userId}
            onChange={e => setUserId(e.target.value)}
          />
        </div>
        <div>
          <h2>비밀번호</h2>
          <PasswordSection>
            <input
              type={showPassword ? "text" : "password"}
              minLength={4}
              maxLength={20}
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
            placeholder="예) 010-0000-0000"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>
        <h3>※ 탈퇴한 아이디로는 다시 가입할 수 없습니다.</h3>{" "}
        <h3>
          {" "}
          ※ 탈퇴한 뒤에는 아이디 및 데이터를 복구할 수 없으니 신중히 진행하세요.
        </h3>
        <button onClick={handleClickBt} type="button">
          회원 탈퇴
        </button>
      </WithdrawForm>
    </WithdrawStyle>
  );
};

export default MyWithdrawPage;
