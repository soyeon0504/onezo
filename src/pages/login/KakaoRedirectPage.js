// 담당자: 사공은진
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  getAccessToken,
  getMemberWithAccessToken,
} from "../../api/login/kakao_api";
import { useDispatch } from "react-redux";
import { login } from "../../slices/loginSlice";
import useCustomLogin from "../../hooks/useCustomLogin";
import { idOverlapPost } from "../../api/join/join_api";

const KakaoRedirectPage = () => {
  const navigate = useNavigate();
  const [uRLSearchParams, setURLSearchParams] = useSearchParams();
  // 인증코드 파악하기
  const authCode = uRLSearchParams.get("code");
  // 로그인 과정을 위한 loginSlice 을 통해서 로그인시도
  const dispatch = useDispatch();
  const { moveToPath } = useCustomLogin();

  // 인증코드로 Access Token 요청하기
  useEffect(() => {
    getAccessToken(authCode).then(async accessToken => {
      // async keyword added
      console.log("access Token", accessToken);
      // 개인 정보 호출
      getMemberWithAccessToken(accessToken).then(async memberInfo => {
        // async keyword added
        // API 백엔드 서버로 로그인을 시도합니다.
        dispatch(login(memberInfo));

        // 사용자의 닉네임과 이메일을 가져옵니다.
        const nickname = memberInfo["properties"]["nickname"];
        const email = memberInfo["kakao_account"]["email"];
        const uniqueID = memberInfo.id;
        console.log("Unique ID: ", uniqueID);
        console.log("Nickname: ", nickname);
        console.log("Email: ", email);

        
        navigate(`/`);
      });
    });
  }, [authCode]);

  return (
    <div>
      <h1>카카오 리다이렉트 페이지</h1>
      <div>{authCode}</div>
    </div>
  );
};
export default KakaoRedirectPage;
