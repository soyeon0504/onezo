import { jwtAxios } from "../../util/jwtUtil";
import { SERVER_URL } from "../config";

// 회원 정보 조회
export const getMemberInfo = async () => {
  try {
    const url = `${SERVER_URL}/auth/info`;

    const res = await jwtAxios.get(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 회원 정보 수정
export const putMemberInfo = async ({ data, successFn, errFn }) => {
  try {
    const url = `${SERVER_URL}/auth/update`;

    const res = await jwtAxios.put(url, data);
    successFn();
    return res;
  } catch (error) {
    errFn(error);
  }
};

// 회원 탈퇴
export const deleteMemberInfo = async ({
  data,
  successFn,
  errFn,
}) => {
  try {
    const url = `${SERVER_URL}/auth/resign`;

    const res = await jwtAxios.put(url, data);
    successFn();
    return res.data;
  } catch (error) {
    errFn();
  }
};
