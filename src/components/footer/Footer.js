import React from "react";
import {
  FooterBottom,
  FooterLogo,
  FooterMain,
  FooterMainContact,
  FooterMainInfo,
  FooterStyle,
  FooterTop,
} from "../../styles/footer/FooterStyle";

const Footer = () => {
  return (
    <FooterStyle>
      <FooterTop>
        <FooterLogo src="/images/header/logo.svg" />
      </FooterTop>
      <FooterMain>
        <FooterMainContact>
          <h1>상호 : 원조통닭</h1>
          <br />
          <h1>깃 주소:</h1>
          <h1>https://github.com/soyeon0504/onezo</h1>
          <br />
          <h1>전화번호 : 0507-1414-1018</h1>
          <h1>팀장 이메일 : 0000@gmail.com & 0000@gmail.com</h1>
          <h1>주소 : 대구 중구 중앙대로 394 제일빌딩 5F </h1>
        </FooterMainContact>
        <FooterMainInfo>
          <h2>COMPANY</h2>
          <br />
          <br />
          <h1>회사소개 이용약관 개인정보처리방침 제휴문의 고객센터</h1>
          <br />
          <br />
          <h2>INTRODUCE</h2>
          <br />
          <h1>FRONT-END 박소연 사공은진</h1>
          <br />
          <h1>BACK-END 한상원 김현빈 김현일 조현민</h1>
        </FooterMainInfo>
        <div>
          <h2>SOCIAL</h2>
          <br />
          <br />
          <img src="/images/footer/gitHub.svg" />
          <img src="/images/footer/notion.svg" />
          <img src="/images/footer/figma.svg" />
        </div>
      </FooterMain>
      <FooterBottom>
        <br />
        <span>Copyright © 회사명 Inc. all rights reserved. </span>
      </FooterBottom>
    </FooterStyle>
  );
};

export default Footer;
