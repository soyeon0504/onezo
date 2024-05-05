import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { loginPostAsync, logout } from "../slices/loginSlice";

const useCustomLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // RTK 상태값 읽기
  const loginState = useSelector(state => state.loginSlice);
  // 로그인 상태값 파악
  const isLogin = sessionStorage.getItem("isLogin") === "true";
  // 로그인 기능
  const doLogin =  ({ loginParam, successFn, failFn }) => {
    const action =  dispatch(
      loginPostAsync({ loginParam, successFn, failFn }),
    );
    return action.payload;
  };
  // 일반유저 vs 관리자
  const userAuth = sessionStorage.getItem("userAuth");

  // 로그아웃 기능
  const doLogout = () => {
    dispatch(logout());
    kakaoLogout();
  };
  // 패스이동 기능
  const moveToPath = path => {
    navigate({ pathname: path }, { replace: true });
  };
  // 로그인 페이지 이동 기능
  const moveToLogin = () => {
    return <Navigate replace to="/member/login" />;
  };

  return {
    loginState,
    isLogin,
    doLogin,
    doLogout,
    moveToPath,
    moveToLogin,
    userAuth,
  };
};

export default useCustomLogin;
