import axios from "axios";
import { SERVER_URL } from "../config";
import { useNavigate } from "react-router-dom";
const path = `${SERVER_URL}/api`;

const failPostDatas = () => {
  const navigate = useNavigate();
  navigate("/");
};

export const getProduct = async (category) => {
  try {
    const url = `${path}/main?${category}`;
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    failPostDatas("/");
  }
};