import axios from "axios";
import { SERVER_URL } from "../config";
import { useNavigate } from "react-router-dom";

const failPostDatas = () => {
  const navigate = useNavigate();
  navigate("/");
};

export const getProduct = async () => {
  try {
    const url = `${SERVER_URL}/menuAll`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};

// export const getProduct = async (menuCategory) => {
//   try {
//     // API 호출 시 카테고리 정보 전달
//     const res = await axios.get(`${SERVER_URL}/menuAll`, {
//       params: {
//         menuCategory: menuCategory
//       }
//     });
//     return res.data;
//   } catch (error) {
//     console.log(error);
//     failPostDatas("/");
//   }
// };