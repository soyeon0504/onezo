import axios from "axios";
import { SERVER_URL } from "../config";

// const path = `${SERVER_URL}/api/user`;

// 로그인
export const loginPost = async ({ loginParam, successFn, failFn }) => {
  try {
    console.log(loginParam)
    const header = { headers: { "Content-Type": "application/json" } };
    const data = {
      userId: loginParam.userId,
      password: loginParam.password,
    };
    const res = await axios.post(`${SERVER_URL}/auth/login`, data, header);
    if (res && res.status < 400) {
      successFn(res.data);
      return res.data;
    } else if(res === 401) {
      failFn("로그인에 실패하였습니다. 다시 시도해주세요");
    }
  } catch (error) {
    // errorFn(error);
    error;
  }
};

// 아이디 찾기
export const idGet = async (setUserList, name, phone) => {
  try {
    const res = await axios.get(`${SERVER_URL}/auth/findId/${name}/${phone}`);
    // const resStatus = res.status.toString();
    if (res.status === 200) {
      setUserList({ ...res.data });
    } else {
      alert("데이터 전송에 실패했습니다.");
    }
  } catch (error) {
    console.log("error");
  }
};


// 비밀번호 찾기
export const passwordGet = async (setUserList, userId, name, phone) => {
  try {
    // const url = `${SERVER_URL}/api/user/id`
    const res = await axios.get(`${SERVER_URL}/auth/findPw/${userId}/${name}/${phone}`);
    // const resStatus = res.status.toString();
    if (res.status === 200) {
      console.log(res.data)
      setUserList({ ...res.data });
    } else {
      alert("데이터 전송에 실패했습니다.");
    }
  } catch (error) {
    console.log("error");
  }
};