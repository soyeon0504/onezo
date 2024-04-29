import axios from "axios";
import { SERVER_URL } from "../config";

// 아이디 중복확인
export const getIdFrom = async (obj, idPostSuccess, idPostFail) => {
  try {
    // API 호출
    const res = await axios.post(`${SERVER_URL}/api/user/check`, obj);
    const status = res.status.toString();
    if (status.charAt(0) === "2") {
        console.log({ ...res.data });
        idPostSuccess(res.data);
        // } else if (res.status == 432) {
        //   idPostFail();
      } else {
        alert("데이터 전송에 실패했습니다.");
      }
    } catch (error) {
    //   idPostFail();
    }
};

// 닉네임 중복확인
export const getNickNameFrom = async (obj, idPostSuccess, idPostFail) => {
    try {
      // API 호출
      const res = await axios.post(`${SERVER_URL}/api/user/check`, obj);
      const status = res.status.toString();
      if (status.charAt(0) === "2") {
          console.log({ ...res.data });
          idPostSuccess(res.data);
          // } else if (res.status == 432) {
          //   idPostFail();
        } else {
          alert("데이터 전송에 실패했습니다.");
        }
      } catch (error) {
      //   idPostFail();
      }
  };

  // 연락처 중복확인
export const getTelFrom = async (obj, idPostSuccess, idPostFail) => {
    try {
      // API 호출
      const res = await axios.post(`${SERVER_URL}/api/user/check`, obj);
      const status = res.status.toString();
      if (status.charAt(0) === "2") {
          console.log({ ...res.data });
          idPostSuccess(res.data);
          // } else if (res.status == 432) {
          //   idPostFail();
        } else {
          alert("데이터 전송에 실패했습니다.");
        }
      } catch (error) {
      //   idPostFail();
      }
  };


  // 본인인증 요청
export const verificationPost = async (obj) => {
  try {
    const res = await axios.post(`${SERVER_URL}/api/user/verification`, obj);
    return res.data;
  } catch (error) {
    console.log("error");
  }
}

export const verificationGet = async (id) => {
  try {
    if (!id) {
      console.log("id가 정의되지 않았습니다.");
      return; // id가 정의되지 않은 경우 함수 종료
    }
    const res = await axios.get(`${SERVER_URL}/api/user/verification?id=${id}`);
    return res.data;
  } catch (error) {
    console.log("error");
  }
}