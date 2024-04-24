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