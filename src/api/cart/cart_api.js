import axios from "axios";
import { SERVER_URL } from "../config";

// 장바구니 조회
export const getCartItem = async ({memberId, setCartListData}) => {
    try {
        const url = `${SERVER_URL}/api/cart/${memberId}`

        const res = await axios.get(url);
        setCartListData([...res.data]);
    } catch (error) {
        console.log(error)
    }
}

// 장바구니 삭제
export const deleteCartItem = async(cartItemId) => {
    try {
        const url = `${SERVER_URL}/api/cart/delete/${cartItemId}`

        const res = await axios.delete(url);
        return res;
    } catch (error) {
        console.log(error)
    }
}
