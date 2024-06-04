import axios from "axios";
import { SERVER_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { jwtAxios } from "../../util/jwtUtil";

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
