import axios from "axios";
import { getCookie, setCookie } from "./cookieUtil";
import { SERVER_URL } from "../api/config";

export const jwtAxios = axios.create();

const beforeReq = config => {
  // console.log("1. 요청전 전달", config);
  // console.log("2. 쿠키로 토큰가져오기");
  const memberInfo = getCookie("member");

  if (!memberInfo) {
    // console.log("쿠키 정보 없네요.");
    return Promise.reject({ response: { data: { error: "Login하세요." } } });
  }
  // console.log("3. 쿠키에서 토큰 정보를 뜯는다.");
  const { accessToken } = memberInfo;
  // console.log("4. 엑세스토큰 정보", accessToken);
  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};

const requestFail = error => {
  // console.log("요청후 실패시", error);
  return Promise.reject(error);
};

// const refreshJWT = async (accessToken, refreshToken) => {
//   const host = SERVER_URL;
//   const header = { headers: { Authorization: `Bearer ${accessToken}` } };
//   const res = await axios.get(
//     `${host}/api/user/refresh-token?refreshToken=${refreshToken}`,
//     header,
//   );
//   // console.log("1. refreshToken 토큰 요청");
//   // console.log("2. 백엔드에서 새로 준 값", res.data);
//   return res.data;
// };

const beforeRes = async res => {
  // console.log("Response 전처리", res);
  const data = res.data;
  // console.log("1. Response 오기전 서버 전달해준 데이터, data");
  if (data && data.error === "ERROR_ACCESS_TOKEN") {
    // console.log("2. 일반적 오류가 아닌 엑세스 토큰 에러입니다.");
    // console.log("3. 새로운 토큰을 요청해야 합니다.");
    // console.log("4. 쿠키에 있는 정보를 읽어서 다시 시도합니다.");
    const memberInfo = getCookie("member");
    // console.log("5. 쿠키 토큰 정보 AccessToken", memberInfo.accessToken);
    // console.log("6. 쿠키 토큰 정보 RefreshToken", memberInfo.refreshToken);
    // console.log("7. 위의 정보로 새로운 토큰을 요청합니다.");
    const result = await refreshJWT(
      memberInfo.accessToken,
      memberInfo.refreshToken,
    );
    // console.log("8. 요청 이후 되돌아와서 새로운 정보로 쿠키를 업데이트");
    (memberInfo.accessToken = result.accessToken),
      (memberInfo.refreshToken = result.refreshToken),
      setCookie("member", JSON.stringify(memberInfo));

    // console.log("9. 데이터 요청하던 API 재요청");
    const originalRequest = res.config;
    originalRequest.headers.Authorization = `Bearer ${result.accessToken}`;
    return await axios(originalRequest);
  }
  return res;
};

const responseFail = error => {
  // console.log("Response Fail Err", error);
  return Promise.reject(error);
};

jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);
