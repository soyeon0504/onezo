import { jwtAxios } from "../../util/jwtUtil";
import { SERVER_URL } from "../config";

// 매장 상세조회
export const getShopInfo = async storeId => {
  try {
    const url = `${SERVER_URL}/api/store/detail/${storeId}`;

    const res = await jwtAxios.get(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 관심매장 등록
export const postInterestShop = async storeId => {
  try {
    const url = `${SERVER_URL}/api/store/favoriteStore`;

    const res = await jwtAxios.post(url, storeId);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 관심매장 조회
export const getInterestShop = async () => {
  try {
    const url = `${SERVER_URL}/api/store/list`;

    const res = await jwtAxios.get(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};
