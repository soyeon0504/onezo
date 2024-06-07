import { jwtAxios } from "../../util/jwtUtil";
import { SERVER_URL } from "../config";

// 주문 List 조회
export const getOrderList = async () => {
  try {
    const url = `${SERVER_URL}/api/purchase/record`;

    const res = await jwtAxios.get(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 주문상세
export const getOrderDetail = async id => {
  try {
    const url = `${SERVER_URL}/api/purchase/detail/{id}?id=${id}`;

    const res = await jwtAxios.get(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 리뷰작성
export const postReview = async ({ comment, storeId, star }) => {
  try {
    const url = `${SERVER_URL}/api/review/up`;

    const res = await jwtAxios.post(url, { comment, storeId, star });
    return res;
  } catch (error) {
    console.log(error);
  }
};
