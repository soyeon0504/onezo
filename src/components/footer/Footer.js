import React from "react";
import {
  FooterBottom,
  FooterLogo,
  FooterMain,
  FooterMainContact,
  FooterMainInfo,
  FooterMainSocial,
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
          <h1>회사소개 &nbsp; 이용약관 &nbsp; 개인정보처리방침 &nbsp; 제휴문의 &nbsp; 고객센터</h1>
          <br />
          <br />
          <h2>INTRODUCE</h2>
          <br />
          <h1>FRONT-END &nbsp; 사공은진 &nbsp;박소연 &nbsp;권수민 &nbsp;고찬우 &nbsp;신지훈</h1>
          <br />
          <h1>BACK-END &nbsp; 최은재 &nbsp;박준재 &nbsp;정은희 &nbsp;조정진</h1>
        </FooterMainInfo>
        <FooterMainSocial>
          <h2>SOCIAL</h2>
          <br />
          <br />
          <img src="/images/footer/gitHub.svg" />
          <img src="/images/footer/notion.svg" />
          <img src="/images/footer/figma.svg" />
        </FooterMainSocial>
      </FooterMain>
      <FooterBottom>
        <br />
        <span>Copyright © 회사명 Inc. all rights reserved. </span>
      </FooterBottom>
    </FooterStyle>
  );
};

export default Footer;
