import axios from "axios";
import { SERVER_URL } from "../config";

// 장바구니 조회
export const getCartItem = async (memberid) => {
    try {
        const url = `${SERVER_URL}/api/cart/cartItem/${memberid}`

        const res = await axios.get(url);
        return res;
    } catch (error) {
        console.log(error)
    }
}
