import React, { useState } from "react";
import {
  HeaderRight,
  HeaderRightBottom,
  HeaderRightTop,
  InnerWrap,
  Join,
  Login,
  Logo,
  Wrap,
} from "../../styles/header/HeaderStyle";

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

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
            <div className="header-right-top-inner">
              <a href="/login">로그인</a>
              <a href="/join">회원가입</a>
            </div>
          </HeaderRightTop>
          <HeaderRightBottom>
            <a href="/menu">메뉴</a>
            <a href="/order">주문하기</a>
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
