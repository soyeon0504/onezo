import { jwtAxios } from "../../util/jwtUtil";
import { SERVER_URL } from "../config";

// 회원 정보 조회
export const getMemberInfo = async (memberId) => {
  try {
    const url = `${SERVER_URL}/auth/info/${memberId}`;

    const res = await jwtAxios.get(url);
    //setMemberInfo(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 회원 정보 수정
export const putMemberInfo = async ({ memberId, data }) => {
  try {
    const url = `${SERVER_URL}/auth/update/${memberId}`;

    const res = await jwtAxios.put(url, data);
    alert("회원정보가 성공적으로 업데이트되었습니다.")
    return res;
  } catch (error) {
    alert("회원 정보 수정 중 오류가 발생했습니다.")
    console.log(error);
  }
};

// 회원 탈퇴
export const deleteMemberInfo = async ({ memberId, data }) => {
  try {
    const url = `${SERVER_URL}/auth/resign/${memberId}`;

    const res = await jwtAxios.put(url, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
