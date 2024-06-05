import axios from "axios";
import { SERVER_URL } from "../config";

// 중복확인(닉네임)
export const nickOverlapPost = async (nickname) => {
    try {
      const url = `${SERVER_URL}/auth/checkNickname`
      const res = await axios.post(url, nickname);
      return res;
    } catch (error) {
      // idPostFail();
    }
};

// 중복확인(아이디)
export const idOverlapPost = async (storeId, orderId) => {
  try {
    const url = `${SERVER_URL}orders/accept/${storeId}/${orderId}`
    const res = await axios.post(url, userId);
    return res;
  } catch (error) {
    // idPostFail();
  }
};

// 본인인증 요청
// export const verificationPost = async obj => {
//   try {
//     const res = await axios.post(`${SERVER_URL}/api/user/verification`, obj);
//     return res.data;
//   } catch (error) {
//     console.log("error");
//   }
// };

// export const verificationGet = async id => {
//   try {
//     if (!id) {
//       console.log("id가 정의되지 않았습니다.");
//       return; // id가 정의되지 않은 경우 함수 종료
//     }
//     const res = await axios.get(`${SERVER_URL}/api/user/verification?id=${id}`);
//     return res.data;
//   } catch (error) {
//     console.log("error");
//   }
// };


// 회원가입
export const joinPost = async (obj, errorFn) => {
  // try {
  //   const res = await axios.post(`${SERVER_URL}/auth/signUp`, obj);
  //   const resStatus = res.status.toString();
  //   if (resStatus.charAt(0) === "2") {
  //     // console.log({ ...res.data });
  //     joinPostSuccess(res.data);
  //     return res.data;
  //   } else {
  //     alert("데이터 전송에 실패했습니다.");
  //   }
  // } catch (error) {
  //   console.log(error);
  //   // postFail();
  // }
  try {
    const url = `${SERVER_URL}/auth/signUp`
    const res = await axios.post(url, obj);
    return res;
  } catch (error) {
    // idPostFail();
    errorFn(error);
    console.log(error);
  }
};