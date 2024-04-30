import axios from "axios";
import { SERVER_URL } from "../config";

// 중복확인(닉네임)
export const nickOverlapPost = async (
  obj,
  nickPostSuccess,
  nickPostFail,
) => {
  try {
    const res = await axios.post(`${SERVER_URL}/auth/checkNickname`, obj);
    const resStatus = res.status.toString();
    if (resStatus.charAt(0) === "2") {
      console.log({ ...res.data });
      nickPostSuccess(res.data);
    // } else if (res.status == 427) {
    //   nickPostFail();
    } else {
      alert("데이터 전송에 실패했습니다.");
    }
  } catch (error) {
    nickPostFail();
  }
};

// 중복확인(아이디)
export const idOverlapPost = async (
  obj,
  idPostSuccess,
  idPostFail,
) => {
  try {
    const res = await axios.post(`${SERVER_URL}/auth/checkId`, obj);
    const resStatus = res.status.toString();
    if (resStatus.charAt(0) === "2") {
      console.log({ ...res.data });
      idPostSuccess(res.data);
    // } else if (res.status == 432) {
    //   idPostFail();
    } else {
      alert("데이터 전송에 실패했습니다.");
    }
  } catch (error) {
    // idPostFail();
  }
};



// 본인인증 요청
export const verificationPost = async obj => {
  try {
    const res = await axios.post(`${SERVER_URL}/api/user/verification`, obj);
    return res.data;
  } catch (error) {
    console.log("error");
  }
};

export const verificationGet = async id => {
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
};


// 회원가입
export const joinPost = async ({obj}) => {
  try {
    const header = {headers: {"Content-Type": "multipart/form-data"}};
    const res = await axios.post(`${SERVER_URL}/auth/signUp`, obj, header);
    const resStatus = res.status.toString();
    if (resStatus.charAt(0) === "2") {
      console.log({ ...res.data });
      // postSuccess(res.data);
      return res.data;
    } else {
      alert("데이터 전송에 실패했습니다.");
    }
  } catch (error) {
    console.log(error);
    // postFail();
  }
};