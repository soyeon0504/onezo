import { jwtAxios } from "../../util/jwtUtil";
import { SERVER_URL } from "../config";

// 유저가 선택한 매장 조회
export const getStore = async () => {
  try {
    const url = `${SERVER_URL}/api/cart/get`;

    const res = await jwtAxios.get(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 장바구니 담기
export const postCartItem = async ({ data, successFn, errFn }) => {
  try {
    const url = `${SERVER_URL}/api/cart/add`;

    const res = await jwtAxios.post(url, data);
    successFn();
    return res;
  } catch (error) {
    errFn(error);
  }
};

// 장바구니 조회
export const getCartItem = async () => {
  try {
    const url = `${SERVER_URL}/api/cart/get/detail`;

    const res = await jwtAxios.get(url);
    // setCartListData([...res.data]);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 장바구니 수량 업데이트
// export const putCartItem = async ({ cartItemId, quantity }) => {
//   try {
//     const url = `${SERVER_URL}/api/cart/update/${cartItemId}/${quantity}`;

//     const res = await jwtAxios.put(url);
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };

// 장바구니 삭제
export const deleteCartItem = async cartDetailId => {
  try {
    const url = `${SERVER_URL}/api/cart/detail/delete/${cartDetailId}`;

    const res = await jwtAxios.delete(url);
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 장바구니 전체 삭제
export const deleteAllCartItem = async() => {
  try {
    const url = `${SERVER_URL}/api/cart/delete`

    const res = await jwtAxios.delete(url)
    return res;
  } catch (error) {
    console.log(error)

  }
}