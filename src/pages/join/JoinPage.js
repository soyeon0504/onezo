import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";
import {
  CheckButton,
  InfoBox,
  InnerWrap,
  JoinButton,
  Wrap,
} from "../../styles/join/JoinStyle";

const schema = yup
  .object({
    memberId: yup
      .string()
      .min(6, "최소 6자 이상 작성해야 합니다.")
      .max(12, "최대 12자까지 작성 가능합니다.")
      .matches(
        /^[A-Za-z][A-Za-z0-9_]{6,12}$/,
        "아이디는 숫자, 영문으로 작성 가능합니다.",
      )
      .required("비밀번호를 입력해 주세요."),

    password: yup
      .string()
      .min(8, "최소 8자 이상 작성해야 합니다.")
      .max(16, "최대 16자까지 작성 가능합니다.")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,16}$/,
        "비밀번호는 영어, 숫자, 특수문자만 가능합니다.",
      )
      .required("비밀번호를 입력해 주세요!"),

    checkPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다")
      .required("비밀번호를 한번 더 입력해 주세요"),

    name: yup
      .string()
      .min(4, "최소 4자 이상 작성해야 합니다.")
      .max(12, "최대 12자까지 작성 가능합니다.")
      .matches(
        /^[A-Za-z0-9가-힣]{4,12}$/,
        "이름은 영어, 한글, 숫자만 가능합니다.",
      )
      .required(),

      nickName: yup
      .string()
      .min(4, "최소 4자 이상 작성해야 합니다.")
      .max(12, "최대 12자까지 작성 가능합니다.")
      .matches(
        /^[A-Za-z0-9가-힣]{4,12}$/,
        "닉네임은 영어, 한글, 숫자만 가능합니다.",
      )
      .required(),  

    tel: yup
      .string()
      .matches(
        /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
        "번호를 정확히 입력해 주세요.",
      ),
  })
  .required();

const JoinPage = () => {
  const navigate = useNavigate(`/`);

  const handlePageChange = () => {
    const url = `/login`;
    navigate(url);
  };
  return (
    <>
      <Layout>
        <Wrap>
          <InnerWrap>
            <div className="join-title">회원가입</div>
            <InfoBox>
              <div className="bundle">
                <p>아이디</p>
                <p className="nec">*</p>
                <input className="input1" />
                <CheckButton>중복확인</CheckButton>
              </div>
              <div className="bundle">
                <p>비밀번호</p>
                <p className="nec">*</p>
                <input className="input2" />
              </div>
              <div className="bundle">
                <p>
                  비밀번호<span>&nbsp;</span>확인
                </p>
                <p className="nec">*</p>
                <input className="input3" />
              </div>
              <div className="bundle">
                <p>이름</p>
                <p className="nec">*</p>
                <input className="input4" />
              </div>
              <div className="bundle">
                <p>닉네임</p>
                <p className="nec">*</p>
                <input className="input5" />
                <CheckButton>중복확인</CheckButton>
              </div>
              <div className="bundle">
                <p>연락처</p>
                <p className="nec">*</p>
                <input className="input6" />
                <CheckButton>중복확인</CheckButton>
              </div>
              <div className="join-button">
                <JoinButton onClick={() => handlePageChange()}>
                  가입하기
                </JoinButton>
              </div>
            </InfoBox>
          </InnerWrap>
        </Wrap>
      </Layout>
    </>
  );
};

export default JoinPage;
