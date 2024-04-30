import axios from "axios";
import { SERVER_URL } from "../config";

// 토스페이 결제요청
export const postTossPay = async ({ price, userId, menuName }) => {
  try {
    const url = `${SERVER_URL}/v1/api/payment?payType=CARD&amount=${price}&userId=${userId}&customerName=${menuName}`;

    const res = await axios.post(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};
