import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Layout from "../../layouts/Layout";
import {
  CheckButton,
  Essential,
  FormGroup,
  InfoBox,
  InnerWrap,
  JoinButton,
  Wrap,
} from "../../styles/join/JoinStyle";
import { getIdFrom } from "../../api/join/join_api";

const schema = yup
  .object({
    memberId: yup
      .string()
      .min(2, "최소 2자 이상 작성해야 합니다.")
      .max(20, "최대 20자까지 작성 가능합니다.")
      .matches(
        /^[A-Za-z][A-Za-z0-9_]{2,20}$/,
        "아이디는 숫자, 영문으로 작성 가능합니다.",
      )
      .required("아이디를 입력해 주세요."),

    password: yup
      .string()
      .min(4, "최소 4자 이상 작성해야 합니다.")
      .max(20, "최대 20자까지 작성 가능합니다.")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{4,20}$/,
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
      .max(10, "최대 10자까지 작성 가능합니다.")
      .matches(
        /^[A-Za-z0-9가-힣]{4,10}$/,
        "이름은 영어, 한글, 숫자만 가능합니다.",
      )
      .required(),

    nickName: yup
      .string()
      .min(2, "최소 2자 이상 작성해야 합니다.")
      .max(10, "최대 10자까지 작성 가능합니다.")
      .matches(
        /^[A-Za-z0-9가-힣]{2,10}$/,
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

const JoinPage = formState => {
  const [idConfirm, setIdConfirm] = useState(false);
  const [nickConfirm, setNickConfirm] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const userId = watch("userId");
  const password = watch("password");
  const name = watch("name");
  const nickName = watch("nickName");
  const tel = watch("tel");
  const [isValid, setIsValid] = useState(0);

  const [catchErr, setCatchErr] = useState(false);

  // 비밀번호나 전화번호에 대해서도 동일하게 처리할 수 있음
  const idPostSuccess = () => {
    // setIdOverlapConfirm(true);
    // setIdConfirmModal(true);
    alert("성공");
  };

  const idPostFail = () => {
    // setIdFailModal(true);
    alert("실패");
  };

  const idOverlap = () => {
    const obj = {
      div: 2,
      uid: userId,
      nick: "nickName",
    };
    idOverlapPost(
      obj,
      () => {
        setIsValid(2);
        idPostSuccess();
      },
      idPostFail,
    );
  };

  const idNullBt = () => {
    // setNickNullModal(true);
    // 아이디가 없을 때 실행되는 함수
    const userId = getIdFrom(); // 아이디 가져오는 함수 예시
    if (!userId) {
      alert("아이디를 입력해주세요."); // 아이디가 없는 경우 알림창 띄우기
    }
  };

  const idOverlapBt = e => {
    e.preventDefault();
    idOverlap();
    // 아이디 중복 확인 후 실행되는 함수
    const nickname = getIdFrom(); // 아이디 가져오는 함수 예시
    if (userId) {
      alert("이미 사용 중인 아이디입니다."); // 중복된 경우 알림창 띄우기
    } else {
      alert("사용 가능한 아이디입니다."); // 중복되지 않은 경우 알림창 띄우기
    }
  };

  const handlePageChange = () => {
    if (!isValid || !userId || !password || !nickName || !tel ) {
      // 필수 입력 칸이 비어있는 경우
      alert("필수 입력 칸을 모두 채워주세요.");
      return;
    }
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
              {/* yup 적용 */}
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <label htmlFor="memberId">아이디</label>
                  <Essential>*</Essential>
                  <input className="input1" {...register("memberId")} />
                  {/* <CheckButton>중복확인</CheckButton> */}
                  {!userId ? (
                    <CheckButton onClick={idNullBt} type="button">
                      중복 확인
                    </CheckButton>
                  ) : (
                    <CheckButton onClick={idOverlapBt} type="button">
                      중복 확인
                    </CheckButton>
                  )}
                  <div className="message">{errors.memberId?.message}</div>
                </FormGroup>
                <div>{errors.userId?.message}</div>
                {catchErr && !idConfirm && !errors.userId && (
                  <div>아이디 중복 확인을 해주세요.</div>
                )}
                <FormGroup>
                  <label htmlFor="password">비밀번호</label>
                  <Essential>*</Essential>
                  <input
                    className="input2"
                    type="password"
                    {...register("password")}
                  />
                  <div className="message">{errors.password?.message}</div>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="checkPassword">
                    비밀번호<span>&nbsp;</span>확인
                  </label>
                  <Essential>*</Essential>
                  <input
                    className="input3"
                    type="password"
                    {...register("checkPassword")}
                  />
                  <div className="message">{errors.checkPassword?.message}</div>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="name">이름</label>
                  <Essential>*</Essential>
                  <input className="input4" {...register("name")} />
                  <div className="message">{errors.name?.message}</div>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="nickName">닉네임</label>
                  <Essential>*</Essential>
                  <input className="input5" {...register("nickName")} />
                  <CheckButton>중복확인</CheckButton>
                  <div className="message">{errors.nickName?.message}</div>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="tel">연락처</label>
                  <Essential>*</Essential>
                  <input className="input6" {...register("tel")} />
                  <CheckButton>중복확인</CheckButton>
                  <div className="message">{errors.tel?.message}</div>
                </FormGroup>
                {/* 가입하기 버튼 (빈 칸 있을 시 가입 X) */}
                <div className="join-button">
                  {formState.isValid &&
                  nickConfirm &&
                  idConfirm ? (
                    <JoinButton onClick={handlePageChange}>
                      가입하기
                    </JoinButton>
                  ) : (
                    <JoinButton onClick={handlePageChange}>
                      가입하기
                    </JoinButton>
                  )}
                  {/* <JoinButton onClick={() => handlePageChange()}>
                    가입하기
                  </JoinButton> */}
                </div>
              </form>
            </InfoBox>
          </InnerWrap>
        </Wrap>
      </Layout>
    </>
  );
};

export default JoinPage;
