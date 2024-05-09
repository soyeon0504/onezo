import { jwtAxios } from "../../util/jwtUtil";
import { SERVER_URL } from "../config";

// 회원 정보 조회
export const getMemberInfo = async memberId => {
  try {
    const url = `${SERVER_URL}/auth/info/${memberId}`;

    const res = await jwtAxios.get(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 회원 정보 수정
export const putMemberInfo = async ({ memberId, data, successFn, errFn }) => {
  try {
    const url = `${SERVER_URL}/auth/update/${memberId}`;

    const res = await jwtAxios.put(url, data);
    successFn();
    return res;
  } catch (error) {
    errFn(error);
  }
};

// 회원 탈퇴
export const deleteMemberInfo = async ({
  memberId,
  data,
  successFn,
  errFn,
}) => {
  try {
    const url = `${SERVER_URL}/auth/resign/${memberId}`;

    const res = await jwtAxios.put(url, data);
    successFn();
    return res.data;
  } catch (error) {
    errFn();
  }
};
