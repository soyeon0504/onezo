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

export const getShopModal = async () => {
  try {
    const url = `${SERVER_URL}/api/store/checkMem`;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // };
    const res = await axios.get(url);
    return res;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};
