import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderRight,
  HeaderRightBottom,
  HeaderRightTop,
  InnerWrap,
  Join,
  Login,
  LoginState,
  Logo,
  Wrap,
} from "../../styles/header/HeaderStyle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useCustomLogin from "../../hooks/useCustomLogin";

export const Header = () => {
  const navigate = useNavigate(`/`);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleLogin = () => {
    navigate(`/login`);
  };
  const handleJoin = () => {
    navigate(`/join`);
  };
  const handleMy = subItem => {
    sessionStorage.setItem("selectedItem", subItem);
  };
    // 로그인 & 로그아웃
    const loginState = useSelector(state => state.loginSlice);
    // console.log(loginState);
    const { moveToPath, isLogin, doLogout } = useCustomLogin();
    // console.log(userAuth)
  
    // const dispatch = useDispatch();
    const handleLogout = () => {
      doLogout();
      moveToPath("/");
    };

  return (
    <Wrap>
      <InnerWrap>
        <Logo>
          <a href="/">
            <img src="../../images/header/logo.svg" />
          </a>
        </Logo>
        <HeaderRight>
          <HeaderRightTop>
          {isLogin ? (
          <LoginState>
            <button onClick={handleLogout}>로그아웃</button>
              <Link
                to="/my"
                onClick={() => {
                  handleMy("대여중");
                }}
              >
                <button>마이페이지</button>
              </Link>
          </LoginState>
        ) : (
          <LoginState>
            <button onClick={handleLogin}>로그인</button>
            <button onClick={handleJoin}>회원가입</button>
          </LoginState>
        )}
            {/* <div className="header-right-top-inner">
              <a href="/login">로그인</a>
              <a href="/join">회원가입</a>
            </div> */}
          </HeaderRightTop>
          <HeaderRightBottom>
            <a href="/menu" className="menu">메뉴</a>
            <a href="/order" className="order">주문하기</a>
            <div className="cart">
              <img src="../../images/header/shopping_cart.png" style={{marginBottom: "11px"}}/>
              <a href="/cart" className="cart-a">장바구니</a>
            </div>
          </HeaderRightBottom>
        </HeaderRight>
      </InnerWrap>
    </Wrap>
  );
};

export default Header;
