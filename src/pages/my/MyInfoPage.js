import React, { useEffect, useState } from "react";
import {
  InfoForm,
  InfoStyle,
  PasswordInput,
  ShowPasswordBt,
  ShowPasswordImg,
} from "../../styles/my/MyInfoStyle";
import { JoinButton } from "../../styles/join/JoinStyle";
import { useSelector } from "react-redux";
import { getMemberInfo, putMemberInfo } from "../../api/my/my_api";
import Modal_Bt1 from "../../components/modal/Modal_Bt1";
import { ModalBackground } from "../../styles/review/ReveiwStyle";

const MyInfoPage = () => {
  const [data, setData] = useState(null);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // 유저 memberId 값
  const memberId = useSelector(state => state.loginSlice.memberId);

  // 데이터 연동(회원 정보 조회)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getMemberInfo(memberId);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [memberId]);

  useEffect(() => {
    if (data) {
      setUserId(data.userId);
      setName(data.name);
      setNickname(data.nickname);
      setPhoneNumber(data.phone);
    }
  }, [data]);

  // 값 바꾸기
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handlePasswordConfirmChange = e => {
    setPasswordConfirm(e.target.value);
  };
  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleNicknameChange = e => {
    setNickname(e.target.value);
  };
  const handlePhoneNumberChange = e => {
    setPhoneNumber(e.target.value);
  };

  // 데이터 연동(회원 정보 수정)
  const [modifyData, setModifyData] = useState(null);

  const handleModifyButtonClick = async () => {
    setModifyData({
      password: password,
      passwordCheck: passwordConfirm,
      name: name,
      nickname: nickname,
      phone: phoneNumber,
    });
  };

  useEffect(() => {
    const modifyInfo = async () => {
      if (modifyData) {
        await putMemberInfo({ memberId, data: modifyData, successFn, errFn });
      }
    };
    modifyInfo();
  }, [modifyData]);

  const [successModal, setSuccessModal] = useState(false);
  const [errModal, setErrModal] = useState(false);
  const successFn = res => {
    setSuccessModal(true);
  };
  const OkBt = () => {
    setSuccessModal(false);
    setErrModal(false);
  };

  const [errMessage, setErrMessage] = useState("");
  const errFn = res => {
    setErrModal(true);
    {
      res.response.data.errorMessage
        ? setErrMessage(res.response.data.errorMessage)
        : setErrMessage(res.response.data);
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
    <>
      {successModal && (
        <>
          <Modal_Bt1
            txt="회원정보가 성공적으로 업데이트되었습니다."
            onConfirm={OkBt}
          ></Modal_Bt1>
          <ModalBackground></ModalBackground>
        </>
      )}
      {errModal && (
        <>
          <Modal_Bt1 txt={errMessage} onConfirm={OkBt}></Modal_Bt1>
          <ModalBackground></ModalBackground>
        </>
      )}
      <InfoStyle>
        <h1>내 정보</h1>
        <InfoForm>
          <div className="bundle">
            <p>아이디</p>
            <input value={userId} readOnly />
          </div>

          <div className="bundle">
            <p>비밀번호</p>
            <PasswordInput>
              <input
                className="input2"
                type={showPassword ? "text" : "password"}
                minLength={4}
                maxLength={20}
                placeholder="특수문자 포함 4~20자 이내"
                value={password}
                onChange={handlePasswordChange}
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
                minLength={4}
                maxLength={20}
                placeholder="특수문자 포함 4~20자 이내"
                value={passwordConfirm}
                onChange={handlePasswordConfirmChange}
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
            <input
              className="input4"
              type="text"
              maxLength={10}
              placeholder="10자 이내"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="bundle">
            <p>닉네임</p>
            <input
              type="text"
              minLength={2}
              maxLength={15}
              placeholder="2~15자 이내"
              value={nickname}
              onChange={handleNicknameChange}
            />
          </div>

          <div className="bundle">
            <p>연락처</p>
            <input
              type="text"
              placeholder="예) 010-0000-0000"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
          <div className="join-button">
            <JoinButton onClick={handleModifyButtonClick} type="button">
              수정하기
            </JoinButton>
          </div>
        </InfoForm>
      </InfoStyle>
    </>
  );
};

export default MyInfoPage;
